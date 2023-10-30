<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods:  GET, POST, PUT, DELETE");
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

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Check if 'title' and 'category' parameters are provided in the GET request
    if (isset($_GET['title']) && isset($_GET['category'])) {
        // Sanitize the input to prevent SQL injection (you should use prepared statements for security)
        $title = mysqli_real_escape_string($connection, $_GET['title']);
        $category = mysqli_real_escape_string($connection, $_GET['category']);

        // Fetch data from the 'service_page' table where 'title' and 'category' match the provided values
        $sql = "SELECT * FROM `service_page` WHERE `title` = '$title' AND `category` = '$category'";
        $result = mysqli_query($connection, $sql);

        if ($result) {
            $serviceData = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $serviceData[] = $row;
            }
            sendJson(200, 'Data fetched successfully', ['services' => $serviceData]);
        } else {
            sendJson(500, 'Error fetching data');
        }
    } else {
        sendJson(400, 'Bad Request. The title and category parameters are missing.');
    }
}
 elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // Handle PUT requests (Update)
    $data = json_decode(file_get_contents('php://input'));

    if (
        !isset($data->id) || // ID to identify the row to update
        !isset($data->value) 
    ) {
        sendJson(
            422,
            'Please provide all the required fields: id, title, short_description, long_description, position',
            ['required_fields' => ['id', 'title', 'short_description', 'long_description', 'position']]
        );
    }

    $id = mysqli_real_escape_string($connection, trim($data->id));
    $value = mysqli_real_escape_string($connection, trim($data->value));
       // Update data in the 'about' table based on the ID
    $sql = "UPDATE `service_page` SET `value`='$value' WHERE `id`='$id'";

    if (mysqli_query($connection, $sql)) {
        sendJson(200, 'Data updated successfully', ['id' => $id, 'value' => $value]);
    } else {
        sendJson(500, 'Error updating data');
    }
} else {
    sendJson(405, 'Invalid Request Method.');
}

function sendJson($status, $message, $data = []) {
    http_response_code($status);
    echo json_encode(['message' => $message, 'data' => $data]);
    exit;
}
?>
