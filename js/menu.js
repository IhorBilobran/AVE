$(document).ready(function(){


	let menu = $('#mobileNav'),
		menuNav = $('.nav');


	
	menu.click(function(){
		// if (menuNav.css('display') == 'block') {
		// 	return menuNav.css({display: 'none'});
		// }
		// return menuNav.css({display: 'block'});		
		menuNav.slideToggle()
	});



});