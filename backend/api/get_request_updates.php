<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

try {
    $pdo = require __DIR__ . '/db.php';

    $requestId = (int) ($_GET['request_id'] ?? 0);
    if ($requestId <= 0) {
        json_response(['success' => false, 'message' => 'Identifiant invalide.'], 400);
    }

    $stmt = $pdo->prepare(
        'SELECT id, request_id, title, description, created_at
         FROM request_updates
         WHERE request_id = :request_id
         ORDER BY created_at DESC'
    );
    $stmt->execute([':request_id' => $requestId]);
    $updates = $stmt->fetchAll(PDO::FETCH_ASSOC);

    json_response(['success' => true, 'data' => $updates]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
