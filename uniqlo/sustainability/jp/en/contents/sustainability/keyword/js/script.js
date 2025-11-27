var filepath_pagesJSON = '/jp/en/contents/sustainability/cmn/json/pages.json';
var filepath_tagTextJSON = '/jp/en/contents/sustainability/cmn/json/tags.json';

function getJSON(file_path) {
  return new Promise(function (resolve, reject) {
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
      if (request.readyState == 4) {
        if (request.status == 200) {
          data = JSON.parse(request.responseText);
          resolve(data)
        }
      }
    }
    request.open("GET", file_path);
    request.send(); 
  });
}

// 空の時はtrue
// 空ではない時はfalse
function isEmpty(obj){
  return !Object.keys(obj).length;
}

function getqueryId(json) {
  var query_text = location.search.replace(/[?&][^=#?]+=([^&#]+)$/g, "$1");
  var matched_tag = json.filter(function(tag){
    return tag["query"] === query_text;
  });
  if (!isEmpty(matched_tag)) {
    var query_id = matched_tag[0]["id"];
    query_name = matched_tag[0]["query"];
  } else {
    var query_id = "16";
    query_name = "human-rights";
    history.pushState(null, null, "?tag="+query_name);
  }
  return query_id;
}

function setResultTtl(query_id, json) {
  var matched_tag = json.filter(function(tag){
    return tag["id"] === query_id;
  });
  if (!isEmpty(matched_tag)) {
    var tag_name = matched_tag[0]["tag_name"];
  }
  var result_ttl = '"# ' + tag_name + '" Contents List';
  var target = document.querySelector(".tagSearch_resultTtl");
  target.innerHTML = result_ttl;
}

function createPagelist(query_id, json) {
  var matched_pages = [];
  var count_of_pages = Object.keys(json).length;
  for (var i=0; i < count_of_pages; i++) {
    var result = json[i]["tag"].filter(function(tag){
      return tag === query_id;
    });
    if (!isEmpty(result)) {
      matched_pages.push(json[i]);
    }
  }
  return matched_pages;
}

function setArticleHTML(pagelist) {
  var count_of_article = pagelist.length;
  html = [];
  for (var i=0; i < count_of_article; i++) {
    directory_names=pagelist[i].url.match(/([^\/.]+)/g);
    var directory_last = directory_names[directory_names.length - 1];
    if ( pagelist[i].url.match('/sustainability/planet/') ){
      var content = '<li class="contentsList_item"><a class="contentsList_itemLink track_click ga_cat-sustainability ga_act-keyword-from_' + query_name + '-to_' + directory_last + '" href="' + pagelist[i].url + '"><img class="' + 'contentsList_itemImg" src="' + pagelist[i].image_path + '" alt="' + '"><div class="contentsList_itemWrap' + '"><p class="' + 'contentsList_itemTtl color_green">' + pagelist[i].article_title + '</p><p class="contentsList_itemTxt">' + pagelist[i].article_desc + "</p></div></a></li>";
    }else if ( pagelist[i].url.match('/sustainability/society/') ){
      var content = '<li class="contentsList_item"><a class="contentsList_itemLink track_click ga_cat-sustainability ga_act-keyword-from_' + query_name + '-to_' + directory_last + '" href="' + pagelist[i].url + '"><img class="' + 'contentsList_itemImg" src="' + pagelist[i].image_path + '" alt="' + '"><div class="contentsList_itemWrap' + '"><p class="' + 'contentsList_itemTtl color_blue">' + pagelist[i].article_title + '</p><p class="contentsList_itemTxt">' + pagelist[i].article_desc + "</p></div></a></li>";
    }else if ( pagelist[i].url.match('/sustainability/people/') ){
      var content = '<li class="contentsList_item"><a class="contentsList_itemLink track_click ga_cat-sustainability ga_act-keyword-from_' + query_name + '-to_' + directory_last + '" href="' + pagelist[i].url + '"><img class="' + 'contentsList_itemImg" src="' + pagelist[i].image_path + '" alt="' + '"><div class="contentsList_itemWrap' + '"><p class="' + 'contentsList_itemTtl color_yellow">' + pagelist[i].article_title + '</p><p class="contentsList_itemTxt">' + pagelist[i].article_desc + "</p></div></a></li>";
    }else{
      var content = '<li class="contentsList_item"><a class="contentsList_itemLink track_click ga_cat-sustainability ga_act-keyword-from_' + query_name + '-to_' + directory_last + '" href="' + pagelist[i].url + '"><img class="' + 'contentsList_itemImg" src="' + pagelist[i].image_path + '" alt="' + '"><div class="contentsList_itemWrap' + '"><p class="' + 'contentsList_itemTtl">' + pagelist[i].article_title + '</p><p class="contentsList_itemTxt">' + pagelist[i].article_desc + "</p></div></a></li>";
    }
    html.push(content);
  }
  var target = document.querySelector(".contentsList");
  target.innerHTML = html.join("");
}

function setTagHTML(json) {
  var html = [];
  var conuntOfTags = Object.keys(json).length;
  for (var i=0; i < conuntOfTags; i++) {
    var content = '<li class="tagSearch_listItem"><a class="tagSearch_listItemLink track_click ga_cat-sustainability ga_act-keyword-' + json[i]["query"] + '" href="/jp/en/contents/sustainability/keyword/index.html?tag=' + json[i]["query"] + '"># ' + json[i]["tag_name"] + '</a></li>';
    html.push(content)
  }
  /*以下、「もっと見る」「閉じる」ボタンで隠す場合*/
  /*
  for (var i=0; i < conuntOfTags; i++) {
    var content = '<li class="tagSearch_listItem is-hidden"><a class="tagSearch_listItemLink" href="/jp/en/contents/sustainability/keyword/index.html?tag=' + json[i]["query"] + '"># ' + json[i]["tag_name"] + '</a></li>';
    html.push(content)
  }*/
  var target = document.querySelector(".tagSearch_list");
  target.innerHTML = html.join("");

  /*以下、「もっと見る」「閉じる」ボタンで隠す場合*/
  // 最初の10個のタグだけ表示する
  /*
  var activeTag = 10;
  var tag = document.getElementsByClassName("tagSearch_listItem");
  for (var i=0; i < activeTag ; i++) {
    tag.item(i).classList.remove("is-hidden");
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
  var query_id;
  var pagelist;
  getJSON(filepath_tagTextJSON)
  .then(function(tagTextJSON) {
    setTagHTML(tagTextJSON);
    query_id = getqueryId(tagTextJSON);
    setResultTtl(query_id, tagTextJSON);
    getJSON(filepath_pagesJSON)
    .then(function(pagesJSON) {
      pagelist = createPagelist(query_id, pagesJSON);
      setArticleHTML(pagelist);
    });
  });
}
main();