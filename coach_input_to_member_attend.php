<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "cheerleading";

//create a connection
$conn = new mysqli($servername,$username,$password,$dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function sanitizeInput($data) {
    $data = trim($data);
    $data = stripslashes($data);
    return $data;
}

function storeRating($conn, $rating) {
    $sql = "INSERT INTO input_feedback (RATING) VALUES (?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $rating);
    try {
        $result = $stmt->execute();
        if ($result) {
            
        } else {
            throw new Exception("Error saving rating: " . $conn->error);
        }
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
    $stmt->close();
}

$rating = isset($_POST["rating"]) ? (int) sanitizeInput($_POST["rating"]) : 0;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    storeRating($conn, $rating);

    
    var_dump($rating);
    
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $sess_date = $_POST["sess_date"];
    $comment = $_POST["comment"];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO input_feedback (date, comment) VALUES (?, ?)");
    $stmt->bind_param("ss", $sess_date, $comment);

}

$conn->close();

?>