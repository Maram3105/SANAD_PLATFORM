#!/bin/bash

# ==================== SANAD DATABASE SETUP FOR XAMPP ====================
# Ce script crée la base de données, importe le schéma et les données de test
# À exécuter depuis le dossier backend: bash setup_database.sh

echo ""
echo "╔════════════════════════════════════════════════════════════════════╗"
echo "║    INSTALLATION DE LA BASE DE DONNÉES SANAD POUR XAMPP             ║"
echo "╚════════════════════════════════════════════════════════════════════╝"
echo ""

# Vérifier si mysql est disponible
if ! command -v mysql &> /dev/null; then
    echo "❌ ERREUR: mysql n'est pas trouvé dans le PATH"
    echo ""
    echo "Solutions:"
    echo "1. Installer MySQL: brew install mysql (Mac) ou apt install mysql-server (Linux)"
    echo "2. Ou ajouter le chemin MySQL au PATH"
    echo ""
    exit 1
fi

echo "✅ MySQL trouvé"
echo ""

# Créer la base de données
echo "📊 Étape 1: Création de la base de données 'sanad'..."
mysql -u root -e "CREATE DATABASE IF NOT EXISTS sanad CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;" 2>&1
if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de la création de la base de données"
    echo "Vérifiez que MySQL est en cours d'exécution et que l'utilisateur 'root' est accessible"
    exit 1
fi
echo "✅ Base de données 'sanad' créée/vérifiée"
echo ""

# Importer le schéma
echo "📊 Étape 2: Importation du schéma (tables, index, FK)..."
mysql -u root sanad < schema.sql
if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de l'importation du schéma"
    exit 1
fi
echo "✅ Schéma importé avec succès"
echo ""

# Importer les données de test
echo "📊 Étape 3: Importation des données de test..."
mysql -u root sanad < seed_data.sql
if [ $? -ne 0 ]; then
    echo "❌ Erreur lors de l'importation des données de test"
    exit 1
fi
echo "✅ Données de test importées"
echo ""

# Vérification
echo "📊 Étape 4: Vérification des données..."
echo ""
echo "--- Nombre de tables ---"
mysql -u root sanad -e "SELECT COUNT(*) as tables FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='sanad';"
echo ""
echo "--- Nombre de catégories ---"
mysql -u root sanad -e "SELECT COUNT(*) as categories FROM categories;"
echo ""
echo "--- Nombre d'utilisateurs ---"
mysql -u root sanad -e "SELECT COUNT(*) as users FROM users;"
echo ""
echo "--- Nombre d'associations ---"
mysql -u root sanad -e "SELECT COUNT(*) as associations FROM associations;"
echo ""
echo "--- Nombre de demandes d'aide ---"
mysql -u root sanad -e "SELECT COUNT(*) as requests FROM requests;"
echo ""
echo "--- Nombre de donations ---"
mysql -u root sanad -e "SELECT COUNT(*) as donations FROM donations;"
echo ""
echo "--- Associations vérifiées ---"
mysql -u root sanad -e "SELECT id, organization_name, verified, status FROM associations;"
echo ""

echo "╔════════════════════════════════════════════════════════════════════╗"
echo "║              ✅ INSTALLATION TERMINÉE AVEC SUCCÈS!                 ║"
echo "╚════════════════════════════════════════════════════════════════════╝"
echo ""
echo "📋 PROCHAINES ÉTAPES:"
echo ""
echo "1. Vérifier que les données sont importées:"
echo "   mysql -u root sanad"
echo "   > SELECT * FROM categories;"
echo "   > SELECT * FROM users;"
echo ""
echo "2. Tester les API endpoints:"
echo "   http://localhost/sanad/backend/api/get_requests.php"
echo "   http://localhost/sanad/backend/api/get_associations.php"
echo ""
echo "3. Utiliser les données de test:"
echo "   Email: mariam@sanad.tn (donateur)"
echo "   Email: ahmed@sanad.tn (association Solidarité Plus)"
echo ""
echo "✅ La base de données est prête à être utilisée!"
echo ""
