const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");

let showMenu = true;

menubtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (showMenu) {
    menubtn.classList.add("open");
    menu.classList.add("true");
    menuBranding.classList.add("true");
    menuNav.classList.add("true");
    showMenu = false;
  } else {
    menubtn.classList.remove("open");
    menu.classList.remove("true");
    menuBranding.classList.remove("true");
    menuNav.classList.remove("true");
    showMenu = true;
  }
}
