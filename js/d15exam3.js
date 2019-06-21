$(document).ready(function(){
	$('#pw1').change(function(){
		if(!checklength('#pw1',8,13)){
			alert('비밀번호 길이를 8~13 사이로 입력하세요.');
		}
	})
	$('#pw2').change(function(){
		if(!equals('#pw1','#pw2')){
			alert('비밀번호가 일치하지 않습니다.');
		}else
			alert('비밀번호가 일치합니다.');
	})
});

function checklength(id,min,max){
	var length = $(id).val().length;
	if(length > max || length < min)
		return false;
	else return true;
}

function equals(sel1,sel2){
	if($(sel1).val() == $(sel2).val())
		return true;
			return false;
}