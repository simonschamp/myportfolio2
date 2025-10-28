"use strict";

//Select Document Object Model(DOM) items
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
var menuBranding = document.querySelector(".menu-branding");
var navItems = document.querySelectorAll(".nav-item"); //Set Initial state of Menu

var showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(function (item) {
      return item.classList.add("show");
    }); // Set Menu State

    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(function (item) {
      return item.classList.remove("show");
    }); //Set Menu State

    showMenu = false;
  }
}
//# sourceMappingURL=main.dev.js.map
