$(document).ready(function(){
 
    $("#pageTop").hide();
     // ↑ページトップボタンを非表示にする
              
    $(window).scroll(function () {
 
       if ( $(this).scrollTop() > 100 ) {
             // ↑ スクロール位置が100よりも小さい場合に以下の処理をする
           $('#pageTop').slideDown("fast");
            // ↑ (100より小さい時は)ページトップボタンをスライドダウン
       } else {
           $('#pageTop').slideUp("fast");
            // ↑ それ以外の場合の場合はスライドアップする。
       }
    });
         
// フッター固定       
 
    $(window).bind("scroll", function() {
 
        scrollHeight = $(document).height(); 
        // ドキュメントの高さ
        scrollPosition = $(window).height() + $(window).scrollTop(); 
        //　ウィンドウの高さ+スクロールした高さ→　現在のトップからの位置
        footHeight = $("#footer").innerHeight();
        // フッターの内側の高さ
                 
        if ( scrollHeight - scrollPosition  <= footHeight ) {
        // 現在の下からの位置が、フッターの高さの位置にはいったら
             
            $("#pageTop").css({
                "position":"absolute",
                "bottom": footHeight
            });
            //  ".gotop"のpositionをabsoluteに変更し、フッターの高さの位置にする
            // "bottom"の指定は場合により親要素からみた数値にかえて下さい
         
        } else {
        // それ以外の場合は元のcssスタイルを指定
         
            $("#pageTop").css({
                "position":"fixed",
                "bottom": "0px"
            });
        }
    });

// トップへスムーススクロール
 
    $('#pageTop').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 500);
        // ページのトップへ 500 のスピードでスクロールする
        return false;
    });

});
