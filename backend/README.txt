Vue d'ensemble du backend

INSTALLATION
- Placez ce backend sur un serveur PHP 8.1+ avec MySQL.
- Créez la base de données "sanad" : mysql> CREATE DATABASE sanad CHARACTER SET utf8mb4;
- Importez le schéma : mysql -u root sanad < schema.sql
- Mettez à jour backend/api/config.php avec vos identifiants et le secret JWT.
- Assurez-vous que backend/uploads est accessible en écriture.

DOCUMENTATION
- DATABASE_SETUP.md : Guide complet d'installation de la base de données
- DATABASE_DOCUMENTATION.md : Documentation technique des tables et relations
- DATABASE_SUMMARY.md : Résumé des tables créées et structure

TABLES PRINCIPALES
✅ users - Profils utilisateurs, rôles (user, association, admin)
✅ associations - Organisations partenaires avec stats et vérification
✅ requests - Demandes d'aide individuelles avec urgence
✅ campaigns - Campagnes de financement de long terme
✅ donations - Historique des donations avec suivi de paiement
✅ ratings - Évaluations et avis des donateurs
✅ categories - 6 catégories pré-insérées (Santé, Éducation, etc.)
✅ activity_log - Historique d'audit des actions

ENDPOINTS EXISTANTS
- POST /backend/api/login.php (JSON : email, password)
- POST /backend/api/register_user.php (JSON : fullName, email, password, phone?)
- POST /backend/api/register_association.php (multipart form-data avec champs et document)

ENDPOINTS NOUVEAUX (POUR EXPLORER ET ASSOCIATIONS PAGES)
- GET /backend/api/get_requests.php (params: search, category, location, urgency, sort, limit, offset)
- GET /backend/api/get_associations.php (params: search, location, category, sort, limit, offset)
- GET /backend/api/get_request_detail.php (params: id ou slug)
- GET /backend/api/get_association_detail.php (params: id ou slug)
