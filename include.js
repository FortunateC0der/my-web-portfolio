document.addEventListener("DOMContentLoaded", () => {
  // Load Header
  fetch("header.html")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load header");
      return res.text();
    })
    .then(data => {
      document.getElementById("include-header").innerHTML = data;

      // Hamburger toggle setup
      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("nav-links");
      if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("show");
        });
      }
    })
    .catch(err => {
      console.error(err);
    });

  // Load Footer
  fetch("footer.html")
    .then(res => {
      if (!res.ok) throw new Error("Failed to load footer");
      return res.text();
    })
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    })
    .catch(err => {
      console.error(err);
    });
});
