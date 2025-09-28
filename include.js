document.addEventListener("DOMContentLoaded", () => {
  // ===== Load header =====
  fetch("header.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-header").innerHTML = data;

      const hamburger = document.getElementById("hamburger");
      const navLinksContainer = document.getElementById("nav-links");

      if (hamburger && navLinksContainer) {
        // Toggle menu on hamburger click
        hamburger.addEventListener("click", () => {
          hamburger.classList.toggle("active");
          navLinksContainer.classList.toggle("show");
        });

        // Close menu when a nav link is clicked
        const navItems = navLinksContainer.querySelectorAll("a");
        navItems.forEach(link => {
          link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinksContainer.classList.remove("show");
          });
        });
      }
    });

  // ===== Load footer =====
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("include-footer").innerHTML = data;
    });

  // ===== Skill icon click handling =====
  const skillIcons = document.querySelectorAll('.dev-icons i');
  skillIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      skillIcons.forEach(i => i.classList.remove('clicked'));
      icon.classList.add('clicked');
    });
  });
});

// ===== Image popup logic =====
function openImagePopup(imageSrc, title) {
  const popup = document.getElementById('imagePopup');
  const popupImage = document.getElementById('popupImage');
  const popupTitle = document.getElementById('popupTitle');

  popupImage.src = imageSrc;
  popupTitle.textContent = title;
  popup.style.display = 'flex';

  document.body.style.overflow = 'hidden';
}

function closeImagePopup() {
  const popup = document.getElementById('imagePopup');
  popup.style.display = 'none';
  document.body.style.overflow = 'auto';
}

document.getElementById('imagePopup').addEventListener('click', e => {
  if (e.target === e.currentTarget) closeImagePopup();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeImagePopup();
});

// ===== Section navigation logic =====
// JavaScript to toggle active class for nav links based on scroll or click
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

function activateLink() {
  let index = sections.length;

  while (--index && window.scrollY + 70 < sections[index].offsetTop) {} // 70 to consider header height

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}

window.addEventListener('scroll', activateLink);

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

activateLink(); // Initialize on load