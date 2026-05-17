<?php
// Test database connection
header('Content-Type: application/json');

try {
    $db = new PDO('mysql:host=localhost;dbname=sanad;charset=utf8mb4', 'root', '');
    
    // Test if connection works
    $stmt = $db->query('SELECT COUNT(*) as count FROM donations');
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo json_encode([
        'success' => true,
        'message' => 'Database connected successfully',
        'donations_count' => $result['count']
    ]);
} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database connection failed: ' . $e->getMessage()
    ]);
}
?>
