<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

include_once 'config/database.php';

$database = new Database();
$db = $database->getConnection();

try {
    // Total donations (sum of amount)
    $query_donations = "SELECT SUM(amount) as total FROM donations WHERE status = 'completed'";
    $stmt = $db->prepare($query_donations);
    $stmt->execute();
    $total_donations = $stmt->fetch(PDO::FETCH_ASSOC)['total'] ?? 0;

    // Persons helped (number of unique requesters with at least one donation)
    $query_helped = "SELECT COUNT(DISTINCT r.id) as total 
                     FROM requests r 
                     JOIN donations d ON r.id = d.request_id 
                     WHERE d.status = 'completed'";
    $stmt = $db->prepare($query_helped);
    $stmt->execute();
    $persons_helped = $stmt->fetch(PDO::FETCH_ASSOC)['total'] ?? 0;

    // Active associations
    $query_assoc = "SELECT COUNT(*) as total FROM associations WHERE status = 'approved'";
    $stmt = $db->prepare($query_assoc);
    $stmt->execute();
    $active_associations = $stmt->fetch(PDO::FETCH_ASSOC)['total'] ?? 0;

    echo json_encode([
        "success" => true,
        "data" => [
            "total_donations" => round($total_donations),
            "persons_helped" => $persons_helped,
            "active_associations" => $active_associations
        ]
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Erreur serveur: " . $e->getMessage()
    ]);
}
?>
