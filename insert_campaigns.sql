INSERT INTO campaigns
(association_id, title, slug, description, category_id, image_url, target_amount, collected_amount, status, start_date, end_date, created_at, updated_at)
VALUES
(1, 'Aide alimentaire d''urgence pour les sinistrés', 'aide-alimentaire-urgence-sinistres', 'Fourniture de paniers alimentaires de première nécessité pour les familles touchées par la crise.', 3, 'assets/images/campaign-food.jpg', 15000.00, 4500.00, 'active', NOW(), DATE_ADD(NOW(), INTERVAL 30 DAY), NOW(), NOW()),

(4, 'Kits scolaires pour la rentrée', 'kits-scolaires-rentree', 'Distribution de fournitures scolaires, cartables et livres pour les enfants issus de milieux défavorisés afin d''assurer une bonne rentrée scolaire.', 2, 'assets/images/campaign-education.jpg', 8000.00, 3200.00, 'active', NOW(), DATE_ADD(NOW(), INTERVAL 45 DAY), NOW(), NOW()),

(6, 'Rénovation du dispensaire local', 'renovation-dispensaire-local', 'Soutien à la réhabilitation des infrastructures médicales de base dans les zones rurales pour un meilleur accès aux soins.', 6, 'assets/images/campaign-infrastructure.jpg', 25000.00, 12000.00, 'active', NOW(), DATE_ADD(NOW(), INTERVAL 60 DAY), NOW(), NOW()),

(1, 'Logements d''urgence pour l''hiver', 'logements-urgence-hiver', 'Mise en place d''abris temporaires et distribution de couvertures et chauffages pour protéger les sans-abris durant la vague de froid.', 4, 'assets/images/campaign-housing.jpg', 12000.00, 8500.00, 'active', NOW(), DATE_ADD(NOW(), INTERVAL 20 DAY), NOW(), NOW()),

(4, 'Formation professionnelle pour les jeunes', 'formation-professionnelle-jeunes', 'Programme de formation certifiante en développement web et métiers du numérique pour favoriser l''insertion professionnelle.', 5, 'assets/images/campaign-employment.jpg', 20000.00, 5000.00, 'active', NOW(), DATE_ADD(NOW(), INTERVAL 90 DAY), NOW(), NOW()),

(6, 'Eau potable pour tous', 'eau-potable-pour-tous', 'Construction de puits et mise en place de systèmes de filtration d''eau dans les villages isolés souffrant de pénurie.', 6, 'assets/images/campaign-water.jpg', 18000.00, 1800.00, 'active', NOW(), DATE_ADD(NOW(), INTERVAL 120 DAY), NOW(), NOW()),

(5, 'Campagne de vaccination infantile', 'campagne-vaccination-infantile', 'Soutien pour l''achat et l''acheminement de vaccins dans les régions où l''accès aux soins médicaux est limité.', 6, 'assets/images/campaign-health.jpg', 10000.00, 2500.00, 'active', NOW(), DATE_ADD(NOW(), INTERVAL 40 DAY), NOW(), NOW());
