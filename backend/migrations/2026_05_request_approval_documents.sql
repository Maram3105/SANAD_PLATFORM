CREATE TABLE IF NOT EXISTS request_documents (
  id INT AUTO_INCREMENT PRIMARY KEY,
  request_id INT NOT NULL,
  file_path VARCHAR(255) NOT NULL,
  file_type VARCHAR(50) NULL,
  file_name VARCHAR(255) NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_request_docs_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE CASCADE,
  INDEX idx_request_id (request_id)
);
