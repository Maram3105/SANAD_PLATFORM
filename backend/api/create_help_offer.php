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

$config = require __DIR__ . '/config.php';
$pdo = require __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/auth.php';

function help_offer_positive_int($value): ?int
{
    if ($value === null || $value === '') {
        return null;
    }

    if (is_int($value) && $value > 0) {
        return $value;
    }

    if (is_string($value) && ctype_digit($value) && (int) $value > 0) {
        return (int) $value;
    }

    if (is_float($value) && floor($value) === $value && $value > 0) {
        return (int) $value;
    }

    return null;
}

function help_offer_clean_string($value, int $maxLength): ?string
{
    if (!is_string($value)) {
        return null;
    }

    $value = trim($value);
    if ($value === '') {
        return null;
    }

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $maxLength);
    }

    return substr($value, 0, $maxLength);
}

function ensure_help_offer_image_column(PDO $pdo): void
{
    $stmt = $pdo->query('SHOW COLUMNS FROM help_offers LIKE "image_url"');
    if (!$stmt->fetch(PDO::FETCH_ASSOC)) {
        $pdo->exec('ALTER TABLE help_offers ADD COLUMN image_url VARCHAR(255) NULL AFTER status');
    }
}

try {
    ensure_help_offer_image_column($pdo);

    $token = get_bearer_token();
    $payload = $token ? verify_jwt($token, $config['jwt_secret']) : null;
    $userId = help_offer_positive_int($payload['sub'] ?? null);

    if (!$userId) {
        json_response(['success' => false, 'message' => 'Authentification requise.'], 401);
    }

    $isMultipart = stripos($_SERVER['CONTENT_TYPE'] ?? '', 'multipart/form-data') !== false;
    $input = $isMultipart ? $_POST : json_decode(file_get_contents('php://input') ?: '', true);
    if (!is_array($input)) {
        json_response(['success' => false, 'message' => 'Donnees invalides.'], 400);
    }

    $requestId = help_offer_positive_int($input['requestId'] ?? null);
    $campaignId = help_offer_positive_int($input['campaignId'] ?? null);
    $type = (string) ($input['type'] ?? 'object');
    $description = help_offer_clean_string($input['description'] ?? null, 1000);
    $quantity = help_offer_positive_int($input['quantity'] ?? 1) ?? 1;
    $category = help_offer_clean_string($input['category'] ?? null, 100);
    $location = help_offer_clean_string($input['location'] ?? null, 200);
    $deliveryMethod = (string) ($input['deliveryMethod'] ?? 'hand');

    if (!in_array($type, ['object', 'service'], true)) {
        json_response(['success' => false, 'message' => 'Type de proposition invalide.'], 400);
    }

    if (!$description) {
        json_response(['success' => false, 'message' => 'Description requise.'], 400);
    }

    if (!$location) {
        json_response(['success' => false, 'message' => 'Ville ou zone de disponibilite requise.'], 400);
    }

    if (!in_array($deliveryMethod, ['hand', 'delivery'], true)) {
        json_response(['success' => false, 'message' => 'Mode de coordination invalide.'], 400);
    }

    if ($requestId && $campaignId) {
        json_response(['success' => false, 'message' => 'Choisissez une demande ou une campagne, pas les deux.'], 400);
    }

    if (!$category) {
        $category = $type === 'object' ? 'Autre' : 'Accompagnement';
    }

    $imageUrl = null;
    if ($type === 'object' && isset($_FILES['image']) && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
        $filename = store_upload($_FILES['image'], $config, 'help_offer', ['png', 'jpg', 'jpeg', 'webp']);
        $imageUrl = 'uploads/' . $filename;
    } elseif ($type !== 'object' && isset($_FILES['image']) && $_FILES['image']['error'] !== UPLOAD_ERR_NO_FILE) {
        json_response(['success' => false, 'message' => 'Une image peut etre ajoutee uniquement pour un objet.'], 400);
    }

    $ownerId = null;

    if ($requestId) {
        $stmt = $pdo->prepare(
            'SELECT r.id, r.status, COALESCE(r.user_id, a.user_id) AS owner_id
             FROM requests r
             LEFT JOIN associations a ON r.association_id = a.id
             WHERE r.id = :id
             LIMIT 1'
        );
        $stmt->execute([':id' => $requestId]);
        $request = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$request) {
            json_response(['success' => false, 'message' => 'Demande introuvable.'], 404);
        }

        if (in_array((string) $request['status'], ['cancelled', 'completed'], true)) {
            json_response(['success' => false, 'message' => 'Cette demande ne peut plus recevoir de proposition.'], 409);
        }

        $ownerId = help_offer_positive_int($request['owner_id'] ?? null);
    }

    if ($campaignId) {
        $stmt = $pdo->prepare(
            'SELECT c.id, c.status, a.user_id AS owner_id
             FROM campaigns c
             INNER JOIN associations a ON c.association_id = a.id
             WHERE c.id = :id
             LIMIT 1'
        );
        $stmt->execute([':id' => $campaignId]);
        $campaign = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$campaign) {
            json_response(['success' => false, 'message' => 'Campagne introuvable.'], 404);
        }

        if (in_array((string) $campaign['status'], ['cancelled', 'completed'], true)) {
            json_response(['success' => false, 'message' => 'Cette campagne ne peut plus recevoir de proposition.'], 409);
        }

        $ownerId = help_offer_positive_int($campaign['owner_id'] ?? null);
    }

    $stmt = $pdo->prepare(
        'INSERT INTO help_offers (
            user_id, request_id, campaign_id, type, description, quantity, category, location, delivery_method, image_url, status, created_at
        ) VALUES (
            :user_id, :request_id, :campaign_id, :type, :description, :quantity, :category, :location, :delivery_method, :image_url, "pending", NOW()
        )'
    );

    $stmt->execute([
        ':user_id' => $userId,
        ':request_id' => $requestId,
        ':campaign_id' => $campaignId,
        ':type' => $type,
        ':description' => $description,
        ':quantity' => $quantity,
        ':category' => $category,
        ':location' => $location,
        ':delivery_method' => $deliveryMethod,
        ':image_url' => $imageUrl
    ]);

    $offerId = (int) $pdo->lastInsertId();

    if ($ownerId && $ownerId !== $userId) {
        $stmt = $pdo->prepare('INSERT INTO notifications (user_id, type, title, detail) VALUES (:user_id, :type, :title, :detail)');
        $stmt->execute([
            ':user_id' => $ownerId,
            ':type' => 'offer_received',
            ':title' => $type === 'object' ? 'Nouvelle proposition d\'objet' : 'Nouvelle proposition d\'aide',
            ':detail' => $type === 'object'
                ? 'Un membre a propose un objet pour votre demande.'
                : 'Un membre a propose son aide pour votre demande.'
        ]);
    }

    $stmt = $pdo->prepare(
        'SELECT h.*, u.full_name AS donor_name
         FROM help_offers h
         INNER JOIN users u ON h.user_id = u.id
         WHERE h.id = :id
         LIMIT 1'
    );
    $stmt->execute([':id' => $offerId]);
    $offer = $stmt->fetch(PDO::FETCH_ASSOC);

    json_response([
        'success' => true,
        'message' => 'Proposition envoyee avec succes.',
        'id' => $offerId,
        'data' => $offer
    ], 201);
} catch (Throwable $e) {
    error_log($e->getMessage());
    json_response(['success' => false, 'message' => 'Erreur serveur.'], 500);
}
