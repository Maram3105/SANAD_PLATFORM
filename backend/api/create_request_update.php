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

    $input = json_decode(file_get_contents('php://input'), true);

    $requestId = (int) ($input['request_id'] ?? 0);
    $title = trim((string) ($input['title'] ?? ''));
    $description = trim((string) ($input['description'] ?? ''));

    if ($requestId <= 0 || $title === '' || $description === '') {
        json_response(['success' => false, 'message' => 'Champs obligatoires manquants.'], 400);
    }

    $stmt = $pdo->prepare('SELECT id FROM requests WHERE id = :id AND association_id = :association_id');
    $stmt->execute([':id' => $requestId, ':association_id' => $association['id']]);
    if (!$stmt->fetchColumn()) {
        json_response(['success' => false, 'message' => 'Demande introuvable.'], 404);
    }

    $insertStmt = $pdo->prepare(
        'INSERT INTO request_updates (request_id, association_id, title, description)
         VALUES (:request_id, :association_id, :title, :description)'
    );
    $insertStmt->execute([
        ':request_id' => $requestId,
        ':association_id' => $association['id'],
        ':title' => $title,
        ':description' => $description
    ]);

    json_response(['success' => true]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
