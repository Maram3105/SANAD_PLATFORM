<?php
/**
 * DIAGNOSTIC - Problème de Connexion SANAD
 */

echo "\n╔════════════════════════════════════════════════════════════════════╗\n";
echo "║              🔍 DIAGNOSTIC - PROBLÈME DE CONNEXION                ║\n";
echo "╚════════════════════════════════════════════════════════════════════╝\n\n";

$config = require __DIR__ . '/config.php';

try {
    // Test 1: Connexion à la base
    echo "1️⃣  TEST DE CONNEXION À LA BASE DE DONNÉES\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $pdo = new PDO(
        $config['db']['dsn'],
        $config['db']['user'],
        $config['db']['pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    echo "   ✅ Connexion réussie\n\n";
    
    // Test 2: Vérifier les utilisateurs
    echo "2️⃣  VÉRIFIER LES UTILISATEURS DANS LA BASE\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $result = $pdo->query('SELECT id, email, password_hash, role FROM users ORDER BY id');
    $users = $result->fetchAll(PDO::FETCH_ASSOC);
    
    if (empty($users)) {
        echo "   ❌ ERREUR: Aucun utilisateur trouvé!\n";
        echo "   → Vous devez importer seed_data.sql\n\n";
    } else {
        echo "   ✅ " . count($users) . " utilisateur(s) trouvé(s)\n\n";
        foreach ($users as $user) {
            echo "   • {$user['email']} ({$user['role']})\n";
            echo "     Hash: " . substr($user['password_hash'], 0, 30) . "...\n";
        }
        echo "\n";
    }
    
    // Test 3: Tester le hash password
    echo "3️⃣  TESTER LA VÉRIFICATION DU PASSWORD\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $testPassword = 'password123';
    
    if (!empty($users)) {
        $user = $users[0];
        if (password_verify($testPassword, $user['password_hash'])) {
            echo "   ✅ Le password 'password123' est CORRECT pour {$user['email']}\n\n";
        } else {
            echo "   ❌ ERREUR: Le password 'password123' est INCORRECT!\n";
            echo "   → Les hashs ne correspondent pas\n";
            echo "   → Vous devez réimporter seed_data.sql\n\n";
        }
    }
    
    // Test 4: Tester l'API login directement
    echo "4️⃣  TESTER L'API LOGIN\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    if (!empty($users)) {
        $loginEmail = $users[0]['email'];
        
        echo "   Email: {$loginEmail}\n";
        echo "   Password: {$testPassword}\n\n";
        
        // Simuler une requête POST
        $stmt = $pdo->prepare('SELECT id, email, password_hash, role FROM users WHERE email = :email LIMIT 1');
        $stmt->execute([':email' => $loginEmail]);
        $dbUser = $stmt->fetch(PDO::FETCH_ASSOC);
        
        if (!$dbUser) {
            echo "   ❌ Utilisateur introuvable\n";
        } elseif (!password_verify($testPassword, $dbUser['password_hash'])) {
            echo "   ❌ Password incorrect\n";
        } else {
            echo "   ✅ Login réussirait avec cette requête\n";
        }
    }
    echo "\n";
    
    // Test 5: Vérifier les associations
    echo "5️⃣  VÉRIFIER LES ASSOCIATIONS\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $assocResult = $pdo->query('SELECT user_id, organization_name, status FROM associations ORDER BY id');
    $associations = $assocResult->fetchAll(PDO::FETCH_ASSOC);
    
    if (empty($associations)) {
        echo "   ⚠️  Aucune association trouvée\n";
    } else {
        echo "   ✅ " . count($associations) . " association(s) trouvée(s)\n";
        foreach ($associations as $assoc) {
            echo "   • User {$assoc['user_id']}: {$assoc['organization_name']} ({$assoc['status']})\n";
        }
    }
    echo "\n";
    
    // Test 6: Vérifier la configuration
    echo "6️⃣  CONFIGURATION API\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    echo "   DSN: {$config['db']['dsn']}\n";
    echo "   JWT Secret: " . ($config['jwt_secret'] === 'CHANGE_ME' ? '⚠️  À changer!' : '✅ Configuré') . "\n";
    echo "   JWT Issuer: {$config['jwt_issuer']}\n";
    echo "   JWT Expiration: {$config['jwt_exp_minutes']} minutes\n\n";
    
    // Solutions
    echo "\n💡 SOLUTIONS:\n";
    echo "════════════════════════════════════════════════════════════════════\n\n";
    
    if (empty($users)) {
        echo "❌ PROBLÈME 1: Pas d'utilisateurs dans la base\n";
        echo "   SOLUTION:\n";
        echo "   1. Ouvrir PHPMyAdmin: http://localhost/phpmyadmin\n";
        echo "   2. Sélectionner base 'sanad'\n";
        echo "   3. Aller à 'Importer'\n";
        echo "   4. Importer 'seed_data.sql'\n";
        echo "   5. Actualiser la page\n\n";
    } else {
        echo "✅ Les utilisateurs existent\n\n";
    }
    
    echo "❌ PROBLÈME 2: CORS - Frontend ne peut pas appeler l'API\n";
    echo "   SOLUTION:\n";
    echo "   1. Ajouter CORS dans backend/api/helpers.php\n";
    echo "   2. OU utiliser le proxy Angular\n";
    echo "   3. OU déployer sur le même serveur\n\n";
    
    echo "❌ PROBLÈME 3: L'API retourne une erreur\n";
    echo "   SOLUTION:\n";
    echo "   1. Ouvrir la console du navigateur (F12)\n";
    echo "   2. Aller à l'onglet 'Network'\n";
    echo "   3. Tenter une connexion\n";
    echo "   4. Voir la requête 'login.php'\n";
    echo "   5. Voir la réponse d'erreur\n\n";
    
    echo "❌ PROBLÈME 4: Le Frontend Angular ne démarre pas\n";
    echo "   SOLUTION:\n";
    echo "   1. Ouvrir terminal\n";
    echo "   2. Aller à: c:\\xampp\\htdocs\\PROJET SANAD\n";
    echo "   3. Exécuter: npm start\n";
    echo "   4. Attendre que ça compile\n";
    echo "   5. Ouvrir: http://localhost:4200\n\n";
    
} catch (Exception $e) {
    echo "   ❌ ERREUR: " . $e->getMessage() . "\n\n";
}

echo "╚════════════════════════════════════════════════════════════════════╝\n\n";
?>
