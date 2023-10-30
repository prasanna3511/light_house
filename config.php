<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'admin');
define('DB_DATABASE', 'lighthouse');

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
