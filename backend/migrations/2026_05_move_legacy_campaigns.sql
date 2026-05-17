START TRANSACTION;

INSERT INTO campaigns (
  association_id,
  parent_request_id,
  title,
  slug,
  description,
  full_description,
  category_id,
  location,
  urgency,
  image_url,
  target_amount,
  collected_amount,
  status,
  start_date,
  end_date,
  created_at,
  updated_at
)
SELECT
  r.association_id,
  r.parent_request_id,
  r.title,
  r.slug,
  r.description,
  r.full_description,
  r.category_id,
  r.location,
  r.urgency,
  r.image_url,
  r.target_amount,
  r.collected_amount,
  r.status,
  r.start_date,
  r.end_date,
  r.created_at,
  r.updated_at
FROM requests r
WHERE r.association_id IS NOT NULL
  AND r.user_id IS NULL
  AND NOT EXISTS (
    SELECT 1
    FROM campaigns c
    WHERE c.slug = r.slug
  );

UPDATE donations d
JOIN requests r ON d.request_id = r.id
JOIN campaigns c ON c.slug = r.slug
SET d.campaign_id = c.id,
    d.request_id = NULL
WHERE r.association_id IS NOT NULL
  AND r.user_id IS NULL;

DELETE r
FROM requests r
JOIN campaigns c ON c.slug = r.slug
WHERE r.association_id IS NOT NULL
  AND r.user_id IS NULL;

INSERT INTO association_stats (association_id, campaign_count)
SELECT c.association_id, COUNT(*)
FROM campaigns c
LEFT JOIN association_stats s ON s.association_id = c.association_id
WHERE s.association_id IS NULL
GROUP BY c.association_id;

UPDATE association_stats s
SET campaign_count = (
  SELECT COUNT(*)
  FROM campaigns c
  WHERE c.association_id = s.association_id
);

COMMIT;
