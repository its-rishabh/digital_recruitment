function validateForm(event) {
    event.preventDefault();
  
    var email = document.getElementById("emailInput").value;
    var password = document.getElementById("passwordInput").value;
  
    if (email === "rishabh@example.com" && password === "password123") {
      alert("Login successful!");
      window.location.href = "dashboard.html";
      
    } else {
      alert("Invalid email or password!");
    }
  }