<?php
// Perform server-side validation and registration
if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $companyName = $_POST["company_name"];
  $email = $_POST["email"];
  $password = $_POST["password"];

  // Validate and sanitize the input fields

  // Check if the email is already registered in your database or other storage mechanism
  // Example code - Replace with your actual registration logic
  if ($email === "user@example.com") {
    // Email is already registered, display an error message or redirect to a failure page
    echo "Email already registered.";
  } else {
    // Registration successful, store user details in your database or other storage mechanism
    // Example code - Replace with your actual registration logic

    // Redirect to a success page or display a success message
    header("Location: login.html");
    exit();
  }
}
?>