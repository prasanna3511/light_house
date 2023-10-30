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

define('DB_HOST', 'localhost');
define('DB_USERNAME', 'admin');
define('DB_PASSWORD', 'admin');
define('DB_NAME', 'lighthouse');
define('DB_PORT', 3306);

// Create a new database connection
$connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);

// Check the connection
if ($connection->connect_error) {
    sendJson(500, 'Internal Server Error', ['error' => 'Database connection failed']);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Fetch all data from the 'product' table
    $sql = "SELECT * FROM `product`";
    $result = mysqli_query($connection, $sql);

    if ($result) {
        $product = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $product[] = $row;
        }
        sendJson(200, 'Data fetched successfully', ['product' => $product]);
    } else {
        sendJson(500, 'Error fetching data');
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
