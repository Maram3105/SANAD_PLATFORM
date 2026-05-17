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

    $statsStmt = $pdo->prepare(
        'SELECT
            COALESCE(ast.total_donations, 0) AS total_donations,
            COALESCE(ast.campaign_count, 0) AS campaign_count,
            COALESCE(ast.donors_count, 0) AS donors_count,
            (SELECT COUNT(*) FROM campaigns WHERE association_id = :association_id AND status = "active") AS active_campaigns
         FROM associations a
         LEFT JOIN association_stats ast ON a.id = ast.association_id
         WHERE a.id = :association_id'
    );
    $statsStmt->execute([':association_id' => $association['id']]);
    $stats = $statsStmt->fetch(PDO::FETCH_ASSOC) ?: [
        'total_donations' => 0,
        'campaign_count' => 0,
        'donors_count' => 0,
        'active_campaigns' => 0
    ];

    $donationsStmt = $pdo->prepare(
        'SELECT d.id, d.amount, d.created_at, d.anonymous, d.donor_name, d.donor_email,
                COALESCE(camp.title, r.title) AS request_title
         FROM donations d
         LEFT JOIN requests r ON d.request_id = r.id
         LEFT JOIN campaigns camp ON d.campaign_id = camp.id
         WHERE d.association_id = :association_id AND d.status = "completed"
         ORDER BY d.created_at DESC
         LIMIT 5'
    );
    $donationsStmt->execute([':association_id' => $association['id']]);
    $recentDonations = $donationsStmt->fetchAll(PDO::FETCH_ASSOC);

    $updatesStmt = $pdo->prepare(
        'SELECT u.id, u.title, u.description, u.created_at, r.title AS request_title, r.id AS request_id
         FROM request_updates u
         INNER JOIN requests r ON u.request_id = r.id
         WHERE u.association_id = :association_id
         ORDER BY u.created_at DESC
         LIMIT 5'
    );
    $updatesStmt->execute([':association_id' => $association['id']]);
    $recentUpdates = $updatesStmt->fetchAll(PDO::FETCH_ASSOC);

    json_response([
        'success' => true,
        'data' => [
            'stats' => [
                'total_donations' => (float) $stats['total_donations'],
                'campaign_count' => (int) $stats['campaign_count'],
                'donors_count' => (int) $stats['donors_count'],
                'active_campaigns' => (int) $stats['active_campaigns']
            ],
            'recent_donations' => $recentDonations,
            'recent_updates' => $recentUpdates
        ]
    ]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
