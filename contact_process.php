<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "altheamargaret9@gmail.com";  // Replace with your actual email address
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $mailBody = "Name: $name\n";
    $mailBody .= "Phone: $phone\n";
    $mailBody .= "Email: $email\n";
    $mailBody .= "Message:\n$message";

    mail($to, $subject, $mailBody, $headers);

    // Display a success message
    echo "Thank you for your submission! We will get back to you soon.";
    
    // Alternatively, you can redirect to another page after displaying the message
    // header("Location: success_page.html");
    // exit();
}
?>