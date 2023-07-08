<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $email = $_POST["email"];
  $password = $_POST["password"];


  if ($email === "rishabh@example.com" && $password === "password123") {

    session_start();
    $_SESSION["email"] = $email;
    header("Location: dashboard.php");
    exit();
  } else {
    
    echo "Invalid username or password.";
  }
}
?>