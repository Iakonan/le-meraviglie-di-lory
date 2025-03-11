<?php

return [
    'paths' => ['api/*'], // Applica CORS solo alle API
    'allowed_methods' => ['*'], // Permetti tutti i metodi (GET, POST, PUT, DELETE, ecc.)
    'allowed_origins' => ['*'], // Puoi specificare 'http://localhost:5173' per maggiore sicurezza
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
