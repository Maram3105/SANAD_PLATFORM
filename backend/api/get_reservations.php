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

    $userId = $_GET['userId'] ?? null;
    $status = $_GET['status'] ?? null;

    $query = "SELECT r.*, h.description as item_description, h.category, h.location, h.user_id as donor_id, u.full_name as donor_name
              FROM reservations r
              JOIN help_offers h ON r.help_offer_id = h.id
              JOIN users u ON h.user_id = u.id
              WHERE 1=1";
    $params = [];

    if ($userId) {
        $query .= " AND r.reserved_by = :user_id";
        $params[':user_id'] = $userId;
    }

    if ($status) {
        $query .= " AND r.status = :status";
        $params[':status'] = $status;
    }

    $query .= " ORDER BY r.created_at DESC";

    $stmt = $pdo->prepare($query);
    $stmt->execute($params);
    $reservations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $reservations
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur: ' . $e->getMessage()]);
}
