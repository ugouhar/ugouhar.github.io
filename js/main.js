const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menu.classList.add("show");
    menuBtn.classList.add("close");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    //Set Menu State
    showMenu = true;
  } else {
    menu.classList.remove("show");
    menuBtn.classList.remove("close");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    //Set Menu State
    showMenu = false;
  }
}

var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true
});

typewriter
  .typeString("Software Engineer, ")
  .pauseFor(1000)
  .typeString("FrontEnd Developer, ")
  .pauseFor(1000)
  .start();
