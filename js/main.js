$( document ).ready(function() {
	$('.trigger-user-menu').click(function() {
		$('.user-context').fadeToggle( "fast", "linear" );
	});

	$('.trigger-mobile').click(function() {
		$('#menu-mobile').fadeToggle( "fast", "linear" );
	});
});