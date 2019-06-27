$(document).ready(function(){
	$('tr').click(function(){
		var pos = $(this).attr('value');
		var obj = $('tr input[type=checkbox]').eq(pos);
		var isChecked = obj.prop('checked');
		obj.prop('checked',!isChecked);
	});

	$('tr input[type=checkbox]').click(function(){
		var isChecked = $(this).prop('checked');
		$(this).prop('checked',!isChecked);
	});                                                  
});


/*
html 태그의 현재 위치를 알수 있도록 value값을 지정
xxx 클릭
1. 현재 위치 확인
2. 현재 위치에 있는 체크박스 개체정보 가져오기 eq(번지);
3. 현재 체크박스 상태 가져오기
4. 현재 체크박스 개체정보에 체크박스 상태 반대로 만들기

val은 input tag 만 사용 가능
*/