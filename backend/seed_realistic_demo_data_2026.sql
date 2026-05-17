START TRANSACTION;

SET @demo_hash = '$2y$10$PXF1ZR6xFtYSFqdlzpycmern88OExn5/KjP9DBTAiLIEJn5soHjk.';

INSERT INTO users (full_name, email, password_hash, phone, role, bio)
VALUES
  ('Nour Jaziri', 'nour.jaziri@demo.sanad.tn', @demo_hash, '22114578', 'user', 'Benevole active dans les collectes locales.'),
  ('Yassine Trabelsi', 'yassine.trabelsi@demo.sanad.tn', @demo_hash, '28334455', 'user', 'Donateur regulier pour les causes education et sante.'),
  ('Leila Mansouri', 'leila.mansouri@demo.sanad.tn', @demo_hash, '29700122', 'user', 'Enseignante, interesse par les campagnes scolaires.'),
  ('Omar Ben Salem', 'omar.bensalem@demo.sanad.tn', @demo_hash, '50333211', 'user', 'Benevole logistique.'),
  ('Association Espoir Tunisie', 'contact@espoir-tunisie.demo', @demo_hash, '71123001', 'association', 'Compte association demo.'),
  ('Banque Alimentaire Solidaire', 'contact@banque-alimentaire.demo', @demo_hash, '71123002', 'association', 'Compte association demo.'),
  ('Main Bleue Inclusion', 'contact@main-bleue.demo', @demo_hash, '71123003', 'association', 'Compte association demo.')
ON DUPLICATE KEY UPDATE
  full_name = VALUES(full_name),
  phone = VALUES(phone),
  role = VALUES(role),
  bio = VALUES(bio);

SET @assoc_espoir_user := (SELECT id FROM users WHERE email = 'contact@espoir-tunisie.demo');
SET @assoc_banque_user := (SELECT id FROM users WHERE email = 'contact@banque-alimentaire.demo');
SET @assoc_main_user := (SELECT id FROM users WHERE email = 'contact@main-bleue.demo');

INSERT INTO associations (
  user_id, organization_name, slug, responsible_name, phone, email, website,
  description, full_description, logo_url, cover_url, location, category_id,
  founded_year, document_path, status, verified, verification_date
)
VALUES
  (
    @assoc_espoir_user,
    'Association Espoir Tunisie',
    'association-espoir-tunisie',
    'Amel Kacem',
    '71123001',
    'contact@espoir-tunisie.demo',
    'https://espoir-tunisie.demo',
    'Accompagnement social pour familles vulnerables et jeunes en difficulte.',
    'Association de proximite axee sur l aide sociale, l orientation des familles, l accompagnement scolaire et les urgences medicales. Les actions sont suivies avec des rapports simples et des mises a jour regulieres.',
    NULL,
    NULL,
    'Tunis',
    4,
    2014,
    'demo_documents/espoir-tunisie.pdf',
    'approved',
    1,
    NOW()
  ),
  (
    @assoc_banque_user,
    'Banque Alimentaire Solidaire',
    'banque-alimentaire-solidaire',
    'Sami Gharbi',
    '71123002',
    'contact@banque-alimentaire.demo',
    'https://banque-alimentaire.demo',
    'Collecte et distribution de paniers alimentaires pour les familles a faible revenu.',
    'Structure associative specialisee dans la collecte de denrees, la constitution de colis alimentaires et la distribution coordonnee avec des benevoles locaux.',
    NULL,
    NULL,
    'Sfax',
    3,
    2018,
    'demo_documents/banque-alimentaire.pdf',
    'approved',
    1,
    NOW()
  ),
  (
    @assoc_main_user,
    'Main Bleue Inclusion',
    'main-bleue-inclusion',
    'Rim Haddad',
    '71123003',
    'contact@main-bleue.demo',
    'https://main-bleue.demo',
    'Soutien aux personnes en situation de handicap et a leurs familles.',
    'Initiatives d inclusion, equipements adaptes, appui aux deplacements, accompagnement administratif et ateliers de sensibilisation.',
    NULL,
    NULL,
    'Sousse',
    1,
    2016,
    'demo_documents/main-bleue.pdf',
    'approved',
    1,
    NOW()
  )
