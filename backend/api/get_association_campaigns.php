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

    $status = $_GET['status'] ?? '';

    $query = 'SELECT camp.*, c.name AS category_name,
                     (SELECT COUNT(*) FROM donations WHERE campaign_id = camp.id AND status = "completed") AS donors_count
              FROM campaigns camp
              LEFT JOIN categories c ON camp.category_id = c.id
              WHERE camp.association_id = :association_id';
    $params = [':association_id' => $association['id']];

    if ($status !== '') {
        $query .= ' AND camp.status = :status';
        $params[':status'] = $status;
    }

    $query .= ' ORDER BY camp.created_at DESC';

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $campaigns = $stmt->fetchAll(PDO::FETCH_ASSOC);

    json_response(['success' => true, 'data' => $campaigns]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
