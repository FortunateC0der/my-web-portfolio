document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;

      const hamburger = document.getElementById("hamburger");
      const navLinks = document.getElementById("nav-links");
      if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
          navLinks.classList.toggle("show");
        });
      }
    });

  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    });
});
