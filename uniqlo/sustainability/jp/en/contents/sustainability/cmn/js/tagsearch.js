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
    var content = '<li class="tagSearch_listItem"><a class="tagSearch_listItemLink track_click ga_cat-sustainability ga_act-keyword-' + json[i]["query"] + '" href="/jp/en/contents/sustainability/keyword/index.html?tag=' + json[i]["query"] + '">#' + json[i]["tag_name"] + '</a></li>';
    html.push(content)
  }
  /*以下、「もっと見る」「閉じる」ボタンで隠す場合*/
  /*
  for (var i=0; i < count_of_tags; i++) {
    var content = '<li class="tagSearch_listItem is-hidden"><a class="tagSearch_listItemLink" href="/jp/en/contents/sustainability/keyword/index.html?tag=' + json[i]["query"] + '">#' + json[i]["tag_name"] + '</a></li>';
    html.push(content)
  }*/
  var target = document.querySelector(".tagSearch_list");
  target.innerHTML = html.join("");

  /*以下、「もっと見る」「閉じる」ボタンで隠す場合*/
  // 最初の10個のタグだけ表示する
  /*
  var count_of_active_tagElement = 10;
  var tagElements = document.getElementsByClassName("tagSearch_listItem");
  for (var i=0; i < count_of_active_tagElement ; i++) {
    tagElements.item(i).classList.remove("is-hidden");
  }*/
}

/*以下、「もっと見る」「閉じる」ボタンで隠す場合*/
/*
var more_btn = document.getElementById("more_btn");
more_btn.addEventListener('click', function() {
  var hidden_tag = document.getElementsByClassName("tagSearch_listItem is-hidden");
  var btn_inner = document.getElementsByClassName("more_btnInner");
  if (hidden_tag.length > 0) {
    while (hidden_tag.length) {
      hidden_tag.item(0).classList.add("add");
      hidden_tag.item(0).classList.remove("is-hidden");
    }
    btn_inner[0].innerText = "Close"
  } else {
    var add_tag = document.getElementsByClassName("tagSearch_listItem add");
    while (add_tag.length) {
      add_tag.item(0).classList.add("is-hidden");
      add_tag.item(0).classList.remove("add");
    }
    btn_inner[0].innerText = "Read More"
  }
});*/

function main() {
  getJSON(filepath_tagTextJSON, setTagHTML);
}
main();