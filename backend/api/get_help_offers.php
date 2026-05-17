<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';

try {
    $pdo = require __DIR__ . '/db.php';

    $requestId = $_GET['requestId'] ?? null;
    $campaignId = $_GET['campaignId'] ?? null;
    $userId = $_GET['userId'] ?? null;
    $status = $_GET['status'] ?? null;
    $type = $_GET['type'] ?? null;
    $isAvailable = isset($_GET['available']) && $_GET['available'] === 'true';

    $query = "SELECT h.*, u.full_name as donor_name 
              FROM help_offers h 
              JOIN users u ON h.user_id = u.id 
              WHERE 1=1";
    $params = [];

    if ($requestId) {
        $query .= " AND h.request_id = :request_id";
        $params[':request_id'] = $requestId;
    }

    if ($campaignId) {
        $query .= " AND h.campaign_id = :campaign_id";
        $params[':campaign_id'] = $campaignId;
    }

    if ($userId) {
        $query .= " AND h.user_id = :user_id";
        $params[':user_id'] = $userId;
    }

    if ($status) {
        $query .= " AND h.status = :status";
        $params[':status'] = $status;
    }

    if ($type) {
        $query .= " AND h.type = :type";
        $params[':type'] = $type;
    }

    if ($isAvailable) {
        $query .= " AND h.request_id IS NULL AND h.campaign_id IS NULL AND h.status = 'pending'";
    }

    $query .= " ORDER BY h.created_at DESC";

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $offers = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $offers
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur: ' . $e->getMessage()]);
}
