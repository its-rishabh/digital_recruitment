document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    var name = document.getElementById("nameInput").value;
    var email = document.getElementById("emailInput").value;
    var message = document.getElementById("messageInput").value;
  
    var formData = {
      name: name,
      email: email,
      message: message
    };
  
    fetch("contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(function (response) {
      if (response.ok) {
        alert("Message sent successfully!");
        document.getElementById("nameInput").value = "";
        document.getElementById("emailInput").value = "";
        document.getElementById("messageInput").value = "";
      } else {
        alert("An error occurred. Please try again.");
      }
    })
    .catch(function (error) {
      console.log("Error:", error);
      alert("An error occurred. Please try again.");
    });
  });
  