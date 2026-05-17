# 🧪 Guide de test de la base de données SANAD

## 📋 Résumé

Ce guide vous permet de **tester la base de données localement** avant de l'importer définitivement dans XAMPP.

---

## 📁 Fichiers créés

| Fichier | Description |
|---------|-------------|
| **schema.sql** | Schéma complet (11 tables, FK, index) |
| **seed_data.sql** | Données de test (6 users, 3 associations, 6 demandes, etc.) |
| **setup_database.bat** | Script d'installation Windows (XAMPP) |
| **setup_database.sh** | Script d'installation Linux/Mac |
| **test_database.php** | Script de vérification PHP |
| **DATABASE_SETUP.md** | Guide d'installation détaillé |
| **API_INTEGRATION_GUIDE.md** | Intégration avec Angular |

---

## 🚀 Processus de test (3 étapes)

### ✅ **ÉTAPE 1: Tester localement (avant XAMPP)**

Exécutez le script d'installation selon votre système:

**Windows (XAMPP):**
```batch
cd C:\xampp\mysql\bin
cd C:\Users\tasni\Desktop\PROJET SANAD\backend
setup_database.bat
```

**Linux/Mac:**
```bash
cd ~/path/to/PROJET\ SANAD/backend
bash setup_database.sh
```

**Résultat attendu:**
```
✅ Base de données 'sanad' créée
✅ Schéma importé avec succès
✅ Données de test importées
✅ Vérifications réussies
```

---

### ✅ **ÉTAPE 2: Vérifier les données importées**

Connectez-vous à MySQL et vérifiez:

```bash
# Afficher les tables
mysql -u root sanad -e "SHOW TABLES;"

# Vérifier le nombre de données
mysql -u root sanad << EOF
SELECT 'USERS' as entity, COUNT(*) as count FROM users
UNION
SELECT 'ASSOCIATIONS', COUNT(*) FROM associations
UNION
SELECT 'REQUESTS', COUNT(*) FROM requests
UNION
SELECT 'CAMPAIGNS', COUNT(*) FROM campaigns
UNION
SELECT 'DONATIONS', COUNT(*) FROM donations
UNION
SELECT 'RATINGS', COUNT(*) FROM ratings;
EOF
```

**Résultat attendu:**
```
+-----------+-------+
| entity    | count |
+-----------+-------+
| USERS     |     6 |
| ASSOCIATIONS |  3 |
| REQUESTS  |     6 |
| CAMPAIGNS |     4 |
| DONATIONS |    10 |
| RATINGS   |     4 |
+-----------+-------+
```

---

### ✅ **ÉTAPE 3: Tester les API endpoints**

Avant d'importer dans XAMPP, testez les API endpoints:

#### Test 1: Obtenir les demandes d'aide

```bash
# Méthode 1: Ligne de commande (CURL)
curl "http://localhost/backend/api/get_requests.php"

# Ou accédez directement en PHP
php -r "
require 'backend/api/config.php';
require 'backend/api/db.php';
\$pdo = get_db_connection(\$config['db']);
\$stmt = \$pdo->query('SELECT COUNT(*) as count FROM requests WHERE status = \"active\"');
echo 'Demandes actives: ' . \$stmt->fetchColumn();
"
```

#### Test 2: Obtenir les associations

```bash
curl "http://localhost/backend/api/get_associations.php"
```

#### Test 3: Détail d'une demande

```bash
curl "http://localhost/backend/api/get_request_detail.php?id=1"
```

#### Test 4: Détail d'une association

```bash
curl "http://localhost/backend/api/get_association_detail.php?id=1"
```

---

## 📊 Données de test fournies

### 👥 **Utilisateurs** (6)

| ID | Email | Rôle | Mot de passe* |
|----|-------|------|-------|
| 1 | ahmed@sanad.tn | association | password |
| 2 | fatima@sanad.tn | association | password |
| 3 | khaled@sanad.tn | association | password |
| 4 | mariam@sanad.tn | user | password |
| 5 | hassan@sanad.tn | user | password |
| 6 | layla@sanad.tn | user | password |

*Mot de passe de test: `password` (hash bcrypt: `$2y$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36jbMeK.`)

### 🏢 **Associations vérifiées** (3)

| ID | Nom | Slug | Statut | Donations |
|----|-----|------|--------|-----------|
| 1 | Solidarité Plus | solidarite-plus | ✅ Vérifiée | 450K TND |
| 2 | Éducation Sans Frontières | education-sans-frontieres | ✅ Vérifiée | 320K TND |
| 3 | Cœurs Généreux | coeurs-genereux | ✅ Vérifiée | 280K TND |

### 📄 **Demandes d'aide** (6)

| ID | Titre | Association | Montant cible | Collecté | Urgence |
|----|-------|-------------|---------------|----------|---------|
| 1 | Aide alimentaire familles | Solidarité Plus | 25K TND | 18.5K | 🔴 HIGH |
| 2 | Campagne vaccins | Solidarité Plus | 30K TND | 12.5K | 🔴 HIGH |
| 3 | Bourses scolaires | Éducation SF | 80K TND | 55K | 🟡 MEDIUM |
| 4 | Équipement clinique | Cœurs Généreux | 8K TND | 6.2K | 🟡 MEDIUM |
| 5 | Aide personnes âgées | Solidarité Plus | 32.4K TND | 24.8K | 🔴 HIGH |
| 6 | Centre d'études Sfax | Éducation SF | 25.8K TND | 18.2K | 🟡 MEDIUM |

