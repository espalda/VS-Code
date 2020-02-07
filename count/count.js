//ar focus = $('input').eq(0).focus();   //original focus only one
var cnt1= $('.cntMain').eq(0);
console.log(cnt1);

//focus on input
$('input').focus(function(){
    focus = $(this);
});

//insert number
$('.btn').click(function(){
    var val = $(this).attr("value");
    var str = focus.val();
    focus.val(str += val);
})

//length limit
$('.btn').click(function(){
    var cnt = focus.val().length;
    if(cnt == 11) {
        alert("10자 까지 입력할수 있습니다.");
        var limit = focus.val().slice(0, 10);
        focus.val(limit);
    }
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