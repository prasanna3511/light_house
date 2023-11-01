<?php
define('DB_SERVER', '127.0.0.1:3306');
define('DB_USERNAME', 'u376511407_lighthouse');
define('DB_PASSWORD', 'Lighthouse@2024');
define('DB_DATABASE', 'u376511407_lighthouse');

// Attempt to connect to the database
$db = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_DATABASE);

// Check if the connection was successful
if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected to the database successfully!";
}

// You can now perform database operations using the $db connection.
?>
