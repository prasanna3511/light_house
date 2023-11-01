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
define('DB_NAME', 'lighthu376511407_lighthouseouse');
define('DB_PORT', 3306);

// Create a new database connection
$connection = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME, DB_PORT);

// Check the connection
if ($connection->connect_error) {
    sendJson(500, 'Internal Server Error', ['error' => 'Database connection failed']);
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Check if a 'sub_service' parameter is provided in the GET request
    if (isset($_GET['sub_service'])) {
        // Sanitize the input to prevent SQL injection (you should use prepared statements for security)
        $subService = mysqli_real_escape_string($connection, $_GET['sub_service']);

        // Fetch data from the 'services' table where 'sub_service' matches the provided value
        $sql = "SELECT * FROM `services` WHERE `sub_service` = '$subService'";
        $result = mysqli_query($connection, $sql);

        if ($result) {
            $services = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $services[] = $row;
            }
            sendJson(200, 'Data fetched successfully', ['services' => $services]);
        } else {
            sendJson(500, 'Error fetching data');
        }
    } else {
        sendJson(400, 'Bad Request. The sub_service parameter is missing.');
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
