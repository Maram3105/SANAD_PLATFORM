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
$itemType  = trim((string) ($input['item_type'] ?? 'request'));

$validActions = ['approve', 'reject', 'complete', 'delete'];
$validTypes = ['request', 'campaign'];
if ($requestId <= 0 || !in_array($action, $validActions, true) || !in_array($itemType, $validTypes, true)) {
    json_response(['success' => false, 'message' => 'Paramètres invalides.'], 400);
}

try {
    $table = $itemType === 'campaign' ? 'campaigns' : 'requests';
    $label = $itemType === 'campaign' ? 'Campagne' : 'Demande';
    $requestForNotification = null;

    if ($action === 'delete') {
        $stmt = $pdo->prepare("DELETE FROM $table WHERE id = :id");
        $stmt->execute([':id' => $requestId]);

        if ($stmt->rowCount() === 0) {
            json_response(['success' => false, 'message' => "$label introuvable."], 404);
        }

        json_response(['success' => true, 'message' => 'Demande supprimée.']);
    }

    // approve → active, reject → cancelled
    $newStatus = match ($action) {
        'approve' => 'active',
        'complete' => 'completed',
        default => 'cancelled'
    };

    if ($itemType === 'request') {
        $requestStmt = $pdo->prepare('SELECT id, user_id, title FROM requests WHERE id = :id LIMIT 1');
        $requestStmt->execute([':id' => $requestId]);
        $requestForNotification = $requestStmt->fetch(PDO::FETCH_ASSOC) ?: null;
    }

    $stmt = $pdo->prepare(
        "UPDATE $table SET status = :status, updated_at = NOW() WHERE id = :id"
    );
    $stmt->execute([':status' => $newStatus, ':id' => $requestId]);

    if ($stmt->rowCount() === 0) {
        json_response(['success' => false, 'message' => "$label introuvable."], 404);
    }

    if ($requestForNotification && !empty($requestForNotification['user_id']) && in_array($action, ['approve', 'reject'], true)) {
        $notificationTitle = $action === 'approve' ? 'Demande validee' : 'Demande refusee';
        $notificationDetail = $action === 'approve'
            ? 'Votre demande "' . $requestForNotification['title'] . '" a ete validee par l administrateur. Elle est maintenant visible par les acteurs de la plateforme.'
            : 'Votre demande "' . $requestForNotification['title'] . '" a ete refusee apres verification des justificatifs.';

        $notificationStmt = $pdo->prepare(
            'INSERT INTO notifications (user_id, type, title, detail) VALUES (:user_id, :type, :title, :detail)'
        );
        $notificationStmt->execute([
            ':user_id' => (int) $requestForNotification['user_id'],
            ':type' => $action === 'approve' ? 'request_approved' : 'request_rejected',
            ':title' => $notificationTitle,
            ':detail' => $notificationDetail
        ]);
    }

    json_response([
        'success'    => true,
        'message'    => $action === 'approve' ? 'Demande approuvée.' : 'Demande rejetée.',
        'new_status' => $newStatus
    ]);

} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
