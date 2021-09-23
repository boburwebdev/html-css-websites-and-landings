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
        slidesToScroll: 1, 
        responsive: [
            {
                breakpoint: 968,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 440,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    })

    $('.menu_hamburger').click(function() {
        $('.menu_list').toggleClass('show');
    })
});