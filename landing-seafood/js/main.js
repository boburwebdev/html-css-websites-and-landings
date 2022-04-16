$(function(){
  $('.hero__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    fade: true,
    prevArrow: `<button type="button" class="hero__slider-arrow hero__slider-arrow--prev"><img class="hero__slider-arrow-image" src="images/hero-slider-arrow-prev.svg" alt="prev" ></button>`,
    nextArrow: `<button type="button" class="hero__slider-arrow hero__slider-arrow--next"><img class="hero__slider-arrow-image" src="images/hero-slider-arrow-next.svg" alt="next" ></button>`,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          fade: false,
        }
      },
    ]
  });

  $('.products__name').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.products__content',
    vertical: true,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: `<button type="button" class="products__slider-arrow products__slider-arrow--prev"><img class="products__slider-arrow-image" src="images/products-slider-arrow-prev.svg" alt="prev" ></button>`,
    nextArrow: `<button type="button" class="products__slider-arrow products__slider-arrow--next"><img class="products__slider-arrow-image" src="images/products-slider-arrow-next.svg" alt="next" ></button>`,
    responsive: [
      {
        breakpoint: 1061,
        settings: {
          slidesToShow: 3,
          vertical: false,
        }
      },
      {
        breakpoint: 961,
        settings: {
          slidesToShow: 3,
          centerMode: false,
          vertical: false,
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          vertical: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          vertical: false,
        }
      },
    ]
  });

  $('.products__content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.products__name',
  });

  $('.menu__hamburger').on('click', function() {
    $('.menu__list').slideToggle();
  })
});