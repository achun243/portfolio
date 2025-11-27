$(function(){
  $('a[href^="#"]').click(function(){
    w = $(window).width();
    if (w < 813) {
      var scrollPosition = 68;
    } else {
      var scrollPosition = 80;
    }
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - scrollPosition;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});