ON DUPLICATE KEY UPDATE
  user_id = VALUES(user_id),
  organization_name = VALUES(organization_name),
  responsible_name = VALUES(responsible_name),
  phone = VALUES(phone),
  email = VALUES(email),
  website = VALUES(website),
  description = VALUES(description),
  full_description = VALUES(full_description),
  location = VALUES(location),
  category_id = VALUES(category_id),
  founded_year = VALUES(founded_year),
  status = VALUES(status),
  verified = VALUES(verified),
  verification_date = VALUES(verification_date);

SET @assoc_espoir := (SELECT id FROM associations WHERE slug = 'association-espoir-tunisie');
SET @assoc_banque := (SELECT id FROM associations WHERE slug = 'banque-alimentaire-solidaire');
SET @assoc_main := (SELECT id FROM associations WHERE slug = 'main-bleue-inclusion');
SET @user_nour := (SELECT id FROM users WHERE email = 'nour.jaziri@demo.sanad.tn');
SET @user_yassine := (SELECT id FROM users WHERE email = 'yassine.trabelsi@demo.sanad.tn');
SET @user_leila := (SELECT id FROM users WHERE email = 'leila.mansouri@demo.sanad.tn');
SET @user_omar := (SELECT id FROM users WHERE email = 'omar.bensalem@demo.sanad.tn');

INSERT INTO campaigns (
  association_id, title, slug, description, full_description, category_id, location, urgency,
  target_amount, collected_amount, status, created_at
)
VALUES
  (@assoc_banque, 'Paniers alimentaires Ramadan', 'demo-paniers-alimentaires-ramadan', 'Distribution de paniers alimentaires complets pour 120 familles.', 'Chaque panier contient farine, huile, sucre, riz, pates, conserves, lait et produits de base. Les distributions sont organisees quartier par quartier avec verification des besoins.', 3, 'Sfax', 'high', 9600, 4200, 'active', NOW() - INTERVAL 12 DAY),
  (@assoc_espoir, 'Rentree scolaire digne', 'demo-rentree-scolaire-digne', 'Cartables, fournitures et tabliers pour des enfants issus de familles vulnerables.', 'La campagne finance des kits scolaires complets: cartables, cahiers, stylos, livres, tabliers et frais de transport ponctuels.', 2, 'Tunis', 'medium', 7200, 3100, 'active', NOW() - INTERVAL 9 DAY),
  (@assoc_main, 'Fauteuils roulants et accessoires', 'demo-fauteuils-roulants-accessoires', 'Acquisition de fauteuils roulants, bequilles et coussins medicaux.', 'Cette campagne vise a equiper des personnes a mobilite reduite avec du materiel adapte et a assurer une livraison accompagnee.', 1, 'Sousse', 'high', 15000, 6800, 'active', NOW() - INTERVAL 18 DAY),
  (@assoc_espoir, 'Renovation de logements urgents', 'demo-renovation-logements-urgents', 'Travaux rapides pour securiser trois logements fragiles avant l hiver.', 'Interventions prioritaires: etancheite, peinture sanitaire, portes, fenetres et petites reparations electriques.', 4, 'Ariana', 'medium', 11000, 2500, 'active', NOW() - INTERVAL 6 DAY),
  (@assoc_main, 'Ateliers inclusion numerique', 'demo-ateliers-inclusion-numerique', 'Sessions de formation numerique pour jeunes en situation de handicap.', 'Ateliers pratiques sur bureautique, recherche d emploi, securite en ligne et outils accessibles.', 5, 'Sousse', 'low', 6000, 1800, 'active', NOW() - INTERVAL 20 DAY)
ON DUPLICATE KEY UPDATE
  association_id = VALUES(association_id),
  title = VALUES(title),
  description = VALUES(description),
  full_description = VALUES(full_description),
  category_id = VALUES(category_id),
  location = VALUES(location),
  urgency = VALUES(urgency),
  target_amount = VALUES(target_amount),
  collected_amount = GREATEST(campaigns.collected_amount, VALUES(collected_amount)),
  status = VALUES(status);

