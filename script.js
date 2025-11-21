/* -----------------------
   DESKTOP DROPDOWNS
------------------------ */
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((drop) => {
  const btn = drop.querySelector(".drop-btn");

  btn.addEventListener("click", () => {
    drop.classList.toggle("show");

    // close others
    dropdowns.forEach((other) => {
      if (other !== drop) other.classList.remove("show");
    });
  });
});

/* Click outside to close dropdowns */
document.addEventListener("click", (e) => {
  if (!e.target.closest(".dropdown")) {
    dropdowns.forEach((d) => d.classList.remove("show"));
  }
});

/* -----------------------
   MOBILE NAV MENU
------------------------ */
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
const mobileNav = document.querySelector(".mobile-nav");
const mobileOverlay = document.querySelector(".mobile-nav-overlay");
const closeMenuBtn = document.querySelector(".close-menu");

mobileMenuBtn.addEventListener("click", () => {
  mobileNav.classList.add("open");
  mobileOverlay.classList.add("show");
});

closeMenuBtn.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  mobileOverlay.classList.remove("show");
});

mobileOverlay.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  mobileOverlay.classList.remove("show");
});

/* -----------------------
   MOBILE DROPDOWNS
------------------------ */
const mobileDropdowns = document.querySelectorAll(".mobile-dropdown");

mobileDropdowns.forEach((drop) => {
  const btn = drop.querySelector(".mobile-drop-btn");

  btn.addEventListener("click", () => {
    drop.classList.toggle("open");

    // close others
    mobileDropdowns.forEach((other) => {
      if (other !== drop) other.classList.remove("open");
    });
  });
});
