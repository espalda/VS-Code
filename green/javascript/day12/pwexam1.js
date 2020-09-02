function checkPwConfirm(idPw1, idPw2, min, max) {
	var pw1 = document.getElementById(idPw1).value;
	var pw2 = document.getElementById(idPw2).value;

	//비밀번호 id 값을 이용하여 에러메세지 박스(html 코드에서 div)
	var strErrorPw1 = 'error' + idPw1;
	var strErrorPw2 = 'error' + idPw2;

	//에러메시지 아이디를 이용하여 여러메시지를 화면에 추가
	document.getElementById(strErrorPw1).innerHTML = '에러';
	document.getElementById(strErrorPw2).innerHTML = '에러';

	var errorMessage1 = '';
	var errorMessage2 = '';

	if (!checkPw(pw1, min, max)) {
		errorMessage1 = '비밀번호는 ' + min + '~' + max + '자리입니다.';
	}
	if (pw1 != pw2) {
		errorMessage2 = '비밀번호가 일치하지 않습니다.';
	}
	document.getElementById(strErrorPw1).innerHTML = errorMessage1;
	document.getElementById(strErrorPw2).innerHTML = errorMessage2;
}

//문자열의 길이가 최소길이에서 최대 길이 사이에 있는지 확인하는 함수
function checkStringLength(str, min, max) {
	if (str.length > max || str.length < min)
		return false;
	return true;
}

function checkPw(str, min, max) {
	if (!checkStringLength(str, min, max)) {
		//alert('비밀번호는 '+min+'~'+max+'자리입니다.');
		return false;
	}
	return true;
}