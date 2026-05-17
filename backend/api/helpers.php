<?php

declare(strict_types=1);

function json_response(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);
    header('Content-Type: application/json');
    echo json_encode($payload);
    exit;
}

function base64url_encode(string $data): string
{
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
}

function base64url_decode(string $data): string
{
    $remainder = strlen($data) % 4;
    if ($remainder !== 0) {
        $data .= str_repeat('=', 4 - $remainder);
    }
    return base64_decode(strtr($data, '-_', '+/')) ?: '';
}

function get_bearer_token(): ?string
{
    $header = $_SERVER['HTTP_AUTHORIZATION'] ?? $_SERVER['Authorization'] ?? '';

    if ($header === '' && function_exists('apache_request_headers')) {
        $headers = apache_request_headers();
        if (isset($headers['Authorization'])) {
            $header = $headers['Authorization'];
        }
    }

    if (preg_match('/Bearer\s+(.+)/i', $header, $matches)) {
        return trim($matches[1]);
    }

    return null;
}

function verify_jwt(string $token, string $secret): ?array
{
    $parts = explode('.', $token);
    if (count($parts) !== 3) {
        return null;
    }

    [$encodedHeader, $encodedPayload, $encodedSignature] = $parts;
    $signingInput = $encodedHeader . '.' . $encodedPayload;
    $expectedSignature = base64url_encode(hash_hmac('sha256', $signingInput, $secret, true));

    if (!hash_equals($expectedSignature, $encodedSignature)) {
        return null;
    }

    $payload = json_decode(base64url_decode($encodedPayload), true);
    if (!is_array($payload)) {
        return null;
    }

    if (isset($payload['exp']) && time() >= (int) $payload['exp']) {
        return null;
    }

    return $payload;
}

function create_jwt(array $payload, string $secret): string
{
    $header = ['alg' => 'HS256', 'typ' => 'JWT'];
    $segments = [
        base64url_encode(json_encode($header)),
        base64url_encode(json_encode($payload))
    ];
    $signingInput = implode('.', $segments);
    $signature = hash_hmac('sha256', $signingInput, $secret, true);
    $segments[] = base64url_encode($signature);
    return implode('.', $segments);
}

function is_rate_limited(PDO $pdo, string $email, string $ip, int $maxAttempts, int $windowMinutes): bool
{
    $stmt = $pdo->prepare(
        'SELECT COUNT(*) AS attempts FROM login_attempts WHERE email = :email AND ip_address = :ip AND created_at > (NOW() - INTERVAL :window MINUTE)'
    );
    $stmt->bindValue(':email', $email);
    $stmt->bindValue(':ip', $ip);
    $stmt->bindValue(':window', $windowMinutes, PDO::PARAM_INT);
    $stmt->execute();
    $count = (int) $stmt->fetchColumn();

    return $count >= $maxAttempts;
}

function record_login_attempt(PDO $pdo, string $email, string $ip): void
{
    $stmt = $pdo->prepare('INSERT INTO login_attempts (email, ip_address) VALUES (:email, :ip)');
    $stmt->execute([':email' => $email, ':ip' => $ip]);
}

function clear_login_attempts(PDO $pdo, string $email, string $ip): void
{
    $stmt = $pdo->prepare('DELETE FROM login_attempts WHERE email = :email AND ip_address = :ip');
    $stmt->execute([':email' => $email, ':ip' => $ip]);
}
