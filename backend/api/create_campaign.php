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

function campaign_slugify(string $value): string
{
    $value = strtolower(trim($value));
    $value = preg_replace('/[^a-z0-9\s-]/', '', $value) ?? '';
    $value = preg_replace('/[\s-]+/', '-', $value) ?? '';
    return trim($value, '-');
}

function unique_campaign_slug(PDO $pdo, string $baseSlug): string
{
    $slug = $baseSlug;
    $suffix = 1;

    while (true) {
        $stmt = $pdo->prepare('SELECT COUNT(*) FROM campaigns WHERE slug = :slug');
        $stmt->execute([':slug' => $slug]);
        if ((int) $stmt->fetchColumn() === 0) {
            return $slug;
        }
        $slug = $baseSlug . '-' . $suffix;
        $suffix++;
    }
}

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        json_response(['success' => false, 'message' => 'Methode non autorisee.'], 405);
    }

    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $auth = require_association($pdo, $config, true);
    $association = $auth['association'];

    $title = trim((string) ($_POST['title'] ?? ''));
    $description = trim((string) ($_POST['description'] ?? ''));
    $fullDescription = trim((string) ($_POST['full_description'] ?? ''));
    $location = trim((string) ($_POST['location'] ?? ''));
    $categoryId = (int) ($_POST['category_id'] ?? 0);
    $urgency = (string) ($_POST['urgency'] ?? 'medium');
    $goalAmount = (float) ($_POST['goal_amount'] ?? 0);
    $parentRequestId = (int) ($_POST['parent_request_id'] ?? 0);
    $imageUrlInput = trim((string) ($_POST['image_url'] ?? ''));

    if ($title === '' || $description === '' || $location === '' || $categoryId <= 0 || $goalAmount <= 0) {
        json_response(['success' => false, 'message' => 'Champs obligatoires manquants.'], 400);
    }

    if (!in_array($urgency, ['low', 'medium', 'high'], true)) {
        json_response(['success' => false, 'message' => 'Urgence invalide.'], 400);
    }

    if ($parentRequestId > 0) {
        $parentStmt = $pdo->prepare('SELECT id, image_url FROM requests WHERE id = :id');
        $parentStmt->execute([':id' => $parentRequestId]);
        $parentRequest = $parentStmt->fetch(PDO::FETCH_ASSOC);
        if (!$parentRequest) {
            json_response(['success' => false, 'message' => 'Demande parente introuvable.'], 404);
        }
        if ($imageUrlInput === '' && !empty($parentRequest['image_url'])) {
            $imageUrlInput = (string) $parentRequest['image_url'];
        }
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

    $baseSlug = campaign_slugify($title);
    $slug = unique_campaign_slug($pdo, $baseSlug !== '' ? $baseSlug : 'campaign');

    $stmt = $pdo->prepare(
        'INSERT INTO campaigns
            (association_id, parent_request_id, title, slug, description, full_description, category_id, location, urgency, image_url, target_amount, status, created_at)
         VALUES
            (:association_id, :parent_request_id, :title, :slug, :description, :full_description, :category_id, :location, :urgency, :image_url, :target_amount, "active", NOW())'
    );

    $stmt->execute([
        ':association_id' => $association['id'],
        ':parent_request_id' => $parentRequestId > 0 ? $parentRequestId : null,
        ':title' => $title,
        ':slug' => $slug,
        ':description' => $description,
        ':full_description' => $fullDescription !== '' ? $fullDescription : null,
        ':category_id' => $categoryId,
        ':location' => $location,
        ':urgency' => $urgency,
        ':image_url' => $imageUrl,
        ':target_amount' => $goalAmount
    ]);

    $campaignId = (int) $pdo->lastInsertId();

    $statsStmt = $pdo->prepare(
        'UPDATE association_stats SET campaign_count = campaign_count + 1 WHERE association_id = :association_id'
    );
    $statsStmt->execute([':association_id' => $association['id']]);
    if ($statsStmt->rowCount() === 0) {
        $insertStats = $pdo->prepare(
            'INSERT INTO association_stats (association_id, campaign_count) VALUES (:association_id, 1)'
        );
        $insertStats->execute([':association_id' => $association['id']]);
    }

    json_response([
        'success' => true,
        'data' => [
            'id' => $campaignId,
            'slug' => $slug
        ]
    ], 201);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
