-- 1. ADD NEW USERS (ONLY IF NOT EXISTS)
-- Adding a new association and a new user
INSERT IGNORE INTO users (full_name, email, password_hash, role) VALUES 
('Croissant Rouge', 'croissant.rouge@sanad.tn', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'association'),
('Ahmed Ben Ali', 'ahmed.benali@example.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'user');

-- Get the last inserted user ID for the new association
SET @new_assoc_user_id = (SELECT id FROM users WHERE email = 'croissant.rouge@sanad.tn');

-- Create the association record
INSERT IGNORE INTO associations (user_id, organization_name, slug, responsible_name, phone, email, description, location, status, document_path)
VALUES (@new_assoc_user_id, 'Croissant Rouge', 'croissant-rouge', 'Ahmed Galai', '71000000', 'croissant.rouge@sanad.tn', 'Aide humanitaire et secourisme.', 'Tunis', 'approved', 'docs/cr.pdf');

SET @cr_id = (SELECT id FROM associations WHERE slug = 'croissant-rouge');

-- 2. ADD NEW REQUESTS
-- We'll add 3 requests with different need combinations
INSERT INTO requests 
(association_id, title, slug, description, category_id, location, urgency, target_amount, collected_amount, needs_money, needs_object, needs_service, status)
VALUES
(@cr_id, 'Soutien aux orphelins', CONCAT('soutien-orphelins-', UNIX_TIMESTAMP()), 'Besoin de fonds pour les frais de scolarité et de vêtements pour 20 orphelins.', 2, 'Kairouan', 'medium', 4500.00, 0.00, 1, 1, 0, 'active'),
(@cr_id, 'Rénovation centre communautaire', CONCAT('renovation-centre-', UNIX_TIMESTAMP()), 'Nous cherchons des bénévoles maçons et peintres pour rénover notre local.', 6, 'Bizerte', 'low', 0.00, 0.00, 0, 0, 1, 'active'),
(1, 'Équipement fauteuil roulant', CONCAT('fauteuil-roulant-', UNIX_TIMESTAMP()), 'Une personne handicapée a besoin d un fauteuil roulant électrique ou manuel.', 1, 'Nabeul', 'high', 800.00, 200.00, 1, 1, 1, 'active');

-- 3. ADD NEW DONATIONS
-- Link to existing request 1 (Aide alimentaire) and the new wheelchair request
SET @wheelchair_req_id = (SELECT id FROM requests WHERE slug LIKE 'fauteuil-roulant%' ORDER BY id DESC LIMIT 1);

INSERT INTO donations
(donor_id, association_id, request_id, amount, status, currency, payment_method, donor_name)
VALUES
(9, 1, 1, 50.00, 'completed', 'DT', 'card', 'Maraam'),
(5, 1, @wheelchair_req_id, 100.00, 'completed', 'DT', 'card', 'Maram Abdellaoui');

-- 4. ADD HELP OFFERS
INSERT INTO help_offers
(user_id, request_id, type, description, quantity, category, location, status)
VALUES
(5, 1, 'object', 'Sac de semoule 10kg', 2, 'Alimentation', 'Tunis', 'pending'),
(7, 3, 'service', 'Transport des fournitures par camionnette', 1, 'Education', 'Sfax', 'pending');
