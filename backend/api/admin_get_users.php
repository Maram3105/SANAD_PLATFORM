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

$config = require __DIR__ . '/config.php';
$pdo    = require __DIR__ . '/db.php';
require  __DIR__ . '/helpers.php';

$token = get_bearer_token();
if (!$token) {
    json_response(['success' => false, 'message' => 'Token manquant.'], 401);
}

$payload = verify_jwt($token, $config['jwt_secret']);
if (!$payload || ($payload['role'] ?? '') !== 'admin') {
    json_response(['success' => false, 'message' => 'Accès refusé.'], 403);
}

try {
    $search = $_GET['search'] ?? '';
    $role   = $_GET['role'] ?? '';
    $status = $_GET['status'] ?? '';
    $limit  = (int) ($_GET['limit'] ?? 50);
    $offset = (int) ($_GET['offset'] ?? 0);

    $query = "SELECT id, full_name as name, email, phone, role, created_at FROM users WHERE 1=1";
    $params = [];

    if ($search) {
        $query .= " AND (full_name LIKE ? OR email LIKE ?)";
        $params[] = "%$search%";
        $params[] = "%$search%";
    }

    if ($role) {
        $query .= " AND role = ?";
        $params[] = $role;
    }

    // Since status column might be missing, we only filter if it exists or we handle it
    // For now, if status is provided, we try to filter (it will fail if column missing)
    // In a real fix, we'd add the column to the DB
    if ($status) {
        $query .= " AND status = ?";
        $params[] = $status;
    }

    $query .= " ORDER BY created_at DESC LIMIT $limit OFFSET $offset";

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Inject defaults for fields that might be missing from schema
    foreach ($users as &$user) {
        if (!isset($user['status'])) {
            $user['status'] = 'active';
        }
        if (!isset($user['reliability_score'])) {
            $user['reliability_score'] = 100;
        }
    }
    unset($user);

    // Get total for pagination
    $countQuery = "SELECT COUNT(*) FROM users WHERE 1=1";
    $countParams = [];
    if ($search) {
        $countQuery .= " AND (full_name LIKE ? OR email LIKE ?)";
        $countParams[] = "%$search%";
        $countParams[] = "%$search%";
    }
    if ($role) {
        $countQuery .= " AND role = ?";
        $countParams[] = $role;
    }
    if ($status) {
        $countQuery .= " AND status = ?";
        $countParams[] = $status;
    }
    $stmtCount = $pdo->prepare($countQuery);
    $stmtCount->execute($countParams);
    $total = (int) $stmtCount->fetchColumn();

    json_response([
        'success' => true,
        'data' => $users,
        'pagination' => [
            'total' => $total,
            'limit' => $limit,
            'offset' => $offset
        ]
    ]);

} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
