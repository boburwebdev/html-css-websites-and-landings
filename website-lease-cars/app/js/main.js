const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.hero__slider-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


const chooseCarsTabsHeadings = document.querySelectorAll(".choose-car__tabs-headings-item");
const chooseCarsTabsBodyItems = document.querySelectorAll(".choose-car__tabs-body-item");
chooseCarsTabsHeadings.forEach((tabsHeading, idx) => {
  tabsHeading.addEventListener("click", () => {
    chooseCarsTabsHeadings.forEach(heading => heading.classList.remove("active"));
    chooseCarsTabsBodyItems.forEach(bodyItem => bodyItem.classList.remove("active"));

    tabsHeading.classList.add("active");
    chooseCarsTabsBodyItems[idx].classList.add("active");
  });
});


const menuHamburger = document.querySelector(".header .nav__menu-hamburger");
const headerNavMenu = document.querySelector(".header .nav__menu");
menuHamburger.addEventListener("click", () => {
  headerNavMenu.classList.toggle("show");
});