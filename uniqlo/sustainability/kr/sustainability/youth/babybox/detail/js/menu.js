(function() {
  var set_sp_footer, set_sp_menu, switch_pc_sp,set_current_menu,
      innerWidth = window.innerWidth,
      scrollbar = $(window).width() - window.innerWidth;
      userAgent = window.navigator.userAgent.toLowerCase(),
      appVersion = window.navigator.appVersion.toLowerCase();
  function ieWidth() {
    if(window.innerWidth) {
      innerWidth = window.innerWidth - scrollbar;
    } else {
      innerWidth = $(window).width();
    }
  }



  $(document).ready(function() {
    set_current_menu();
    if (userAgent.indexOf("msie") != -1) {
        if (appVersion.indexOf("msie 8.") != -1) {
            $('.wrapper').width(960);
            return false;
        }
  	}
  	ieWidth();
    switch_pc_sp();
    set_sp_menu();
    return set_sp_footer();
  });


  $(window).resize(function() {
  	if (userAgent.indexOf("msie") != -1) {
        if (appVersion.indexOf("msie 8.") != -1) {
            return false;
        }
  	}
  	ieWidth();
    switch_pc_sp();
    set_sp_menu();
    return set_sp_footer();
  });

  switch_pc_sp = function() {
    var $body;
    $body = $('body');
    if (innerWidth > 640) {
      $body.removeClass('sp');
      return $body.addClass('pc');
    } else {
      $body.removeClass('pc');
      return $body.addClass('sp');
    }
  };

  set_sp_menu = function() {
    $('.sp_menu_btn').removeClass('close');
    $('.menu_bg').removeClass('close');
    var $mv_footer, $sp_header, $sp_nav, h;
    $sp_header = $('#header');
    $sp_nav = $sp_header.find('.nav_wrapper');
    if (!$sp_header.find('.sp_menu_btn').get(0)) {
      $sp_header.before("<div class='menu_bg'></div>");
      $sp_nav.before("<span class='sp_menu_btn'>MENU</span>");
      $sp_header.find('.sp_menu_btn').click(function() {
        var cls;
        $('.sp #header .nav_wrapper').toggle();
        cls = 'close';
        if ($(this).hasClass(cls)) {
          $('.menu_bg').removeClass(cls);
          return $(this).removeClass(cls);
        } else {
          $('.menu_bg').addClass(cls);
          return $(this).addClass(cls);
        }
      });
    }
    if ($('body').hasClass('pc')) {
      $('.menu_bg').remove();
      $sp_nav.parent().find('.sp_menu_btn').remove();

      $('#footer .ft_r_area .ft_sns img').hover(function(){
        h_img = $(this).attr('src').replace('.jpg', '_o.jpg');
        $(this).attr('src', h_img);
      }, function(){
        n_img = $(this).attr('src').replace('_o.jpg', '.jpg');
        $(this).attr('src', n_img);
      });

      $mv_footer = $sp_nav.find('.ft_inner');
      $('#footer .copyright').before($mv_footer.clone());
      $mv_footer.remove();
      return $sp_nav.show();
    }
  };

  set_sp_footer = function() {
    var $pc_footer, $pc_footer_lang, $pc_footer_r, $pc_footer_sns;
    $pc_footer = $('#footer');
    $pc_footer_lang = $pc_footer.find('.lang');
    if ($('body').hasClass('sp')) {
      $pc_footer_r = $pc_footer.find('.ft_r_area');
      $pc_footer_r.after($pc_footer_lang.clone());
      $pc_footer_lang.remove();
      $pc_footer_sns = $pc_footer_r.find('.ft_sns');
      $pc_footer.find('.ft_inner li:last').after($pc_footer_sns.clone());
      $pc_footer_sns.remove();
      $('#hdNav01').after($pc_footer.find('.ft_inner').clone());
      $('#hdNav01').parent().hide();
      $pc_footer.find('.ft_inner').remove();
      $('.sp #header .nav_wrapper .ft_menu .sp a').bind( 'click', function() {
        $('.sp #header .nav_wrapper').hide();
        $('.menu_bg').removeClass('close');
        $('#header').find('.sp_menu_btn').removeClass('close');
      });
    } else {
      $pc_footer_r = $pc_footer.find('.ft_r_area');
      $pc_footer_r.before($pc_footer_lang.clone());
      $pc_footer_lang.remove();
      $pc_footer_sns = $pc_footer.find('.ft_sns');
      $pc_footer.find('.ft_inner .ft_r_area .ft_menu').after($pc_footer_sns.clone());
      return $pc_footer_sns.remove();
    }
  };

  set_current_menu = function() {
      var page_name = $('html').attr('id');
      if(page_name) {
          return $('#' + page_name + '_nav').addClass('current');
      }
      return false;
  }

}).call(this);
