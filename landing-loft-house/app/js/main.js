const menuHamburger = document.querySelector(".header .nav__menu-hamburger");
const menuList = document.querySelector(".header .nav__menu-list");

menuHamburger.addEventListener("click", () => {
  menuList.classList.toggle("active");
});