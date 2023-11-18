const headerNavHamburger = document.querySelector(".header .nav__hamburger");
const menuOverlay = document.querySelector(".header .overlay");
const mobileNav = document.querySelector(".header .nav__mobile");
const btnCloseMobileNav = document.querySelector(".header .btn__close-nav");

headerNavHamburger.addEventListener("click", () => {
  menuOverlay.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

btnCloseMobileNav.addEventListener("click", closeMobileNav);
menuOverlay.addEventListener("click", closeMobileNav);

function closeMobileNav() {
  menuOverlay.classList.remove("active");
  mobileNav.classList.remove("active");
}