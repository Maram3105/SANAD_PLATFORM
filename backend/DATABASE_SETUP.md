# Guide d'installation de la base de données Sanad

## Prérequis

- MySQL 5.7+ ou MariaDB
- Accès à PHPMyAdmin ou ligne de commande MySQL
- Fichiers de schéma: `backend/schema.sql`

---

## Étape 1: Créer la base de données

### Méthode 1: Ligne de commande MySQL

```bash
# Se connecter à MySQL
mysql -u root -p

# Créer la base de données
CREATE DATABASE sanad CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Vérifier la création
SHOW DATABASES;

# Quitter
EXIT;
```

### Méthode 2: PHPMyAdmin

1. Ouvrir PHPMyAdmin
2. Cliquer sur "Bases de données"
3. Entrer "sanad" dans le champ "Créer une base de données"
4. Sélectionner charset "utf8mb4"
5. Cliquer sur "Créer"

---

## Étape 2: Importer le schéma

### Méthode 1: Ligne de commande

```bash
cd "c:\Users\tasni\Desktop\PROJET SANAD\backend"

# Importer le schéma
mysql -u root sanad < schema.sql

# Ou avec mot de passe
mysql -u root -p sanad < schema.sql
```

### Méthode 2: PHPMyAdmin

1. Ouvrir PHPMyAdmin et sélectionner la base "sanad"
2. Cliquer sur l'onglet "Importer"
3. Sélectionner `backend/schema.sql`
4. Cliquer sur "Importer"

---

## Étape 3: Vérifier l'installation

### Afficher toutes les tables

```sql
USE sanad;
SHOW TABLES;
```

**Résultat attendu:**
```
Tables_in_sanad
activity_log
association_stats
associations
campaigns
categories
donations
fund_allocation
login_attempts
ratings
requests
users
```

### Vérifier les catégories pré-insérées

```sql
SELECT * FROM categories;
```

**Résultat attendu:** 6 catégories (Santé, Éducation, Alimentation, Logement, Emploi, Infrastructure)

### Vérifier les contraintes de clés étrangères

```sql
SELECT CONSTRAINT_NAME, TABLE_NAME, COLUMN_NAME, REFERENCED_TABLE_NAME 
FROM INFORMATION_SCHEMA.KEY_COLUMN_USAGE 
WHERE TABLE_SCHEMA = 'sanad' AND REFERENCED_TABLE_NAME IS NOT NULL;
```

---

## Étape 4: Configuration PHP

Vérifier que `backend/api/config.php` contient:

```php
return [
    'db' => [
        'dsn' => 'mysql:host=localhost;dbname=sanad;charset=utf8mb4',
        'user' => 'root',
        'pass' => ''  // Ajouter le mot de passe si nécessaire
    ],
    // ... autres configurations
];
```

---

## Étape 5: Tester la connexion à la base de données

Créer un fichier `backend/test_db.php`:

```php
<?php
require_once __DIR__ . '/api/config.php';
require_once __DIR__ . '/api/db.php';

try {
    $pdo = get_db_connection($config['db']);
    
    // Test simple
    $stmt = $pdo->query('SELECT COUNT(*) as count FROM categories');
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    echo "Connexion réussie!\n";
    echo "Nombre de catégories: " . $result['count'] . "\n";
    
} catch (Exception $e) {
    echo "Erreur: " . $e->getMessage() . "\n";
}
?>
```

Exécuter:
```bash
php backend/test_db.php
```

---

## Étape 6: Insérer des données de test (optionnel)

### Créer un utilisateur test

```sql
INSERT INTO users (full_name, email, password_hash, phone, role)
VALUES (
    'Test User',
    'test@sanad.tn',
    '$2y$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36jbMeK.', -- bcrypt hash de 'password'
    '21234567',
    'user'
);
```

### Créer une association test

```sql
INSERT INTO associations (user_id, organization_name, slug, responsible_name, phone, email, description, location, status, verified, founded_year)
VALUES (
    1,
    'Solidarité Plus',
    'solidarite-plus',
    'Ahmed Ben Salah',
    '21 123 456',
    'contact@solidariteplus.tn',
    'Organisation d''aide humanitaire en Tunisie',
    'Tunis',
    'approved',
    TRUE,
    2011
);

INSERT INTO association_stats (association_id, total_donations, campaign_count, people_helped, donors_count)
VALUES (1, 450000, 28, 12500, 3200);

INSERT INTO fund_allocation (association_id)
VALUES (1);
```

### Créer une demande d'aide test

```sql
INSERT INTO requests (association_id, title, slug, description, category_id, location, urgency, target_amount, status)
VALUES (
    1,
    'Aide alimentaire pour les familles nécessiteuses',
    'aide-alimentaire-familles',
    'Programme d''aide alimentaire d''urgence pour 500 familles',
    3,
    'Tunis',
    'high',
    5000,
    'active'
);
```

---

## Structure des fichiers API créés

