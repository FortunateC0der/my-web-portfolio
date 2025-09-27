document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;

      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("nav-links");

      if (hamburger && navLinks) {
        // Toggle menu on hamburger click
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navLinks.classList.toggle("show");
        });

        // Close menu when a nav link is clicked
        const navItems = navLinks.querySelectorAll("a");
        navItems.forEach(link => {
          link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("show");
          });
        });
      }
    });

  // Load footer
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    });

  // Skill icon click handling
  const skillIcons = document.querySelectorAll('.dev-icons i');

  skillIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      // Remove 'clicked' class from all other icons
      skillIcons.forEach(i => i.classList.remove('clicked'));
      
      // Add 'clicked' class to the clicked icon
      icon.classList.add('clicked');
    });
  });
});
