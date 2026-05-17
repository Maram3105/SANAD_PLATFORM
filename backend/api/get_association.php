<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

try {
    $pdo = require __DIR__ . '/db.php';

    $id = $_GET['id'] ?? '';
    if ($id === '') {
        json_response(['success' => false, 'message' => 'Identifiant requis.'], 400);
    }

    $stmt = $pdo->prepare(
        'SELECT a.*, ast.total_donations, ast.campaign_count, ast.donors_count, c.name AS category_name
         FROM associations a
         LEFT JOIN association_stats ast ON a.id = ast.association_id
         LEFT JOIN categories c ON a.category_id = c.id
         WHERE a.id = :id OR a.slug = :slug'
    );
    $stmt->execute([':id' => $id, ':slug' => $id]);
    $association = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$association) {
        json_response(['success' => false, 'message' => 'Association introuvable.'], 404);
    }

    json_response(['success' => true, 'data' => $association]);
} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
