<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/auth.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $auth = require_association($pdo, $config, true);
    $association = $auth['association'];

    $stmt = $pdo->prepare(
        'SELECT d.id, d.amount, d.created_at, d.anonymous, d.donor_name, d.donor_email, d.message,
                COALESCE(camp.title, r.title) AS request_title
         FROM donations d
         LEFT JOIN requests r ON d.request_id = r.id
         LEFT JOIN campaigns camp ON d.campaign_id = camp.id
         WHERE d.association_id = :association_id AND d.status = "completed"
         ORDER BY d.created_at DESC'
    );
    $stmt->execute([':association_id' => $association['id']]);
    $donations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $summaryStmt = $pdo->prepare(
        'SELECT COUNT(*) AS total_donations, COALESCE(SUM(amount), 0) AS total_amount
         FROM donations
         WHERE association_id = :association_id AND status = "completed"'
    );
    $summaryStmt->execute([':association_id' => $association['id']]);
    $summary = $summaryStmt->fetch(PDO::FETCH_ASSOC) ?: ['total_donations' => 0, 'total_amount' => 0];

    json_response([
        'success' => true,
        'data' => $donations,
        'summary' => [
            'total_donations' => (int) $summary['total_donations'],
            'total_amount' => (float) $summary['total_amount']
        ]
    ]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
