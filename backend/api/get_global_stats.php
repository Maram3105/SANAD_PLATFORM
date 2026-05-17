<?php
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

try {
    $pdo = require __DIR__ . '/db.php';

    // Total donations (count)
    $stmt = $pdo->query('SELECT COUNT(*) FROM donations');
    $total_donations = (int)$stmt->fetchColumn();

    // Persons helped (sum of people_helped in association_stats)
    $stmt = $pdo->query('SELECT SUM(people_helped) FROM association_stats');
    $persons_helped = (int)$stmt->fetchColumn();

    // Active associations (count approved and verified)
    $stmt = $pdo->query('SELECT COUNT(*) FROM associations WHERE status = "approved" AND verified = 1');
    $active_associations = (int)$stmt->fetchColumn();

    json_response([
        'status' => 'success',
        'success' => true,
        'data' => [
            'total_donations' => $total_donations,
            'persons_helped' => $persons_helped,
            'active_associations' => $active_associations
        ]
    ]);

} catch (Exception $e) {
    json_response([
        'status' => 'error',
        'message' => $e->getMessage()
    ], 500);
}
