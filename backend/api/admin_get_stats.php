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
    // Pending associations count
    $stmt = $pdo->query("SELECT COUNT(*) FROM associations WHERE status = 'pending'");
    $pendingAssociations = (int) $stmt->fetchColumn();

    // Pending requests count (paused = waiting admin review)
    $stmt = $pdo->query("SELECT COUNT(*) FROM requests WHERE status = 'paused'");
    $pendingRequests = (int) $stmt->fetchColumn();

    // Total donations amount
    $stmt = $pdo->query("SELECT COALESCE(SUM(amount), 0) FROM donations WHERE status = 'completed'");
    $totalDonations = (float) $stmt->fetchColumn();

    // Total donations count
    $stmt = $pdo->query("SELECT COUNT(*) FROM donations WHERE status = 'completed'");
    $donationsCount = (int) $stmt->fetchColumn();

    // Total associations
    $stmt = $pdo->query("SELECT COUNT(*) FROM associations");
    $totalAssociations = (int) $stmt->fetchColumn();

    // Total requests
    $stmt = $pdo->query("SELECT COUNT(*) FROM requests");
    $totalRequests = (int) $stmt->fetchColumn();

    // Active requests count
    $stmt = $pdo->query("SELECT COUNT(*) FROM requests WHERE status = 'active'");
    $activeRequests = (int) $stmt->fetchColumn();

    // Closed/Completed requests count
    $stmt = $pdo->query("SELECT COUNT(*) FROM requests WHERE status IN ('completed', 'cancelled')");
    $closedRequests = (int) $stmt->fetchColumn();

    // Distribution by category
    $stmt = $pdo->query("
        SELECT c.name as category, COUNT(r.id) as count 
        FROM categories c 
        LEFT JOIN requests r ON r.category_id = c.id 
        GROUP BY c.id
    ");
    $distCategory = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Distribution by region
    $stmt = $pdo->query("
        SELECT location as region, COUNT(*) as count 
        FROM requests 
        GROUP BY location 
        ORDER BY count DESC 
        LIMIT 5
    ");
    $distRegion = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Monthly donations (last 6 months)
    $stmt = $pdo->query("
        SELECT 
            DATE_FORMAT(created_at, '%Y-%m') as month, 
            SUM(amount) as amount 
        FROM donations 
        WHERE status = 'completed' 
        AND created_at >= DATE_SUB(NOW(), INTERVAL 6 MONTH)
        GROUP BY month 
        ORDER BY month ASC
    ");
    $monthlyDonations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Top donors
    $stmt = $pdo->query("
        SELECT 
            donor_name as name, 
            SUM(amount) as total_amount, 
            COUNT(*) as donation_count 
        FROM donations 
        WHERE status = 'completed' 
        AND donor_name IS NOT NULL 
        AND anonymous = 0
        GROUP BY donor_name 
        ORDER BY total_amount DESC 
        LIMIT 5
    ");
    $topDonors = $stmt->fetchAll(PDO::FETCH_ASSOC);

    json_response([
        'success' => true,
        'data' => [
            'pending_associations' => $pendingAssociations,
            'pending_requests'     => $pendingRequests,
            'total_donations'      => $totalDonations,
            'donations_count'      => $donationsCount,
            'total_associations'   => $totalAssociations,
            'total_requests'       => $totalRequests,
            'active_requests'      => $activeRequests,
            'closed_requests'      => $closedRequests,
            'distribution_by_category' => $distCategory,
            'distribution_by_region'   => $distRegion,
            'monthly_donations'        => $monthlyDonations,
            'top_donors'               => $topDonors
        ]
    ]);

} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
