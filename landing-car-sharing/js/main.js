$(function(){
    $('.featured__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        fade: true,
        autoplaySpeed: 2000
    });

    $('.reviews__slider').slick({
        arrows: false, 
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 1
    })

    $('.menu_hamburger').click(function() {
        $('.menu_list').toggleClass('show');
    })
});