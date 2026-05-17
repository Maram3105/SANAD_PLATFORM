<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

include_once 'config/database.php';
require_once 'vendor/autoload.php';
use \Firebase\JWT\JWT;
use \Firebase\JWT\Key;

$database = new Database();
$db = $database->getConnection();

$headers = apache_request_headers();
$authHeader = isset($headers['Authorization']) ? $headers['Authorization'] : '';

if (empty($authHeader)) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Accès non autorisé."]);
    exit();
}

try {
    $token = str_replace('Bearer ', '', $authHeader);
    $decoded = JWT::decode($token, new Key("YOUR_SECRET_KEY", 'HS256'));
    if ($decoded->data->role !== 'admin') {
        throw new Exception("Accès refusé.");
    }

    $stats = [];

    // Pending associations
    $stmt = $db->query("SELECT COUNT(*) FROM associations WHERE status = 'pending'");
    $stats['pending_associations'] = (int)$stmt->fetchColumn();

    // Pending requests
    $stmt = $db->query("SELECT COUNT(*) FROM requests WHERE status = 'paused'"); // paused = waiting approval in this logic
    $stats['pending_requests'] = (int)$stmt->fetchColumn();

    // Total donations
    $stmt = $db->query("SELECT SUM(amount) FROM donations WHERE status = 'completed'");
    $stats['total_donations'] = (float)$stmt->fetchColumn() ?: 0;

    // Donations count
    $stmt = $db->query("SELECT COUNT(*) FROM donations WHERE status = 'completed'");
    $stats['donations_count'] = (int)$stmt->fetchColumn();

    // Total associations
    $stmt = $db->query("SELECT COUNT(*) FROM associations");
    $stats['total_associations'] = (int)$stmt->fetchColumn();

    // Total requests
    $stmt = $db->query("SELECT COUNT(*) FROM requests");
    $stats['total_requests'] = (int)$stmt->fetchColumn();

    // Active requests
    $stmt = $db->query("SELECT COUNT(*) FROM requests WHERE status = 'active'");
    $stats['active_requests'] = (int)$stmt->fetchColumn();

    // Closed requests
    $stmt = $db->query("SELECT COUNT(*) FROM requests WHERE status = 'completed'");
    $stats['closed_requests'] = (int)$stmt->fetchColumn();

    echo json_encode([
        "success" => true,
        "data" => $stats
    ]);

} catch (Exception $e) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => $e->getMessage()]);
}
?>
