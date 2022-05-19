$(function () {

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

  $('.travel__slider, .sleep__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: `<button class="slider-arrow travel__slider__arrow travel__slider__arrow--prev"><img class="slider-arrow-img" src="img/arrow-left.svg" alt="prev"></button>`,
    nextArrow: `<button class="slider-arrow travel__slider__arrow travel__slider__arrow--next"><img class="slider-arrow-img" src="img/arrow-right.svg" alt="next"></button>`,
  });


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img class="quantity__icon" src="img/icon-plus.svg" alt="plus"></div><div class="quantity-button quantity-down"><img class="quantity__icon" src="img/icon-minus.svg" alt="minus"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });


  $('.quantity-button').on('click', function () {
    const parents = $(this).parents('.module__details');
    let sleepSum = $('.sleep__sum', parents).data('nights') * $('.quantity__input-nights', parents).val() + $('.sleep__sum', parents).data('guests') * $('.quantity__input-guests', parents).val();
    
    $('.sleep__sum', parents).html(sleepSum);
  });

  $('.quantity').each(function() {
    const parents = $(this).parents('.module__details');
    let sleepSum = $('.sleep__sum', parents).data('nights') * $('.quantity__input-nights', parents).val() + $('.sleep__sum', parents).data('guests') * $('.quantity__input-guests', parents).val();
    
    $('.sleep__sum', parents).html(sleepSum);
  });

});