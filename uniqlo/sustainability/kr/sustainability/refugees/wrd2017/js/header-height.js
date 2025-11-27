$(function () {
    if (window.matchMedia( '(max-width: 640px)' ).matches) {
      var headerHight = 72; //ヘッダの高さ
      $('a[href^=#]').click(function(){
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top-headerHight; //ヘッダの高さ分位置をずらす
          $("html, body").animate({scrollTop:position}, 550, "swing");
          return false;
      });
    };
});