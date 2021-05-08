// Show mobile menu when we click a link
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  mobileNav.classList.toggle("active");
}

// Close when we click a link
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  mobileNav.classList.remove("active");
}
