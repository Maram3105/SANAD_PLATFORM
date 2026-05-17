<?php
/**
 * create_donation.php - Endpoint pour créer une donation
 * 
 * POST /backend/api/create_donation.php
 * 
 * Body JSON:
 * {
 *   "type": "request|campaign|association|platform",
 *   "amount": 25,
 *   "message": "Soutien sincère",
 *   "isAnonymous": false,
 *   "requestId": 1 (optional),
 *   "campaignId": 1 (optional),
 *   "associationId": 1 (optional)
 * }
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

require_once __DIR__ . '/../config.php';

try {
    // Validation de la requête
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        http_response_code(405);
        echo json_encode(['success' => false, 'message' => 'Méthode non autorisée']);
        exit;
    }

    // Récupérer les données JSON
    $input = json_decode(file_get_contents('php://input'), true);

    if (!$input) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Données invalides']);
        exit;
    }

    // Valider les champs obligatoires
    $type = $input['type'] ?? null;
    $amount = $input['amount'] ?? null;
    $isAnonymous = $input['isAnonymous'] ?? false;
    $message = $input['message'] ?? '';
$requestId = $input['requestId'] ?? null;
$campaignId = $input['campaignId'] ?? null;
$associationId = $input['associationId'] ?? null;

// Validation du type
$validTypes = ['request', 'campaign', 'association', 'platform'];
    if (!in_array($type, $validTypes)) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Type de don invalide']);
        exit;
    }

    // Validation du montant
    if (!$amount || !is_numeric($amount) || $amount < 5) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Montant invalide (minimum 5 TND)']);
        exit;
    }

    // Validation des IDs
if ($type === 'request' && !$requestId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'ID de demande requis']);
        exit;
}

if ($type === 'campaign' && !$campaignId) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'ID de campagne requis']);
    exit;
}

    if ($type === 'association' && !$associationId) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'ID d\'association requis']);
        exit;
    }

    // Déterminer l'association
    if ($type === 'request') {
        // Récupérer l'association de la demande
        $stmt = $pdo->prepare('SELECT association_id FROM requests WHERE id = ?');
        $stmt->execute([$requestId]);
        $request = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$request) {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Demande non trouvée']);
            exit;
        }

        $associationId = $request['association_id'];
    } elseif ($type === 'campaign') {
        $stmt = $pdo->prepare('SELECT association_id FROM campaigns WHERE id = ?');
        $stmt->execute([$campaignId]);
        $campaign = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$campaign) {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Campagne non trouvée']);
            exit;
        }

        $associationId = $campaign['association_id'];
    } elseif ($type === 'association') {
        // Vérifier que l'association existe
        $stmt = $pdo->prepare('SELECT id FROM associations WHERE id = ?');
        $stmt->execute([$associationId]);

        if (!$stmt->fetch(PDO::FETCH_ASSOC)) {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Association non trouvée']);
            exit;
        }
    } else {
        // Pour les dons libres, créer une association fictive ou utiliser null
        $associationId = null;
    }

    // Récupérer les infos de l'utilisateur (si connecté)
    $donorId = null;
    $donorEmail = null;
    $donorName = null;

    $authHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';
    if (preg_match('/Bearer\s+(.+)/i', $authHeader, $matches)) {
        $token = $matches[1];
        // Validation du token JWT (simplifié)
        // Dans un vrai système, décoder et valider le JWT
        // Pour maintenant, on utilise la session ou l'email du cookie
    }

    // Récupérer depuis la session ou les paramètres
    if (isset($_SESSION['user_id'])) {
        $donorId = $_SESSION['user_id'];

        // Récupérer l'email et le nom de l'utilisateur
        $stmt = $pdo->prepare('SELECT email, full_name FROM users WHERE id = ?');
        $stmt->execute([$donorId]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            $donorEmail = $user['email'];
            $donorName = !$isAnonymous ? $user['full_name'] : null;
        }
    }

    // Si pas connecté et pas anonyme, permettre un don anonyme
    if (!$donorId && !$isAnonymous) {
        // Optionnel: Rediriger vers la connexion
        // Pour maintenant, convertir en don anonyme
        $isAnonymous = true;
    }

    // Créer la donation
    $stmt = $pdo->prepare('
        INSERT INTO donations (
            donor_id,
            donor_email,
            donor_name,
            request_id,
            campaign_id,
            association_id,
            amount,
            currency,
            status,
            message,
            anonymous,
            created_at
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            \'TND\',
            \'completed\',
            ?,
            ?,
            NOW()
        )
    ');

    $stmt->execute([
        $donorId,
        $donorEmail,
        $donorName,
        $type === 'request' ? $requestId : null,
        $type === 'campaign' ? $campaignId : null,
        $associationId,
        $amount,
        $message ?: null,
        $isAnonymous ? 1 : 0
    ]);

    $donationId = $pdo->lastInsertId();

    // Mettre à jour les statistiques de l'association
    if ($associationId) {
        $stmt = $pdo->prepare('
            UPDATE association_stats
            SET total_donations = total_donations + ?,
                donors_count = donors_count + 1
            WHERE association_id = ?
        ');
        $stmt->execute([$amount, $associationId]);

        // Si c'est une première donation, insérer la ligne de stats
        if ($stmt->rowCount() === 0) {
            $stmt = $pdo->prepare('
                INSERT INTO association_stats (association_id, total_donations, donors_count)
                VALUES (?, ?, 1)
            ');
            $stmt->execute([$associationId, $amount]);
        }
    }

    // Mettre à jour le montant collecté de la demande
    if ($type === 'request' && $requestId) {
        $stmt = $pdo->prepare('
            UPDATE requests
            SET collected_amount = collected_amount + ?
            WHERE id = ?
        ');
        $stmt->execute([$amount, $requestId]);
    }

    if ($type === 'campaign' && $campaignId) {
        $stmt = $pdo->prepare('
            UPDATE campaigns
            SET collected_amount = collected_amount + ?
            WHERE id = ?
        ');
        $stmt->execute([$amount, $campaignId]);
    }

    // Répondre avec succès
    http_response_code(201);
    echo json_encode([
        'success' => true,
        'message' => 'Don créé avec succès',
        'data' => [
            'id' => $donationId,
            'amount' => $amount,
            'type' => $type,
            'timestamp' => date('c')
        ]
    ]);

} catch (Exception $e) {
    error_log($e->getMessage());
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Erreur serveur: ' . $e->getMessage()
    ]);
}
?>
