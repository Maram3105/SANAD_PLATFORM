<?php
/**
 * Test de connexion à la base de données Sanad
 */

echo "════════════════════════════════════════════════════════════\n";
echo "TEST DE CONNEXION - BASE DE DONNÉES SANAD\n";
echo "════════════════════════════════════════════════════════════\n\n";

// Configuration
$config = [
    'host' => 'localhost',
    'dbname' => 'sanad',
    'user' => 'root',
    'pass' => ''
];

echo "📋 Configuration:\n";
echo "  • Host: {$config['host']}\n";
echo "  • Database: {$config['dbname']}\n";
echo "  • User: {$config['user']}\n";
echo "  • Password: " . ($config['pass'] ? "****" : "(vide)") . "\n\n";

try {
    echo "🔄 Tentative de connexion...\n";
    
    $dsn = "mysql:host={$config['host']};dbname={$config['dbname']};charset=utf8mb4";
    $pdo = new PDO($dsn, $config['user'], $config['pass'], [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
    
    echo "✅ Connexion réussie!\n\n";
    
    // Tester une requête simple
    echo "🔍 Vérification des tables:\n";
    $result = $pdo->query("SHOW TABLES");
    $tables = $result->fetchAll(PDO::FETCH_COLUMN);
    
    if (empty($tables)) {
        echo "  ⚠️  Aucune table trouvée (base vide)\n";
    } else {
        echo "  Tables trouvées: " . count($tables) . "\n";
        foreach ($tables as $table) {
            echo "    • {$table}\n";
        }
    }
    
    echo "\n📊 Informations de la base de données:\n";
    $serverInfo = $pdo->getAttribute(PDO::ATTR_SERVER_VERSION);
    echo "  • Version MySQL: {$serverInfo}\n";
    
    $dbName = $pdo->query("SELECT DATABASE()")->fetchColumn();
    echo "  • Base active: {$dbName}\n";
    
    echo "\n✨ TOUS LES TESTS SONT PASSÉS ✨\n";
    
} catch (PDOException $e) {
    echo "❌ ERREUR DE CONNEXION!\n\n";
    echo "Détails:\n";
    echo "  • Code: " . $e->getCode() . "\n";
    echo "  • Message: " . $e->getMessage() . "\n\n";
    
    echo "💡 Solutions possibles:\n";
    echo "  1. Vérifier que MySQL/MariaDB est démarré dans XAMPP\n";
    echo "  2. Vérifier que la base 'sanad' existe\n";
    echo "  3. Vérifier les identifiants (user/password)\n";
    echo "  4. Vérifier que localhost est accessible\n";
}

echo "\n════════════════════════════════════════════════════════════\n";
?>
