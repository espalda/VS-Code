$(document).ready(function(){
	//display-block으로 하는법
	$('.realtime-search').mouseover(function(){
		$('.realtime-search-box').removeClass('display-none');
	});
	$('.realtime-search-box').mouseout(function(){
		$('.realtime-search-box').addClass('display-none');
	});

	function ticker(selector, height)
	{
		setTimeout(function(){
				$(selector + ' li:first').animate( {marginTop: '-' + height}, 400, function(){
					$(this)
						.detach()
						.appendTo(selector + ' ul')
						.removeAttr('style');
				});
				ticker(selector,height);
			}, 1000);
	};
		ticker('.realtime-search', '20px');
		ticker('.news-ticker', '20px');


	$('.r2-top-btn.next').click(function(){
		var num = $('#num').text();
		num++;
		if(num==7) num = 1;
		$('#num').text(num);
	});
	$('.r2-top-btn.prev').click(function(){
		var num = $('#num').text();
		num--;
		if(num==0) num = 6;
		$('#num').text(num);
	});
});


	
	// A.append(B)	A요소 자손들 끝에 B 추가
	// A.appendTo(B)	A요소 B자손 끝에 추가
