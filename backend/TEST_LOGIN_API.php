<?php
/**
 * TEST API LOGIN - Tester directement l'API
 */

echo "\n╔════════════════════════════════════════════════════════════════════╗\n";
echo "║              🧪 TEST API LOGIN - SANAD                            ║\n";
echo "╚════════════════════════════════════════════════════════════════════╝\n\n";

try {
    // Test 1: Config
    echo "1️⃣  VÉRIFIER LA CONFIGURATION\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $configPath = __DIR__ . '/api/config.php';
    if (!file_exists($configPath)) {
        echo "   ❌ Fichier config.php introuvable\n";
        echo "   Chemin: {$configPath}\n";
        exit(1);
    }
    
    $config = require $configPath;
    echo "   ✅ Config chargée\n";
    echo "   DSN: {$config['db']['dsn']}\n";
    echo "   User: {$config['db']['user']}\n\n";
    
    // Test 2: DB Connection
    echo "2️⃣  CONNEXION À LA BASE DE DONNÉES\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $pdo = new PDO(
        $config['db']['dsn'],
        $config['db']['user'],
        $config['db']['pass'],
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    echo "   ✅ Connecté à MySQL\n\n";
    
    // Test 3: Vérifier les utilisateurs
    echo "3️⃣  VÉRIFIER LES UTILISATEURS\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $result = $pdo->query('SELECT id, email, password_hash, role FROM users LIMIT 1');
    $user = $result->fetch(PDO::FETCH_ASSOC);
    
    if (!$user) {
        echo "   ❌ Aucun utilisateur trouvé!\n";
        echo "   → Importer seed_data.sql\n";
        exit(1);
    }
    
    echo "   ✅ Utilisateur trouvé:\n";
    echo "   Email: {$user['email']}\n";
    echo "   Role: {$user['role']}\n";
    echo "   Hash: " . substr($user['password_hash'], 0, 40) . "...\n\n";
    
    // Test 4: Vérifier le password
    echo "4️⃣  VÉRIFIER LE PASSWORD\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $testPassword = 'password123';
    
    if (password_verify($testPassword, $user['password_hash'])) {
        echo "   ✅ Password est CORRECT\n\n";
    } else {
        echo "   ❌ Password est INCORRECT\n";
        echo "   Password testé: {$testPassword}\n";
        echo "   Hash en BD: {$user['password_hash']}\n\n";
        
        // Générer le bon hash
        $correctHash = password_hash($testPassword, PASSWORD_BCRYPT);
        echo "   💡 Hash correct devrait être:\n";
        echo "   {$correctHash}\n\n";
        
        // Mettre à jour
        echo "   🔄 Mise à jour automatique...\n";
        $updateStmt = $pdo->prepare('UPDATE users SET password_hash = :hash WHERE id = :id');
        $updateStmt->execute([
            ':hash' => $correctHash,
            ':id' => $user['id']
        ]);
        echo "   ✅ Password mis à jour!\n\n";
    }
    
    // Test 5: Simuler le login
    echo "5️⃣  SIMULER UNE REQUÊTE LOGIN\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $loginEmail = $user['email'];
    $loginPassword = 'password123';
    
    echo "   Email: {$loginEmail}\n";
    echo "   Password: {$loginPassword}\n\n";
    
    // Requête simulée
    $stmt = $pdo->prepare('SELECT id, email, password_hash, role FROM users WHERE email = :email LIMIT 1');
    $stmt->execute([':email' => $loginEmail]);
    $dbUser = $stmt->fetch(PDO::FETCH_ASSOC);
    
    if (!$dbUser) {
        echo "   ❌ Utilisateur introuvable\n";
    } elseif (!password_verify($loginPassword, $dbUser['password_hash'])) {
        echo "   ❌ Password incorrect\n";
    } else {
        echo "   ✅ LOGIN RÉUSSI!\n";
        echo "   ID: {$dbUser['id']}\n";
        echo "   Role: {$dbUser['role']}\n\n";
    }
    
    // Test 6: Vérifier CORS
    echo "6️⃣  VÉRIFIER LES HEADERS CORS\n";
    echo "════════════════════════════════════════════════════════════════════\n";
    
    $helperPath = __DIR__ . '/api/helpers.php';
    $helperContent = file_get_contents($helperPath);
    
    if (strpos($helperContent, 'Access-Control-Allow-Origin') !== false) {
        echo "   ✅ CORS activé dans helpers.php\n";
    } else {
        echo "   ⚠️  CORS probablement pas activé\n";
        echo "   → Le frontend peut avoir du mal à appeler l'API\n";
    }
    echo "\n";
    
    // Solutions
    echo "\n💡 SOLUTIONS:\n";
    echo "════════════════════════════════════════════════════════════════════\n\n";
    
    echo "✅ TOUT EST OK? Alors essayez:\n";
    echo "   1. Rafraîchir http://localhost:4200\n";
    echo "   2. Ouvrir Console (F12)\n";
    echo "   3. Onglet Network\n";
    echo "   4. Tenter la connexion\n";
    echo "   5. Voir l'erreur exacte\n\n";
    
    echo "❓ ERREUR 'Email ou password incorrect'?\n";
    echo "   1. Vérifier que seed_data.sql est importé\n";
    echo "   2. Vérifier la casse (minuscules)\n";
    echo "   3. Pas d'espaces avant/après\n\n";
    
    echo "❓ ERREUR CORS?\n";
    echo "   Ajouter dans backend/api/login.php (ligne 1):\n";
    echo "   header('Access-Control-Allow-Origin: *');\n";
    echo "   header('Access-Control-Allow-Methods: POST');\n";
    echo "   header('Access-Control-Allow-Headers: Content-Type');\n\n";
    
} catch (Exception $e) {
    echo "   ❌ ERREUR: " . $e->getMessage() . "\n";
}

echo "╚════════════════════════════════════════════════════════════════════╝\n\n";
?>