INSERT INTO requests (
  user_id, title, slug, description, full_description, category_id, location, urgency,
  target_amount, collected_amount, needs_money, needs_object, needs_service, status, created_at
)
VALUES
  (@user_nour, 'Medicaments pour traitement chronique', 'demo-medicaments-traitement-chronique', 'Besoin urgent de medicaments pour un traitement mensuel non couvert.', 'La demande concerne un traitement chronique avec ordonnance. Le montant servira a acheter les medicaments du mois et a couvrir le transport vers la pharmacie hospitaliere.', 1, 'Tunis', 'high', 480, 120, 1, 0, 0, 'active', NOW() - INTERVAL 4 DAY),
  (@user_yassine, 'Reparation toiture apres intemperies', 'demo-reparation-toiture-intemperies', 'Une famille a besoin de materiaux pour reparer une toiture endommagee.', 'Les pluies recentes ont abime une partie de la toiture. La demande couvre toles, bois, isolation et aide ponctuelle d un artisan.', 4, 'Bizerte', 'high', 1350, 300, 1, 1, 1, 'active', NOW() - INTERVAL 7 DAY),
  (@user_leila, 'Ordinateur pour etudiante', 'demo-ordinateur-etudiante', 'Recherche d un ordinateur portable d occasion pour poursuivre les cours.', 'Une etudiante en licence a besoin d un ordinateur fonctionnel pour les cours en ligne, les rapports et la recherche universitaire.', 2, 'Sousse', 'medium', 900, 220, 1, 1, 0, 'active', NOW() - INTERVAL 2 DAY),
  (@user_omar, 'Transport medical hebdomadaire', 'demo-transport-medical-hebdomadaire', 'Aide pour assurer des deplacements medicaux reguliers.', 'La personne doit se rendre deux fois par semaine a des seances de suivi. Le besoin porte sur les frais de transport du mois.', 1, 'Sfax', 'medium', 360, 90, 1, 0, 1, 'active', NOW() - INTERVAL 11 DAY),
  (@user_nour, 'Couvertures et chauffage d appoint', 'demo-couvertures-chauffage-appoint', 'Besoin de couvertures, vetements chauds et chauffage d appoint.', 'Demande non financiere prioritaire pour une famille avec deux enfants dans un logement froid.', 4, 'Kairouan', 'medium', 650, 0, 0, 1, 1, 'active', NOW() - INTERVAL 5 DAY)
ON DUPLICATE KEY UPDATE
  user_id = VALUES(user_id),
  title = VALUES(title),
  description = VALUES(description),
  full_description = VALUES(full_description),
  category_id = VALUES(category_id),
  location = VALUES(location),
  urgency = VALUES(urgency),
  target_amount = VALUES(target_amount),
  collected_amount = GREATEST(requests.collected_amount, VALUES(collected_amount)),
  needs_money = VALUES(needs_money),
  needs_object = VALUES(needs_object),
  needs_service = VALUES(needs_service),
  status = VALUES(status);

DELETE FROM donations WHERE transaction_id LIKE 'seed-real-2026-%';

