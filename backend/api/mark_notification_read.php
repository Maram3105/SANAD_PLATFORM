<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

try {
    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $token = get_bearer_token();
    $payload = $token ? verify_jwt($token, $config['jwt_secret']) : null;
    $userId = $payload['sub'] ?? null;

    if (!$userId) {
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'Non authentifie']);
        exit;
    }

    $input = json_decode(file_get_contents('php://input'), true);
    $notificationId = (int) ($input['id'] ?? 0);

    if ($notificationId <= 0) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Notification invalide']);
        exit;
    }

    $stmt = $pdo->prepare(
        'UPDATE notifications SET is_read = TRUE WHERE id = :id AND user_id = :user_id'
    );
    $stmt->execute([':id' => $notificationId, ':user_id' => $userId]);

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur']);
}
