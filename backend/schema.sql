-- ==================== USERS & AUTHENTICATION ====================
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(160) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  phone VARCHAR(40) NULL,
  role ENUM('user', 'association', 'admin') NOT NULL DEFAULT 'user',
  avatar_url VARCHAR(255) NULL,
  bio TEXT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  INDEX idx_email (email),
  INDEX idx_role (role)
);

CREATE TABLE login_attempts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(190) NOT NULL,
  ip_address VARCHAR(64) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_login_attempts_email_ip (email, ip_address, created_at)
);

-- ==================== CATEGORIES ====================
CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT NULL,
  icon VARCHAR(50) NULL,
  color VARCHAR(7) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_slug (slug)
);

INSERT INTO categories (name, slug, description, icon, color) VALUES
('Santé', 'sante', 'Aide médicale et soins de santé', 'fa-heart', '#EF4444'),
('Éducation', 'education', 'Bourses et support éducatif', 'fa-book', '#2563EB'),
('Alimentation', 'alimentation', 'Nourriture et approvisionnement alimentaire', 'fa-utensils', '#F59E0B'),
('Logement', 'logement', 'Aide au logement et abri', 'fa-home', '#8B5CF6'),
('Emploi', 'emploi', 'Formation et opportunités d''emploi', 'fa-briefcase', '#06B6D4'),
('Infrastructure', 'infrastructure', 'Projets communautaires', 'fa-tools', '#6B7280');

-- ==================== ASSOCIATIONS ====================
CREATE TABLE associations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  organization_name VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  responsible_name VARCHAR(160) NOT NULL,
  phone VARCHAR(40) NOT NULL,
  email VARCHAR(190) NOT NULL,
  website VARCHAR(255) NULL,
  description TEXT NOT NULL,
  full_description LONGTEXT NULL,
  logo_url VARCHAR(255) NULL,
  cover_url VARCHAR(255) NULL,
  location VARCHAR(200) NOT NULL,
  category_id INT NULL,
  founded_year INT NULL,
  document_path VARCHAR(255) NOT NULL,
  status ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
  verified BOOLEAN DEFAULT FALSE,
  verification_date TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  CONSTRAINT fk_associations_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_associations_category_id FOREIGN KEY (category_id) REFERENCES categories(id),
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_verified (verified),
  INDEX idx_location (location)
);

CREATE TABLE association_stats (
  id INT AUTO_INCREMENT PRIMARY KEY,
  association_id INT NOT NULL UNIQUE,
  total_donations DECIMAL(15, 2) DEFAULT 0,
  campaign_count INT DEFAULT 0,
  people_helped INT DEFAULT 0,
  donors_count INT DEFAULT 0,
  average_rating DECIMAL(3, 2) DEFAULT 0,
  last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_assoc_stats_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE CASCADE
);

CREATE TABLE fund_allocation (
  id INT AUTO_INCREMENT PRIMARY KEY,
  association_id INT NOT NULL,
  direct_aid_percentage DECIMAL(5, 2) DEFAULT 62,
  programs_percentage DECIMAL(5, 2) DEFAULT 18,
  operations_percentage DECIMAL(5, 2) DEFAULT 14,
  admin_percentage DECIMAL(5, 2) DEFAULT 6,
  description TEXT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_fund_alloc_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE CASCADE
);

-- ==================== REQUESTS & CAMPAIGNS ====================
CREATE TABLE requests (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  association_id INT NULL,
  parent_request_id INT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  full_description LONGTEXT NULL,
  category_id INT NULL,
  location VARCHAR(200) NOT NULL,
  urgency ENUM('low', 'medium', 'high') NOT NULL DEFAULT 'medium',
  image_url VARCHAR(255) NULL,
  target_amount DECIMAL(15, 2) NOT NULL,
  collected_amount DECIMAL(15, 2) DEFAULT 0,
  status ENUM('active', 'completed', 'paused', 'cancelled') NOT NULL DEFAULT 'active',
  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  end_date TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  CONSTRAINT fk_requests_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  CONSTRAINT fk_requests_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE CASCADE,
  CONSTRAINT fk_requests_parent_id FOREIGN KEY (parent_request_id) REFERENCES requests(id) ON DELETE SET NULL,
  CONSTRAINT fk_requests_category_id FOREIGN KEY (category_id) REFERENCES categories(id),
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_urgency (urgency),
  INDEX idx_location (location),
  INDEX idx_association_id (association_id),
  INDEX idx_parent_request_id (parent_request_id)
);

