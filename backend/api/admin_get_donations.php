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
    $limit  = min((int) ($_GET['limit'] ?? 50), 200);
    $offset = (int) ($_GET['offset'] ?? 0);
    $status = trim($_GET['status'] ?? '');

    $conditions = ['1=1'];
    $params = [];

    if (in_array($status, ['pending', 'completed', 'failed', 'refunded'], true)) {
        $conditions[] = 'd.status = :status';
        $params[':status'] = $status;
    }

    $where = implode(' AND ', $conditions);

    $query = "SELECT d.id, d.donor_name, d.donor_email, d.amount, d.currency,
                     d.status, d.payment_method, d.anonymous, d.created_at,
                     COALESCE(a.organization_name, 'Plateforme Sanad') AS organization_name,
                     COALESCE(camp.title, r.title, 'Don libre') AS request_title
              FROM donations d
              LEFT JOIN associations a ON d.association_id = a.id
              LEFT JOIN requests r ON d.request_id = r.id
              LEFT JOIN campaigns camp ON d.campaign_id = camp.id
              WHERE $where
              ORDER BY d.created_at DESC
              LIMIT :limit OFFSET :offset";

    $stmt = $pdo->prepare($query);
    foreach ($params as $k => $v) {
        $stmt->bindValue($k, $v);
    }
    $stmt->bindValue(':limit',  $limit,  PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $donations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $countQuery = "SELECT COUNT(*) FROM donations d WHERE $where";
    $countStmt  = $pdo->prepare($countQuery);
    foreach ($params as $k => $v) {
        $countStmt->bindValue($k, $v);
    }
    $countStmt->execute();
    $total = (int) $countStmt->fetchColumn();

    json_response([
        'success' => true,
        'data'    => $donations,
        'pagination' => ['total' => $total, 'limit' => $limit, 'offset' => $offset]
    ]);

} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
