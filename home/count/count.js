$(document).ready(function() {
    $("input:text[numberOnly]").on("keyup", function() {
        $(this).val($(this).val().replace(/[^0-9]/g,""));
    });

    var focus = $('input').eq(0).focus();
    $('input').focus(function() {
        focus = $(this);
    });

    $('.btn').click(function() {
        var val = $(this).text();
        var str = focus.val();
            focus.val(str += val);

        if(val == 'clear'){ focus.val(''); }
        if(val == 'del'){
            focus.val(str.substring(0, str.length-4));
        }
    })

    var gap = '+';
    $('.symbol').click(function() { 
        if(gap == '+'){
            gap = '-';
            $(this).text(gap);
            res = gap + $('input[name="gap"]').val() + '%';
            console.log('-값 = ' + res);
                return res;
        }else if(gap == '-'){
            gap = '+';
            $(this).text(gap);
            res = gap + $('input[name="gap"]').val() + '%';
            console.log(res);
                return res;
        }
    })
}) //document.ready