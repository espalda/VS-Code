$(document).ready(function(){

    var focus = $('input').eq(0).focus();
    var res = '';

    //focus on input
    $('input').focus(function(){
        focus = $(this);
    });

    //insert number
    $('.btn').click(function(){
        var val = $(this).attr("value");
        var str = focus.val();
        res = focus.val(str += val);
    })
    
    //all number clear
    $('.clear').click(function(){
        $(focus).val('');
    })

    //only one number delete
    $('.del').click(function(){
        var str = focus.val();
        focus.val(str.substring(0, str.length-1));
    })

    var gap = '+';
    $('.symbol').click(function(){
        temper_gap();
    })

    function temper_gap(){
        if(gap == '+'){
            gap = '-';
            $(this).text(gap);
            res = gap + $('input[name="gap"]').val() + '%';
            console.log(res);
        }else if(gap == '-'){
            gap = '+';
            $(this).text(gap);
            res = gap + $('input[name="gap"]').val() + '%';
            console.log(res);
        }
    }

    //온도 오차 구하기
    //클릭한 버튼의 value값을 gap의 value값으로 가져온다.
    //01 . input 창의 값을 가져온다
    //02. .symbol 이 - 일때 input 창의 값
    //03. 맨앞에 - 와 맨뒤에 %를 붙인다.
    //04. -일때 클릭하면 +로 +일때 클릭하면 -로 변환

}) //document.ready

//온도 값 퍼센트로 바꾸기
//길이제한 10자까지
//input 창에 숫자만 입력 가능하게
//화면 설계서 보기
//clearfix 정리하기
//화면 width 어디서 오차가 생기는지 정리