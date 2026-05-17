<?php

declare(strict_types=1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Use the same pattern as login.php — require returns values
$config = require __DIR__ . '/config.php';
$pdo    = require __DIR__ . '/db.php';
require  __DIR__ . '/helpers.php';

function ensure_request_documents_table(PDO $pdo): void
{
    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS request_documents (
            id INT AUTO_INCREMENT PRIMARY KEY,
            request_id INT NOT NULL,
            file_path VARCHAR(255) NOT NULL,
            file_type VARCHAR(50) NULL,
            file_name VARCHAR(255) NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            CONSTRAINT fk_request_docs_request_id FOREIGN KEY (request_id) REFERENCES requests(id) ON DELETE CASCADE,
            INDEX idx_request_id (request_id)
        )'
    );
}

// Verify admin JWT
$token = get_bearer_token();
if (!$token) {
    json_response(['success' => false, 'message' => 'Token manquant.'], 401);
}

$payload = verify_jwt($token, $config['jwt_secret']);
if (!$payload || ($payload['role'] ?? '') !== 'admin') {
    json_response(['success' => false, 'message' => 'Accès refusé. Administrateur uniquement.'], 403);
}

try {
    ensure_request_documents_table($pdo);

    $search  = trim($_GET['search'] ?? '');
    $status  = trim($_GET['status'] ?? '');
    $urgency = trim($_GET['urgency'] ?? '');
    $limit   = min((int) ($_GET['limit'] ?? 50), 200);
    $offset  = (int) ($_GET['offset'] ?? 0);

    $requestConditions = ['1=1'];
    $campaignConditions = ['1=1'];
    $params = [];

    if ($search !== '') {
        $requestConditions[] = '(r.title LIKE :request_search OR r.description LIKE :request_search OR a.organization_name LIKE :request_search OR u.full_name LIKE :request_search)';
        $campaignConditions[] = '(camp.title LIKE :campaign_search OR camp.description LIKE :campaign_search OR a2.organization_name LIKE :campaign_search)';
        $params[':request_search'] = '%' . $search . '%';
        $params[':campaign_search'] = '%' . $search . '%';
    }

    if (in_array($status, ['active', 'completed', 'paused', 'cancelled'], true)) {
        $requestConditions[] = 'r.status = :request_status';
        $campaignConditions[] = 'camp.status = :campaign_status';
        $params[':request_status'] = $status;
        $params[':campaign_status'] = $status;
    }

    if (in_array($urgency, ['low', 'medium', 'high'], true)) {
        $requestConditions[] = 'r.urgency = :request_urgency';
        $campaignConditions[] = 'camp.urgency = :campaign_urgency';
        $params[':request_urgency'] = $urgency;
        $params[':campaign_urgency'] = $urgency;
    }

    $requestWhere = implode(' AND ', $requestConditions);
    $campaignWhere = implode(' AND ', $campaignConditions);

    $baseQuery = "SELECT *
                  FROM (
                      SELECT r.id,
                             CONCAT('request-', r.id) AS item_key,
                             'request' AS item_type,
                             r.title, r.description, r.location, r.urgency, r.status,
                             r.target_amount, r.collected_amount, r.created_at,
                             COALESCE(a.organization_name, u.full_name, 'Demande citoyenne') AS organization_name,
                             a.logo_url,
                             c.name as category_name
                      FROM requests r
                      LEFT JOIN associations a ON r.association_id = a.id
                      LEFT JOIN users u ON r.user_id = u.id
                      LEFT JOIN categories c ON r.category_id = c.id
                      WHERE $requestWhere

                      UNION ALL

                      SELECT camp.id,
                             CONCAT('campaign-', camp.id) AS item_key,
                             'campaign' AS item_type,
                             camp.title, camp.description, camp.location, camp.urgency, camp.status,
                             camp.target_amount, camp.collected_amount, camp.created_at,
                             COALESCE(a2.organization_name, 'Association') AS organization_name,
                             a2.logo_url,
                             c2.name as category_name
                      FROM campaigns camp
                      LEFT JOIN associations a2 ON camp.association_id = a2.id
                      LEFT JOIN categories c2 ON camp.category_id = c2.id
                      WHERE $campaignWhere
                  ) initiatives";

    $query = "$baseQuery
              ORDER BY created_at DESC
              LIMIT :limit OFFSET :offset";

    $stmt = $pdo->prepare($query);
    foreach ($params as $k => $v) {
        $stmt->bindValue($k, $v);
    }
    $stmt->bindValue(':limit',  $limit,  PDO::PARAM_INT);
    $stmt->bindValue(':offset', $offset, PDO::PARAM_INT);
    $stmt->execute();
    $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $requestIds = array_values(array_unique(array_map(
        static fn (array $item): int => (int) $item['id'],
        array_filter($requests, static fn (array $item): bool => ($item['item_type'] ?? '') === 'request')
    )));

    $documentsByRequest = [];
    if ($requestIds) {
        $placeholders = implode(',', array_fill(0, count($requestIds), '?'));
        $docsStmt = $pdo->prepare(
            "SELECT id, request_id, file_path, file_type, file_name, created_at
             FROM request_documents
             WHERE request_id IN ($placeholders)
             ORDER BY created_at DESC"
        );
        foreach ($requestIds as $index => $requestId) {
            $docsStmt->bindValue($index + 1, $requestId, PDO::PARAM_INT);
        }
        $docsStmt->execute();
        foreach ($docsStmt->fetchAll(PDO::FETCH_ASSOC) as $doc) {
            $documentsByRequest[(int) $doc['request_id']][] = [
                'id' => (int) $doc['id'],
                'file_path' => $doc['file_path'],
                'file_type' => $doc['file_type'],
                'file_name' => $doc['file_name'],
                'created_at' => $doc['created_at']
            ];
        }
    }

    foreach ($requests as &$request) {
        $request['documents'] = ($request['item_type'] ?? '') === 'request'
            ? ($documentsByRequest[(int) $request['id']] ?? [])
            : [];
    }
    unset($request);

    $countQuery = "SELECT COUNT(*) FROM ($baseQuery) counted_initiatives";
    $countStmt  = $pdo->prepare($countQuery);
    foreach ($params as $k => $v) {
        $countStmt->bindValue($k, $v);
    }
    $countStmt->execute();
    $total = (int) $countStmt->fetchColumn();

    json_response([
        'success' => true,
        'data'    => $requests,
        'pagination' => ['total' => $total, 'limit' => $limit, 'offset' => $offset]
    ]);

} catch (Exception $e) {
    json_response(['success' => false, 'message' => $e->getMessage()], 500);
}
