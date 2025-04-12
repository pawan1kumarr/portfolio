// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing page
    alert("Thank you for your message!"); // Show thank you message
  });
  
  // Toggle navigation menu
  document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav").classList.toggle("active");
  });

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => el.classList.remove("visible")); // Reset visibility on page load

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    elements.forEach(el => observer.observe(el));
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  