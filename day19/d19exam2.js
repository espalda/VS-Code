$(document).ready(function(){
	$('.box').click(function(){
		alert('클릭');
	});
	$('.box').mouseover(function(){
		$('.box').addClass('over');
	});
	$('.box').mouseout(function(){
		$('.box').removeClass('over');
	});
	
	$('div').mouseenter(function(){
		$(this).animate({width:'200px',heghit:'200px'},1000)
		})
		$('div').mouseout(function(){
			$(this).animate({width:'50px',heghit:'50px'},1000)
		})

});