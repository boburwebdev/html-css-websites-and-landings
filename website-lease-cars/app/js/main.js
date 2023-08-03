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