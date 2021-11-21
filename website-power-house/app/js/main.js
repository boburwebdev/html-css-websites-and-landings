const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: false,

  slidesPerView: 'auto',
  updateOnWindowResize: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  

  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },

});

swiper();