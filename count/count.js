$(document).ready(function(){
    var focus = $('input').eq(0).focus();   //original focus only one
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

    $('.symbol').click(function(){
        var sym = $(this).text();
        if(sym == '-'){
            $(this).text(sym.replace('-', '+'));
            //console.log(1);
        }else{
            $(this).text(sym.replace('+', '-'));
            //console.log(2);
        }
    })

    //온도 오차 구하기
    //클릭한 버튼의 value값을 gap의 value 값으로 가져온다.
    //01 . input 창의 값을 가져온다
    //02. .symbol 이 - 일때 input 창의 값
    //03. 맨앞에 - 와 맨뒤에 %를 붙인다.
    //04. -일때 클릭하면 +로 +일때 클릭하면 -로 변환

}) //document.ready