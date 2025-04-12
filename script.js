// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing page
    alert("Thank you for your message!"); // Show thank you message
  });
  
  // Toggle navigation menu
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("active");
  });
  