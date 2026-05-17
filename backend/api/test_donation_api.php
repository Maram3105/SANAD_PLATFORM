<?php
header('Content-Type: application/json');

try {
    // Connexion directe à la base sanad
    $pdo = new PDO('mysql:host=localhost;dbname=sanad;charset=utf8mb4', 'root', '');
    
    echo json_encode([
        'status' => 'success',
        'data' => [
            'users' => $pdo->query('SELECT COUNT(*) as count FROM users')->fetch(PDO::FETCH_ASSOC),
            'donations' => $pdo->query('SELECT COUNT(*) as count FROM donations')->fetch(PDO::FETCH_ASSOC),
            'requests' => $pdo->query('SELECT COUNT(*) as count FROM requests')->fetch(PDO::FETCH_ASSOC),
            'associations' => $pdo->query('SELECT COUNT(*) as count FROM associations')->fetch(PDO::FETCH_ASSOC),
            'requests_list' => $pdo->query('SELECT id, title, target_amount, collected_amount FROM requests LIMIT 5')->fetchAll(PDO::FETCH_ASSOC),
            'associations_list' => $pdo->query('SELECT id, organization_name, status FROM associations LIMIT 5')->fetchAll(PDO::FETCH_ASSOC)
        ]
    ], JSON_PRETTY_PRINT);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        'status' => 'error',
        'message' => $e->getMessage()
    ]);
}
?>
