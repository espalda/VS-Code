//문자열 길이의 최소 최대 길이 확인
function checkStringLength(str, min, max){
	if(str.length >= min && str.length <= max)
		return true;
	return false;
}

function checkPw(pwObj,min,max){
	if(!checkStringLength(pwObj.value,min,max)){
		alert('비밀번호는 '+min+'~'+max+'자리 입니다.');
		return false;
	}
	return true;
}

function checkPwConfirm(idpw1,idpw2,min,max){
	var pw1 = document.getElementById(idPw1);
	var pw2 = document.getElementById(idPw2);
	//비밀번호가 입력되었는지 길이가 맞는지 확인
	if(!checkPw(pw1,min,max)){
		return;
	}
	//비밀번호와 비밀번호 확인값이 일치하는지 확인
	if(pw1.value != pw2.value){
		alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
	}
}