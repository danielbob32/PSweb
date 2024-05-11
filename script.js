document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-icon');
  if (hamburger) {
      hamburger.addEventListener('click', function() {
          this.classList.toggle('active');
          const menuLinks = document.querySelector('.menu-links');
          if (menuLinks.style.transform === "translateY(0%)") {
              menuLinks.style.transform = "translateY(-100%)";
              menuLinks.style.display = "none";
          } else {
              menuLinks.style.transform = "translateY(0%)";
              menuLinks.style.display = "block";
          }
      });
  }
});
