<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/config.php';
require_once __DIR__ . '/helpers.php';
require_once __DIR__ . '/auth.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        json_response(['success' => false, 'message' => 'Methode non autorisee.'], 405);
    }

    $pdo = require __DIR__ . '/db.php';
    $config = require __DIR__ . '/config.php';

    $auth = require_association($pdo, $config, true);
    $association = $auth['association'];

    $input = json_decode(file_get_contents('php://input'), true);
    $campaignId = (int) ($input['campaign_id'] ?? ($input['request_id'] ?? 0));

    if ($campaignId <= 0) {
        json_response(['success' => false, 'message' => 'Identifiant invalide.'], 400);
    }

    $stmt = $pdo->prepare('SELECT id FROM campaigns WHERE id = :id AND association_id = :association_id');
    $stmt->execute([':id' => $campaignId, ':association_id' => $association['id']]);

    if (!$stmt->fetchColumn()) {
        json_response(['success' => false, 'message' => 'Campagne introuvable.'], 404);
    }

    $deleteStmt = $pdo->prepare('DELETE FROM campaigns WHERE id = :id AND association_id = :association_id');
    $deleteStmt->execute([':id' => $campaignId, ':association_id' => $association['id']]);

    $statsStmt = $pdo->prepare(
        'UPDATE association_stats
         SET campaign_count = GREATEST(campaign_count - 1, 0)
         WHERE association_id = :association_id'
    );
    $statsStmt->execute([':association_id' => $association['id']]);

    json_response(['success' => true]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
