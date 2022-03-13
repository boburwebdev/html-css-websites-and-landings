$(function(){
    $('.reviews__slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true,
    arrows: false,
    responsive: [
    {
      breakpoint: 1106,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    ]
  });

  $('.header__hamburger-icon').on('click', function() {
      $('.header__menu-list').slideToggle();
  })
});