CREATE TABLE request_updates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  request_id INT NOT NULL,
  association_id INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_request_updates_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE CASCADE,
  CONSTRAINT fk_request_updates_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE CASCADE,
  INDEX idx_request_updates_request_id (request_id),
  INDEX idx_request_updates_assoc_id (association_id),
  INDEX idx_request_updates_created_at (created_at)
);

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

-- ==================== FAVORITES ====================
CREATE TABLE favorites (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  request_id INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_favorites_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  CONSTRAINT fk_favorites_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE CASCADE,
  UNIQUE KEY unique_favorite (user_id, request_id),
  INDEX idx_favorites_user_id (user_id),
  INDEX idx_favorites_request_id (request_id)
);

CREATE TABLE campaigns (
  id INT AUTO_INCREMENT PRIMARY KEY,
  association_id INT NOT NULL,
  parent_request_id INT NULL,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT NOT NULL,
  full_description LONGTEXT NULL,
  category_id INT NULL,
  location VARCHAR(200) NULL,
  urgency ENUM('low', 'medium', 'high') NOT NULL DEFAULT 'medium',
  image_url VARCHAR(255) NULL,
  target_amount DECIMAL(15, 2) NOT NULL,
  collected_amount DECIMAL(15, 2) DEFAULT 0,
  status ENUM('active', 'completed', 'paused', 'cancelled') NOT NULL DEFAULT 'active',
  start_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  end_date TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  CONSTRAINT fk_campaigns_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE CASCADE,
  CONSTRAINT fk_campaigns_parent_request_id FOREIGN KEY (parent_request_id) REFERENCES requests(id) ON DELETE SET NULL,
  CONSTRAINT fk_campaigns_category_id FOREIGN KEY (category_id) REFERENCES categories(id),
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  INDEX idx_association_id (association_id)
);

-- ==================== DONATIONS ====================
CREATE TABLE donations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  donor_id INT NULL,
  donor_email VARCHAR(190) NULL,
  donor_name VARCHAR(160) NULL,
  request_id INT NULL,
  campaign_id INT NULL,
  association_id INT NULL,
  amount DECIMAL(15, 2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'TND',
  status ENUM('pending', 'completed', 'failed', 'refunded') NOT NULL DEFAULT 'pending',
  payment_method VARCHAR(50) NULL,
  transaction_id VARCHAR(255) NULL,
  message TEXT NULL,
  anonymous BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  CONSTRAINT fk_donations_donor_id FOREIGN KEY (donor_id) REFERENCES users(id) ON DELETE SET NULL,
  CONSTRAINT fk_donations_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE SET NULL,
  CONSTRAINT fk_donations_campaign_id FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE SET NULL,
  CONSTRAINT fk_donations_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE CASCADE,
  INDEX idx_status (status),
  INDEX idx_association_id (association_id),
  INDEX idx_donor_id (donor_id),
  INDEX idx_created_at (created_at),
  INDEX idx_request_id (request_id),
  INDEX idx_campaign_id (campaign_id)
);

-- ==================== RATINGS & REVIEWS ====================
CREATE TABLE ratings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  association_id INT NOT NULL,
  donor_id INT NOT NULL,
  rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review TEXT NULL,
  is_verified_donor BOOLEAN DEFAULT FALSE,
  helpful_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NULL DEFAULT NULL,
  CONSTRAINT fk_ratings_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE CASCADE,
  CONSTRAINT fk_ratings_donor_id FOREIGN KEY (donor_id) REFERENCES users(id) ON DELETE CASCADE,
  UNIQUE KEY unique_rating_per_donor (association_id, donor_id),
  INDEX idx_association_id (association_id),
  INDEX idx_rating (rating)
);

-- ==================== ACTIVITY LOG ====================
CREATE TABLE activity_log (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NULL,
  association_id INT NULL,
  action VARCHAR(100) NOT NULL,
  entity_type VARCHAR(50) NULL,
  entity_id INT NULL,
  description TEXT NULL,
  ip_address VARCHAR(64) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_activity_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
  CONSTRAINT fk_activity_assoc_id FOREIGN KEY (association_id) REFERENCES associations(id) ON DELETE SET NULL,
  INDEX idx_created_at (created_at),
  INDEX idx_action (action),
  INDEX idx_association_id (association_id)
);

-- ==================== NOTIFICATIONS ====================
CREATE TABLE notifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  type VARCHAR(50) NOT NULL,
  title VARCHAR(160) NOT NULL,
  detail TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_notifications_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_notifications_user_id (user_id),
  INDEX idx_notifications_created_at (created_at),
  INDEX idx_notifications_is_read (is_read)
);
