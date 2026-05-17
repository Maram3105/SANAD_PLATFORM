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

    // Get query parameters
    $search = $_GET['search'] ?? '';
    $location = $_GET['location'] ?? '';
    $category = $_GET['category'] ?? '';
    $sort = $_GET['sort'] ?? 'name'; // name, most-active, most-funded
    $limit = (int) ($_GET['limit'] ?? 20);
    $offset = (int) ($_GET['offset'] ?? 0);

    // Build query
    $query = 'SELECT a.*, COALESCE(ast.total_donations, 0) as total_donations, COALESCE(ast.campaign_count, 0) as campaign_count, COALESCE(ast.people_helped, 0) as people_helped, COALESCE(ast.donors_count, 0) as donors_count, COALESCE(ast.average_rating, 0) as average_rating, c.name as category_name
              FROM associations a
              LEFT JOIN association_stats ast ON a.id = ast.association_id
              LEFT JOIN categories c ON a.category_id = c.id
              WHERE a.status = "approved" AND a.verified = TRUE';

    $params = [];

    if (!empty($search)) {
        $query .= ' AND (a.organization_name LIKE :search OR a.description LIKE :search)';
        $params[':search'] = '%' . $search . '%';
    }

    if (!empty($location)) {
        $query .= ' AND a.location = :location';
        $params[':location'] = $location;
    }

    if (!empty($category)) {
        $query .= ' AND c.name = :category';
        $params[':category'] = $category;
    }

    // Add sorting
    match ($sort) {
        'most-active' => $query .= ' ORDER BY COALESCE(ast.campaign_count, 0) DESC, a.organization_name ASC',
        'most-funded' => $query .= ' ORDER BY COALESCE(ast.total_donations, 0) DESC, a.organization_name ASC',
        default => $query .= ' ORDER BY a.organization_name ASC' // name
    };

    $query .= ' LIMIT :limit OFFSET :offset';
    $params[':limit'] = $limit;
    $params[':offset'] = $offset;

    $stmt = $pdo->prepare($query);
    
    foreach ($params as $key => $value) {
        if (is_int($value)) {
            $stmt->bindValue($key, $value, PDO::PARAM_INT);
        } else {
            $stmt->bindValue($key, $value);
        }
    }

    $stmt->execute();
    $associations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Get total count
    $countQuery = 'SELECT COUNT(*) as total FROM associations a
                   LEFT JOIN categories c ON a.category_id = c.id
                   WHERE a.status = "approved" AND a.verified = TRUE';

    if (!empty($search)) {
        $countQuery .= ' AND (a.organization_name LIKE :search OR a.description LIKE :search)';
    }
    if (!empty($location)) {
        $countQuery .= ' AND a.location = :location';
    }
    if (!empty($category)) {
        $countQuery .= ' AND c.name = :category';
    }

    $countStmt = $pdo->prepare($countQuery);
    
    foreach ($params as $key => $value) {
        if (in_array($key, [':limit', ':offset'])) continue;
        if (is_int($value)) {
            $countStmt->bindValue($key, $value, PDO::PARAM_INT);
        } else {
            $countStmt->bindValue($key, $value);
        }
    }

    $countStmt->execute();
    $total = $countStmt->fetchColumn();

    json_response([
        'status' => 'success',
        'data' => $associations,
        'pagination' => [
            'total' => (int) $total,
            'limit' => $limit,
            'offset' => $offset
        ]
    ]);

} catch (Exception $e) {
    json_response(['status' => 'error', 'message' => $e->getMessage()], 500);
}
