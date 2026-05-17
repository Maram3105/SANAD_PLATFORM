<?php
/**
 * PASSWORD SANAD - INFORMATIONS COMPLÈTES
 */

echo "\n╔════════════════════════════════════════════════════════════════════╗\n";
echo "║                    🔐 PASSWORD SANAD                              ║\n";
echo "╚════════════════════════════════════════════════════════════════════╝\n\n";

// ==================== PASSWORD ====================
echo "📝 PASSWORD DE TEST:\n";
echo "════════════════════════════════════════════════════════════════════\n\n";
echo "   🔑 password123\n\n";

// ==================== TOUS LES COMPTES ====================
echo "✅ CES EMAILS UTILISENT TOUS LE PASSWORD CI-DESSUS:\n";
echo "════════════════════════════════════════════════════════════════════\n\n";

$emails = [
    'ahmed@sanad.tn' => '🏢 Association - Solidarité Plus',
    'fatima@sanad.tn' => '🏢 Association - Éducation Sans Frontières',
    'khaled@sanad.tn' => '🏢 Association - Cœurs Généreux',
    'mariam@sanad.tn' => '👤 Donateur',
    'hassan@sanad.tn' => '👤 Donateur',
    'layla@sanad.tn' => '👤 Donateur'
];

foreach ($emails as $email => $type) {
    echo "   {$email} {$type}\n";
}

echo "\n\n";

// ==================== CONNEXION ====================
echo "🌐 COMMENT SE CONNECTER:\n";
echo "════════════════════════════════════════════════════════════════════\n\n";
echo "   1️⃣  Ouvrir: http://localhost:4200\n";
echo "   2️⃣  Cliquer sur 'Connexion'\n";
echo "   3️⃣  Email: ahmed@sanad.tn (exemple)\n";
echo "   4️⃣  Password: password123\n";
echo "   5️⃣  Cliquer sur 'Se connecter'\n\n";

// ==================== CHANGER LE PASSWORD ====================
echo "🔄 CHANGER LE PASSWORD (Backend):\n";
echo "════════════════════════════════════════════════════════════════════\n\n";
echo "   Fichier: backend/api/config.php\n";
echo "   Variable: 'jwt_secret'\n";
echo "   Valeur actuelle: 'CHANGE_ME'\n\n";

// ==================== HASH ====================
echo "🔒 HASH BCRYPT DU PASSWORD:\n";
echo "════════════════════════════════════════════════════════════════════\n\n";

$hash = password_hash('password123', PASSWORD_BCRYPT);
echo "   {$hash}\n\n";

// ==================== VERIFICATION ====================
if (password_verify('password123', $hash)) {
    echo "   ✅ Password valide\n\n";
}

// ==================== BASE DE DONNÉES ====================
echo "💾 VÉRIFIER DANS LA BASE DE DONNÉES:\n";
echo "════════════════════════════════════════════════════════════════════\n\n";
echo "   1. Ouvrir: http://localhost/phpmyadmin\n";
echo "   2. Sélectionner 'sanad' → 'users'\n";
echo "   3. Voir colonne 'password_hash'\n";
echo "   4. Les hashs commencent par: \\$2y\\$10\\$...\n\n";

echo "╚════════════════════════════════════════════════════════════════════╝\n\n";
?>
