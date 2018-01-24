$(document).ready(function(){
	$('.item .info-icon').click(function(){
		$(this).next().toggle();
		$(this).prev().toggle();
	});
});