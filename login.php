<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

define('DB_HOST','127.0.0.1:3306');
define('DB_USERNAME','u376511407_lighthouse');
define('DB_PASSWORD','Lighthouse@2024');
define('DB_NAME','u376511407_lighthouse');
define('DB_PORT',3306);

// Create a new database connection
$connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);

// Check the connection
if ($connection->connect_error) {
    sendJson(500, 'Internal Server Error', ['error' => 'Database connection failed']);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'));

    if (
        !isset($data->email) ||
        !isset($data->password) ||
        empty(trim($data->email)) ||
        empty(trim($data->password))
    ) {
        sendJson(
            422,
            'Please fill all the required fields & None of the fields should be empty.',
            ['required_fields' => ['email', 'password']]
        );
    }

    $email = mysqli_real_escape_string($connection, trim($data->email));
    $password = trim($data->password);

    $sql = "SELECT * FROM `users` WHERE `email`='$email'";
    $query = mysqli_query($connection, $sql);
    $row = mysqli_fetch_array($query, MYSQLI_ASSOC);

    if ($row === null) {
        sendJson(404, 'User not found! (Email is not registered)');
    }

    // Compare the plain text password
    if ($password !== $row['password']) {
        sendJson(401, 'Incorrect Password!');
    }

    sendJson(200, 'Login successful');
} else {
    sendJson(405, 'Invalid Request Method. HTTP method should be POST');
}

function sendJson($status, $message) {
    http_response_code($status);
    echo json_encode(['message' => $message]);
    exit;
}
?>
