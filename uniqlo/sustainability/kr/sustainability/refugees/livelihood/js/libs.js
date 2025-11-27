$(function(){

	 $('#jsPageTop').click(function () {
        $("html,body").animate({scrollTop:0},"300");
        });

    $('#jsPageTop').hide();
    $(window).scroll(function () {
        if($(window).scrollTop() > 0) {
            $('#jsPageTop').slideDown(600);
        } else {
            $('#jsPageTop').slideUp(600);
        }
    });
});