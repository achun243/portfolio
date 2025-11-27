//YouTube iFrame API
$(window).on('load',function(){
  //Modal

  $(".playbtn").click(function () {
    modalyoutube_open(this.href);
    return false;
  });
  //Modal Create
  $('#wrapper').append(
      '<div id="movie_modal_bg">' +
      '</div>' +
      '<div id="movie_modal_content">' +
      '<a id="modalyoutube_close" href="javascript:void(0)">' +
      '<img src="/jp/en/contents/sustainability/cmn/img/button_close.png" alt="">' +
      '</a>' +
      '<div id="modalyoutube_movie">' +
      '<div id="modalyoutube_player">' +
      '</div>' +
      '</div>' +
      '</div>'
    )
    //Modal Open
  function modalyoutube_open(href) {
    $("div#movie_modal_bg").animate({
      opacity: "show"
    }, {
      duration: "fast",
      easing: "linear",
      complete: function () {
        modalyoutube_autoplay(href);
      }
    });
  }

  function modalyoutube_autoplay(href) {
    $("div#movie_modal_content").animate({
      opacity: "show"
    }, {
      duration: "1",
      easing: "linear",
      complete: function () {
        var dir = href.split("/");
        var movie_id = dir[dir.length - 1];
        var ua = navigator.userAgent;
        var window_width = window.innerWidth;
        if (window_width > 599) {
          console.log("PC："+ua);
          $("#modalyoutube_player").html('<iframe width="100%" height="100%" src="' + href + '?rel=0&wmode=transparent&autoplay=1&autohide=1&loop=1&playlist=' + movie_id + '&muted=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>');
        } else {
          console.log("SP："+ua);
          $("#modalyoutube_player").html('<iframe width="300" height="169" src="' + href + '?rel=0&wmode=transparent&autohide=1" frameborder="0" allowfullscreen></iframe>');
        }
      }
    });
  }
  //Modal Close
  $("#movie_modal_bg , #modalyoutube_close").click(function () {
    $("div#movie_modal_bg , div#movie_modal_content").animate({
      opacity: "hide"
    }, {
      duration: "fast",
      easing: "linear",
      complete: function () {
        $("#modalyoutube_player").empty();
      }
    });
    return false;
  });
});
