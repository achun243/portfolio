$(document).ready(function() {

  imagesLoadListener(document.body, function() {


    $(".mv").addClass("on");

    $(document).scroll(function(){

      var now = $(this).scrollTop();


      $(".intro").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top && now < $(this).offset().top + $(this).height() ){
          $(this).addClass("on");
        }else {
          $(this).removeClass("on");
        }
      });

      $(".step").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top && now < $(this).offset().top + $(this).height() ){
          $(this).addClass("on");
        }else {
          $(this).removeClass("on");
        }
        if(now+($(window).height()*.25)>$(this).find(".step__picture").offset().top+$(this).find(".step__picture").height() && now < $(this).offset().top + $(this).height() ){
          $(this).addClass("hover");
        }else {
          $(this).removeClass("hover");
        }
      });

      $(".reuniqlo__title").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top && now < $(this).offset().top + $(this).height() ){
          $(this).addClass("on");
        }else {
          $(this).removeClass("on");
        }
      });
      $(".reuniqlo__wrap").each(function(){
        if(now+($(window).height()*.75)>$(this).offset().top && now < $(this).offset().top + $(this).height() ){
          $(this).addClass("on");
        }else {
          $(this).removeClass("on");
        }
      });

    });

    $("html,body").trigger("scroll");

    /*
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
    */

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
