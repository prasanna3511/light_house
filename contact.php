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

define('DB_HOST', '127.0.0.1:3306');
define('DB_USERNAME', 'u376511407_lighthouse');
define('DB_PASSWORD', 'Lighthouse@2024');
define('DB_NAME', 'u376511407_lighthouse');
define('DB_PORT', 3306);

// Create a new database connection
$connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);

// Check the connection
if ($connection->connect_error) {
    sendJson(500, 'Internal Server Error', ['error' => 'Database connection failed']);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'));

    if (
        !isset($data->name) || 
        !isset($data->email) || 
        !isset($data->phone) || 
        !isset($data->type) || 
        empty(trim($data->name)) || 
        empty(trim($data->email)) || 
        empty(trim($data->phone)) || 
        empty(trim($data->type))
    ) {
        sendJson(
            422,
            'Please fill all required fields: name, email, phone, type',
            ['required_fields' => ['name', 'email', 'phone', 'type']]
        );
    }

    $name = mysqli_real_escape_string($connection, trim($data->name));
    $email = mysqli_real_escape_string($connection, trim($data->email));
    $phone = mysqli_real_escape_string($connection, trim($data->phone));
    $type = mysqli_real_escape_string($connection, trim($data->type));

    // Insert data into the 'contact' table
    $sql = "INSERT INTO `contact` (name, email, phone, type) VALUES ('$name', '$email', '$phone', '$type')";

    if (mysqli_query($connection, $sql)) {
        sendJson(201, 'Data inserted successfully');
    } else {
        sendJson(500, 'Error inserting data');
    }
} else {
    sendJson(405, 'Invalid Request Method. HTTP method should be POST');
}

function sendJson($status, $message, $data = []) {
    http_response_code($status);
    echo json_encode(['message' => $message, 'data' => $data]);
    exit;
}
?>
