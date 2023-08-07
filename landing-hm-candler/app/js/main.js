const headerMenuHamburger = document.querySelector(".header .nav__menu-hamburger");
const headerNavMenu = document.querySelector(".header .nav__menu");

headerMenuHamburger.addEventListener("click", () => {
  headerNavMenu.classList.toggle("active");
})