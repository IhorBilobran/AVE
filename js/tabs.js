$(document).ready(function(){		
	$('.nav-item').click(function(){		
		var DataTab = $(this).data('tab'),
			tabContent = $('.tab-content');
		
		$(this).find('div[data-tab='+DataTab+']').slideToggle();
	});
});