//Get the Items (Initiating them)
let menuBtn = document.querySelector(".menuButton");
let menu = document.querySelector(".menu");
let menuNav = document.querySelector(".menu-nav");
let menuBranding = document.querySelector(".menu-Brand");
let navItems = document.querySelectorAll(".nav-item");

//Initial state of the Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    // Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    // Alternate Menu State
    showMenu = false;
  }
}