INSERT INTO donations (
  donor_id, donor_email, donor_name, request_id, campaign_id, association_id,
  amount, currency, status, payment_method, transaction_id, message, anonymous, created_at
)
VALUES
  (@user_yassine, 'yassine.trabelsi@demo.sanad.tn', 'Yassine Trabelsi', NULL, (SELECT id FROM campaigns WHERE slug = 'demo-paniers-alimentaires-ramadan'), @assoc_banque, 350, 'TND', 'completed', 'card', 'seed-real-2026-001', 'Bon courage pour la distribution.', 0, NOW() - INTERVAL 11 DAY),
  (@user_leila, 'leila.mansouri@demo.sanad.tn', 'Leila Mansouri', NULL, (SELECT id FROM campaigns WHERE slug = 'demo-rentree-scolaire-digne'), @assoc_espoir, 220, 'TND', 'completed', 'card', 'seed-real-2026-002', 'Pour une rentree plus sereine.', 0, NOW() - INTERVAL 8 DAY),
  (@user_omar, 'omar.bensalem@demo.sanad.tn', 'Omar Ben Salem', NULL, (SELECT id FROM campaigns WHERE slug = 'demo-fauteuils-roulants-accessoires'), @assoc_main, 500, 'TND', 'completed', 'transfer', 'seed-real-2026-003', 'Participation aux equipements.', 0, NOW() - INTERVAL 15 DAY),
  (@user_nour, 'nour.jaziri@demo.sanad.tn', NULL, NULL, (SELECT id FROM campaigns WHERE slug = 'demo-renovation-logements-urgents'), @assoc_espoir, 180, 'TND', 'completed', 'card', 'seed-real-2026-004', NULL, 1, NOW() - INTERVAL 5 DAY),
  (@user_leila, 'leila.mansouri@demo.sanad.tn', 'Leila Mansouri', (SELECT id FROM requests WHERE slug = 'demo-medicaments-traitement-chronique'), NULL, NULL, 80, 'TND', 'completed', 'card', 'seed-real-2026-005', 'Prompt retablissement.', 0, NOW() - INTERVAL 3 DAY),
  (@user_yassine, 'yassine.trabelsi@demo.sanad.tn', 'Yassine Trabelsi', (SELECT id FROM requests WHERE slug = 'demo-reparation-toiture-intemperies'), NULL, NULL, 150, 'TND', 'completed', 'card', 'seed-real-2026-006', 'Aide pour les materiaux.', 0, NOW() - INTERVAL 6 DAY),
  (@user_omar, 'omar.bensalem@demo.sanad.tn', NULL, (SELECT id FROM requests WHERE slug = 'demo-ordinateur-etudiante'), NULL, NULL, 120, 'TND', 'completed', 'transfer', 'seed-real-2026-007', NULL, 1, NOW() - INTERVAL 1 DAY),
  (@user_nour, 'nour.jaziri@demo.sanad.tn', 'Nour Jaziri', (SELECT id FROM requests WHERE slug = 'demo-transport-medical-hebdomadaire'), NULL, NULL, 60, 'TND', 'completed', 'card', 'seed-real-2026-008', 'Pour les trajets medicaux.', 0, NOW() - INTERVAL 10 DAY);

DELETE FROM help_offers WHERE description LIKE 'Seed demo:%';

INSERT INTO help_offers (
  user_id, request_id, campaign_id, type, description, quantity, category, location, delivery_method, status, created_at
)
VALUES
  (@user_omar, (SELECT id FROM requests WHERE slug = 'demo-reparation-toiture-intemperies'), NULL, 'service', 'Seed demo: disponible pour aider au transport des materiaux samedi matin.', 1, 'Logistique', 'Bizerte', 'hand', 'pending', NOW() - INTERVAL 4 DAY),
  (@user_leila, (SELECT id FROM requests WHERE slug = 'demo-couvertures-chauffage-appoint'), NULL, 'object', 'Seed demo: deux couvertures propres et un radiateur electrique disponible.', 3, 'Maison', 'Kairouan', 'delivery', 'pending', NOW() - INTERVAL 2 DAY),
  (@user_nour, NULL, (SELECT id FROM campaigns WHERE slug = 'demo-paniers-alimentaires-ramadan'), 'service', 'Seed demo: benevolat disponible pour preparation des colis.', 1, 'Benevolat', 'Sfax', 'hand', 'accepted', NOW() - INTERVAL 6 DAY),
  (@user_yassine, NULL, (SELECT id FROM campaigns WHERE slug = 'demo-fauteuils-roulants-accessoires'), 'object', 'Seed demo: paire de bequilles en bon etat.', 1, 'Sante', 'Sousse', 'delivery', 'pending', NOW() - INTERVAL 1 DAY);

INSERT IGNORE INTO favorites (user_id, request_id)
VALUES
  (@user_nour, (SELECT id FROM requests WHERE slug = 'demo-ordinateur-etudiante')),
  (@user_yassine, (SELECT id FROM requests WHERE slug = 'demo-medicaments-traitement-chronique')),
  (@user_leila, (SELECT id FROM requests WHERE slug = 'demo-reparation-toiture-intemperies')),
  (@user_omar, (SELECT id FROM requests WHERE slug = 'demo-couvertures-chauffage-appoint'));

DELETE FROM ratings
WHERE review LIKE 'Seed demo:%'
  AND association_id IN (@assoc_espoir, @assoc_banque, @assoc_main);

