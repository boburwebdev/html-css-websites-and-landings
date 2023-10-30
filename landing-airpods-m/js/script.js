const navHamburger = document.querySelector(".nav__hamburger");

navHamburger.addEventListener("click", toggleMenu);

function toggleMenu() {
  const navList = document.querySelector(".nav__list");
  navList.classList.toggle("hide");
}