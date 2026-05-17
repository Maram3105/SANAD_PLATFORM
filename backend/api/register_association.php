<?php

declare(strict_types=1);

// Enable CORS
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$pdo = require __DIR__ . '/db.php';
$config = require __DIR__ . '/config.php';
require __DIR__ . '/helpers.php';

$organizationName = trim((string) ($_POST['organizationName'] ?? ''));
$responsibleName = trim((string) ($_POST['responsibleName'] ?? ''));
$email = strtolower(trim((string) ($_POST['email'] ?? '')));
$password = (string) ($_POST['password'] ?? '');
$phone = trim((string) ($_POST['phone'] ?? ''));
$location = trim((string) ($_POST['location'] ?? ''));
$description = trim((string) ($_POST['description'] ?? ''));

if (
    $organizationName === '' ||
    $responsibleName === '' ||
    $email === '' ||
    $password === '' ||
    $phone === '' ||
    $location === '' ||
    $description === ''
) {
    json_response(['success' => false, 'message' => 'Champs obligatoires manquants.'], 400);
}

if (!isset($_FILES['document'])) {
    json_response(['success' => false, 'message' => 'Document de verification requis.'], 400);
}

$exists = $pdo->prepare('SELECT id FROM users WHERE email = :email');
$exists->execute([':email' => $email]);
if ($exists->fetchColumn()) {
    json_response(['success' => false, 'message' => 'E-mail deja utilise.'], 409);
}

$document = $_FILES['document'];
if ($document['error'] !== UPLOAD_ERR_OK) {
    json_response(['success' => false, 'message' => 'Impossible de televerser le document.'], 400);
}

$allowed = ['pdf', 'png', 'jpg', 'jpeg'];
$extension = strtolower(pathinfo($document['name'], PATHINFO_EXTENSION));
if (!in_array($extension, $allowed, true)) {
    json_response(['success' => false, 'message' => 'Format de document invalide.'], 400);
}

if (!is_dir($config['upload_dir'])) {
    mkdir($config['upload_dir'], 0775, true);
}

$documentName = uniqid('doc_', true) . '.' . $extension;
$documentPath = $config['upload_dir'] . '/' . $documentName;

if (!move_uploaded_file($document['tmp_name'], $documentPath)) {
    json_response(['success' => false, 'message' => 'Impossible d\'enregistrer le document.'], 500);
}

$hash = password_hash($password, PASSWORD_BCRYPT);

// Generate unique slug
$baseSlug = strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $organizationName), '-'));
$slug = $baseSlug;
$counter = 1;
while (true) {
    $stmt = $pdo->prepare('SELECT id FROM associations WHERE slug = :slug');
    $stmt->execute([':slug' => $slug]);
    if (!$stmt->fetch()) {
        break;
    }
    $slug = $baseSlug . '-' . $counter++;
}

try {
    $pdo->beginTransaction();

    $userStmt = $pdo->prepare(
        'INSERT INTO users (full_name, email, password_hash, phone, role) VALUES (:full_name, :email, :password_hash, :phone, :role)'
    );
    $userStmt->execute([
        ':full_name' => $responsibleName,
        ':email' => $email,
        ':password_hash' => $hash,
        ':phone' => $phone,
        ':role' => 'association'
    ]);

    $userId = (int) $pdo->lastInsertId();

    $assocStmt = $pdo->prepare(
        'INSERT INTO associations (user_id, organization_name, slug, responsible_name, phone, email, location, description, document_path, status) VALUES (:user_id, :organization_name, :slug, :responsible_name, :phone, :email, :location, :description, :document_path, :status)'
    );
    $assocStmt->execute([
        ':user_id' => $userId,
        ':organization_name' => $organizationName,
        ':slug' => $slug,
        ':responsible_name' => $responsibleName,
        ':phone' => $phone,
        ':email' => $email,
        ':location' => $location,
        ':description' => $description,
        ':document_path' => $documentName,
        ':status' => 'pending'
    ]);

    $pdo->commit();
} catch (Throwable $exception) {
    $pdo->rollBack();
    // Delete uploaded file if DB fails
    if (file_exists($documentPath)) {
        unlink($documentPath);
    }
    json_response(['success' => false, 'message' => 'Impossible de soumettre la demande : ' . $exception->getMessage()], 500);
}

json_response(['success' => true]);
