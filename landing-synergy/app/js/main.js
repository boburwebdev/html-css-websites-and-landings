const projectsSwiper = new Swiper('.projects .swiper', {
  loop: true,
  slidesPerView: 1,
  updateOnWindowResize: true,
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },

  pagination: {
    el: '.projects-swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});