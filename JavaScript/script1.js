$(document).ready(function(){
    $('#aylana').css('display','none');
    $('#menu').css('display','flex');
    $('.card').animate({left:'10%'},2000,function(){
        $('.card').css('position','static');
    });
    $('#asosiy').css('height',$('#asosiy').width());
});