### 🎯 **Campagnes** (4)

| ID | Titre | Montant cible | Collecté | Statut |
|----|-------|---------------|----------|--------|
| 1 | Rénovation salles de classe | 50K TND | 42K | 🟢 Active |
| 2 | 100 ordinateurs portables | 100K TND | 75K | 🟢 Active |
| 3 | Ambulance mobile | 45K TND | 38.5K | 🟢 Active |
| 4 | Cantine scolaire | 35K TND | 28K | ✅ Complétée |

### 💰 **Donations** (10)

- **8 donations nommées** (de mariam, hassan, layla)
- **2 donations anonymes**
- **Total collecté:** ~2,400 TND
- **Toutes complétées** (status: completed)

### ⭐ **Évaluations** (4)

- Solidarité Plus: 5 étoiles (2 avis)
- Éducation SF: 4 étoiles (1 avis)
- Cœurs Généreux: 5 étoiles (1 avis)

---

## 🔍 Ce que vous verrez après import

### Vue Explorer (requêtes)
```
✅ 6 demandes d'aide actives visibles
✅ Filtrage par catégorie (Santé, Éducation, Alimentation)
✅ Filtrage par localisation (Tunis, Sfax, Ariana)
✅ Filtrage par urgence (High, Medium, Low)
✅ Tri: récent, plus financé, plus urgent
✅ Barre de progression des donations
```

### Vue Associations
```
✅ 3 associations vérifiées affichées
✅ Logos et couvertures visibles
✅ Stats: campagnes, donations collectées
✅ Tri: par nom, plus actif, plus financé
✅ Filtrage par localisation et catégorie
```

### Vue Détail Demande
```
✅ Image hero avec overlay
✅ Barre de progression animée
✅ Infos organisation (logo, vérification)
✅ Boutons d'action (Aider maintenant, Partager)
✅ Demandes connexes (3 suggestions)
✅ Donations récentes
```

### Vue Détail Association
```
✅ Couverture + logo + info organisation
✅ Stats: donations (450K), campagnes (28), personnes (12.5K)
✅ Campagnes actives (4 cartes)
✅ Allocation des fonds (pie chart 62/18/14/6)
✅ Évaluations (4.8/5 stars)
✅ Panneaux de confiance (vérification, contact)
```

---

## 🚨 Troubleshooting

### ❌ "Unknown database 'sanad'"
```bash
# Créer manuellement
mysql -u root -e "CREATE DATABASE sanad CHARACTER SET utf8mb4;"
mysql -u root sanad < schema.sql
```

### ❌ "Access denied for user 'root'"
Modifier `backend/api/config.php`:
```php
'pass' => 'votre_mot_de_passe'
```

### ❌ "Table doesn't exist"
Vérifier que le schéma a été importé:
```bash
mysql -u root sanad -e "SHOW TABLES;"
# Doit afficher 11 tables
```

### ❌ Les API retournent des erreurs
1. Vérifier PHP error_log
2. Tester la connexion: `php backend/test_database.php`
3. Vérifier les permissions du dossier uploads

---

## 📦 Fichiers à importer dans XAMPP

Une fois testé localement, voici la structure pour XAMPP:

```
C:\xampp\htdocs\sanad\
├── backend/
│   ├── api/
│   │   ├── config.php          ← Modifier dsn, user, pass
│   │   ├── db.php
│   │   ├── helpers.php
│   │   ├── login.php
│   │   ├── register_user.php
│   │   ├── register_association.php
│   │   ├── get_requests.php     ← NOUVEAU
│   │   ├── get_associations.php ← NOUVEAU
│   │   ├── get_request_detail.php ← NOUVEAU
│   │   └── get_association_detail.php ← NOUVEAU
│   ├── uploads/
│   ├── schema.sql
│   ├── seed_data.sql
│   └── README.txt
└── src/ (dossier Angular)
```

---

## ✅ Checklist avant import dans XAMPP

- [ ] `schema.sql` contient les 11 tables
- [ ] `seed_data.sql` contient les 6 utilisateurs
- [ ] Les 4 API endpoints sont créés (GET endpoints)
- [ ] Teste local réussi (script setup_database)
- [ ] Nombre de données correct (6 users, 3 associations, 6 requests)
- [ ] Les FK et index sont présents
- [ ] Catégories pré-insérées (6)
- [ ] `config.php` prêt pour XAMPP

---

## 🎯 Prochain étape

```bash
# 1. Importer dans XAMPP
cp -r "C:\Users\tasni\Desktop\PROJET SANAD\backend" "C:\xampp\htdocs\sanad\"

# 2. Démarrer Apache + MySQL dans XAMPP Control Panel

# 3. Tester en local
http://localhost/sanad/backend/api/get_requests.php

# 4. Intégrer avec Angular frontend
# Les composants feront des appels à ces endpoints
```

---

## 📞 Support

En cas de problème:
1. Lire `DATABASE_SETUP.md` - Guide détaillé
2. Lire `API_INTEGRATION_GUIDE.md` - Intégration Angular
3. Vérifier les logs MySQL: `mysql.log`
4. Tester manuellement: `php -r "..."`

**La base de données est prête à être utilisée! 🎉**
