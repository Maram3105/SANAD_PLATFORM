<?php
/**
 * get_user_donations.php - Endpoint pour récupérer les donations d'un utilisateur
 * 
 * GET /backend/api/get_user_donations.php
 * Headers:
 *   - Authorization: Bearer <token>
 * Query params:
 *   - sort: recent|amount (défaut: recent)
 *   - limit: nombre de résultats (défaut: 20)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/config.php';
require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

try {
    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $token = get_bearer_token();
    $payload = $token ? verify_jwt($token, $config['jwt_secret']) : null;
    $userId = $payload['sub'] ?? null;

    if (!$userId) {
        http_response_code(401);
        echo json_encode(['success' => false, 'message' => 'Non authentifie']);
        exit;
    }

    $sort = $_GET['sort'] ?? 'recent';
    $limit = min(max((int) ($_GET['limit'] ?? 20), 1), 100);

    // Récupérer les donations de l'utilisateur
    $query = '
        SELECT 
            d.id,
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
            d.association_id,
            COALESCE(camp.title, r.title, a.organization_name, "Don libre") as target_name,
            a.organization_name as association_name
        FROM donations d
        LEFT JOIN requests r ON d.request_id = r.id
        LEFT JOIN campaigns camp ON d.campaign_id = camp.id
        LEFT JOIN associations a ON d.association_id = a.id
        WHERE d.donor_id = ?
        AND d.status = "completed"
    ';

    // Tri
    if ($sort === 'amount') {
        $query .= ' ORDER BY d.amount DESC';
    } else {
        $query .= ' ORDER BY d.created_at DESC';
    }

    $query .= ' LIMIT ?';

    $stmt = $pdo->prepare($query);
    $stmt->bindValue(1, (int) $userId, PDO::PARAM_INT);
    $stmt->bindValue(2, $limit, PDO::PARAM_INT);
    $stmt->execute();
    $donations = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Formater les données
    foreach ($donations as &$donation) {
        $donation['amount'] = (float)$donation['amount'];
        $donation['created_at'] = date('c', strtotime($donation['created_at']));
    }

    // Calculer les stats
    $statsQuery = '
        SELECT 
            COUNT(*) as total_donations,
            SUM(d.amount) as total_amount,
            COUNT(DISTINCT CASE WHEN d.request_id IS NOT NULL THEN d.request_id END) as requests_supported,
            COUNT(DISTINCT d.association_id) as associations_supported
        FROM donations d
        WHERE d.donor_id = ?
        AND d.status = "completed"
    ';

    $stmtStats = $pdo->prepare($statsQuery);
    $stmtStats->execute([$userId]);
    $stats = $stmtStats->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        'success' => true,
        'data' => $donations,
        'stats' => [
            'total_donations' => (int)$stats['total_donations'],
            'total_amount' => (float)($stats['total_amount'] ?? 0),
            'requests_supported' => (int)($stats['requests_supported'] ?? 0),
            'associations_supported' => (int)($stats['associations_supported'] ?? 0)
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
