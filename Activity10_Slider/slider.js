$(document).ready(function() {
    $("#slider").bxSlider({
		auto: true,
		minSlides: 1,
		maxSlides: 1,
		slideWidth: 250,
		slideMargin: 10,
		randomStart: true, // Start with a random slide
        moveSlides: 1,  // Number of slides to move on transition
        pause: 3000,  // Delay between slide transitions in milliseconds (3 seconds)
        captions: true,  // Display captions for slides
        pagerCustom: "#pager", // Use a custom pager element with the ID "pager"
        pagerType: 'short', // Set pager type to 'short'
	});
});