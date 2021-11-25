const membershipSwiper = new Swiper('.membership .swiper', {
  loop: false,
  slidesPerView: 'auto',
  updateOnWindowResize: true,

  pagination: {
    el: '.membership-swiper-pagination',
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
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },
});

const newsSwiper = new Swiper('.news .swiper', {
  loop: false,
  slidesPerView: 'auto',
  updateOnWindowResize: true,
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.news-swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 1
  },
});


membershipSwiper();
trainersSwiper();
newsSwiper();