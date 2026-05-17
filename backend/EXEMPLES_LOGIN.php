<?php
/**
 * EXEMPLES - EMAIL ET PASSWORD SANAD
 * ====================================
 * Données de test pour la plateforme SANAD
 */

echo "═══════════════════════════════════════════════════════════════════\n";
echo "         EXEMPLES - EMAIL ET PASSWORD POUR SANAD\n";
echo "═══════════════════════════════════════════════════════════════════\n\n";

// ==================== UTILISATEURS DE TEST ====================
echo "👥 UTILISATEURS DE TEST DISPONIBLES:\n";
echo "═══════════════════════════════════════════════════════════════════\n\n";

$users = [
    [
        'id' => 1,
        'name' => 'Ahmed Ben Salah',
        'email' => 'ahmed@sanad.tn',
        'phone' => '21234567',
        'role' => 'Association',
        'org' => 'Solidarité Plus'
    ],
    [
        'id' => 2,
        'name' => 'Fatima Khalili',
        'email' => 'fatima@sanad.tn',
        'phone' => '21345678',
        'role' => 'Association',
        'org' => 'Éducation Sans Frontières'
    ],
    [
        'id' => 3,
        'name' => 'Khaled Mounir',
        'email' => 'khaled@sanad.tn',
        'phone' => '21456789',
        'role' => 'Association',
        'org' => 'Cœurs Généreux'
    ],
    [
        'id' => 4,
        'name' => 'Mariam Trifi',
        'email' => 'mariam@sanad.tn',
        'phone' => '21567890',
        'role' => 'Donateur',
        'org' => '-'
    ],
    [
        'id' => 5,
        'name' => 'Hassan Elmi',
        'email' => 'hassan@sanad.tn',
        'phone' => '21678901',
        'role' => 'Donateur',
        'org' => '-'
    ],
    [
        'id' => 6,
        'name' => 'Layla Ben Ahmed',
        'email' => 'layla@sanad.tn',
        'phone' => '21789012',
        'role' => 'Donateur',
        'org' => '-'
    ]
];

foreach ($users as $user) {
    echo "┌─────────────────────────────────────────────────────────────────┐\n";
    echo "│ ID: {$user['id']}                                                                │\n";
    echo "│ Nom: {$user['name']}\n";
    echo "│ Email: {$user['email']}\n";
    echo "│ Téléphone: {$user['phone']}\n";
    echo "│ Rôle: {$user['role']}\n";
    if ($user['org'] !== '-') {
        echo "│ Organisation: {$user['org']}\n";
    }
    echo "└─────────────────────────────────────────────────────────────────┘\n\n";
}

// ==================== PASSWORD DE TEST ====================
echo "\n🔑 PASSWORD:\n";
echo "═══════════════════════════════════════════════════════════════════\n\n";

echo "Tous les utilisateurs utilisent le même password pour les tests:\n\n";
echo "   📧 EMAIL: (voir liste ci-dessus)\n";
echo "   🔐 PASSWORD: password123\n\n";

// ==================== GÉNÉRER HASH ====================
echo "\n📝 HASH BCRYPT DU PASSWORD:\n";
echo "═══════════════════════════════════════════════════════════════════\n\n";

$password = 'password123';
$hashedPassword = password_hash($password, PASSWORD_BCRYPT);

echo "   Password: {$password}\n";
echo "   Hash: {$hashedPassword}\n\n";

// Vérifier
if (password_verify($password, $hashedPassword)) {
    echo "   ✅ Hash valide et vérifiable\n\n";
}

// ==================== UTILISATEURS PAR RÔLE ====================
echo "\n👔 UTILISATEURS PAR RÔLE:\n";
echo "═══════════════════════════════════════════════════════════════════\n\n";

echo "🏢 ASSOCIATIONS (Responsables):\n";
echo "   1. ahmed@sanad.tn          → Solidarité Plus\n";
echo "   2. fatima@sanad.tn         → Éducation Sans Frontières\n";
echo "   3. khaled@sanad.tn         → Cœurs Généreux\n\n";

echo "👤 DONATEURS (Utilisateurs):\n";
echo "   4. mariam@sanad.tn\n";
echo "   5. hassan@sanad.tn\n";
echo "   6. layla@sanad.tn\n\n";

// ==================== ACCÈS DIRECT ====================
echo "\n🌐 ACCÈS DIRECT AUX SERVICES:\n";
echo "═══════════════════════════════════════════════════════════════════\n\n";

echo "Frontend Angular:\n";
echo "   🔗 http://localhost:4200\n\n";

echo "Backend API:\n";
echo "   🔗 http://localhost/PROJET%20SANAD/backend/api/\n\n";

echo "PHPMyAdmin:\n";
echo "   🔗 http://localhost/phpmyadmin\n";
echo "   User: root\n";
echo "   Password: (vide)\n";
echo "   Database: sanad\n\n";

// ==================== AIDE RAPIDE ====================
echo "\n💡 AIDE RAPIDE:\n";
echo "═══════════════════════════════════════════════════════════════════\n\n";

echo "❓ Comment se connecter?\n";
echo "   1. Ouvrir http://localhost:4200\n";
echo "   2. Aller à 'Connexion'\n";
echo "   3. Utiliser un email et le password ci-dessus\n\n";

echo "❓ Quelle association choisir pour tester?\n";
echo "   → Solidarité Plus (Ahmed) pour voir les demandes d'aide\n";
echo "   → Cœurs Généreux (Khaled) pour voir les profils approuvés\n\n";

echo "❓ Où sont les données stockées?\n";
echo "   → Base de données: c:\\xampp\\mysql\\data\\sanad\\\n";
echo "   → Fichiers SQL: c:\\xampp\\htdocs\\PROJET SANAD\\backend\\\n\n";

echo "═══════════════════════════════════════════════════════════════════\n\n";
?>
