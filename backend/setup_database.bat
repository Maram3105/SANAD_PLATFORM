@echo off
REM ==================== SANAD DATABASE SETUP FOR XAMPP ====================
REM Ce script crée la base de données, importe le schéma et les données de test
REM À exécuter depuis le dossier backend

echo.
echo ╔════════════════════════════════════════════════════════════════════╗
echo ║    INSTALLATION DE LA BASE DE DONNÉES SANAD POUR XAMPP             ║
echo ╚════════════════════════════════════════════════════════════════════╝
echo.

REM Vérifier si mysql.exe est disponible
where mysql >nul 2>nul
if %errorlevel% neq 0 (
    echo ❌ ERREUR: mysql n'est pas trouvé dans le PATH
    echo.
    echo Solutions:
    echo 1. Ajouter C:\xampp\mysql\bin au PATH système
    echo 2. Ou exécuter ce script depuis: C:\xampp\mysql\bin\
    echo.
    pause
    exit /b 1
)

echo ✅ MySQL trouvé
echo.

REM Créer la base de données
echo 📊 Étape 1: Création de la base de données 'sanad'...
mysql -u root -e "CREATE DATABASE IF NOT EXISTS sanad CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;" 2>&1
if %errorlevel% neq 0 (
    echo ❌ Erreur lors de la création de la base de données
    pause
    exit /b 1
)
echo ✅ Base de données 'sanad' créée/vérifiée
echo.

REM Importer le schéma
echo 📊 Étape 2: Importation du schéma (tables, index, FK)...
mysql -u root sanad < schema.sql
if %errorlevel% neq 0 (
    echo ❌ Erreur lors de l'importation du schéma
    pause
    exit /b 1
)
echo ✅ Schéma importé avec succès
echo.

REM Importer les données de test
echo 📊 Étape 3: Importation des données de test...
mysql -u root sanad < seed_data.sql
if %errorlevel% neq 0 (
    echo ❌ Erreur lors de l'importation des données de test
    pause
    exit /b 1
)
echo ✅ Données de test importées
echo.

REM Vérification
echo 📊 Étape 4: Vérification des données...
echo.
echo --- Nombre de tables ---
mysql -u root sanad -e "SELECT COUNT(*) as tables FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA='sanad';"
echo.
echo --- Nombre de catégories ---
mysql -u root sanad -e "SELECT COUNT(*) as categories FROM categories;"
echo.
echo --- Nombre d'utilisateurs ---
mysql -u root sanad -e "SELECT COUNT(*) as users FROM users;"
echo.
echo --- Nombre d'associations ---
mysql -u root sanad -e "SELECT COUNT(*) as associations FROM associations;"
echo.
echo --- Nombre de demandes d'aide ---
mysql -u root sanad -e "SELECT COUNT(*) as requests FROM requests;"
echo.
echo --- Nombre de donations ---
mysql -u root sanad -e "SELECT COUNT(*) as donations FROM donations;"
echo.
echo --- Associations vérifiées ---
mysql -u root sanad -e "SELECT id, organization_name, verified, status FROM associations;"
echo.

echo ╔════════════════════════════════════════════════════════════════════╗
echo ║              ✅ INSTALLATION TERMINÉE AVEC SUCCÈS!                 ║
echo ╚════════════════════════════════════════════════════════════════════╝
echo.
echo 📋 PROCHAINES ÉTAPES:
echo.
echo 1. Vérifier que les données sont importées:
echo    SELECT * FROM categories;
echo    SELECT * FROM users;
echo.
echo 2. Tester les API endpoints:
echo    http://localhost/sanad/backend/api/get_requests.php
echo    http://localhost/sanad/backend/api/get_associations.php
echo.
echo 3. Utiliser les données de test:
echo    Email: mariam@sanad.tn (donateur)
echo    Email: ahmed@sanad.tn (association Solidarité Plus)
echo.
echo ✅ La base de données est prête à être utilisée!
echo.
pause
