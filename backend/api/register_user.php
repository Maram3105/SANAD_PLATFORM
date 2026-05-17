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
require __DIR__ . '/helpers.php';

$input = json_decode(file_get_contents('php://input'), true);
$fullName = trim((string) ($input['fullName'] ?? ''));
$email = strtolower(trim((string) ($input['email'] ?? '')));
$password = (string) ($input['password'] ?? '');
$phone = trim((string) ($input['phone'] ?? ''));

if ($fullName === '' || $email === '' || $password === '') {
    json_response(['success' => false, 'message' => 'Champs obligatoires manquants.'], 400);
}

$exists = $pdo->prepare('SELECT id FROM users WHERE email = :email');
$exists->execute([':email' => $email]);
if ($exists->fetchColumn()) {
    json_response(['success' => false, 'message' => 'E-mail deja utilise.'], 409);
}

$hash = password_hash($password, PASSWORD_BCRYPT);

$stmt = $pdo->prepare(
    'INSERT INTO users (full_name, email, password_hash, phone, role) VALUES (:full_name, :email, :password_hash, :phone, :role)'
);
$stmt->execute([
    ':full_name' => $fullName,
    ':email' => $email,
    ':password_hash' => $hash,
    ':phone' => $phone !== '' ? $phone : null,
    ':role' => 'user'
]);

json_response(['success' => true]);
