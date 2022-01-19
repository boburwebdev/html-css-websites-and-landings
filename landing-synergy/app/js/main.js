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

const testimonialsSwiper = new Swiper('.testimonials .swiper', {
  loop: true,
  slidesPerView: 1,
  updateOnWindowResize: true,
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },

  pagination: {
    el: '.testimonials-swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});