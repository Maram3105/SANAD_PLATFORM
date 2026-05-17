<?php

declare(strict_types=1);

require_once __DIR__ . '/helpers.php';

function authenticate_request(PDO $pdo, array $config, array $allowedRoles = []): array
{
    $token = get_bearer_token();
    if (!$token) {
        json_response(['success' => false, 'message' => 'Authentification requise.'], 401);
    }

    $payload = verify_jwt($token, $config['jwt_secret']);
    if (!$payload) {
        json_response(['success' => false, 'message' => 'Jeton invalide.'], 401);
    }

    $userId = (int) ($payload['sub'] ?? 0);
    $role = (string) ($payload['role'] ?? '');

    if ($userId <= 0 || $role === '') {
        json_response(['success' => false, 'message' => 'Authentification invalide.'], 401);
    }

    if ($allowedRoles && !in_array($role, $allowedRoles, true)) {
        json_response(['success' => false, 'message' => 'Acces refuse.'], 403);
    }

    $stmt = $pdo->prepare('SELECT id, full_name, email, role FROM users WHERE id = :id LIMIT 1');
    $stmt->execute([':id' => $userId]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$user) {
        json_response(['success' => false, 'message' => 'Utilisateur introuvable.'], 401);
    }

    return ['user' => $user, 'role' => $role];
}

function require_association(PDO $pdo, array $config, bool $requireApproved = true): array
{
    $auth = authenticate_request($pdo, $config, ['association']);

    $stmt = $pdo->prepare('SELECT * FROM associations WHERE user_id = :user_id LIMIT 1');
    $stmt->execute([':user_id' => $auth['user']['id']]);
    $association = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$association) {
        json_response(['success' => false, 'message' => 'Association introuvable.'], 403);
    }

    if ($requireApproved && $association['status'] !== 'approved') {
        json_response(['success' => false, 'message' => 'Association non approuvee.'], 403);
    }

    return ['user' => $auth['user'], 'association' => $association];
}

function store_upload(
    array $file,
    array $config,
    string $prefix,
    array $allowedExtensions,
    int $maxSizeBytes = 5242880
): string {
    if ($file['error'] !== UPLOAD_ERR_OK) {
        json_response(['success' => false, 'message' => 'Televersement invalide.'], 400);
    }

    if ($file['size'] > $maxSizeBytes) {
        json_response(['success' => false, 'message' => 'Fichier trop volumineux.'], 400);
    }

    $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($extension, $allowedExtensions, true)) {
        json_response(['success' => false, 'message' => 'Format de fichier invalide.'], 400);
    }

    if (!is_dir($config['upload_dir'])) {
        mkdir($config['upload_dir'], 0775, true);
    }

    $filename = uniqid($prefix . '_', true) . '.' . $extension;
    $path = $config['upload_dir'] . '/' . $filename;

    if (!move_uploaded_file($file['tmp_name'], $path)) {
        json_response(['success' => false, 'message' => 'Impossible de sauvegarder le fichier.'], 500);
    }

    return $filename;
}
