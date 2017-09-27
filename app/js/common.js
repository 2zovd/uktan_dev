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
        infinite: true
    });
	
});