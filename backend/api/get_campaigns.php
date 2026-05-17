<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

try {
    $pdo = require __DIR__ . '/db.php';

    $query = 'SELECT camp.*, c.name as category_name, a.organization_name as association_name
              FROM campaigns camp
              LEFT JOIN categories c ON camp.category_id = c.id
              INNER JOIN associations a ON camp.association_id = a.id
              WHERE camp.status = "active"
              ORDER BY camp.created_at DESC';

    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $campaigns = $stmt->fetchAll(PDO::FETCH_ASSOC);

    json_response([
        'status' => 'success',
        'success' => true,
        'data' => $campaigns
    ]);

} catch (Exception $e) {
    json_response(['status' => 'error', 'success' => false, 'message' => $e->getMessage()], 500);
}
