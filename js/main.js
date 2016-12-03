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
}());