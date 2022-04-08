$(function(){
  $('.about__video').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

  $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Jonathan Doe</small>';
			}
		}
	});

  $('.gallery__slider').slick({
    arrows: true,
    prevArrow: `<button type="button" class="slick-btn slick-prev"><img class="slick-arrow-image--prev" src="images/gallery-slider__arrow-prev.svg" alt="prev"></button>`,
    nextArrow: `<button type="button" class="slick-btn slick-next"><img class="slick-arrow-image--next" src="images/gallery-slider__arrow-next.svg" alt="next"></button>`
  })
});