$(document).ready(function() {
	
	$(document).mousemove(function() {
		$('body').css('background-color', 'grey')
		setTimeout(function() {
			$('body').css('background-color', 'transparent');
		}), 1500;
	})
	
});