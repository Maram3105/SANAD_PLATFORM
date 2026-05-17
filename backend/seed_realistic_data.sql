-- Realistic Seeding for Sanad Platform

-- 1. CLEANING (Optional, uncomment if you want a fresh start)
-- DELETE FROM donations;
-- DELETE FROM requests;

-- 2. INSERT SAMPLE REQUESTS
-- We use valid association_id (1, 4, 5) and category_id (1, 2, 3, 5)
INSERT INTO requests 
(association_id, title, slug, description, category_id, location, urgency, target_amount, collected_amount, needs_money, needs_object, needs_service, status)
VALUES
(1, 'Aide alimentaire urgente', CONCAT('aide-alimentaire-urgente-', UNIX_TIMESTAMP()), 'Soutien pour familles en difficulté nécessitant des colis alimentaires de base (huile, sucre, farine, etc).', 3, 'Tunis', 'high', 1200.00, 300.00, 1, 1, 0, 'active'),
(1, 'Aide médicale urgente', CONCAT('aide-medicale-urgente-', UNIX_TIMESTAMP() + 1), 'Financement pour une opération chirurgicale vitale pour un enfant souffrant d une malformation cardiaque.', 1, 'Sousse', 'high', 5000.00, 1000.00, 1, 0, 0, 'active'),
(4, 'Fournitures scolaires', CONCAT('fournitures-scolaires-', UNIX_TIMESTAMP() + 2), 'Collecte de sacs à dos, cahiers et trousses pour aider les enfants défavorisés à préparer leur rentrée.', 2, 'Sfax', 'medium', 2000.00, 500.00, 1, 1, 1, 'active'),
(5, 'Formation professionnelle', CONCAT('formation-professionnelle-', UNIX_TIMESTAMP() + 3), 'Cours d informatique, bureautique et anglais pour les jeunes demandeurs d emploi de la région.', 5, 'Ariana', 'low', 3000.00, 800.00, 0, 0, 1, 'active');

-- 3. INSERT SAMPLE DONATIONS
-- Using valid donor_id (5, 7, 8) and associating them with the requests above
-- We'll use a subquery to get the last inserted request IDs
SET @req1 = (SELECT id FROM requests WHERE slug LIKE 'aide-alimentaire-urgente%' ORDER BY id DESC LIMIT 1);
SET @req2 = (SELECT id FROM requests WHERE slug LIKE 'aide-medicale-urgente%' ORDER BY id DESC LIMIT 1);
SET @req3 = (SELECT id FROM requests WHERE slug LIKE 'fournitures-scolaires%' ORDER BY id DESC LIMIT 1);

INSERT INTO donations
(donor_id, association_id, request_id, amount, status, currency, payment_method, donor_name)
VALUES
(5, 1, @req1, 100.00, 'completed', 'DT', 'card', 'Maram Abdellaoui'),
(7, 1, @req1, 200.00, 'completed', 'DT', 'bank_transfer', 'Tasnim'),
(5, 1, @req2, 300.00, 'completed', 'DT', 'card', 'Maram Abdellaoui'),
(8, 4, @req3, 150.00, 'completed', 'DT', 'card', 'Tassss');
