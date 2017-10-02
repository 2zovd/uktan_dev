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

	
	$('#test').magnificPopup({
	  items: {
		  src: '<div class="white-popup">Версія сайту українською мовою незабаром буде доступна, приносимо свої вибачення.</div>',
		  type: 'inline',
		  mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		  zoom: {
			enabled: true, // By default it's false, so don't forget to enable it

			duration: 300, // duration of the effect, in milliseconds
			easing: 'ease-in-out', // CSS transition easing function

			// The "opener" function should return the element from which popup will be zoomed in
			// and to which popup will be scaled down
			// By defailt it looks for an image tag:
			opener: function(openerElement) {
			  // openerElement is the element on which popup was initialized, in this case its <a> tag
			  // you don't need to add "opener" option if this code matches your needs, it's defailt one.
			  return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		  }
	  }
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



