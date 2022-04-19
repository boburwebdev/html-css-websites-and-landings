$(function(){
  $('.design__slider').slick({
    dots: false,
    slidesToShow: 4,
    variableWidth: true,
    prevArrow: `<button class="design__slider-arrow design__slider-arrow--prev" type="button"><img class="design__slider-arrow--img" src="images/design__slider-arrow--prev.svg" alt="prev"></button>`,
    nextArrow: `<button class="design__slider-arrow design__slider-arrow--next" type="button"><img class="design__slider-arrow--img" src="images/design__slider-arrow--next.svg" alt="next"></button>`,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: true,
          arrows: false,
        }
      }
    ]
  })
});