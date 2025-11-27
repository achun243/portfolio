$(function() {
  var contents = $("#eventMenu > #eventList");

  $("#eventMenu")
  .mouseover(function(){
    contents.stop().fadeTo(200, 1, function(){
      $(this).show();
    });
  })
  .mouseout(function(){
    contents.stop().fadeTo(200, 0, function(){
      $(this).hide();
    })
  });

  var contents2 = $(".parent1 > .child");

  $(".parent1")
  .mouseover(function(){
    contents2.stop().fadeTo(200, 1, function(){
      $(this).show();
    });
  })
  .mouseout(function(){
    contents2.stop().fadeTo(200, 0, function(){
      $(this).hide();
    })
  });

  var contents3 = $(".parent2 > .child");

  $(".parent2")
  .mouseover(function(){
    contents3.stop().fadeTo(200, 1, function(){
      $(this).show();
    });
  })
  .mouseout(function(){
    contents3.stop().fadeTo(200, 0, function(){
      $(this).hide();
    })
  });

  // SP
  $('.sp-event').bind('click', function(){
    if($('.modal').length <= 0){

      var toggleBodyFixed = function(isFixed){
        if(isFixed){
          $('body').css({'position':'fixed'});
        }else{
          $('body').css({'position':'relative'});
        }
      };
      toggleBodyFixed(true);

      var showModal = function(){
        var $modalWrapper = $('<div>').addClass('modalWrapper')
          .css({
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'width': '100%',
            'height': '100%',
            'background': '#000',
            'zIndex': 100
          }).fadeTo(0,0).fadeTo(300, 0.5);
        $('body').append($modalWrapper);
        var $modal = $('<div>').addClass('modal')
          .css({
            'position': 'fixed',
            'top': 0,
            'left': 0,
            'padding': '4%',
            'width': '100%',
            'height': '100%',
            'boxSizing': 'border-box',
            'zIndex': 101
          })
          .append(
            $('.eventWrapper').clone(true)
              .css({
                'display': 'block',
                'position': 'relative',
                'margin': 0,
                'width': '100%',
                'height': '100%',
                'overflow': 'hidden'
              })
          ).fadeTo(0,0).fadeTo(300, 1);
        $('body').append($modal);
        $('.modal .eventWrapper').prepend($('.sp-eventWrapper .close').clone())
          .prepend($('.sp-eventWrapper .tit').clone());
        $('.modal .eventWrapper .tit').css({
          'text-align': 'center',
          'color': '#F00',
          'padding': '4% 0 3%',
          'font-size': '14px'
        });
        $('.modal .eventWrapper .close').css({
          'position': 'absolute',
          'top': 0,
          'right': 0,
          'background': 'url(images/menu_close.jpg) no-repeat',
          'background-position': '50%',
          'background-size': 'auto 100%',
          'width': 40,
          'height': 40,
          'text-indent': '-9999px'
        });
        var l = $('.modal .eventWrapper .tit').innerHeight();
        $('.modal .eventWrapper .list')
          .wrap('<div class="listWrapper"></div>');
        var ll = $('.modal .eventWrapper').innerHeight();
        $('.listWrapper').css({
          'overflow': 'scroll',
          'height': ll - l - 10,
          'margin-bottom': 10
        });
      }
      showModal();
      $('.modal .close').css({'cursor':'pointer'}).bind('click', function(){
        $('.modalWrapper').fadeTo(300, 0, function(){
          $(this).remove();
        });
        $('.modal').fadeTo(300, 0, function(){
          $(this).remove();
        });
        toggleBodyFixed(false);
      });

    }
    return false;
  });

});
