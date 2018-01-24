// var timerId = setTimeout(function tick() {
//   alert( "тик" );
//   timerId = setTimeout(tick, 2000);
// }, 2000);

$(document).ready(function(){

	var imgMan = $('#slider .slider-img-men'),
	    imgWoman = $('#slider .slider-img-woman'),
	    ave = $('#slider .ave'),	
	    nue = $('#slider .nue');	

		imgMan.css({opacity: '1'}).addClass('slideIn');
		ave.addClass('slideInSlow');
		nue.css({opacity: '0'});

		setInterval(function(){

			// мужик ховається
			setTimeout(function(){
				imgMan
					.addClass('slideOut')
					.removeClass('slideIn');
				ave
					.css({opacity:'1'})
					.addClass('slideOutSlow')
					.removeClass('slideInSlow');
			},4000)

			// баба виходить
			setTimeout(function(){
				ave
					.removeClass('slideOutSlow')
					.css({opacity: '0'});
				imgWoman
					.css({opacity: '1'})
					.addClass('slideIn')
					.show();
				nue
					.addClass('slideInSlow')
					.css({opacity:'0'})
					.show();
				imgMan
					.removeClass('slideOut')
					.hide();
			},5300)

			// баба ховаєься
			setTimeout(function(){
				nue
					.css({opacity: '1'});
				imgWoman
					.removeClass('slideIn')
					.addClass('slideOut');
				nue
					.removeClass('slideInSlow')
					.addClass('slideOutSlow');
			}, 8000)

			//мужик виходить знову
			setTimeout(function(){
				imgWoman
					.removeClass('slideOut')
					.hide();
				nue
					.removeClass('slideOutSlow')
					.hide();
				imgMan
					.css({opacity: '1'})
					.show()
					.removeClass('slideOut')
					.addClass('slideIn');
				ave
					.show()
					.removeClass('slideOutSlow')
					.addClass('slideInSlow');
				
			}, 9300)
			
		}, 9300);
});