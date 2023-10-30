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
    // Handle GET requests (Fetch)
    $position = $_GET['position']; // Replace 'position' with the actual parameter name

    // Modify the SQL query to fetch data from 'about' where 'position' matches the value
    $sql = "SELECT * FROM `about` WHERE `position` = '$position'";
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
}
 elseif ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Handle POST requests (Insert)
    $data = json_decode(file_get_contents('php://input'));

    if (
        !isset($data->title) ||
        !isset($data->short_description) ||
        !isset($data->long_description) ||
        !isset($data->position)
    ) {
        sendJson(
            422,
            'Please provide all the required fields: title, short_description, long_description, position',
            ['required_fields' => ['title', 'short_description', 'long_description', 'position']]
        );
    }

    $title = mysqli_real_escape_string($connection, trim($data->title));
    $short_description = mysqli_real_escape_string($connection, trim($data->short_description));
    $long_description = mysqli_real_escape_string($connection, trim($data->long_description));
    $position = mysqli_real_escape_string($connection, trim($data->position));

    // Insert data into the 'about' table
    $sql = "INSERT INTO `about` (`title`, `short_description`, `long_description`, `position`) VALUES ('$title', '$short_description', '$long_description', '$position')";

    if (mysqli_query($connection, $sql)) {
        sendJson(200, 'Data inserted successfully', ['title' => $title, 'short_description' => $short_description, 'long_description' => $long_description, 'position' => $position]);
    } else {
        sendJson(500, 'Error inserting data');
    }
} elseif ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // Handle PUT requests (Update)
    $data = json_decode(file_get_contents('php://input'));

    if (
        !isset($data->id) || // ID to identify the row to update
        !isset($data->title) ||
        !isset($data->short_description) ||
        !isset($data->long_description) ||
        !isset($data->position)
    ) {
        sendJson(
            422,
            'Please provide all the required fields: id, title, short_description, long_description, position',
            ['required_fields' => ['id', 'title', 'short_description', 'long_description', 'position']]
        );
    }

    $id = mysqli_real_escape_string($connection, trim($data->id));
    $title = mysqli_real_escape_string($connection, trim($data->title));
    $short_description = mysqli_real_escape_string($connection, trim($data->short_description));
    $long_description = mysqli_real_escape_string($connection, trim($data->long_description));
    $position = mysqli_real_escape_string($connection, trim($data->position));

    // Update data in the 'about' table based on the ID
    $sql = "UPDATE `about` SET `title`='$title', `short_description`='$short_description', `long_description`='$long_description', `position`='$position' WHERE `id`='$id'";

    if (mysqli_query($connection, $sql)) {
        sendJson(200, 'Data updated successfully', ['id' => $id, 'title' => $title, 'short_description' => $short_description, 'long_description' => $long_description, 'position' => $position]);
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

    // Delete data from the 'about' table based on the provided ID
    $sql = "DELETE FROM `about` WHERE `id` = '$id'";

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
