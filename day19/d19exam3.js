$(document).ready(function(){
	
	var pos = 0; //현재 이벤트가 발생된 박스의 위치
	$('.next').click(function(){
		pos++;
		if(pos == 3)	pos = 2;
		drawBox();
	});


	$('.prev').click(function(){
		pos--;
		if(pos == -1)	pos = 0;
		drawBox();
			
	});

	function drawBox(){
		$('.box').removeClass('border-color');
		$('.box').eq(pos).addClass('border-color');
	}
});

/*
[문제풀이 방법]
다음 버튼
1. 전역변수로 현재 위치를 나타내는 변수 생성
2. 현재 위치를 증가
3. 증가된 위치가 3인 경우 현재 위치를 2로 수정
4. 모든 박스에 빨간색 테두리 제거(검은색으로 변경)
5. 현재 위치에 빨간색 테두리 추가

이전 버튼
1. 전역변수로 현재 위치를 나타내는 변수 생성
2. 현재 위치를 감소
3. 증가된 위치가 -1인 경우 현재 위치를 0로 수정
4. 모든 박스에 빨간색 테두리 제거(검은색으로 변경)
5. 현재 위치에 빨간색 테두리 추가
*/