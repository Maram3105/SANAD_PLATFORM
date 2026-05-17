-- Seed file for PROJET_SANAD
-- Add sample data to test dynamic loading

-- 1. Ensure we have some associations
-- Association 1 (Approved)
INSERT INTO users (full_name, email, password_hash, role) 
VALUES ('Assoc. Unité et Espoir', 'association1@test.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'association');
SET @user_assoc1 = LAST_INSERT_ID();

INSERT INTO associations (user_id, organization_name, slug, responsible_name, phone, email, description, location, status, verified)
VALUES (@user_assoc1, 'Unité et Espoir', 'unite-espoir', 'Mohamed Ali', '71000111', 'contact@unite-espoir.tn', 'Association dédiée à l\'aide sociale et médicale.', 'Tunis', 'approved', 1);
SET @assoc1 = LAST_INSERT_ID();

-- Association 2 (Approved)
INSERT INTO users (full_name, email, password_hash, role) 
VALUES ('Main Dans la Main', 'association2@test.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'association');
SET @user_assoc2 = LAST_INSERT_ID();

INSERT INTO associations (user_id, organization_name, slug, responsible_name, phone, email, description, location, status, verified)
VALUES (@user_assoc2, 'Main Dans la Main', 'main-main', 'Sonia Ben', '71222333', 'info@mainmain.tn', 'Soutien aux familles nécessiteuses et éducation.', 'Sfax', 'approved', 1);
SET @assoc2 = LAST_INSERT_ID();

-- 2. Add sample requests with different needs
-- Request 1: Money and Objects
INSERT INTO requests (association_id, title, slug, description, category_id, location, urgency, target_amount, needs_money, needs_object, needs_service, status)
VALUES (@assoc1, 'Aide pour opération cardiaque', 'aide-operation-cardiaque', 'Un enfant a besoin d\'une chirurgie urgente du coeur. Nous collectons des fonds et du matériel médical spécifique.', 1, 'Tunis', 'high', 15000, 1, 1, 0, 'active');
SET @req1 = LAST_INSERT_ID();

-- Request 2: Only Money
INSERT INTO requests (association_id, title, slug, description, category_id, location, urgency, target_amount, needs_money, needs_object, needs_service, status)
VALUES (@assoc2, 'Bourses scolaires pour 20 enfants', 'bourses-scolaires', 'Aidez-nous à financer les frais d\'inscription et les fournitures pour la rentrée.', 2, 'Sfax', 'medium', 5000, 1, 0, 0, 'active');
SET @req2 = LAST_INSERT_ID();

-- Request 3: Service and Objects
INSERT INTO requests (association_id, title, slug, description, category_id, location, urgency, target_amount, needs_money, needs_object, needs_service, status)
VALUES (@assoc1, 'Réhabilitation d\'un centre social', 'rehabilitation-centre', 'Nous cherchons des bénévoles (peintres, électriciens) et des dons de meubles.', 6, 'Tunis', 'low', 2000, 0, 1, 1, 'active');
SET @req3 = LAST_INSERT_ID();

-- Request 4: Urgent Food
INSERT INTO requests (association_id, title, slug, description, category_id, location, urgency, target_amount, needs_money, needs_object, needs_service, status)
VALUES (@assoc2, 'Paniers ramadan pour 100 familles', 'paniers-ramadan', 'Distribution de colis alimentaires pour les familles isolées.', 3, 'Sousse', 'high', 8000, 1, 1, 1, 'active');
SET @req4 = LAST_INSERT_ID();

-- 3. Add some donations
-- Donor User
INSERT INTO users (full_name, email, password_hash, role) 
VALUES ('Amine Donateur', 'donor@test.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'user');
SET @donor1 = LAST_INSERT_ID();

-- Donation to Request 1
INSERT INTO donations (donor_id, request_id, association_id, amount, status, donor_name)
VALUES (@donor1, @req1, @assoc1, 1500, 'completed', 'Amine Donateur');
UPDATE requests SET collected_amount = collected_amount + 1500 WHERE id = @req1;

-- Donation to Request 2
INSERT INTO donations (donor_id, request_id, association_id, amount, status, donor_name)
VALUES (@donor1, @req2, @assoc2, 500, 'completed', 'Amine Donateur');
UPDATE requests SET collected_amount = collected_amount + 500 WHERE id = @req2;

-- Anonymous Donation to Request 4
INSERT INTO donations (donor_id, request_id, association_id, amount, status, donor_name, anonymous)
VALUES (NULL, @req4, @assoc2, 200, 'completed', 'Anonyme', 1);
UPDATE requests SET collected_amount = collected_amount + 200 WHERE id = @req4;

-- 4. Initial Help Offers
INSERT INTO help_offers (user_id, request_id, type, description, quantity, location, status)
VALUES (@donor1, @req3, 'service', 'Je suis électricien et je peux aider 2 weekends.', 1, 'Tunis', 'pending');

INSERT INTO help_offers (user_id, request_id, type, description, quantity, location, status)
VALUES (@donor1, @req1, 'object', 'Défibrillateur portable en bon état.', 1, 'Tunis', 'accepted');
