<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
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

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Handle GET requests (Fetch)
    // $type = $_GET['type']; // Add validation if needed

    // Fetch data from the 'home' table based on the 'position'
    $sql = "SELECT * FROM `home`";
    $result = mysqli_query($connection, $sql);

    if ($result) {
        $cards = [];
        while ($row = mysqli_fetch_assoc($result)) {
            $cards[] = $row;
        }
        sendJson(200, 'Data fetched successfully', ['cards' => $cards]);
    } else {
        sendJson(500, 'Error fetching data');
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Handle POST requests (Insert)
    $data = json_decode(file_get_contents('php://input'));

    if (
        !isset($data->header) ||
        !isset($data->description) ||
        !isset($data->title) 
    ) {
        sendJson(
            422,
            'Please provide all the required fields: header, description, title, ',
            ['required_fields' => ['header', 'description', 'title']]
        );
    }

    $header = mysqli_real_escape_string($connection, trim($data->header));
    $description = mysqli_real_escape_string($connection, trim($data->description));
    $title = mysqli_real_escape_string($connection, trim($data->title));

    // Insert data into the 'home' table
    $sql = "INSERT INTO `home` (`header`, `description`, `title`) VALUES ('$header', '$description', '$title')";

    if (mysqli_query($connection, $sql)) {
        sendJson(200, 'Data inserted successfully', ['header' => $header, 'description' => $description, 'title' => $title]);
    } else {
        sendJson(500, 'Error inserting data');
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // Handle PUT requests (Update)
    $data = json_decode(file_get_contents('php://input'));

    if (
        !isset($data->id) || // ID to identify the row to update
        // !isset($data->header) ||
        !isset($data->description) 
        // !isset($data->title) 
    ) {
        sendJson(
            422,
            'Please provide all the required fields: id, header, description, title',
            ['required_fields' => ['id', 'header', 'description', 'title']]
        );
    }

    $id = mysqli_real_escape_string($connection, trim($data->id));
    $description = mysqli_real_escape_string($connection, trim($data->description));
    // $title = mysqli_real_escape_string($connection, trim($data->title));

    // Update data in the 'home' table based on the ID
    $sql = "UPDATE `home` SET  `description`='$description' WHERE `id`='$id'";

    if (mysqli_query($connection, $sql)) {
        sendJson(200, 'Data updated successfully', ['id' => $id,  'description' => $description]);
    } else {
        sendJson(500, 'Error updating data');
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    // Handle DELETE requests (Delete)
    $data = json_decode(file_get_contents('php://input'));

    if (!isset($data->id) || empty(trim($data->id))) {
        sendJson(
            422,
            'Please provide the ID to delete the record.',
            ['required_fields' => ['id']]
        );
    }

    $id = mysqli_real_escape_string($connection, trim($data->id));

    // Delete data from the 'home' table based on the provided ID
    $sql = "DELETE FROM `home` WHERE `id` = '$id'";

    if (mysqli_query($connection, $sql)) {
        sendJson(200, 'Data deleted successfully');
    } else {
        sendJson(500, 'Error deleting data');
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
