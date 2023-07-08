<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $errors = [];

  if (empty($name)) {
    $errors[] = "Name is required.";
  }

  if (empty($email)) {
    $errors[] = "Email is required.";
  } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = "Invalid email format.";
  }

  if (empty($message)) {
    $errors[] = "Message is required.";
  }

  if (!empty($errors)) {
    session_start();
    $_SESSION["errors"] = $errors;
    header("Location: index.html#contact");
    exit();
  }

  session_start();
  $_SESSION["success"] = "Your message has been sent!";
  header("Location: index.html#contact");
  exit();
} else {

    header("Location: index.html#contact");
  exit();
}
?>
