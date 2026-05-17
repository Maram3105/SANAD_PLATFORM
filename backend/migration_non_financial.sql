-- Migration for Non-Financial Donations (Objects/Services)

-- Update requests table to support different need types
ALTER TABLE requests 
ADD COLUMN needs_money BOOLEAN DEFAULT TRUE,
ADD COLUMN needs_object BOOLEAN DEFAULT FALSE,
ADD COLUMN needs_service BOOLEAN DEFAULT FALSE;

-- Table for help offers (objects or services)
CREATE TABLE help_offers (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  request_id INT NULL, -- NULL if it's an "available item" (free donation)
  campaign_id INT NULL,
  type ENUM('object', 'service') NOT NULL,
  description TEXT NOT NULL,
  quantity INT DEFAULT 1,
  category VARCHAR(100) NULL,
  location VARCHAR(200) NULL,
  delivery_method ENUM('hand', 'delivery') NOT NULL DEFAULT 'hand',
  status ENUM('pending', 'accepted', 'reserved', 'completed', 'rejected') NOT NULL DEFAULT 'pending',
  image_url VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_help_offers_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_help_offers_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE SET NULL,
  CONSTRAINT fk_help_offers_campaign_id FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE SET NULL,
  INDEX idx_status (status),
  INDEX idx_type (type),
  INDEX idx_campaign_id (campaign_id)
);

-- Table for reservations of available items
CREATE TABLE reservations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  help_offer_id INT NOT NULL,
  request_id INT NULL, -- Optional link if beneficiary has a specific request
  reserved_by INT NOT NULL,
  status ENUM('active', 'completed', 'cancelled', 'expired') NOT NULL DEFAULT 'active',
  expires_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_reservations_help_offer_id FOREIGN KEY (help_offer_id) REFERENCES help_offers(id) ON DELETE CASCADE,
  CONSTRAINT fk_reservations_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE SET NULL,
  CONSTRAINT fk_reservations_reserved_by FOREIGN KEY (reserved_by) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_status (status)
);

-- Add some seed data for testing
VALUES (1, 'object', 'Couverture en laine quasi neuve', 2, 'Alimentation', 'Tunis', 'pending');

-- Table for request justification documents
CREATE TABLE request_documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  request_id INT NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  file_type VARCHAR(50) NULL,
  file_name VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_request_docs_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE CASCADE,
  INDEX idx_request_id (request_id)
);
