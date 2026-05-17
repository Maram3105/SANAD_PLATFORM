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

function read_json_body(): array
{
    $rawBody = file_get_contents('php://input') ?: '';
    $input = json_decode($rawBody, true);

    if (!is_array($input)) {
        json_response(['success' => false, 'message' => 'Donnees invalides.'], 400);
    }

    return $input;
}

function nullable_positive_int($value): ?int
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

function clean_message($message): ?string
{
    if (!is_string($message)) {
        return null;
    }

    $message = trim($message);
    if ($message === '') {
        return null;
    }

    if (function_exists('mb_substr')) {
        return mb_substr($message, 0, 500);
    }

    return substr($message, 0, 500);
}

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        json_response(['success' => false, 'message' => 'Methode non autorisee.'], 405);
    }

    $input = read_json_body();

    $type = (string) ($input['type'] ?? '');
    $validTypes = ['request', 'campaign', 'association', 'platform'];
    if (!in_array($type, $validTypes, true)) {
        json_response(['success' => false, 'message' => 'Type de don invalide.'], 400);
    }

    $amount = filter_var($input['amount'] ?? null, FILTER_VALIDATE_FLOAT);
    if ($amount === false || $amount < 5 || $amount > 100000) {
        json_response(['success' => false, 'message' => 'Montant invalide. Minimum 5 TND, maximum 100000 TND.'], 400);
    }
    $amount = round((float) $amount, 2);

    $isAnonymous = filter_var($input['isAnonymous'] ?? false, FILTER_VALIDATE_BOOLEAN, FILTER_NULL_ON_FAILURE) ?? false;
    $message = clean_message($input['message'] ?? null);
    $paymentMethod = is_string($input['paymentMethod'] ?? null)
        ? substr(trim((string) $input['paymentMethod']), 0, 50)
        : 'simulation';
    if ($paymentMethod === '') {
        $paymentMethod = 'simulation';
    }

    $requestId = nullable_positive_int($input['requestId'] ?? null);
    $campaignId = nullable_positive_int($input['campaignId'] ?? null);
    $associationId = nullable_positive_int($input['associationId'] ?? null);

    $donorId = null;
    $donorEmail = null;
    $donorName = null;

    $token = get_bearer_token();
    $payload = $token ? verify_jwt($token, $config['jwt_secret']) : null;
    $payloadUserId = nullable_positive_int($payload['sub'] ?? null);

    if ($payloadUserId) {
        $stmt = $pdo->prepare('SELECT id, email, full_name FROM users WHERE id = :id LIMIT 1');
        $stmt->execute([':id' => $payloadUserId]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $donorId = (int) $user['id'];
            $donorEmail = $user['email'] ?: null;
            $donorName = $isAnonymous ? null : ($user['full_name'] ?: null);
        }
    }

    if (!$donorId) {
        $isAnonymous = true;
    }

    $targetAssociationId = null;
    $targetRequestId = null;
    $targetCampaignId = null;

    if ($type === 'request') {
        if (!$requestId) {
            json_response(['success' => false, 'message' => 'ID de demande requis.'], 400);
        }

        $stmt = $pdo->prepare(
            'SELECT id, association_id, target_amount, collected_amount, status
             FROM requests
             WHERE id = :id
             LIMIT 1'
        );
        $stmt->execute([':id' => $requestId]);
        $target = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$target) {
            json_response(['success' => false, 'message' => 'Demande introuvable.'], 404);
        }

        if (in_array((string) $target['status'], ['cancelled', 'paused'], true)) {
            json_response(['success' => false, 'message' => 'Cette demande ne peut pas recevoir de don actuellement.'], 409);
        }

        $targetRequestId = (int) $target['id'];
        $targetAssociationId = $target['association_id'] !== null ? (int) $target['association_id'] : null;
    } elseif ($type === 'campaign') {
        if (!$campaignId) {
            json_response(['success' => false, 'message' => 'ID de campagne requis.'], 400);
        }

        $stmt = $pdo->prepare(
            'SELECT id, association_id, target_amount, collected_amount, status
             FROM campaigns
             WHERE id = :id
             LIMIT 1'
        );
        $stmt->execute([':id' => $campaignId]);
        $target = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$target) {
            json_response(['success' => false, 'message' => 'Campagne introuvable.'], 404);
        }

        if (in_array((string) $target['status'], ['cancelled', 'paused'], true)) {
            json_response(['success' => false, 'message' => 'Cette campagne ne peut pas recevoir de don actuellement.'], 409);
        }

        $targetCampaignId = (int) $target['id'];
        $targetAssociationId = (int) $target['association_id'];
    } elseif ($type === 'association') {
        if (!$associationId) {
            json_response(['success' => false, 'message' => 'ID association requis.'], 400);
        }

        $stmt = $pdo->prepare('SELECT id, status FROM associations WHERE id = :id LIMIT 1');
        $stmt->execute([':id' => $associationId]);
        $association = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$association) {
            json_response(['success' => false, 'message' => 'Association introuvable.'], 404);
        }

        if (($association['status'] ?? '') !== 'approved') {
            json_response(['success' => false, 'message' => 'Cette association ne peut pas recevoir de don actuellement.'], 409);
        }

        $targetAssociationId = (int) $association['id'];
    }

    $transactionId = 'SANAD-' . date('YmdHis') . '-' . bin2hex(random_bytes(4));

    $pdo->beginTransaction();

    $stmt = $pdo->prepare(
        'INSERT INTO donations (
            donor_id, donor_email, donor_name, request_id, campaign_id, association_id,
            amount, currency, status, payment_method, transaction_id, message, anonymous, created_at
        ) VALUES (
            :donor_id, :donor_email, :donor_name, :request_id, :campaign_id, :association_id,
            :amount, "TND", "completed", :payment_method, :transaction_id, :message, :anonymous, NOW()
        )'
    );
    $stmt->execute([
        ':donor_id' => $donorId,
        ':donor_email' => $donorEmail,
        ':donor_name' => $donorName,
        ':request_id' => $targetRequestId,
        ':campaign_id' => $targetCampaignId,
        ':association_id' => $targetAssociationId,
        ':amount' => $amount,
        ':payment_method' => $paymentMethod,
        ':transaction_id' => $transactionId,
        ':message' => $message,
        ':anonymous' => $isAnonymous ? 1 : 0
    ]);

    $donationId = (int) $pdo->lastInsertId();

    if ($targetAssociationId) {
        $stmt = $pdo->prepare(
            'INSERT INTO association_stats (association_id, total_donations, donors_count)
             VALUES (:association_id, :amount, 1)
             ON DUPLICATE KEY UPDATE
                total_donations = total_donations + VALUES(total_donations),
                donors_count = donors_count + 1'
        );
        $stmt->execute([':association_id' => $targetAssociationId, ':amount' => $amount]);
    }

    if ($targetRequestId) {
        $stmt = $pdo->prepare(
            'UPDATE requests
             SET collected_amount = collected_amount + :amount,
                 status = CASE
                    WHEN target_amount > 0 AND collected_amount + :amount >= target_amount THEN "completed"
                    ELSE status
                 END
             WHERE id = :id'
        );
        $stmt->execute([':amount' => $amount, ':id' => $targetRequestId]);
    }

    if ($targetCampaignId) {
        $stmt = $pdo->prepare(
            'UPDATE campaigns
             SET collected_amount = collected_amount + :amount,
                 status = CASE
                    WHEN target_amount > 0 AND collected_amount + :amount >= target_amount THEN "completed"
                    ELSE status
                 END
             WHERE id = :id'
        );
        $stmt->execute([':amount' => $amount, ':id' => $targetCampaignId]);
    }

    $pdo->commit();

    json_response([
        'success' => true,
        'message' => 'Don enregistre avec succes.',
        'data' => [
            'id' => $donationId,
            'amount' => $amount,
            'currency' => 'TND',
            'type' => $type,
            'request_id' => $targetRequestId,
            'campaign_id' => $targetCampaignId,
            'association_id' => $targetAssociationId,
            'anonymous' => $isAnonymous,
            'payment_method' => $paymentMethod,
            'transaction_id' => $transactionId,
            'timestamp' => date('c')
        ]
    ], 201);
} catch (Throwable $e) {
    if ($pdo instanceof PDO && $pdo->inTransaction()) {
        $pdo->rollBack();
    }

    error_log($e->getMessage());
    json_response(['success' => false, 'message' => 'Erreur serveur.'], 500);
}
