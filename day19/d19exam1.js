$(document).ready(function(){
	$('.check-all').change(function(){
		var isChecked =	$(this).prop('checked');	//true, false로 결과가 나옴
		//$('input[type=checkbox]').prop('checked', isChecked);
		$('input[type=checkbox]').each(function(){
			$(this).prop('checked',isChecked);
		});
	});
});