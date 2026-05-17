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
    $userId = $decoded->data->id;

    $query = "SELECT d.*, r.title as target_name 
              FROM donations d 
              LEFT JOIN requests r ON d.request_id = r.id 
              WHERE d.user_id = :user_id 
              ORDER BY d.created_at DESC";
    
    $stmt = $db->prepare($query);
    $stmt->bindParam(':user_id', $userId);
    $stmt->execute();
    
    $donations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Stats
    $total_amount = 0;
    $requests_supported = [];
    foreach ($donations as $d) {
        $total_amount += $d['amount'];
        if ($d['request_id']) {
            $requests_supported[] = $d['request_id'];
        }
    }

    echo json_encode([
        "success" => true,
        "data" => $donations,
        "stats" => [
            "total_donations" => count($donations),
            "total_amount" => $total_amount,
            "requests_supported" => count(array_unique($requests_supported)),
            "associations_supported" => 0 // To be implemented
        ]
    ]);

} catch (Exception $e) {
    http_response_code(401);
    echo json_encode(["success" => false, "message" => "Session invalide."]);
}
?>
