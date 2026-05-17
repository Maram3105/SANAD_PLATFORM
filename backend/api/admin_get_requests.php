<?php

declare(strict_types=1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Use the same pattern as login.php — require returns values
$config = require __DIR__ . '/config.php';
$pdo    = require __DIR__ . '/db.php';
require  __DIR__ . '/helpers.php';

// Verify admin JWT
$token = get_bearer_token();
if (!$token) {
    json_response(['success' => false, 'message' => 'Token manquant.'], 401);
}

$payload = verify_jwt($token, $config['jwt_secret']);
if (!$payload || ($payload['role'] ?? '') !== 'admin') {
    json_response(['success' => false, 'message' => 'Accès refusé. Administrateur uniquement.'], 403);
}

try {
    $search  = trim($_GET['search'] ?? '');
    $status  = trim($_GET['status'] ?? '');
    $urgency = trim($_GET['urgency'] ?? '');
    $limit   = min((int) ($_GET['limit'] ?? 50), 200);
    $offset  = (int) ($_GET['offset'] ?? 0);

    $conditions = ['1=1'];
    $params = [];

    if ($search !== '') {
        $conditions[] = '(r.title LIKE :search OR r.description LIKE :search OR a.organization_name LIKE :search)';
        $params[':search'] = '%' . $search . '%';
    }

    if (in_array($status, ['active', 'completed', 'paused', 'cancelled'], true)) {
        $conditions[] = 'r.status = :status';
        $params[':status'] = $status;
    }

    if (in_array($urgency, ['low', 'medium', 'high'], true)) {
        $conditions[] = 'r.urgency = :urgency';
        $params[':urgency'] = $urgency;
    }

    $where = implode(' AND ', $conditions);

    $query = "SELECT r.id, r.title, r.description, r.location, r.urgency, r.status,
                     r.target_amount, r.collected_amount, r.created_at,
                     a.organization_name, a.logo_url,
                     c.name as category_name
              FROM requests r
              INNER JOIN associations a ON r.association_id = a.id
              LEFT JOIN categories c ON r.category_id = c.id
              WHERE $where
              ORDER BY r.created_at DESC
              LIMIT :limit OFFSET :offset";

    $stmt = $pdo->prepare($query);
    foreach ($params as $k => $v) {
        $stmt->bindValue($k, $v);
    }
    $stmt->bindValue(':limit',  $limit,  PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $countQuery = "SELECT COUNT(*) FROM requests r
                   INNER JOIN associations a ON r.association_id = a.id
                   LEFT JOIN categories c ON r.category_id = c.id
                   WHERE $where";
    $countStmt  = $pdo->prepare($countQuery);
    foreach ($params as $k => $v) {
        $countStmt->bindValue($k, $v);
    }
    $countStmt->execute();
    $total = (int) $countStmt->fetchColumn();

    json_response([
        'success' => true,
        'data'    => $requests,
        'pagination' => ['total' => $total, 'limit' => $limit, 'offset' => $offset]
    ]);

} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
