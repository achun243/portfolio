$(function() {
  $('.menu.-open').click(function(){
    $('body').attr('data-drawer-is-active', 'true');
    scrollPos = $(window).scrollTop();//現在のスクロール位置
    $('body').addClass('fix').css('top',-scrollPos + 'px');
  });
  $('.menu.-close, .drawerOverlay').click(function(){
    $('body').attr('data-drawer-is-active', 'false');
    $('body').removeClass('fix').css('top',0 + 'px');
    window.scrollTo( 0 , scrollPos );//初期化
  });
});

var filepath_tagTextJSON = '/jp/en/contents/sustainability/cmn/json/tags.json';

function getJSON(file_path, callback) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        var data = JSON.parse(request.responseText);
        callback(data);
      }
    }
  }
  request.open("GET", file_path);
  request.send(); 
}

function isEmpty(obj){
  return !Object.keys(obj).length;
}

function setTagHTML(json) {
  var html = [];
  var count_of_tags = Object.keys(json).length;
  for (var i=0; i < count_of_tags; i++) {
    var content = '<li class="navigation_tagItem"><a class="navigation_tagItemLink track_click ga_cat-sustainability ga_act-keyword-' + json[i]["query"] + '" href="/jp/en/contents/sustainability/keyword/index.html?tag=' + json[i]["query"] + '">#' + json[i]["tag_name"] + '</a></li>';
    html.push(content)
  }
  var target = document.querySelector(".navigation_tag");
  target.innerHTML = html.join("");

}

function main() {
  getJSON(filepath_tagTextJSON, setTagHTML);
}

main();
