(function () {
	var swiper = new Swiper('.swiper-container', {
		autoplay: 5000,
		loop: true,
		direction: 'horizontal',
		mousewheelControl: false,
		keyboardControl: true,
		mousewheelReleaseOnEdges: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});
	var swiper2 = new Swiper('.swiper-container2', {
		loop: true,
		direction: 'horizontal',
		mousewheelControl: false,
		keyboardControl: true,
		mousewheelReleaseOnEdges: true,
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev'
	});

	$('#menu-title').click( function () {
		$(this).parent().parent().parent().hide();
	});

	$('#mobile-menu').click ( function () {
		$('.overlay').show();
	});

    $('.navigation__item').click( function (e) {
    	e.stopPropagation();
        if ($(this).hasClass('active')) {
            $('.navigation__item').removeClass('active');
            $('.navigation__panel').hide();

        } else {
            $('.navigation__item').removeClass('active');
            $(this).addClass('active');
            $('.navigation__panel').hide();
            var target = $(this).data('target');
            $(target).show();
        }
    });
	$(document).on('click', function(e){
         if(!$(event.target).closest('.navigation__panel').length ) {
         	$('.navigation__panel').hide();
         	$('.navigation__item').removeClass('active')
         }
    });
}());