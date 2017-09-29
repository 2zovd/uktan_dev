$(document).ready(function() {
	
    $('.nav-toggle').click(function() {
        $(this).toggleClass('active');
        $('.main-nav').toggleClass('active');
    });
    
    $('.main-nav a').click(function() {
        $('.nav-toggle').removeClass('active');
        $('.main-nav').removeClass('active');
    });
    
    $('.slider-inner').slick({
        infinite: true,
		autoplay: false,
		appendArrows: '.slider-hold',
		prevArrow: '<button class="prev-arrow"></button>',
		nextArrow: '<button class="next-arrow"></button>'
	
    });
	
	$("a[href*='#']").mPageScroll2id({
		autoScrollSpeed: true,
		offset: 65
	});
	
	/*
	$('.main-nav a').click(function() {
		var scrollAttr = $(this).attr('data-index');
		var etop = $('#' + scrollAttr).offset().top;
		console.log(etop);
		$('html, body').animate({
			scrollTop: etop
		}, 1000);
	})
	*/

	
});



