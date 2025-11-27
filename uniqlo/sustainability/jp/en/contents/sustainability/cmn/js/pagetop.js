$(window).scroll(function () {
    var top_scrollTop = $(document).scrollTop();
    var windowWidth = $(window).width() > window.innerWidth ? $(window).width() : window.innerWidth;
    var windowHeight = $(window).height() > window.innerHeight ? $(window).height() : window.innerHeight;
    var pageHeight = $(document).height();
    var footerHeight = $(".otherNavigation").height();
    var position = top_scrollTop + windowHeight;
    if(top_scrollTop < 399){
        $("#pageTop a").css({ 'opacity': 0, 'cursor': 'default' });
    }else{
        $("#pageTop a").css({ 'opacity': 1, 'cursor': 'pointer' });
    }
  
    if( windowWidth < 768 ){
        if(pageHeight - position < footerHeight + 60){
            $("#pageTop").addClass('fixd');
        }
        if(pageHeight - position > footerHeight + 60){
            $("#pageTop").removeClass('fixd');
        }
    }else{
        if(pageHeight - position < footerHeight + 30){
            $("#pageTop").addClass('fixd');
        }
        if(pageHeight - position > footerHeight + 30){
            $("#pageTop").removeClass('fixd');
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
          $('body,html').stop().animate({top_scrollTop:position}, 1);
      }, 100);
    }
      $('a[href^="#"]').click(function() {
        var href= $(this).attr("href");
        var target = $(href);
        var position = target.offset().top - headerHeight;
        $('body,html').stop().animate({top_scrollTop:position}, 1);   
  });
  
  // スクロール
  $('#pageTop').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
      $('#pageTop').fadeIn();
    } else {
      $('#pageTop').fadeOut();
    }
  });
  
  $('#pageTop .pageTop_link').click(function () {
    var toTopTarget = $('body').offset().top;
    $('body, html').animate({
      scrollTop: toTopTarget
    }, 500, 'swing');
    return false;
  });