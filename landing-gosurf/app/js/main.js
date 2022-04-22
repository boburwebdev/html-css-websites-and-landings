$(function(){

  $('.header__slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: `<button class="slider-arrow header__slider-arrow header__slider-arrow--prev"><img class="slider-arrow-img" src="img/arrow-left.svg" alt="prev"></button>`,
    nextArrow: `<button class="slider-arrow header__slider-arrow header__slider-arrow--next"><img class="slider-arrow-img" src="img/arrow-right.svg" alt="next"></button>`,
    asNavFor: '.header__slider-nav'
  });

  $('.header__slider-nav').slick({
    slidesToShow: 4,
    arrows: false,
    asNavFor: '.header__slider',
    focusOnSelect: true
  })
  
});