<?php
/**
 * get_donations.php - Endpoint pour récupérer les donations
 * 
 * GET /backend/api/get_donations.php
 * Query params:
 *   - type: request|campaign|association|platform (optionnel)
 *   - id: ID de la demande ou association (pour filtrer)
 *   - sort: recent|amount (défaut: recent)
 *   - limit: nombre de résultats (défaut: 10)
 */

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

    $type = $_GET['type'] ?? null;
    $id = $_GET['id'] ?? null;
    $sort = $_GET['sort'] ?? 'recent';
    $limit = min((int)($_GET['limit'] ?? 10), 100);

    $query = 'SELECT 
        d.id,
        d.donor_name,
        d.amount,
        d.message,
        d.anonymous,
        d.created_at,
        CASE
            WHEN d.campaign_id IS NOT NULL THEN "campaign"
            WHEN d.request_id IS NOT NULL THEN "request"
            WHEN d.association_id IS NOT NULL THEN "association"
            ELSE "platform"
        END as donation_type,
        d.request_id,
        d.campaign_id,
        d.association_id
    FROM donations d
    WHERE d.status = "completed"';

    $params = [];

    // Filtrer par type et ID
    if ($type === 'request' && $id) {
        $query .= ' AND d.request_id = ?';
        $params[] = $id;
    } elseif ($type === 'campaign' && $id) {
        $query .= ' AND d.campaign_id = ?';
        $params[] = $id;
    } elseif ($type === 'association' && $id) {
        $query .= ' AND d.association_id = ?';
        $params[] = $id;
    } elseif ($type === 'platform') {
        $query .= ' AND d.request_id IS NULL AND d.campaign_id IS NULL AND d.association_id IS NULL';
    }

    // Tri
    if ($sort === 'amount') {
        $query .= ' ORDER BY d.amount DESC';
    } else {
        $query .= ' ORDER BY d.created_at DESC';
    }

    $query .= ' LIMIT :limit';
    
    $stmt = $pdo->prepare($query);
    
    // Bind all parameters
    foreach ($params as $key => $value) {
        $stmt->bindValue($key + 1, $value);
    }
    
    // Bind limit separately as INT
    $stmt->bindValue(':limit', $limit, PDO::PARAM_INT);
    
    $stmt->execute();
    $donations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Formater les données
    foreach ($donations as &$donation) {
        $donation['amount'] = (float)$donation['amount'];
        $donation['created_at'] = date('c', strtotime($donation['created_at']));
        if ($donation['anonymous']) {
            $donation['donor_name'] = 'Donateur anonyme';
        }
    }

    // Calculer les stats
    $statsQuery = 'SELECT 
        COUNT(*) as total_donations,
        SUM(d.amount) as total_amount,
        COUNT(DISTINCT d.donor_id) as unique_donors
    FROM donations d
    WHERE d.status = "completed"';

    $statsParams = [];

    if ($type === 'request' && $id) {
        $statsQuery .= ' AND d.request_id = ?';
        $statsParams[] = $id;
    } elseif ($type === 'campaign' && $id) {
        $statsQuery .= ' AND d.campaign_id = ?';
        $statsParams[] = $id;
    } elseif ($type === 'association' && $id) {
        $statsQuery .= ' AND d.association_id = ?';
        $statsParams[] = $id;
    } elseif ($type === 'platform') {
        $statsQuery .= ' AND d.request_id IS NULL AND d.campaign_id IS NULL AND d.association_id IS NULL';
    }

    $stmtStats = $pdo->prepare($statsQuery);
    $stmtStats->execute($statsParams);
    $stats = $stmtStats->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $donations,
        'stats' => [
            'total_donations' => (int)$stats['total_donations'],
            'total_amount' => (float)($stats['total_amount'] ?? 0),
            'unique_donors' => (int)($stats['unique_donors'] ?? 0)
        ]
    ]);

} catch (Exception $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur serveur'
    ]);
}
?>
