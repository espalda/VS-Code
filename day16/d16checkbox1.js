$(document).ready(function(){
	$('.box-check').change(function(){
		var isChecked = $(this).prop('checked');
		if(isChecked){
			//eq 몇번째인지 확인 0부터 시작
			$('.box').eq($(this).val()).addClass('display-none');
		}else{
			$('.box').eq($(this).val()).removeClass('display-none');
		}
	});
});