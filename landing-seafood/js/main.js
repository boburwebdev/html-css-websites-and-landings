$(function(){
  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    prevArrow: `<button type="button" class="hero__slider-arrow hero__slider-arrow--prev"><img class="hero__slider-arrow-image" src="images/hero-slider-arrow-prev.svg" alt="prev" ></button>`,
    nextArrow: `<button type="button" class="hero__slider-arrow hero__slider-arrow--next"><img class="hero__slider-arrow-image" src="images/hero-slider-arrow-next.svg" alt="next" ></button>`
  });

  // $('.products__name').slick({
  //   slidesToShow: 6,
  //   slidesToScroll: 1,
  //   vertical: true,
  //   centerMode: true,
  // });

  $('.products__name').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.products__content',
    vertical: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: `<button type="button" class="products__slider-arrow products__slider-arrow--prev"><img class="products__slider-arrow-image" src="images/products-slider-arrow-prev.svg" alt="prev" ></button>`,
    nextArrow: `<button type="button" class="products__slider-arrow products__slider-arrow--next"><img class="products__slider-arrow-image" src="images/products-slider-arrow-next.svg" alt="next" ></button>`
  });

  $('.products__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.products__name'
  });
});