```
backend/api/
├── config.php                 # Configuration DB (existant)
├── db.php                     # Connexion DB (existant)
├── helpers.php                # Fonctions utilitaires (existant)
├── login.php                  # Connexion (existant)
├── register_user.php          # Inscription utilisateur (existant)
├── register_association.php   # Inscription association (existant)
├── get_requests.php           # Obtenir les demandes d'aide (NOUVEAU)
├── get_associations.php       # Obtenir les associations (NOUVEAU)
├── get_request_detail.php     # Détail d'une demande (NOUVEAU)
└── get_association_detail.php # Détail d'une association (NOUVEAU)
```

---

## Utilisation des API endpoints

### Obtenir les demandes d'aide avec filtres

```
GET /backend/api/get_requests.php?search=aide&category=sante&location=Tunis&urgency=high&sort=recent
```

**Paramètres:**
- `search`: Texte de recherche
- `category`: Slug de la catégorie
- `location`: Localisation
- `urgency`: low | medium | high
- `sort`: recent | most-funded | most-urgent
- `limit`: Nombre max de résultats (défaut: 20)
- `offset`: Décalage pour pagination (défaut: 0)

### Obtenir les associations

```
GET /backend/api/get_associations.php?search=&location=&category=&sort=name
```

**Paramètres:**
- `search`: Texte de recherche
- `location`: Localisation
- `category`: Slug de la catégorie
- `sort`: name | most-active | most-funded
- `limit`: Nombre max de résultats (défaut: 20)
- `offset`: Décalage pour pagination (défaut: 0)

### Obtenir le détail d'une demande

```
GET /backend/api/get_request_detail.php?id=1
```

Ou par slug:
```
GET /backend/api/get_request_detail.php?id=aide-alimentaire-familles
```

### Obtenir le détail d'une association

```
GET /backend/api/get_association_detail.php?id=1
```

Ou par slug:
```
GET /backend/api/get_association_detail.php?id=solidarite-plus
```

---

## Sauvegardes

### Créer une sauvegarde complète

```bash
mysqldump -u root sanad > sanad_backup_$(date +%Y%m%d_%H%M%S).sql
```

### Restaurer une sauvegarde

```bash
mysql -u root sanad < sanad_backup_20260501_120000.sql
```

### Vider toutes les tables (attention!)

```sql
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE TABLE activity_log;
TRUNCATE TABLE ratings;
TRUNCATE TABLE donations;
TRUNCATE TABLE campaigns;
TRUNCATE TABLE requests;
TRUNCATE TABLE fund_allocation;
TRUNCATE TABLE association_stats;
TRUNCATE TABLE associations;
TRUNCATE TABLE users;
TRUNCATE TABLE login_attempts;
-- Les catégories ne sont PAS vidées car elles sont de référence
SET FOREIGN_KEY_CHECKS = 1;
```

---

## Troubleshooting

### Erreur: "Access denied for user 'root'@'localhost'"

Vérifier le mot de passe dans `backend/api/config.php`:

```php
'pass' => 'votre_mot_de_passe'
```

### Erreur: "Base de données 'sanad' n'existe pas"

Créer la base:
```bash
mysql -u root -p < <(echo "CREATE DATABASE sanad CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;")
mysql -u root -p sanad < backend/schema.sql
```

### Erreur: "Charset 'utf8mb4' is not available"

Utiliser:
```sql
CREATE DATABASE sanad CHARACTER SET utf8 COLLATE utf8_general_ci;
```

### Les API retournent des erreurs

1. Vérifier les logs PHP: `error_log`
2. Activer le debug dans les API en ajoutant au début:
```php
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

---

## Maintenance

### Optimiser les tables

```sql
OPTIMIZE TABLE users;
OPTIMIZE TABLE associations;
OPTIMIZE TABLE donations;
OPTIMIZE TABLE requests;
OPTIMIZE TABLE campaigns;
```

### Recalculer les statistiques des associations

```sql
UPDATE association_stats SET
  total_donations = (SELECT COALESCE(SUM(amount), 0) FROM donations WHERE association_id = association_stats.association_id AND status = 'completed'),
  campaign_count = (SELECT COUNT(*) FROM campaigns WHERE association_id = association_stats.association_id AND status = 'active'),
  donors_count = (SELECT COUNT(DISTINCT donor_id) FROM donations WHERE association_id = association_stats.association_id AND status = 'completed')
WHERE 1;
```

---

## Sécurité

⚠️ **IMPORTANT:**

1. **Modifier la clé JWT** dans `backend/api/config.php`:
```php
'jwt_secret' => 'votre_clé_secrète_très_longue_et_complexe'
```

2. **Limiter les accès MySQL**: Ne pas utiliser root en production

3. **Ajouter HTTPS**: Utiliser le protocole HTTPS pour les API

4. **Valider les entrées**: Toujours nettoyer les données côté serveur

5. **Sauvegarder régulièrement**: Faire des sauvegardes automatiques

---

## Support

Pour toute question, consulter:
- `backend/DATABASE_DOCUMENTATION.md` - Documentation complète
- `README.md` - Guide général du projet
