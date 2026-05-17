<?php

declare(strict_types=1);

return [
    'db' => [
        'dsn' => 'mysql:host=localhost;dbname=sanad;charset=utf8mb4',
        'user' => 'root',
        'pass' => ''
    ],
    'jwt_secret' => 'replace_with_a_long_random_secret',
    'jwt_issuer' => 'sanad',
    'jwt_exp_minutes' => 60,
    'upload_dir' => __DIR__ . '/../uploads',
    'max_login_attempts' => 5,
    'login_window_minutes' => 15
];
