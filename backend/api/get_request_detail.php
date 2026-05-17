<?php

declare(strict_types=1);

require_once __DIR__ . '/db.php';
require_once __DIR__ . '/helpers.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');

try {
    $pdo = require __DIR__ . '/db.php';

    $id = $_GET['id'] ?? null;

    if (!$id) {
        json_response(['status' => 'error', 'message' => 'Request ID is required'], 400);
    }

    $id = (string) $id;
    $campaignId = null;
    if (preg_match('/^campaign-(\d+)$/', $id, $matches)) {
        $campaignId = (int) $matches[1];
    }

    // Get request details
    $query = 'SELECT r.*,
                     "request" AS item_type,
                     COALESCE(a.organization_name, u.full_name, "Demande citoyenne") AS organization_name,
                     a.logo_url,
                     a.verified,
                     a.description AS assoc_description,
                     c.name as category_name, 
                     (SELECT COUNT(*) FROM donations WHERE request_id = r.id AND status = "completed") as donors_count
              FROM requests r
              LEFT JOIN associations a ON r.association_id = a.id
              LEFT JOIN users u ON r.user_id = u.id
              LEFT JOIN categories c ON r.category_id = c.id
              WHERE (:numeric_id > 0 AND r.id = :numeric_id) OR r.slug = :slug';

    $stmt = $pdo->prepare($query);
    $stmt->execute([':numeric_id' => ctype_digit($id) ? (int) $id : 0, ':slug' => $id]);
    $request = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$request) {
        $campaignQuery = 'SELECT camp.*,
                                 "campaign" AS item_type,
                                 a.organization_name,
                                 a.logo_url,
                                 a.verified,
                                 a.description AS assoc_description,
                                 c.name as category_name,
                                 (SELECT COUNT(*) FROM donations WHERE campaign_id = camp.id AND status = "completed") as donors_count,
                                 1 AS needs_money,
                                 1 AS needs_object,
                                 1 AS needs_service
                          FROM campaigns camp
                          INNER JOIN associations a ON camp.association_id = a.id
                          LEFT JOIN categories c ON camp.category_id = c.id
                          WHERE (:campaign_id > 0 AND camp.id = :campaign_id) OR camp.slug = :slug
                          LIMIT 1';
        $campaignStmt = $pdo->prepare($campaignQuery);
        $campaignStmt->execute([':campaign_id' => $campaignId ?? 0, ':slug' => $id]);
        $request = $campaignStmt->fetch(PDO::FETCH_ASSOC);

        if (!$request) {
            json_response(['status' => 'error', 'message' => 'Request not found'], 404);
        }
    }

    $request['needs_money'] = (bool) ($request['needs_money'] ?? false);
    $request['needs_object'] = (bool) ($request['needs_object'] ?? false);
    $request['needs_service'] = (bool) ($request['needs_service'] ?? false);

    if (($request['item_type'] ?? 'request') === 'campaign') {
        $relatedQuery = 'SELECT camp.*,
                                "campaign" AS item_type,
                                a.organization_name,
                                c.name as category_name,
                                (SELECT COUNT(*) FROM donations WHERE campaign_id = camp.id AND status = "completed") as donors_count
                         FROM campaigns camp
                         INNER JOIN associations a ON camp.association_id = a.id
                         LEFT JOIN categories c ON camp.category_id = c.id
                         WHERE camp.association_id = :association_id AND camp.id != :campaign_id AND camp.status = "active"
                         ORDER BY camp.created_at DESC
                         LIMIT 3';
        $relatedStmt = $pdo->prepare($relatedQuery);
        $relatedStmt->execute([':association_id' => $request['association_id'], ':campaign_id' => $request['id']]);
        $related_requests = $relatedStmt->fetchAll(PDO::FETCH_ASSOC);

        $donationsQuery = 'SELECT donor_name, amount, created_at FROM donations
                           WHERE campaign_id = :campaign_id AND status = "completed" AND anonymous = FALSE
                           ORDER BY created_at DESC
                           LIMIT 10';
        $donationsStmt = $pdo->prepare($donationsQuery);
        $donationsStmt->execute([':campaign_id' => $request['id']]);
        $recent_donations = $donationsStmt->fetchAll(PDO::FETCH_ASSOC);

        $offersQuery = 'SELECT h.*, u.full_name as donor_name FROM help_offers h
                        JOIN users u ON h.user_id = u.id
                        WHERE h.campaign_id = :campaign_id
                        ORDER BY h.created_at DESC';
        $offersStmt = $pdo->prepare($offersQuery);
        $offersStmt->execute([':campaign_id' => $request['id']]);
        $help_offers = $offersStmt->fetchAll(PDO::FETCH_ASSOC);

        json_response([
            'status' => 'success',
            'data' => [
                'request' => $request,
                'related_requests' => $related_requests,
                'recent_donations' => $recent_donations,
                'help_offers' => $help_offers
            ]
        ]);
    }

    if (!empty($request['association_id'])) {
        $relatedWhere = 'r.association_id = :association_id';
        $relatedParams = [':association_id' => $request['association_id'], ':request_id' => $request['id']];
    } else {
        $relatedWhere = 'r.category_id = :category_id';
        $relatedParams = [':category_id' => $request['category_id'], ':request_id' => $request['id']];
    }

    $relatedQuery = 'SELECT r.*,
                            COALESCE(a.organization_name, u.full_name, "Demande citoyenne") AS organization_name,
                            c.name as category_name,
                            (SELECT COUNT(*) FROM donations WHERE request_id = r.id AND status = "completed") as donors_count
                     FROM requests r
                     LEFT JOIN associations a ON r.association_id = a.id
                     LEFT JOIN users u ON r.user_id = u.id
                     LEFT JOIN categories c ON r.category_id = c.id
                     WHERE ' . $relatedWhere . ' AND r.id != :request_id AND r.status = "active"
                     ORDER BY r.urgency = "high" DESC, r.created_at DESC
                     LIMIT 3';

    $relatedStmt = $pdo->prepare($relatedQuery);
    $relatedStmt->execute($relatedParams);
    $related_requests = $relatedStmt->fetchAll(PDO::FETCH_ASSOC);

    // Get recent donations for this request
    $donationsQuery = 'SELECT donor_name, amount, created_at FROM donations 
                       WHERE request_id = :request_id AND status = "completed" AND anonymous = FALSE
                       ORDER BY created_at DESC
                       LIMIT 10';

    $donationsStmt = $pdo->prepare($donationsQuery);
    $donationsStmt->execute([':request_id' => $request['id']]);
    $recent_donations = $donationsStmt->fetchAll(PDO::FETCH_ASSOC);

    // Get material help offers for this request
    $offersQuery = 'SELECT h.*, u.full_name as donor_name FROM help_offers h
                    JOIN users u ON h.user_id = u.id
                    WHERE h.request_id = :request_id
                    ORDER BY h.created_at DESC';
    $offersStmt = $pdo->prepare($offersQuery);
    $offersStmt->execute([':request_id' => $request['id']]);
    $help_offers = $offersStmt->fetchAll(PDO::FETCH_ASSOC);

    json_response([
        'status' => 'success',
        'data' => [
            'request' => $request,
            'related_requests' => $related_requests,
            'recent_donations' => $recent_donations,
            'help_offers' => $help_offers
        ]
    ]);

} catch (Exception $e) {
    json_response(['status' => 'error', 'message' => $e->getMessage()], 500);
}
