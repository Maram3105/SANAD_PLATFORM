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
    if (!$input) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Données invalides']);
        exit;
    }

    $requestId = $input['requestId'] ?? null;
    $campaignId = $input['campaignId'] ?? null;
    $type = $input['type'] ?? 'object';
    $description = $input['description'] ?? '';
    $quantity = $input['quantity'] ?? 1;
    $category = $input['category'] ?? null;
    $location = $input['location'] ?? null;
    $deliveryMethod = $input['deliveryMethod'] ?? 'hand';

    if (empty($description)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Description requise']);
        exit;
    }

    if ($requestId && $campaignId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Choisissez une demande ou une campagne, pas les deux']);
        exit;
    }

    $stmt = $pdo->prepare('
        INSERT INTO help_offers (
            user_id, request_id, campaign_id, type, description, quantity, category, location, delivery_method, status, created_at
        ) VALUES (
            :user_id, :request_id, :campaign_id, :type, :description, :quantity, :category, :location, :delivery_method, \'pending\', NOW()
        )
    ');

    $stmt->execute([
        ':user_id' => $userId,
        ':request_id' => $requestId,
        ':campaign_id' => $campaignId,
        ':type' => $type,
        ':description' => $description,
        ':quantity' => $quantity,
        ':category' => $category,
        ':location' => $location,
        ':delivery_method' => $deliveryMethod
    ]);

    $offerId = $pdo->lastInsertId();

    // Notification for request owner if linked to a request
    if ($requestId) {
        $stmt = $pdo->prepare(
            'SELECT COALESCE(r.user_id, a.user_id) AS owner_id
             FROM requests r
             LEFT JOIN associations a ON r.association_id = a.id
             WHERE r.id = ?'
        );
        $stmt->execute([$requestId]);
        $ownerId = $stmt->fetchColumn();

        if ($ownerId) {
            $stmt = $pdo->prepare('INSERT INTO notifications (user_id, type, title, detail) VALUES (?, ?, ?, ?)');
            $stmt->execute([
                $ownerId,
                'offer_received',
                'Nouvelle proposition d\'aide',
                'Une nouvelle proposition d\'aide a été soumise pour votre demande.'
            ]);
        }
    }

    if ($campaignId) {
        $stmt = $pdo->prepare(
            'SELECT a.user_id
             FROM campaigns c
             INNER JOIN associations a ON c.association_id = a.id
             WHERE c.id = ?'
        );
        $stmt->execute([$campaignId]);
        $ownerId = $stmt->fetchColumn();

        if ($ownerId) {
            $stmt = $pdo->prepare('INSERT INTO notifications (user_id, type, title, detail) VALUES (?, ?, ?, ?)');
            $stmt->execute([
                $ownerId,
                'offer_received',
                'Nouvelle proposition d\'aide',
                'Une nouvelle proposition d\'aide a ete soumise pour votre campagne.'
            ]);
        }
    }

    echo json_encode([
        'success' => true,
        'message' => 'Proposition envoyée avec succès',
        'id' => $offerId
    ]);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur serveur: ' . $e->getMessage()]);
}
