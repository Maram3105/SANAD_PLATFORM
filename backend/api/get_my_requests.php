<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
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

    $userStmt = $pdo->prepare('SELECT id, role FROM users WHERE id = :id');
    $userStmt->execute([':id' => $userId]);
    $user = $userStmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Utilisateur introuvable']);
        exit;
    }

    $params = [];
    $ownerWhere = 'r.user_id = :user_id';
    $params[':user_id'] = $userId;

    if ($user['role'] === 'association') {
        $assocStmt = $pdo->prepare('SELECT id FROM associations WHERE user_id = :user_id LIMIT 1');
        $assocStmt->execute([':user_id' => $userId]);
        $associationId = $assocStmt->fetchColumn();

        if (!$associationId) {
            echo json_encode(['success' => true, 'data' => []]);
            exit;
        }

        $ownerWhere = 'r.association_id = :association_id';
        $params = [':association_id' => $associationId];
    }

    $stmt = $pdo->prepare(
        'SELECT r.id, r.title, r.status, r.target_amount, r.collected_amount, r.created_at,
                (SELECT COUNT(*) FROM donations d WHERE d.request_id = r.id AND d.status = "completed") as donors_count
         FROM requests r
         WHERE ' . $ownerWhere . '
         ORDER BY r.created_at DESC'
    );
    $stmt->execute($params);
    $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $requests
    ]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur']);
}
