ALTER TABLE help_offers
  ADD COLUMN IF NOT EXISTS campaign_id INT NULL AFTER request_id;

ALTER TABLE help_offers
  ADD INDEX IF NOT EXISTS idx_help_offers_campaign_id (campaign_id);

SET @fk_help_offers_campaign_id := (
  SELECT COUNT(*)
  FROM information_schema.TABLE_CONSTRAINTS
  WHERE CONSTRAINT_SCHEMA = DATABASE()
    AND TABLE_NAME = 'help_offers'
    AND CONSTRAINT_NAME = 'fk_help_offers_campaign_id'
);

SET @sql_help_offers_campaign_id := IF(
  @fk_help_offers_campaign_id = 0,
  'ALTER TABLE help_offers ADD CONSTRAINT fk_help_offers_campaign_id FOREIGN KEY (campaign_id) REFERENCES campaigns(id) ON DELETE SET NULL',
  'SELECT 1'
);

PREPARE stmt_help_offers_campaign_id FROM @sql_help_offers_campaign_id;
EXECUTE stmt_help_offers_campaign_id;
DEALLOCATE PREPARE stmt_help_offers_campaign_id;
