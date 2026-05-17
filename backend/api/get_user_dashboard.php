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
    $userId = (int) ($payload['sub'] ?? 0);

    if ($userId <= 0) {
        json_response(['success' => false, 'message' => 'Non authentifie'], 401);
    }

    $userStmt = $pdo->prepare('SELECT id, full_name, email, phone, role FROM users WHERE id = :id LIMIT 1');
    $userStmt->execute([':id' => $userId]);
    $user = $userStmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        json_response(['success' => false, 'message' => 'Utilisateur introuvable'], 404);
    }

    $donationStmt = $pdo->prepare(
        'SELECT COUNT(*) AS total_donations,
                COALESCE(SUM(amount), 0) AS total_amount,
                COUNT(DISTINCT CASE WHEN request_id IS NOT NULL THEN request_id END) AS requests_supported
         FROM donations
         WHERE donor_id = :user_id AND status = "completed"'
    );
    $donationStmt->execute([':user_id' => $userId]);
    $donationStats = $donationStmt->fetch(PDO::FETCH_ASSOC) ?: [];

    $requestStmt = $pdo->prepare(
        'SELECT COUNT(*) AS total_requests,
                SUM(CASE WHEN status = "active" THEN 1 ELSE 0 END) AS active_requests,
                SUM(CASE WHEN status = "paused" THEN 1 ELSE 0 END) AS pending_requests
         FROM requests
         WHERE user_id = :user_id'
    );
    $requestStmt->execute([':user_id' => $userId]);
    $requestStats = $requestStmt->fetch(PDO::FETCH_ASSOC) ?: [];

    $notificationsStmt = $pdo->prepare(
        'SELECT id, title, detail, is_read, created_at
         FROM notifications
         WHERE user_id = :user_id
         ORDER BY created_at DESC
         LIMIT 5'
    );
    $notificationsStmt->execute([':user_id' => $userId]);
    $notifications = array_map(static function (array $item): array {
        return [
            'id' => (int) $item['id'],
            'title' => $item['title'],
            'detail' => $item['detail'],
            'isRead' => (bool) $item['is_read'],
            'date' => date('c', strtotime($item['created_at']))
        ];
    }, $notificationsStmt->fetchAll(PDO::FETCH_ASSOC));

    json_response([
        'success' => true,
        'data' => [
            'profile' => [
                'id' => (int) $user['id'],
                'fullName' => $user['full_name'],
                'email' => $user['email'],
                'phone' => $user['phone'],
                'role' => $user['role']
            ],
            'stats' => [
                'total_donations' => (int) ($donationStats['total_donations'] ?? 0),
                'total_amount' => (float) ($donationStats['total_amount'] ?? 0),
                'requests_supported' => (int) ($donationStats['requests_supported'] ?? 0),
                'total_requests' => (int) ($requestStats['total_requests'] ?? 0),
                'active_requests' => (int) ($requestStats['active_requests'] ?? 0),
                'pending_requests' => (int) ($requestStats['pending_requests'] ?? 0)
            ],
            'notifications' => $notifications
        ]
    ]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => 'Erreur serveur'], 500);
}
