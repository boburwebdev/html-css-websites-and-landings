$(function(){
  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    prevArrow: `<button type="button" class="hero__slider-arrow hero__slider-arrow--prev"><img class="hero__slider-arrow-image" src="images/hero-slider-arrow-prev.svg" alt="prev" ></button>`,
    nextArrow: `<button type="button" class="hero__slider-arrow hero__slider-arrow--next"><img class="hero__slider-arrow-image" src="images/hero-slider-arrow-next.svg" alt="next" ></button>`
  })
});