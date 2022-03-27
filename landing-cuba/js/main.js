$(function(){
    $('.photos__slider').slick({
        arrows: true,
        prevArrow: `<button class="slick-prev slick-arrow"><img class="slick-arrow-img slick-arrow-img--left" src="images/arrow-left.svg" alt="left"></button>`,
        nextArrow: `<button class="slick-next slick-arrow"><img class="slick-arrow-img slick-arrow-img--right" src="images/arrow-right.svg" alt="right"></button>`,
        autoplay: true,
    });
});