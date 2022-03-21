$(function(){
    $('.hero__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'hero__slider-dots',
        autoplay: 3000,
        fade: true
    });

    $('.header__hamburger').on('click', function() {
        $('.header__nav').slideToggle();
    });
    
    $('.header__nav-close').on('click', function() {
        $('.header__nav').slideToggle();
    })
});