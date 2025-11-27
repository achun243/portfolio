  $(function(){
    $(window).load(function() {
        onYouTubeIframeAPIReady();
    });
    // YouTube IFrame APIのjsが読み込まれ終わったときの処理
    function onYouTubeIframeAPIReady() {
      // プレイヤー作成
      ytplayer = new YT.Player(
        'player', {  //埋め込む場所
        height: 540,
        width: 960,
        videoId: "yljBRjbkylw",
        playerVars: {
            loop: 1,
            playlist: 'yljBRjbkylw',
            controls: 1,
            autoplay: 1,
            rel: 0,
            showinfo: 0
        },
        events: {
            'onReady': onPlayerReady
        }
      });
    }

    // スクロールイベント
    function onPlayerReady(event) {
      event.target.playVideo();
      onPlayScroll(event);
      $(window).bind('scroll', function() {
          onPlayScroll(event);
      });
      function onPlayScroll(event) {
          if(600 < $(window).scrollTop()){
              event.target.pauseVideo();
          } else {
              event.target.playVideo();
          }
      }
    }
  });