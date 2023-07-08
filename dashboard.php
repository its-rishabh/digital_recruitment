<?php

session_start();
if (!isset($_SESSION["email"])) {

  header("Location: login.html");
  exit();
}
?>

<!DOCTYPE html>
<html>
<head>
  <title>Dashboard</title>
  <link rel="icon" type="inage/icon" href="images/icon.png">
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" type="text/css" href="styles.css">
</head>
<body>
  <header>
    <nav>
      
      <ul>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Candidates</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="logout.php">Logout</a></li>
      </ul>
    </nav>
  </header>

  <section class="dashboard">
    <div class="container">
      <h1>Welcome to Your Dashboard</h1>

    </div>
  </section>

  <footer>
    <p>&copy; 2023 Recruitment Solution. All rights reserved.</p>
  </footer>
</body>
</html>
