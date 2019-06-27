$(document).ready(function(){
	$('div').click(function(){
		var num = $(this).attr('value');
		alert(num + '번째 상자입니다.');
	});

	$('a>button').click(function(){
		alert('버튼클릭');
	});
});