<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
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
        echo json_encode(['success' => false, 'message' => 'Non authentifié']);
        exit;
    }

    $input = json_decode(file_get_contents('php://input'), true);
    $offerId = $input['offerId'] ?? null;
    $status = $input['status'] ?? null;

    if (!$offerId || !$status) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Paramètres manquants']);
        exit;
    }

    // Verify ownership or association permission
    $stmt = $pdo->prepare('SELECT h.*, COALESCE(r.association_id, c.association_id) AS association_id, a.user_id as assoc_owner_id 
                           FROM help_offers h 
                           LEFT JOIN requests r ON h.request_id = r.id 
                           LEFT JOIN campaigns c ON h.campaign_id = c.id
                           LEFT JOIN associations a ON COALESCE(r.association_id, c.association_id) = a.id 
                           WHERE h.id = ?');
    $stmt->execute([$offerId]);
    $offer = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$offer) {
        http_response_code(404);
        echo json_encode(['success' => false, 'message' => 'Offre introuvable']);
        exit;
    }

    $canUpdate = false;
    // Donor can cancel/complete if reserved?
    if ($offer['user_id'] == $userId) {
        $canUpdate = true;
    }
    // Association owner can accept/reject
    if ($offer['assoc_owner_id'] == $userId) {
        $canUpdate = true;
    }
    // Admin can do anything
    // (Check role from payload if needed)

    if (!$canUpdate) {
        http_response_code(403);
        echo json_encode(['success' => false, 'message' => 'Non autorisé']);
        exit;
    }

    $stmt = $pdo->prepare('UPDATE help_offers SET status = ?, updated_at = NOW() WHERE id = ?');
    $stmt->execute([$status, $offerId]);

    // Notify donor
    $stmt = $pdo->prepare('INSERT INTO notifications (user_id, type, title, detail) VALUES (?, ?, ?, ?)');
    $stmt->execute([
        $offer['user_id'],
        'offer_status_updated',
        'Statut de votre offre mis à jour',
        "Votre proposition d'aide a été marquée comme : $status"
    ]);

    echo json_encode(['success' => true, 'message' => 'Statut mis à jour']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur: ' . $e->getMessage()]);
}
