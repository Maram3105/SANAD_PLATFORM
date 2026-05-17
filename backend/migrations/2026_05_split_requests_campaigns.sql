ALTER TABLE requests
  ADD COLUMN IF NOT EXISTS user_id INT NULL AFTER id,
  MODIFY association_id INT NULL;

ALTER TABLE requests
  ADD INDEX IF NOT EXISTS idx_requests_user_id (user_id);

SET @fk_requests_user_id := (
  SELECT COUNT(*)
  FROM information_schema.TABLE_CONSTRAINTS
  WHERE CONSTRAINT_SCHEMA = DATABASE()
    AND TABLE_NAME = 'requests'
    AND CONSTRAINT_NAME = 'fk_requests_user_id'
);
SET @sql_requests_user_id := IF(
  @fk_requests_user_id = 0,
  'ALTER TABLE requests ADD CONSTRAINT fk_requests_user_id FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL',
  'SELECT 1'
);
PREPARE stmt_requests_user_id FROM @sql_requests_user_id;
EXECUTE stmt_requests_user_id;
DEALLOCATE PREPARE stmt_requests_user_id;

ALTER TABLE campaigns
  ADD COLUMN IF NOT EXISTS parent_request_id INT NULL AFTER association_id,
  ADD COLUMN IF NOT EXISTS full_description LONGTEXT NULL AFTER description,
  ADD COLUMN IF NOT EXISTS location VARCHAR(200) NULL AFTER category_id,
  ADD COLUMN IF NOT EXISTS urgency ENUM('low', 'medium', 'high') NOT NULL DEFAULT 'medium' AFTER location;

ALTER TABLE campaigns
  ADD INDEX IF NOT EXISTS idx_campaigns_parent_request_id (parent_request_id);

SET @fk_campaigns_parent_request_id := (
  SELECT COUNT(*)
  FROM information_schema.TABLE_CONSTRAINTS
  WHERE CONSTRAINT_SCHEMA = DATABASE()
    AND TABLE_NAME = 'campaigns'
    AND CONSTRAINT_NAME = 'fk_campaigns_parent_request_id'
);
SET @sql_campaigns_parent_request_id := IF(
  @fk_campaigns_parent_request_id = 0,
  'ALTER TABLE campaigns ADD CONSTRAINT fk_campaigns_parent_request_id FOREIGN KEY (parent_request_id) REFERENCES requests(id) ON DELETE SET NULL',
  'SELECT 1'
);
PREPARE stmt_campaigns_parent_request_id FROM @sql_campaigns_parent_request_id;
EXECUTE stmt_campaigns_parent_request_id;
DEALLOCATE PREPARE stmt_campaigns_parent_request_id;

ALTER TABLE donations
  MODIFY association_id INT NULL;
