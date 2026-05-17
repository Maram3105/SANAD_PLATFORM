<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/auth.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $auth = require_association($pdo, $config, true);
    $association = $auth['association'];

    $campaignId = (int) ($_GET['id'] ?? 0);
    if ($campaignId <= 0) {
        json_response(['success' => false, 'message' => 'Identifiant invalide.'], 400);
    }

    $stmt = $pdo->prepare(
        'SELECT camp.*, c.name AS category_name,
                (SELECT COUNT(*) FROM donations d WHERE d.campaign_id = camp.id AND d.status = "completed") AS donors_count
         FROM campaigns camp
         LEFT JOIN categories c ON camp.category_id = c.id
         WHERE camp.id = :id AND camp.association_id = :association_id
         LIMIT 1'
    );
    $stmt->execute([':id' => $campaignId, ':association_id' => $association['id']]);
    $campaign = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$campaign) {
        json_response(['success' => false, 'message' => 'Campagne introuvable.'], 404);
    }

    json_response(['success' => true, 'data' => ['campaign' => $campaign]]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
