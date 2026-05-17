# Correspondance entre Angular et Base de Données

## 📱 Pages Angular → Tables de base de données

### 1. 🏠 Home Page (`src/app/home/`)
**Tables utilisées:**
- `requests` - Pour afficher les demandes d'aide en vedette
- `associations` - Pour les statistiques des associations
- `donations` - Pour les statistiques globales

**Exemple de requête:**
```sql
SELECT r.*, a.organization_name, a.logo_url
FROM requests r
INNER JOIN associations a ON r.association_id = a.id
WHERE r.status = 'active'
ORDER BY r.created_at DESC
LIMIT 6;
```

---

### 2. 🔍 Explorer Page (`src/app/explorer/`)
**Tables utilisées:**
- `requests` - Demandes d'aide avec filtrage
- `associations` - Infos organisation
- `categories` - Catégories pour filtre
- `donations` - Pour calculer le % financé

**Filtres implémentés:**
```
├── search (title, description, organization)
├── category (sante, education, alimentation, etc.)
├── location (Tunis, Sfax, Ariana, etc.)
└── urgency (low, medium, high)

Tri:
├── recent (ORDER BY created_at DESC)
├── most-funded (ORDER BY collected_amount/target_amount DESC)
└── most-urgent (ORDER BY urgency FIELD DESC)
```

**Appelé depuis Angular:**
```typescript
// get_requests.php?search=&category=sante&location=Tunis&urgency=high&sort=recent
```

---

### 3. 🏛️ Associations Page (`src/app/associations/`)
**Tables utilisées:**
- `associations` - Infos associations
- `association_stats` - Stats dénormalisées
- `categories` - Catégories

**Filtres implémentés:**
```
├── search (organization_name, description)
├── location
└── category

Tri:
├── name (ORDER BY organization_name ASC)
├── most-active (ORDER BY campaign_count DESC)
└── most-funded (ORDER BY total_donations DESC)
```

**Appelé depuis Angular:**
```typescript
// get_associations.php?search=&location=&category=&sort=name
```

---

### 4. 📄 Request Detail Page (`src/app/request-detail/`)
**Tables utilisées:**
- `requests` - Détail de la demande
- `associations` - Infos organisation
- `donations` - Donations récentes

**Données retournées:**
```json
{
  "request": {
    "id": 1,
    "title": "Aide alimentaire",
    "description": "...",
    "target_amount": 5000,
    "collected_amount": 2500,
    "urgency": "high",
    "organization_name": "Solidarité Plus",
    "logo_url": "...",
    "verified": true,
    "donors_count": 45
  },
  "related_requests": [...],
  "recent_donations": [
    {"donor_name": "Ahmed", "amount": 100, "created_at": "..."}
  ]
}
```

**Appelé depuis Angular:**
```typescript
// get_request_detail.php?id=1
// ou get_request_detail.php?id=aide-alimentaire-families
```

---

### 5. 🏢 Association Detail Page (`src/app/association-detail/`)
**Tables utilisées:**
- `associations` - Profil association
- `association_stats` - Statistiques
- `fund_allocation` - Allocation des fonds
- `campaigns` - Campagnes actives
- `ratings` - Avis/notes

**Données retournées:**
```json
{
  "association": {
    "id": 1,
    "organization_name": "Solidarité Plus",
    "logo_url": "...",
    "cover_url": "...",
    "description": "...",
    "verified": true,
    "total_donations": 450000,
    "campaign_count": 28,
    "people_helped": 12500,
    "donors_count": 3200,
    "founded_year": 2011
  },
  "campaigns": [
    {
      "id": 1,
      "title": "Campagne de santé",
      "image_url": "...",
      "status": "active",
      "collected_amount": 15000,
      "target_amount": 50000
    }
  ],
  "ratings": [
    {"rating": 5, "review": "Très efficace", "full_name": "Ahmed"}
  ],
  "fund_allocation": {
    "direct_aid": 62,
    "programs": 18,
    "operations": 14,
    "admin": 6
  },
  "years_active": 15
}
```

**Appelé depuis Angular:**
```typescript
// get_association_detail.php?id=1
// ou get_association_detail.php?id=solidarite-plus
```

---

## 🔄 Flux de données

