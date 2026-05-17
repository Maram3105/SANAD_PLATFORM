<?php

declare(strict_types=1);

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

try {
    $pdo = require __DIR__ . '/db.php';

    $id = $_GET['id'] ?? null;

    if (!$id) {
        json_response(['status' => 'error', 'message' => 'Association ID is required'], 400);
    }

    // Get association details
    $query = 'SELECT a.*, 
                     ast.total_donations, ast.campaign_count, ast.people_helped, ast.donors_count, ast.average_rating,
                     c.name as category_name, 
                     fa.direct_aid_percentage, fa.programs_percentage, fa.operations_percentage, fa.admin_percentage
              FROM associations a
              LEFT JOIN association_stats ast ON a.id = ast.association_id
              LEFT JOIN categories c ON a.category_id = c.id
              LEFT JOIN fund_allocation fa ON a.id = fa.association_id
              WHERE a.id = :id OR a.slug = :slug';

    $stmt = $pdo->prepare($query);
    $stmt->execute([':id' => $id, ':slug' => $id]);
    $association = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$association) {
        json_response(['status' => 'error', 'message' => 'Association not found'], 404);
    }

    // Get active campaigns for this association
    $campaignsQuery = 'SELECT camp.*, c.name as category_name
                       FROM campaigns camp
                       LEFT JOIN categories c ON camp.category_id = c.id
                       WHERE camp.association_id = :association_id AND camp.status = "active"
                       ORDER BY camp.created_at DESC
                       LIMIT 4';

    $campaignsStmt = $pdo->prepare($campaignsQuery);
    $campaignsStmt->execute([':association_id' => $association['id']]);
    $campaigns = $campaignsStmt->fetchAll(PDO::FETCH_ASSOC);

    // Get ratings/reviews
    $ratingsQuery = 'SELECT r.*, u.full_name 
                     FROM ratings r
                     INNER JOIN users u ON r.donor_id = u.id
                     WHERE r.association_id = :association_id
                     ORDER BY r.created_at DESC
                     LIMIT 5';

    $ratingsStmt = $pdo->prepare($ratingsQuery);
    $ratingsStmt->execute([':association_id' => $association['id']]);
    $ratings = $ratingsStmt->fetchAll(PDO::FETCH_ASSOC);

    // Calculate years active
    $founded_year = $association['founded_year'] ?? date('Y');
    $years_active = date('Y') - $founded_year;

    json_response([
        'status' => 'success',
        'data' => [
            'association' => $association,
            'campaigns' => $campaigns,
            'ratings' => $ratings,
            'years_active' => $years_active,
            'fund_allocation' => [
                'direct_aid' => (float) ($association['direct_aid_percentage'] ?? 62),
                'programs' => (float) ($association['programs_percentage'] ?? 18),
                'operations' => (float) ($association['operations_percentage'] ?? 14),
                'admin' => (float) ($association['admin_percentage'] ?? 6)
            ]
        ]
    ]);

} catch (Exception $e) {
    json_response(['status' => 'error', 'message' => $e->getMessage()], 500);
}
