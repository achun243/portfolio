$(document).ready(function() {

  imagesLoadListener(document.body, function() {


    $(".mv").addClass("on");

    $(document).scroll(function(){

      var now = $(this).scrollTop();

      if(now+($(window).height()*.75)>$(".catchphrase").offset().top){
        $(".catchphrase").addClass("on");
      }

      $(".step__heading__text").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".step__subtitle").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".step__items").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".step__detail__title").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".step__detail__description").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".step__detail__img").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".step__btn").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".step__boxTxt").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });

      $(".environmental__title").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".environmental__points").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".environmental__picture").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });
      $(".environmental__text").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top){
          $(this).addClass("on");
        }
      });

    });

    $("html,body").trigger("scroll");

    var animation1 = bodymovin.loadAnimation({
      container: document.getElementById('lottie1'),
      renderer: 'svg', // 描画形式
      loop: true, // trueにしたらループ。1回再生の場合はfalse
      autoplay: true, // 自動再生
      path: './js/step_1.json', // jsonのパスを指定
      name: "step 1", // 今後のリファレンスとして名前を指定（オプション）
    });

    var animation2 = bodymovin.loadAnimation({
      container: document.getElementById('lottie2'),
      renderer: 'svg', // 描画形式
      loop: true, // trueにしたらループ。1回再生の場合はfalse
      autoplay: true, // 自動再生
      path: './js/step_2.json', // jsonのパスを指定
      name: "step 2", // 今後のリファレンスとして名前を指定（オプション）
    });

    var animation3 = bodymovin.loadAnimation({
      container: document.getElementById('lottie3'),
      renderer: 'svg', // 描画形式
      loop: true, // trueにしたらループ。1回再生の場合はfalse
      autoplay: true, // 自動再生
      path: './js/closing.json', // jsonのパスを指定
      name: "closing", // 今後のリファレンスとして名前を指定（オプション）
    });

  });


});


var imagesLoadListener = (function() {

    var imageCollector = function(expectedCount, completeFn) {
        var receivedCount = 0;
        return function() {
            receivedCount++;
            if(receivedCount === expectedCount) {
                completeFn();
            }
        };
    };

    var imagesLoadListener = function(element, callback) {
        var images = element.querySelectorAll('img');
        if(images === null) {
            callback();
            return;
        }

        //画像の数だけloadListenerが呼ばれたらcallbackが呼ばれる;
        var loadListener = imageCollector(images.length, callback);
        Array.prototype.forEach.call(images, function(img) {
            if(img.complete) {
                loadListener();
            }else {
                img.onload = loadListener;
            }
        });
    };

    return imagesLoadListener;
})();
