$(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		draggable: false,
		responsive: [
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				draggable: true,
				centerMode: true,
				centerPadding: '50px 0px 0px',
			  }
			},
			{
				breakpoint: 960,
				settings: {
					arrows: false,
					draggable: true,
				}
			  },
		]
	});
	$('.info__slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		draggable: false,
		responsive: [
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				draggable: true,
				centerMode: true,
				centerPadding: '50px 0px 0px',
			  }
			},
		]
	});

	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active');
	});
});