INSERT INTO ratings (association_id, donor_id, rating, review, is_verified_donor, helpful_count, created_at)
VALUES
  (@assoc_espoir, @user_leila, 5, 'Seed demo: suivi clair et communication rassurante.', 1, 7, NOW() - INTERVAL 7 DAY),
  (@assoc_espoir, @user_nour, 4, 'Seed demo: bonne transparence sur les actions.', 1, 3, NOW() - INTERVAL 4 DAY),
  (@assoc_banque, @user_yassine, 5, 'Seed demo: distribution rapide et tres bien organisee.', 1, 9, NOW() - INTERVAL 10 DAY),
  (@assoc_main, @user_omar, 5, 'Seed demo: equipe attentive aux besoins des beneficiaires.', 1, 5, NOW() - INTERVAL 8 DAY);

DELETE FROM fund_allocation WHERE association_id IN (@assoc_espoir, @assoc_banque, @assoc_main);

INSERT INTO fund_allocation (
  association_id, direct_aid_percentage, programs_percentage, operations_percentage, admin_percentage, description
)
VALUES
  (@assoc_espoir, 68, 17, 10, 5, 'Repartition demo basee sur les aides directes, accompagnement terrain et frais essentiels.'),
  (@assoc_banque, 74, 12, 9, 5, 'Priorite aux achats alimentaires et a la logistique de distribution.'),
  (@assoc_main, 63, 21, 11, 5, 'Materiel adapte, ateliers inclusion et accompagnement administratif.');

DELETE FROM notifications WHERE type = 'seed_demo';

INSERT INTO notifications (user_id, type, title, detail, is_read, created_at)
VALUES
  (@user_nour, 'seed_demo', 'Nouvelle contribution recue', 'Votre demande medicaments a recu un nouveau don.', 0, NOW() - INTERVAL 2 DAY),
  (@user_yassine, 'seed_demo', 'Proposition de service', 'Un benevole propose une aide logistique pour la toiture.', 0, NOW() - INTERVAL 3 DAY),
  (@user_leila, 'seed_demo', 'Campagne recommandee', 'Une campagne education proche de vos interets est active.', 1, NOW() - INTERVAL 5 DAY),
  (@user_omar, 'seed_demo', 'Merci pour votre aide', 'Votre don a ete confirme et ajoute a votre historique.', 1, NOW() - INTERVAL 1 DAY);

UPDATE requests r
LEFT JOIN (
  SELECT request_id, COALESCE(SUM(amount), 0) AS amount
  FROM donations
  WHERE status = 'completed' AND request_id IS NOT NULL
  GROUP BY request_id
) d ON d.request_id = r.id
SET r.collected_amount = GREATEST(r.collected_amount, COALESCE(d.amount, 0));

UPDATE campaigns c
LEFT JOIN (
  SELECT campaign_id, COALESCE(SUM(amount), 0) AS amount
  FROM donations
  WHERE status = 'completed' AND campaign_id IS NOT NULL
  GROUP BY campaign_id
) d ON d.campaign_id = c.id
SET c.collected_amount = GREATEST(c.collected_amount, COALESCE(d.amount, 0));

INSERT INTO association_stats (association_id, total_donations, campaign_count, people_helped, donors_count, average_rating)
SELECT a.id, 0, 0, 0, 0, 0
FROM associations a
LEFT JOIN association_stats s ON s.association_id = a.id
WHERE s.association_id IS NULL;

UPDATE association_stats s
SET
  total_donations = (
    SELECT COALESCE(SUM(d.amount), 0)
    FROM donations d
    WHERE d.association_id = s.association_id AND d.status = 'completed'
  ),
  campaign_count = (
    SELECT COUNT(*)
    FROM campaigns c
    WHERE c.association_id = s.association_id AND c.status = 'active'
  ),
  donors_count = (
    SELECT COUNT(DISTINCT d.donor_id)
    FROM donations d
    WHERE d.association_id = s.association_id AND d.status = 'completed' AND d.donor_id IS NOT NULL
  ),
  people_helped = (
    SELECT GREATEST(COUNT(*) * 18, 0)
    FROM campaigns c
    WHERE c.association_id = s.association_id AND c.status IN ('active', 'completed')
  ),
  average_rating = (
    SELECT COALESCE(ROUND(AVG(r.rating), 2), 0)
    FROM ratings r
    WHERE r.association_id = s.association_id
  );

COMMIT;
