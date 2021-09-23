$(function(){
    $('.featured__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        infinite: true,
        fade: true,
        responsive: [{
            breakpoint: 878,
            settings: {
                dots: false
            }
        }]
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