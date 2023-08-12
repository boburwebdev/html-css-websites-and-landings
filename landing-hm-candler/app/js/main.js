const headerMenuHamburger = document.querySelector(".header .nav__menu-hamburger");
const headerNavMenu = document.querySelector(".header .nav__menu");

headerMenuHamburger.addEventListener("click", () => {
  headerNavMenu.classList.toggle("active");
});

const swiper = new Swiper('.feedbacks__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
});