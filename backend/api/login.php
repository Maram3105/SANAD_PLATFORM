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

$input = json_decode(file_get_contents('php://input'), true);
$email = strtolower(trim((string) ($input['email'] ?? '')));
$password = (string) ($input['password'] ?? '');
$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';

if ($email === '' || $password === '') {
    json_response(['success' => false, 'message' => 'Identifiants invalides.'], 400);
}

if (is_rate_limited($pdo, $email, $ip, $config['max_login_attempts'], $config['login_window_minutes'])) {
    json_response(['success' => false, 'message' => 'Trop de tentatives.'], 429);
}

$stmt = $pdo->prepare('SELECT id, full_name, email, password_hash, role FROM users WHERE email = :email LIMIT 1');
$stmt->execute([':email' => $email]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    record_login_attempt($pdo, $email, $ip);
    json_response(['success' => false, 'message' => 'E-mail ou mot de passe incorrect'], 401);
}

clear_login_attempts($pdo, $email, $ip);

$associationStatus = null;
if ($user['role'] === 'association') {
    $statusStmt = $pdo->prepare('SELECT status FROM associations WHERE user_id = :user_id LIMIT 1');
    $statusStmt->execute([':user_id' => $user['id']]);
    $associationStatus = $statusStmt->fetchColumn() ?: 'pending';
}

$now = time();
$token = create_jwt(
    [
        'sub' => $user['id'],
        'role' => $user['role'],
        'iat' => $now,
        'iss' => $config['jwt_issuer'],
        'exp' => $now + ($config['jwt_exp_minutes'] * 60)
    ],
    $config['jwt_secret']
);

json_response([
    'success' => true,
    'role' => $user['role'],
    'fullName' => $user['full_name'],
    'associationStatus' => $associationStatus,
    'token' => $token
]);
