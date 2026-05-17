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

    if (!$offerId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'ID de l\'offre requis']);
        exit;
    }

    // Check if item is available
    $stmt = $pdo->prepare("SELECT * FROM help_offers WHERE id = ? AND status = 'pending' AND request_id IS NULL");
    $stmt->execute([$offerId]);
    $offer = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$offer) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Cet article n\'est plus disponible']);
        exit;
    }

    // Prevent donor from reserving their own item
    if ($offer['user_id'] == $userId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Vous ne pouvez pas réserver votre propre article']);
        exit;
    }

    // Start transaction
    $pdo->beginTransaction();

    // Create reservation
    $expiresAt = date('Y-m-d H:i:s', strtotime('+48 hours'));
    $stmt = $pdo->prepare('INSERT INTO reservations (help_offer_id, reserved_by, status, expires_at, created_at) 
                           VALUES (?, ?, \'active\', ?, NOW())');
    $stmt->execute([$offerId, $userId, $expiresAt]);

    // Update offer status
    $stmt = $pdo->prepare("UPDATE help_offers SET status = 'reserved' WHERE id = ?");
    $stmt->execute([$offerId]);

    $pdo->commit();

    // Notify donor
    $stmt = $pdo->prepare('INSERT INTO notifications (user_id, type, title, detail) VALUES (?, ?, ?, ?)');
    $stmt->execute([
        $offer['user_id'],
        'item_reserved',
        'Article réservé',
        'L\'un de vos articles disponibles a été réservé par un bénéficiaire.'
    ]);

    echo json_encode([
        'success' => true,
        'message' => 'Article réservé avec succès',
        'expiresAt' => $expiresAt
    ]);

} catch (Exception $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur: ' . $e->getMessage()]);
}
