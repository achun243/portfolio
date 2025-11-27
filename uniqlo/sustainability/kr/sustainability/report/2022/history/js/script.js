$(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    windowWidth = $(window).width() > window.innerWidth ? $(window).width() : window.innerWidth;
    windowHeight = $(window).height() > window.innerHeight ? $(window).height() : window.innerHeight;
    pageHeight = $(document).height();
    footerHeight = $("footer").height();
    position = scrollTop + windowHeight;
    if(scrollTop < 399){
        $("#page_top a").css({ 'opacity': 0, 'cursor': 'default' });
    }else{
        $("#page_top a").css({ 'opacity': 1, 'cursor': 'pointer' });
    }

    if( windowWidth < 768 ){
        if(pageHeight - position < footerHeight + 60){
            $("#page_top").addClass('fixd');
        }
        if(pageHeight - position > footerHeight + 60){
            $("#page_top").removeClass('fixd');
        }
    }else{
        if(pageHeight - position < footerHeight + 30){
            $("#page_top").addClass('fixd');
        }
        if(pageHeight - position > footerHeight + 30){
            $("#page_top").removeClass('fixd');
        }
    }

});

var headerHeight
var windowWidth = $(window).width();
if( windowWidth < 768 ){
    headerHeight = $('header').outerHeight() - 10;
}else{
    headerHeight = 0;
}
var urlHash = location.hash;
if(urlHash) {
    $('body,html').stop().scrollTop(0);
    setTimeout(function(){
        var target = $(urlHash);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({scrollTop:position}, 1);
    }, 100);
}
$('a[href^="#"]').click(function() {
    var href= $(this).attr("href");
    var target = $(href);
    var position = target.offset().top - headerHeight;
    $('body,html').stop().animate({scrollTop:position}, 1);   
});
