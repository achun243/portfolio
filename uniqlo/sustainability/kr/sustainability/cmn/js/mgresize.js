function mgResize(){
  let elements = document.querySelectorAll('p,h1,h2,h3,h4,h5,h6');
  //クラス名「mgresize_include」が指定されている要素は上記セレクタでなくても処理対象にする
  //現在、上記のセレクタであるにもかかわらず、「mgresize_include」を指定してしまうと二重でmarginが引かれます
  let elements_add = document.getElementsByClassName('mgresize_include');
  //二重でmarginが引かせないためには、「mgresize_include」ではなく、「mgresize_onlyOnce」を指定してください
  let elements_onlyOnce = document.getElementsByClassName('mgresize_onlyOnce');
  var lh = "";
  var mt = "";
  var mb = "";
  var ft = "";
  var result = "";
  elements = Array.from(elements);
  elements_add = Array.from(elements_add);
  elements = elements.concat(elements_add);
  elements_onlyOnce　= Array.from(elements_onlyOnce);


  for(var i = 0, len = elements.length; i < len; i++){
    elements[i].style.marginTop = '';
    elements[i].style.marginBottom = '';
  }

  for(var i = 0, len = elements_onlyOnce.length; i < len; i++){
    elements_onlyOnce[i].style.marginTop = '';
    elements_onlyOnce[i].style.marginBottom = '';
  }


  elements.forEach(function(element) {

    //クラス名「mgresize_exclude」が指定されている要素と、L3以下の英タイトル部分は処理の対象から外す
    var classes = element.className;
    if (classes.includes('cover_mainTtl') || classes.includes('mgresize_exclude')){
      return;
    }

    lh = window.getComputedStyle(element).getPropertyValue('line-height').replace("px", "");
    mt = window.getComputedStyle(element).getPropertyValue('margin-top').replace("px", "");
    mb = window.getComputedStyle(element).getPropertyValue('margin-bottom').replace("px", "");
    ft = window.getComputedStyle(element).getPropertyValue('font-size').replace("px", "");

    //クラスに「resize_onlyTop」が含まれていた時、上マージンだけマイナスする
    if (classes.includes('resize_onlyTop')){
      mgCalc(mt,lh,ft);
      element.style.marginTop = result + "px";
      return;
    }

    //クラスに「resize_onlyBottom」が含まれていた時、下マージンだけマイナスする
    if (classes.includes('resize_onlyBottom')){
      mgCalc(mb,lh,ft);
      element.style.marginBottom = result + "px";
      return;
    }

    mgCalc(mt,lh,ft);
    element.style.marginTop = result + "px";

    mgCalc(mb,lh,ft);
    element.style.marginBottom = result + "px";
  });

  elements_onlyOnce.forEach(function(element) {

    var classes = element.className;
    lh = window.getComputedStyle(element).getPropertyValue('line-height').replace("px", "");
    mt = window.getComputedStyle(element).getPropertyValue('margin-top').replace("px", "");
    mb = window.getComputedStyle(element).getPropertyValue('margin-bottom').replace("px", "");
    ft = window.getComputedStyle(element).getPropertyValue('font-size').replace("px", "");

    //クラスに「resize_onlyTop」が含まれていた時、上マージンだけマイナスする
    if (classes.includes('resize_onlyTop')){
      mgCalc(mt,lh,ft);
      element.style.marginTop = result + "px";
      return;
    }

    //クラスに「resize_onlyBottom」が含まれていた時、下マージンだけマイナスする
    if (classes.includes('resize_onlyBottom')){
      mgCalc(mb,lh,ft);
      element.style.marginBottom = result + "px";
      return;
    }

    mgCalc(mt,lh,ft);
    element.style.marginTop = result + "px";

    mgCalc(mb,lh,ft);
    element.style.marginBottom = result + "px";
  });

  function mgCalc(mg,lh,ft) {
    result = mg - (lh - ft) / 2;
    return result;
  }
}

window.onload = mgResize;
window.onresize = mgResize;

