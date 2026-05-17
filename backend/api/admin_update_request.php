<?php

declare(strict_types=1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
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

$input     = json_decode(file_get_contents('php://input'), true);
$requestId = (int) ($input['request_id'] ?? 0);
$action    = trim((string) ($input['action'] ?? ''));

$validActions = ['approve', 'reject', 'delete'];
if ($requestId <= 0 || !in_array($action, $validActions, true)) {
    json_response(['success' => false, 'message' => 'Paramètres invalides.'], 400);
}

try {
    if ($action === 'delete') {
        $stmt = $pdo->prepare("DELETE FROM requests WHERE id = :id");
        $stmt->execute([':id' => $requestId]);

        if ($stmt->rowCount() === 0) {
            json_response(['success' => false, 'message' => 'Demande introuvable.'], 404);
        }

        json_response(['success' => true, 'message' => 'Demande supprimée.']);
    }

    // approve → active, reject → cancelled
    $newStatus = $action === 'approve' ? 'active' : 'cancelled';

    $stmt = $pdo->prepare(
        "UPDATE requests SET status = :status, updated_at = NOW() WHERE id = :id"
    );
    $stmt->execute([':status' => $newStatus, ':id' => $requestId]);

    if ($stmt->rowCount() === 0) {
        json_response(['success' => false, 'message' => 'Demande introuvable.'], 404);
    }

    json_response([
        'success'    => true,
        'message'    => $action === 'approve' ? 'Demande approuvée.' : 'Demande rejetée.',
        'new_status' => $newStatus
    ]);

} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
