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

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        json_response(['success' => false, 'message' => 'Methode non autorisee.'], 405);
    }

    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $auth = require_association($pdo, $config, true);
    $association = $auth['association'];

    $requestId = (int) ($_POST['request_id'] ?? 0);
    $title = trim((string) ($_POST['title'] ?? ''));
    $description = trim((string) ($_POST['description'] ?? ''));
    $fullDescription = trim((string) ($_POST['full_description'] ?? ''));
    $location = trim((string) ($_POST['location'] ?? ''));
    $categoryId = (int) ($_POST['category_id'] ?? 0);
    $urgency = (string) ($_POST['urgency'] ?? 'medium');
    $goalAmount = (float) ($_POST['goal_amount'] ?? 0);
    $status = (string) ($_POST['status'] ?? 'active');

    if ($requestId <= 0 || $title === '' || $description === '' || $location === '' || $categoryId <= 0 || $goalAmount <= 0) {
        json_response(['success' => false, 'message' => 'Champs obligatoires manquants.'], 400);
    }

    if (!in_array($urgency, ['low', 'medium', 'high'], true)) {
        json_response(['success' => false, 'message' => 'Urgence invalide.'], 400);
    }

    if (!in_array($status, ['active', 'completed', 'paused', 'cancelled'], true)) {
        json_response(['success' => false, 'message' => 'Statut invalide.'], 400);
    }

    $stmt = $pdo->prepare('SELECT id FROM requests WHERE id = :id AND association_id = :association_id');
    $stmt->execute([':id' => $requestId, ':association_id' => $association['id']]);
    if (!$stmt->fetchColumn()) {
        json_response(['success' => false, 'message' => 'Demande introuvable.'], 404);
    }

    $imageUrl = null;
    if (isset($_FILES['image']) && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
        $filename = store_upload($_FILES['image'], $config, 'campaign', ['png', 'jpg', 'jpeg', 'webp']);
        $imageUrl = 'uploads/' . $filename;
    }

    $updateQuery = 'UPDATE requests SET
        title = :title,
        description = :description,
        full_description = :full_description,
        category_id = :category_id,
        location = :location,
        urgency = :urgency,
        target_amount = :target_amount,
        status = :status,
        updated_at = NOW()';

    if ($imageUrl !== null) {
        $updateQuery .= ', image_url = :image_url';
    }

    $updateQuery .= ' WHERE id = :id AND association_id = :association_id';

    $params = [
        ':title' => $title,
        ':description' => $description,
        ':full_description' => $fullDescription !== '' ? $fullDescription : null,
        ':category_id' => $categoryId,
        ':location' => $location,
        ':urgency' => $urgency,
        ':target_amount' => $goalAmount,
        ':status' => $status,
        ':id' => $requestId,
        ':association_id' => $association['id']
    ];

    if ($imageUrl !== null) {
        $params[':image_url'] = $imageUrl;
    }

    $updateStmt = $pdo->prepare($updateQuery);
    $updateStmt->execute($params);

    json_response(['success' => true]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
