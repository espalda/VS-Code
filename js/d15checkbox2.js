$(document).ready(function(){
	$('.box-check').change(function(){
		var isChecked = $(this).prop('checked');
		var pos = 0; //현재 이벤트가 발생된 박스의 위치
		var cnt = 0;
		var thisObj = $(this);
		$('box-check').each(function(){
			//this는 box-check 클래스를 가지고 있는 요소를 하나씩 꺼내는 each 속성의 this
			//thisObj 는 내가 체크한 this
			if($(this).val() == thisObj.val()){
				pos = cnt;
			}
			cnt++;
		})
		if(isChecked){
			$('.box').eq(pos).addClass('display-none');
		}else{
			$('.box').eq(pos).removeClass('display-none');
		}
	});
});