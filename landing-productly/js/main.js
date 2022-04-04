$(function(){
  $('.blog__slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    dotsClass: 'blog__slider-dots',
    responsive: [
      {
        breakpoint: 920,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.menu__hamburger').on('click', function() {
    $('.menu__list').toggleClass('show');
    $('.header__auth-list').removeClass('show');
  })
  
  $('.header__auth-icon').on('click', function() {
    $('.menu__list').removeClass('show');
    $('.header__auth-list').toggleClass('show');
  })
});