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
  });

  $('.map__dots-slider').slick({
    slidesToShow: 8,
    arrows: false,
    asNavFor: '.beaches-slider',
    focusOnSelect: true
  });

  $('.beaches-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<button class="slider-arrow beaches-slider__arrow beaches-slider__arrow--prev"><img class="slider-arrow-img" src="img/arrow-left.svg" alt="prev"></button>`,
    nextArrow: `<button class="slider-arrow beaches-slider__arrow beaches-slider__arrow--next"><img class="slider-arrow-img" src="img/arrow-right.svg" alt="next"></button>`,
    asNavFor: '.map__dots-slider',
  });
  
  $('.travel__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button class="slider-arrow travel__slider__arrow travel__slider__arrow--prev"><img class="slider-arrow-img" src="img/arrow-left.svg" alt="prev"></button>`,
    nextArrow: `<button class="slider-arrow travel__slider__arrow travel__slider__arrow--next"><img class="slider-arrow-img" src="img/arrow-right.svg" alt="next"></button>`,
  });
});