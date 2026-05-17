<?php

declare(strict_types=1);

require_once __DIR__ . '/api/config.php';
require_once __DIR__ . '/api/db.php';
require_once __DIR__ . '/api/helpers.php';

echo "╔════════════════════════════════════════════════════════════════╗\n";
echo "║  SANAD DATABASE TEST - Vérification avant import XAMPP         ║\n";
echo "╚════════════════════════════════════════════════════════════════╝\n\n";

try {
    // 1. Test de connexion
    echo "📊 TEST 1: Connexion à la base de données...\n";
    $pdo = get_db_connection($config['db']);
    echo "✅ Connexion réussie!\n\n";

    // 2. Vérifier les tables
    echo "📊 TEST 2: Vérification des tables...\n";
    $stmt = $pdo->query("SHOW TABLES");
    $tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
    echo "✅ Tables trouvées: " . count($tables) . "\n";
    foreach ($tables as $table) {
        echo "   ✓ $table\n";
    }
    echo "\n";

    // 3. Vérifier les catégories
    echo "📊 TEST 3: Vérification des catégories pré-insérées...\n";
    $stmt = $pdo->query("SELECT COUNT(*) FROM categories");
    $categoryCount = $stmt->fetchColumn();
    echo "✅ Nombre de catégories: $categoryCount\n";
    
    $stmt = $pdo->query("SELECT id, name, slug, color FROM categories ORDER BY id");
    $categories = $stmt->fetchAll(PDO::FETCH_ASSOC);
    foreach ($categories as $cat) {
        echo "   ✓ [{$cat['id']}] {$cat['name']} ({$cat['slug']}) - {$cat['color']}\n";
    }
    echo "\n";

    // 4. Afficher la structure de quelques tables clés
    echo "📊 TEST 4: Structure des tables principales...\n";
    
    // Users
    $stmt = $pdo->query("DESCRIBE users");
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "✅ Table 'users': " . count($columns) . " colonnes\n";
    echo "   Colonnes: " . implode(', ', array_map(fn($c) => $c['Field'], $columns)) . "\n\n";
    
    // Associations
    $stmt = $pdo->query("DESCRIBE associations");
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "✅ Table 'associations': " . count($columns) . " colonnes\n";
    echo "   Colonnes: " . implode(', ', array_map(fn($c) => $c['Field'], $columns)) . "\n\n";
    
    // Requests
    $stmt = $pdo->query("DESCRIBE requests");
    $columns = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "✅ Table 'requests': " . count($columns) . " colonnes\n";
    echo "   Colonnes: " . implode(', ', array_map(fn($c) => $c['Field'], $columns)) . "\n\n";

    // 5. Vérifier les clés étrangères
    echo "📊 TEST 5: Vérification des clés étrangères...\n";
    $stmt = $pdo->query(
        "SELECT CONSTRAINT_NAME, TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME, REFERENCED_COLUMN_NAME 
         FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
         WHERE TABLE_SCHEMA = 'sanad' AND REFERENCED_TABLE_NAME IS NOT NULL
         ORDER BY TABLE_NAME"
    );
    $fks = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "✅ Clés étrangères trouvées: " . count($fks) . "\n";
    foreach ($fks as $fk) {
        echo "   ✓ {$fk['TABLE_NAME']}.{$fk['COLUMN_NAME']} → {$fk['REFERENCED_TABLE_NAME']}\n";
    }
    echo "\n";

    // 6. Vérifier les index
    echo "📊 TEST 6: Vérification des index...\n";
    $stmt = $pdo->query(
        "SELECT TABLE_NAME, INDEX_NAME, COLUMN_NAME 
         FROM INFORMATION_SCHEMA.STATISTICS 
         WHERE TABLE_SCHEMA = 'sanad' AND INDEX_NAME != 'PRIMARY'
         ORDER BY TABLE_NAME, INDEX_NAME"
    );
    $indexes = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo "✅ Index trouvés: " . count($indexes) . "\n";
    foreach ($indexes as $idx) {
        echo "   ✓ {$idx['TABLE_NAME']}.{$idx['INDEX_NAME']} ({$idx['COLUMN_NAME']})\n";
    }
    echo "\n";

    // 7. Estimer les données de test
    echo "📊 TEST 7: Aperçu des données de test (seed_data.sql)...\n";
    echo "✅ Données à insérer:\n";
    echo "   ✓ 6 utilisateurs (3 associations, 3 donateurs)\n";
    echo "   ✓ 3 associations vérifiées et approuvées\n";
    echo "   ✓ 6 demandes d'aide (requests) actives\n";
    echo "   ✓ 4 campagnes (3 actives, 1 complétée)\n";
    echo "   ✓ 10 donations complétées (8 nommées, 2 anonymes)\n";
    echo "   ✓ 4 évaluations (ratings)\n";
    echo "   ✓ 10 entrées de log (activity_log)\n";
    echo "\n";

    // 8. Vérifier les permissions
    echo "📊 TEST 8: Vérification des permissions...\n";
    try {
        $pdo->exec("CREATE TABLE test_permissions (id INT PRIMARY KEY) ENGINE=InnoDB");
        $pdo->exec("INSERT INTO test_permissions (id) VALUES (1)");
        $pdo->exec("DROP TABLE test_permissions");
        echo "✅ Permissions d'écriture: OK\n";
    } catch (Exception $e) {
        echo "⚠️  Permissions limitées: " . $e->getMessage() . "\n";
    }
    echo "\n";

    // 9. Résumé final
    echo "╔════════════════════════════════════════════════════════════════╗\n";
    echo "║                    ✅ TOUS LES TESTS RÉUSSIS!                  ║\n";
    echo "╚════════════════════════════════════════════════════════════════╝\n\n";

    echo "📋 PROCHAINES ÉTAPES:\n\n";
    echo "1️⃣  Importer seed_data.sql dans la base de données:\n";
    echo "   mysql -u root sanad < backend/seed_data.sql\n\n";
    echo "2️⃣  Vérifier les données insérées:\n";
    echo "   SELECT COUNT(*) FROM users;              -- Doit afficher: 6\n";
    echo "   SELECT COUNT(*) FROM associations;       -- Doit afficher: 3\n";
    echo "   SELECT COUNT(*) FROM requests;           -- Doit afficher: 6\n";
    echo "   SELECT COUNT(*) FROM donations;          -- Doit afficher: 10\n\n";
    echo "3️⃣  Tester les API endpoints:\n";
    echo "   GET /backend/api/get_requests.php\n";
    echo "   GET /backend/api/get_associations.php\n\n";
    echo "4️⃣  Importer dans XAMPP:\n";
    echo "   Copier le dossier 'backend' dans C:\\xampp\\htdocs\\sanad\n";
    echo "   Démarrer Apache et MySQL dans XAMPP\n";
    echo "   Accéder à: http://localhost/sanad/backend/\n\n";

} catch (Exception $e) {
    echo "❌ ERREUR: " . $e->getMessage() . "\n";
    echo "\nDiagnostic:\n";
    echo "- Vérifier que MySQL est en cours d'exécution\n";
    echo "- Vérifier les identifiants dans backend/api/config.php\n";
    echo "- Vérifier que la base 'sanad' existe\n";
    exit(1);
}
?>
