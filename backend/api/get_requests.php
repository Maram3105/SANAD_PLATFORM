<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

try {
    $pdo = require __DIR__ . '/db.php';

    // Get query parameters
    $search = $_GET['search'] ?? '';
    $category = $_GET['category'] ?? '';
    $location = $_GET['location'] ?? '';
    $urgency = $_GET['urgency'] ?? '';
    $sort = $_GET['sort'] ?? 'recent'; // recent, most-funded, most-urgent
    $limit = (int) ($_GET['limit'] ?? 20);
    $offset = (int) ($_GET['offset'] ?? 0);

    $requestWhere = ['r.status = "active"'];
    $campaignWhere = ['camp.status = "active"'];
    $params = [];

    if (!empty($search)) {
        $requestWhere[] = '(r.title LIKE :request_search OR r.description LIKE :request_search OR a.organization_name LIKE :request_search OR u.full_name LIKE :request_search)';
        $campaignWhere[] = '(camp.title LIKE :campaign_search OR camp.description LIKE :campaign_search OR a2.organization_name LIKE :campaign_search)';
        $params[':request_search'] = '%' . $search . '%';
        $params[':campaign_search'] = '%' . $search . '%';
    }

    if (!empty($category)) {
        $requestWhere[] = 'c.name = :request_category';
        $campaignWhere[] = 'c2.name = :campaign_category';
        $params[':request_category'] = $category;
        $params[':campaign_category'] = $category;
    }

    if (!empty($location)) {
        $requestWhere[] = 'r.location = :request_location';
        $campaignWhere[] = 'camp.location = :campaign_location';
        $params[':request_location'] = $location;
        $params[':campaign_location'] = $location;
    }

    if (!empty($urgency)) {
        $requestWhere[] = 'r.urgency = :request_urgency';
        $campaignWhere[] = 'camp.urgency = :campaign_urgency';
        $params[':request_urgency'] = $urgency;
        $params[':campaign_urgency'] = $urgency;
    }

    $requestWhereSql = implode(' AND ', $requestWhere);
    $campaignWhereSql = implode(' AND ', $campaignWhere);

    $baseQuery = '
        SELECT *
        FROM (
            SELECT
                r.id,
                CONCAT("request-", r.id) AS item_key,
                "request" AS item_type,
                r.user_id,
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
                r.updated_at,
                r.needs_money,
                r.needs_object,
                r.needs_service,
                COALESCE(a.organization_name, u.full_name, "Demande citoyenne") AS organization_name,
                a.logo_url,
                c.name AS category_name
            FROM requests r
            LEFT JOIN associations a ON r.association_id = a.id
            LEFT JOIN users u ON r.user_id = u.id
            LEFT JOIN categories c ON r.category_id = c.id
            WHERE ' . $requestWhereSql . '

            UNION ALL

            SELECT
                camp.id,
                CONCAT("campaign-", camp.id) AS item_key,
                "campaign" AS item_type,
                NULL AS user_id,
                camp.association_id,
                camp.parent_request_id,
                camp.title,
                camp.slug,
                camp.description,
                camp.full_description,
                camp.category_id,
                camp.location,
                camp.urgency,
                camp.image_url,
                camp.target_amount,
                camp.collected_amount,
                camp.status,
                camp.start_date,
                camp.end_date,
                camp.created_at,
                camp.updated_at,
                1 AS needs_money,
                0 AS needs_object,
                0 AS needs_service,
                a2.organization_name,
                a2.logo_url,
                c2.name AS category_name
            FROM campaigns camp
            INNER JOIN associations a2 ON camp.association_id = a2.id
            LEFT JOIN categories c2 ON camp.category_id = c2.id
            WHERE ' . $campaignWhereSql . '
        ) initiatives';

    $query = $baseQuery;

    match ($sort) {
        'most-funded' => $query .= ' ORDER BY (collected_amount / NULLIF(target_amount, 0)) DESC, created_at DESC',
        'most-urgent' => $query .= ' ORDER BY FIELD(urgency, "high", "medium", "low"), created_at DESC',
        default => $query .= ' ORDER BY created_at DESC'
    };

    $query .= ' LIMIT :limit OFFSET :offset';
    $params[':limit'] = $limit;
    $params[':offset'] = $offset;

    $stmt = $pdo->prepare($query);
    
    foreach ($params as $key => $value) {
        if (is_int($value)) {
            $stmt->bindValue($key, $value, PDO::PARAM_INT);
        } else {
            $stmt->bindValue($key, $value);
        }
    }

    $stmt->execute();
    $requests = $stmt->fetchAll(PDO::FETCH_ASSOC);

    foreach ($requests as &$req) {
        $req['needs_money'] = (bool) ($req['needs_money'] ?? false);
        $req['needs_object'] = (bool) ($req['needs_object'] ?? false);
        $req['needs_service'] = (bool) ($req['needs_service'] ?? false);
    }
    unset($req);

    $countQuery = 'SELECT COUNT(*) as total FROM (' . $baseQuery . ') counted_initiatives';

    $countStmt = $pdo->prepare($countQuery);
    
    foreach ($params as $key => $value) {
        if (in_array($key, [':limit', ':offset'])) continue;
        if (is_int($value)) {
            $countStmt->bindValue($key, $value, PDO::PARAM_INT);
        } else {
            $countStmt->bindValue($key, $value);
        }
    }

    $countStmt->execute();
    $total = $countStmt->fetchColumn();

    json_response([
        'status' => 'success',
        'data' => $requests,
        'pagination' => [
            'total' => (int) $total,
            'limit' => $limit,
            'offset' => $offset
        ]
    ]);

} catch (Exception $e) {
    json_response(['status' => 'error', 'message' => $e->getMessage()], 500);
}
