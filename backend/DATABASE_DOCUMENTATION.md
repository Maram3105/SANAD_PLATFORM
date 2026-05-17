# Sanad Platform - Base de Données

## Vue d'ensemble

La base de données Sanad est conçue pour gérer une plateforme d'aide sociale permettant aux associations de créer des demandes d'aide et aux donateurs de contribuer.

**Base de données:** `sanad`  
**Moteur:** MySQL 5.7+  
**Charset:** utf8mb4

---

## Architecture des tables

### 1. Gestion des utilisateurs et authentification

#### `users`
Stocke les informations de tous les utilisateurs du système.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire auto-incrémentée |
| full_name | VARCHAR(160) | Nom complet de l'utilisateur |
| email | VARCHAR(190) | Email unique |
| password_hash | VARCHAR(255) | Hash du mot de passe (bcrypt) |
| phone | VARCHAR(40) | Numéro de téléphone (optionnel) |
| role | ENUM('user','association','admin') | Rôle de l'utilisateur |
| avatar_url | VARCHAR(255) | URL de l'avatar (optionnel) |
| bio | TEXT | Biographie de l'utilisateur (optionnel) |
| created_at | TIMESTAMP | Date de création |
| updated_at | TIMESTAMP | Date de dernière modification |

**Index:** `idx_email`, `idx_role`

#### `login_attempts`
Enregistre les tentatives de connexion pour la limitation de débit.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| email | VARCHAR(190) | Email de l'utilisateur |
| ip_address | VARCHAR(64) | Adresse IP de la tentative |
| created_at | TIMESTAMP | Horodatage |

**Index:** `idx_login_attempts_email_ip` (pour optimiser les requêtes de limitation)

---

### 2. Gestion des catégories

#### `categories`
Catégories pour les demandes d'aide et les campagnes.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| name | VARCHAR(100) | Nom de la catégorie (ex: "Santé") |
| slug | VARCHAR(100) | URL-friendly slug (ex: "sante") |
| description | TEXT | Description détaillée |
| icon | VARCHAR(50) | Classe Font Awesome (ex: "fa-heart") |
| color | VARCHAR(7) | Code couleur hex (ex: "#EF4444") |
| created_at | TIMESTAMP | Date de création |

**Index:** `idx_slug` (pour recherche rapide par slug)

