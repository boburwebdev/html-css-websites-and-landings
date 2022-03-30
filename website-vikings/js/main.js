$(function () {

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 1,
            showinfo: 1
        }
    });

    $('.heroes__image-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__info-slider',
        prevArrow: `<button class="heroes__image-slider-arrow heroes__image-slider-arrow--prev slick-prev"><img class="slick-arrow-image slick-arrow-image--left" src="images/slick-arrow-left.png" alt="left"></button>`,
        nextArrow: `<button class="heroes__image-slider-arrow heroes__image-slider-arrow--next slick-next"><img class="slick-arrow-image slick-arrow-image--right" src="images/slick-arrow-right.png" alt="right"></button>`,
        responsive: [{
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }]
    });

    $('.heroes__info-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.heroes__image-slider',
        fade: true,
        arrows: false
    });

    $('.menu__hamburger').on('click', function () {
        $('.menu__list').slideToggle();
    })
});