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

    $auth = require_association($pdo, $config, false);
    $association = $auth['association'];

    $organizationName = trim((string) ($_POST['organization_name'] ?? $association['organization_name']));
    $description = trim((string) ($_POST['description'] ?? $association['description']));
    $fullDescription = trim((string) ($_POST['full_description'] ?? $association['full_description']));
    $location = trim((string) ($_POST['location'] ?? $association['location']));
    $website = trim((string) ($_POST['website'] ?? $association['website']));

    if ($organizationName === '' || $description === '') {
        json_response(['success' => false, 'message' => 'Champs obligatoires manquants.'], 400);
    }

    $logoUrl = null;
    if (isset($_FILES['logo']) && $_FILES['logo']['error'] !== UPLOAD_ERR_NO_FILE) {
        $filename = store_upload($_FILES['logo'], $config, 'logo', ['png', 'jpg', 'jpeg', 'webp']);
        $logoUrl = 'uploads/' . $filename;
    }

    $coverUrl = null;
    if (isset($_FILES['cover']) && $_FILES['cover']['error'] !== UPLOAD_ERR_NO_FILE) {
        $filename = store_upload($_FILES['cover'], $config, 'cover', ['png', 'jpg', 'jpeg', 'webp']);
        $coverUrl = 'uploads/' . $filename;
    }

    $query = 'UPDATE associations SET
        organization_name = :organization_name,
        description = :description,
        full_description = :full_description,
        location = :location,
        website = :website,
        updated_at = NOW()';

    $params = [
        ':organization_name' => $organizationName,
        ':description' => $description,
        ':full_description' => $fullDescription !== '' ? $fullDescription : null,
        ':location' => $location,
        ':website' => $website !== '' ? $website : null,
        ':id' => $association['id']
    ];

    if ($logoUrl !== null) {
        $query .= ', logo_url = :logo_url';
        $params[':logo_url'] = $logoUrl;
    }

    if ($coverUrl !== null) {
        $query .= ', cover_url = :cover_url';
        $params[':cover_url'] = $coverUrl;
    }

    $query .= ' WHERE id = :id';

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);

    $stmt = $pdo->prepare('SELECT * FROM associations WHERE id = :id LIMIT 1');
    $stmt->execute([':id' => $association['id']]);
    $updatedAssociation = $stmt->fetch(PDO::FETCH_ASSOC);

    json_response(['success' => true, 'data' => $updatedAssociation]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