**Catégories pré-insérées:**
- Santé (fa-heart, #EF4444)
- Éducation (fa-book, #2563EB)
- Alimentation (fa-utensils, #F59E0B)
- Logement (fa-home, #8B5CF6)
- Emploi (fa-briefcase, #06B6D4)
- Infrastructure (fa-tools, #6B7280)

---

### 3. Gestion des associations

#### `associations`
Informations des organisations/associations partenaires.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| user_id | INT | FK vers users (responsable) |
| organization_name | VARCHAR(200) | Nom de l'organisation |
| slug | VARCHAR(200) | URL-friendly slug |
| responsible_name | VARCHAR(160) | Nom du responsable |
| phone | VARCHAR(40) | Téléphone de contact |
| email | VARCHAR(190) | Email de contact |
| website | VARCHAR(255) | Site web (optionnel) |
| description | TEXT | Courte description |
| full_description | LONGTEXT | Description détaillée |
| logo_url | VARCHAR(255) | URL du logo |
| cover_url | VARCHAR(255) | URL de l'image de couverture |
| location | VARCHAR(200) | Localisation |
| category_id | INT | FK vers categories |
| founded_year | INT | Année de fondation |
| document_path | VARCHAR(255) | Chemin du document de vérification |
| status | ENUM('pending','approved','rejected') | Statut d'approbation |
| verified | BOOLEAN | Vérification complétée |
| verification_date | TIMESTAMP | Date de vérification |
| created_at | TIMESTAMP | Date de création |
| updated_at | TIMESTAMP | Date de modification |

**Clés étrangères:**
- `fk_associations_user_id` → users(id)
- `fk_associations_category_id` → categories(id)

**Index:** `idx_slug`, `idx_status`, `idx_verified`, `idx_location`

#### `association_stats`
Statistiques dénormalisées des associations pour optimiser les requêtes.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| association_id | INT | FK vers associations (UNIQUE) |
| total_donations | DECIMAL(15,2) | Montant total des donations |
| campaign_count | INT | Nombre de campagnes |
| people_helped | INT | Nombre de personnes aidées |
| donors_count | INT | Nombre de donateurs |
| average_rating | DECIMAL(3,2) | Note moyenne (0-5) |
| last_updated | TIMESTAMP | Dernière mise à jour |

**Clé étrangère:** `fk_assoc_stats_assoc_id` → associations(id)

#### `fund_allocation`
Configuration de l'allocation des fonds pour la transparence.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| association_id | INT | FK vers associations |
| direct_aid_percentage | DECIMAL(5,2) | % d'aide directe (défaut: 62%) |
| programs_percentage | DECIMAL(5,2) | % des programmes (défaut: 18%) |
| operations_percentage | DECIMAL(5,2) | % des opérations (défaut: 14%) |
| admin_percentage | DECIMAL(5,2) | % administratifs (défaut: 6%) |
| description | TEXT | Description de l'allocation |
| updated_at | TIMESTAMP | Date de modification |

**Clé étrangère:** `fk_fund_alloc_assoc_id` → associations(id)

---

### 4. Demandes d'aide et campagnes

#### `requests`
Demandes d'aide individuelles de la part des associations.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| association_id | INT | FK vers associations |
| title | VARCHAR(255) | Titre de la demande |
| slug | VARCHAR(255) | URL-friendly slug |
| description | TEXT | Courte description |
| full_description | LONGTEXT | Description détaillée |
| category_id | INT | FK vers categories |
| location | VARCHAR(200) | Localisation |
| urgency | ENUM('low','medium','high') | Niveau d'urgence |
| image_url | VARCHAR(255) | URL de l'image |
| target_amount | DECIMAL(15,2) | Montant cible |
| collected_amount | DECIMAL(15,2) | Montant collecté |
| status | ENUM('active','completed','paused','cancelled') | Statut |
| start_date | TIMESTAMP | Date de début |
| end_date | TIMESTAMP | Date de fin |
| created_at | TIMESTAMP | Date de création |
| updated_at | TIMESTAMP | Date de modification |

**Clés étrangères:**
- `fk_requests_assoc_id` → associations(id)
- `fk_requests_category_id` → categories(id)

**Index:** `idx_slug`, `idx_status`, `idx_urgency`, `idx_location`, `idx_association_id`

#### `campaigns`
Campagnes de financement de long terme des associations.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| association_id | INT | FK vers associations |
| title | VARCHAR(255) | Titre de la campagne |
| slug | VARCHAR(255) | URL-friendly slug |
| description | TEXT | Description de la campagne |
| category_id | INT | FK vers categories |
| image_url | VARCHAR(255) | URL de l'image |
| target_amount | DECIMAL(15,2) | Montant cible |
| collected_amount | DECIMAL(15,2) | Montant collecté |
| status | ENUM('active','completed','paused','cancelled') | Statut |
| start_date | TIMESTAMP | Date de début |
| end_date | TIMESTAMP | Date de fin |
| created_at | TIMESTAMP | Date de création |
| updated_at | TIMESTAMP | Date de modification |

**Clés étrangères:**
- `fk_campaigns_assoc_id` → associations(id)
- `fk_campaigns_category_id` → categories(id)

**Index:** `idx_slug`, `idx_status`, `idx_association_id`

---

### 5. Donations et paiements

#### `donations`
Enregistre toutes les donations faites par les donateurs.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| donor_id | INT | FK vers users (optionnel si anonyme) |
| donor_email | VARCHAR(190) | Email du donateur |
| donor_name | VARCHAR(160) | Nom du donateur |
| request_id | INT | FK vers requests (optionnel) |
| campaign_id | INT | FK vers campaigns (optionnel) |
| association_id | INT | FK vers associations |
| amount | DECIMAL(15,2) | Montant donné |
| currency | VARCHAR(3) | Devise (défaut: TND) |
| status | ENUM('pending','completed','failed','refunded') | Statut du paiement |
| payment_method | VARCHAR(50) | Méthode de paiement |
| transaction_id | VARCHAR(255) | ID de la transaction |
| message | TEXT | Message du donateur |
| anonymous | BOOLEAN | Donation anonyme |
| created_at | TIMESTAMP | Date de donation |
| updated_at | TIMESTAMP | Date de modification |

**Clés étrangères:**
- `fk_donations_donor_id` → users(id)
- `fk_donations_request_id` → requests(id)
- `fk_donations_campaign_id` → campaigns(id)
- `fk_donations_assoc_id` → associations(id)

**Index:** `idx_status`, `idx_association_id`, `idx_donor_id`, `idx_created_at`, `idx_request_id`, `idx_campaign_id`

---

### 6. Évaluations et avis

#### `ratings`
Évaluations et avis des donateurs sur les associations.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| association_id | INT | FK vers associations |
| donor_id | INT | FK vers users |
| rating | INT | Note (1-5) |
| review | TEXT | Avis textuel |
| is_verified_donor | BOOLEAN | Donateur vérifié |
| helpful_count | INT | Nombre de votes utiles |
| created_at | TIMESTAMP | Date de création |
| updated_at | TIMESTAMP | Date de modification |

**Clés étrangères:**
- `fk_ratings_assoc_id` → associations(id)
- `fk_ratings_donor_id` → users(id)

**Contraintes:** Un donateur ne peut laisser qu'un avis par association

**Index:** `idx_association_id`, `idx_rating`

---

### 7. Audit et logs

#### `activity_log`
Enregistrement des actions importantes pour l'audit.

| Colonne | Type | Description |
|---------|------|-------------|
| id | INT | Clé primaire |
| user_id | INT | FK vers users (optionnel) |
| association_id | INT | FK vers associations (optionnel) |
| action | VARCHAR(100) | Type d'action (ex: "donation_created") |
| entity_type | VARCHAR(50) | Type d'entité affectée |
| entity_id | INT | ID de l'entité affectée |
| description | TEXT | Description de l'action |
| ip_address | VARCHAR(64) | Adresse IP |
| created_at | TIMESTAMP | Horodatage |

**Clés étrangères:**
- `fk_activity_user_id` → users(id)
- `fk_activity_assoc_id` → associations(id)

**Index:** `idx_created_at`, `idx_action`, `idx_association_id`

---

## Diagramme de relations

```
users
  ├── 1:1 → associations (user_id)
  ├── 1:N → donations (donor_id)
  └── 1:N → ratings (donor_id)

associations
  ├── 1:1 → association_stats
  ├── 1:1 → fund_allocation
  ├── 1:N → requests
  ├── 1:N → campaigns
  ├── 1:N → donations
  ├── 1:N → ratings
  └── N:1 ← categories

categories
  ├── 1:N ← associations
  ├── 1:N ← requests
  └── 1:N ← campaigns

requests
  ├── N:1 → associations
  ├── N:1 → categories
  └── 1:N ← donations

campaigns
  ├── N:1 → associations
  ├── N:1 → categories
  └── 1:N ← donations

donations
  ├── N:1 → users
  ├── N:1 → requests
  ├── N:1 → campaigns
  └── N:1 → associations

ratings
  ├── N:1 → users
  └── N:1 → associations

activity_log
  ├── N:1 → users
  └── N:1 → associations
```

---

## Requêtes courantes

### 1. Obtenir toutes les demandes d'aide avec filtrage
```sql
SELECT r.*, a.organization_name, c.name as category_name
FROM requests r
INNER JOIN associations a ON r.association_id = a.id
LEFT JOIN categories c ON r.category_id = c.id
WHERE r.status = 'active'
  AND r.urgency = 'high'
  AND r.location = 'Tunis'
ORDER BY r.created_at DESC;
```

### 2. Obtenir les statistiques d'une association
```sql
SELECT a.organization_name, ast.*,
  (SELECT COUNT(*) FROM donations WHERE association_id = a.id AND status = 'completed') as total_donations_count
FROM associations a
LEFT JOIN association_stats ast ON a.id = ast.association_id
WHERE a.verified = TRUE
  AND a.status = 'approved';
```

### 3. Obtenir les 10 dernieres donations d'une association
```sql
SELECT d.*, u.full_name, r.title as request_title
FROM donations d
LEFT JOIN users u ON d.donor_id = u.id
LEFT JOIN requests r ON d.request_id = r.id
WHERE d.association_id = 1
  AND d.status = 'completed'
ORDER BY d.created_at DESC
LIMIT 10;
```

### 4. Mettre à jour les statistiques d'une association
```sql
UPDATE association_stats SET
  total_donations = (SELECT COALESCE(SUM(amount), 0) FROM donations WHERE association_id = ? AND status = 'completed'),
  campaign_count = (SELECT COUNT(*) FROM campaigns WHERE association_id = ? AND status = 'active'),
  people_helped = (SELECT SUM(people_helped) FROM requests WHERE association_id = ?),
  donors_count = (SELECT COUNT(DISTINCT donor_id) FROM donations WHERE association_id = ? AND status = 'completed'),
  average_rating = (SELECT AVG(rating) FROM ratings WHERE association_id = ?)
WHERE association_id = ?;
```

---

## Sauvegardes et restauration

### Créer une sauvegarde
```bash
mysqldump -u root sanad > sanad_backup.sql
```

### Restaurer une sauvegarde
```bash
mysql -u root < sanad_backup.sql
```

---

## Configuration initiale

1. Créer la base de données:
```sql
CREATE DATABASE sanad CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

2. Importer le schéma:
```bash
mysql -u root sanad < backend/schema.sql
```

3. Vérifier l'installation:
```sql
SHOW TABLES;
SELECT * FROM categories;
```
