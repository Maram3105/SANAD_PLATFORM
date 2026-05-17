<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/auth.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

function slugify(string $value): string
{
    $value = strtolower(trim($value));
    $value = preg_replace('/[^a-z0-9\s-]/', '', $value) ?? '';
    $value = preg_replace('/[\s-]+/', '-', $value) ?? '';
    return trim($value, '-');
}

function unique_slug(PDO $pdo, string $baseSlug): string
{
    $slug = $baseSlug;
    $suffix = 1;

    while (true) {
        $stmt = $pdo->prepare('SELECT COUNT(*) FROM requests WHERE slug = :slug');
        $stmt->execute([':slug' => $slug]);
        if ((int) $stmt->fetchColumn() === 0) {
            return $slug;
        }
        $slug = $baseSlug . '-' . $suffix;
        $suffix++;
    }
}

function resolve_category_id(PDO $pdo, string $categoryInput, int $categoryId): ?int
{
    if ($categoryId > 0) {
        return $categoryId;
    }

    $categoryInput = trim($categoryInput);
    if ($categoryInput === '') {
        return null;
    }

    $slug = slugify($categoryInput);
    $stmt = $pdo->prepare('SELECT id FROM categories WHERE slug = :slug OR name = :name LIMIT 1');
    $stmt->execute([':slug' => $slug, ':name' => $categoryInput]);
    $resolved = $stmt->fetchColumn();

    return $resolved ? (int) $resolved : null;
}

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        json_response(['success' => false, 'message' => 'Methode non autorisee.'], 405);
    }

    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $auth = authenticate_request($pdo, $config, ['user']);
    $user = $auth['user'];

    $title = trim((string) ($_POST['title'] ?? ''));
    $description = trim((string) ($_POST['description'] ?? ''));
    $fullDescription = trim((string) ($_POST['full_description'] ?? $description));
    $location = trim((string) ($_POST['location'] ?? ''));
    $categoryId = resolve_category_id(
        $pdo,
        (string) ($_POST['category'] ?? ''),
        (int) ($_POST['category_id'] ?? 0)
    );
    $urgency = (string) ($_POST['urgency'] ?? 'medium');
    $goalAmount = (float) ($_POST['goal_amount'] ?? ($_POST['amount'] ?? 0));
    $imageUrlInput = trim((string) ($_POST['image_url'] ?? ''));
    $needsMoney = isset($_POST['needs_money']) ? (int) $_POST['needs_money'] : 1;
    $needsObject = isset($_POST['needs_object']) ? (int) $_POST['needs_object'] : 0;
    $needsService = isset($_POST['needs_service']) ? (int) $_POST['needs_service'] : 0;

    if ($title === '' || $description === '' || $location === '' || !$categoryId) {
        json_response(['success' => false, 'message' => 'Champs obligatoires manquants.'], 400);
    }

    if (!$needsMoney && !$needsObject && !$needsService) {
        json_response(['success' => false, 'message' => 'Veuillez selectionner au moins un type de besoin.'], 400);
    }

    if ($needsMoney && $goalAmount <= 0) {
        json_response(['success' => false, 'message' => 'Montant obligatoire pour une demande financiere.'], 400);
    }

    if (!in_array($urgency, ['low', 'medium', 'high'], true)) {
        json_response(['success' => false, 'message' => 'Urgence invalide.'], 400);
    }

    $imageUrl = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
        $filename = store_upload($_FILES['image'], $config, 'campaign', ['png', 'jpg', 'jpeg', 'webp']);
        $imageUrl = 'uploads/' . $filename;
    } elseif ($imageUrlInput !== '') {
        if (!str_starts_with($imageUrlInput, 'uploads/')) {
            json_response(['success' => false, 'message' => 'Image invalide.'], 400);
        }
        $imageUrl = $imageUrlInput;
    }

    $baseSlug = slugify($title);
    $slug = unique_slug($pdo, $baseSlug !== '' ? $baseSlug : 'request');

    $stmt = $pdo->prepare(
          'INSERT INTO requests
                (user_id, association_id, parent_request_id, title, slug, description, full_description, category_id, location, urgency, image_url, target_amount, needs_money, needs_object, needs_service, status, created_at)
            VALUES
                (:user_id, NULL, NULL, :title, :slug, :description, :full_description, :category_id, :location, :urgency, :image_url, :target_amount, :needs_money, :needs_object, :needs_service, "active", NOW())'
    );

    $stmt->execute([
        ':user_id' => $user['id'],
        ':title' => $title,
        ':slug' => $slug,
        ':description' => $description,
        ':full_description' => $fullDescription !== '' ? $fullDescription : null,
        ':category_id' => $categoryId,
        ':location' => $location,
        ':urgency' => $urgency,
        ':image_url' => $imageUrl,
        ':target_amount' => $goalAmount,
        ':needs_money' => $needsMoney,
        ':needs_object' => $needsObject,
        ':needs_service' => $needsService
    ]);

    $requestId = (int) $pdo->lastInsertId();

    // Handle multiple document uploads
    if (isset($_FILES['documents']) && is_array($_FILES['documents']['name'])) {
        $docCount = count($_FILES['documents']['name']);
        for ($i = 0; $i < $docCount; $i++) {
            if ($_FILES['documents']['error'][$i] === UPLOAD_ERR_OK) {
                $file = [
                    'name' => $_FILES['documents']['name'][$i],
                    'type' => $_FILES['documents']['type'][$i],
                    'tmp_name' => $_FILES['documents']['tmp_name'][$i],
                    'error' => $_FILES['documents']['error'][$i],
                    'size' => $_FILES['documents']['size'][$i]
                ];
                
                try {
                    $filename = store_upload($file, $config, 'request_docs', ['pdf', 'png', 'jpg', 'jpeg']);
                    $docStmt = $pdo->prepare(
                        'INSERT INTO request_documents (request_id, file_path, file_type, file_name) VALUES (:request_id, :file_path, :file_type, :file_name)'
                    );
                    $docStmt->execute([
                        ':request_id' => $requestId,
                        ':file_path' => 'uploads/' . $filename,
                        ':file_type' => $file['type'],
                        ':file_name' => $file['name']
                    ]);
                } catch (Exception $e) {
                    // Log error but continue with other files
                }
            }
        }
    }

    json_response([
        'success' => true,
        'data' => [
            'id' => $requestId,
            'slug' => $slug
        ]
    ], 201);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
