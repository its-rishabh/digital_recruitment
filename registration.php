<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $companyName = $_POST["company_name"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  if ($email === "user@example.com") {

    echo "Email already registered.";
  } else {

    header("Location: login.html");
    exit();
  }
}
?>