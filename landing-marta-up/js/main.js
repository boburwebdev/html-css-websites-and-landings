$(function(){
    
    $('.hero__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'hero__slider-dots',
        vertical: true,
        verticalSwiping: true,
        // autoplay: 2000
    });

    $('.header__hamburger').on('click', function() {
        $('.header__nav-list').toggleClass('show');
        $('.header__auth-list').removeClass('show');
    })

    $('.header__auth-icon').on('click', function() {
        $('.header__nav-list').removeClass('show');
        $('.header__auth-list').toggleClass('show');
    })
});