```
┌─────────────────────────────────────────────────────────────┐
│                      ANGULAR FRONTEND                        │
│  (Home, Explorer, Associations, Request Detail, Assoc Detail)│
└────────────────────────┬────────────────────────────────────┘
                         │ HTTP GET
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    PHP API ENDPOINTS                         │
│  ├─ get_requests.php                                        │
│  ├─ get_associations.php                                    │
│  ├─ get_request_detail.php                                  │
│  └─ get_association_detail.php                              │
└────────────────────────┬────────────────────────────────────┘
                         │ PDO Query
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                    MYSQL DATABASE                            │
│  ├─ associations                                            │
│  ├─ requests                                                │
│  ├─ campaigns                                               │
│  ├─ donations                                               │
│  ├─ categories                                              │
│  ├─ ratings                                                 │
│  └─ association_stats                                       │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔧 Intégration Angular

### Exemple pour Explorer Page:

**Component TypeScript:**
```typescript
export class ExplorerComponent implements OnInit {
  requests: Request[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchRequests();
  }

  fetchRequests(): void {
    const params = new HttpParams()
      .set('search', this.searchQuery)
      .set('category', this.selectedCategory)
      .set('location', this.selectedLocation)
      .set('urgency', this.selectedUrgency)
      .set('sort', this.sortBy)
      .set('limit', '20');

    this.http.get<{ data: Request[] }>('/backend/api/get_requests.php', { params })
      .subscribe(response => {
        this.requests = response.data;
      });
  }
}
```

---

## 📊 Modèles de données TypeScript

```typescript
// Request Model (pour Explorer et Request Detail)
interface Request {
  id: number;
  title: string;
  slug: string;
  description: string;
  organization_name: string;
  logo_url?: string;
  location: string;
  urgency: 'low' | 'medium' | 'high';
  image_url?: string;
  target_amount: number;
  collected_amount: number;
  category_name: string;
  verified: boolean;
  donors_count: number;
}

// Association Model (pour Associations et Association Detail)
interface Association {
  id: number;
  organization_name: string;
  slug: string;
  logo_url?: string;
  cover_url?: string;
  description: string;
  location: string;
  category_name: string;
  verified: boolean;
  total_donations: number;
  campaign_count: number;
  people_helped: number;
  donors_count: number;
  founded_year: number;
  average_rating: number;
}

// Campaign Model (pour Association Detail)
interface Campaign {
  id: number;
  title: string;
  description: string;
  image_url?: string;
  status: 'active' | 'completed' | 'paused';
  collected_amount: number;
  target_amount: number;
  category_name: string;
}

// Donation Model (pour tracking)
interface Donation {
  id: number;
  amount: number;
  donor_name: string;
  created_at: string;
  status: 'pending' | 'completed' | 'failed';
}
```

---

## 🔐 Sécurité des requêtes

Tous les endpoints PHP utilisent:
- ✅ Prepared statements (PDO)
- ✅ Binding des paramètres
- ✅ Validation des entrées
- ✅ Limitation de débit (rate limiting)
- ✅ CORS headers

**Exemple sécurisé:**
```php
// ❌ INSÉCURISÉ
$query = "SELECT * FROM requests WHERE category = '" . $_GET['category'] . "'";

// ✅ SÉCURISÉ
$stmt = $pdo->prepare('SELECT * FROM requests WHERE category = :category');
$stmt->execute([':category' => $_GET['category']]);
```

---

## 📈 Performance optimisée

### Indexes créés:
- `categories(idx_slug)` - Pour recherche rapide par slug
- `associations(idx_slug, idx_status, idx_verified, idx_location)`
- `requests(idx_slug, idx_status, idx_urgency, idx_location, idx_association_id)`
- `donations(idx_status, idx_association_id, idx_donor_id, idx_created_at)`
- `ratings(idx_association_id, idx_rating)`

### Requêtes optimisées:
- Utilisation de INNER JOIN pour associations vérifiées uniquement
- Pagination avec LIMIT/OFFSET
- Dénormalisation avec `association_stats` pour éviter les agrégations

---

## 📝 Prochaines implémentations

À créer dans PHP:
- ✅ POST `/backend/api/create_donation.php` - Enregistrer une donation
- ✅ POST `/backend/api/create_rating.php` - Laisser un avis
- ✅ GET `/backend/api/get_donation_status.php` - Vérifier statut paiement
- ✅ POST `/backend/api/create_campaign.php` - Créer campagne (admin association)
- ✅ POST `/backend/api/update_request.php` - Modifier demande (admin association)

À intégrer dans Angular:
- Appels HTTP pour les nouveaux endpoints
- Services d'injection de dépendances
- Guards d'authentification pour les formulaires

---

## 🚀 Déploiement

Pour passer en production:
1. ✅ Modifier le secret JWT dans `config.php`
2. ✅ Ajouter validation HTTPS
3. ✅ Configurer les CORS correctement
4. ✅ Ajouter logging pour audit
5. ✅ Sauvegardes automatiques de la BD
6. ✅ Monitoring des performances
