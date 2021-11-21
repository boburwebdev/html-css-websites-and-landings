const membershipSwiper = new Swiper('.membership .swiper', {
  loop: false,
  slidesPerView: 'auto',
  updateOnWindowResize: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },
});

const trainersSwiper = new Swiper('.trainers .swiper', {
  loop: true,
  slidesPerView: 1,
  updateOnWindowResize: true,

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },
});

membershipSwiper();
trainersSwiper();