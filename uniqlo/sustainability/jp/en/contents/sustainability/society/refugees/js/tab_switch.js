"use strict";

window.addEventListener('DOMContentLoaded', function () {

  // Tab switching
  var tab = document.querySelectorAll('[data-tab-number]')

  // Tab
  var category = document.querySelectorAll('[data-tab-button]');
  var container = document.querySelectorAll('[data-tab-container]');

  var localcategory = localStorage.getItem('category');
  if (!localcategory) {
    localStorage.setItem('category', 'user');
  }

  if(tab[0]) tabInit()

  function tabInit() {
    for (var i = 0; i < tab.length; i++) {
      var tabButton = tab[i].querySelectorAll('[data-tab-button]')
      var tabContainer = tab[i].querySelectorAll('[data-tab-container]')
      tabButtonInit(tabButton, tabContainer)
    }
  }

  function tabButtonInit(tabButton, tabContainer) {
    for (var i = 0; i < tabButton.length; i++) {
      tabButton[i].addEventListener('click', function (e) {
        var currentCategory = e.currentTarget.getAttribute('data-tab-button')


        for (var i = 0; i < tabButton.length; i++) {
          tabButton[i].classList.remove('is-active')
          var tabButtonCategory = tabButton[i].getAttribute('data-tab-button')
          if (tabButtonCategory === currentCategory) tabButton[i].classList.add('is-active')
          containerInit(tabContainer, currentCategory)
        }
      })
    }
  }

  function containerInit(tabContainer, currentCategory) {
    for (var i = 0; i < tabContainer.length; i++) {
      tabContainer[i].setAttribute('aria-hidden', 'true')
      var tabContainerCategory = tabContainer[i].getAttribute('data-tab-container')
      if (tabContainerCategory === currentCategory) tabContainer[i].setAttribute('aria-hidden', 'false')
      if (tabContainer === currentCategory) {
        tabContainer[i].classList.add('is-active');
        localStorage.removeItem('category');
        localStorage.setItem('category', currentCategory);
      }
    }
  }

  // Parameter
  //urlに保存しないver
  function getParameter() {
    var url = location.href
    var regex = /[?&]([^=#]+)=([^&#]*)/g
    var object = {}
    var match

    while (match = regex.exec(url)) {
      object[match[1]] = match[2]
    }
    return object
  }

  var parameter = getParameter()

  // Tab switching when a parameter is attached

  var parameterCategory = 'emergency'
  if (parameter.category === 'emergency') parameterCategory = 'emergency'

  for (var i = 0; i < category.length; i++) {
    category[i].classList.remove('is-active');
    var categorys = category[i].getAttribute('data-tab-button');
    if (categorys === parameterCategory) category[i].classList.add('is-active');
  }

  for (var i = 0; i < container.length; i++) {
    container[i].setAttribute('aria-hidden', 'true')
    var containers = container[i].getAttribute('data-tab-container');
    if (containers === parameterCategory) container[i].setAttribute('aria-hidden', 'false')
  }
});


$(function() {
  $('.tabButton li').on("click",function() {
    var openTabIndex = $('.tabButton li.open').index();
    var index = $('.tabButton li').index(this);

    if (openTabIndex !== index) {
      $('.tabButton li').removeClass('open');
      $('.tabButton li').removeClass('notopen');
      $(this).addClass('open');
  
      var openTab_pc = $('.open img.pc-only');
      var openImgSrc_pc = openTab_pc.attr('src');
      var openTab_sp = $('.open img.sp-only');
      var openImgSrc_sp = openTab_sp.attr('src');
      openTab_pc.attr('src', changeImgSrc(openImgSrc_pc));
      openTab_sp.attr('src', changeImgSrc(openImgSrc_sp));
      $('.tabButton li').not('.open').addClass('notopen');
      $('.tabButton li').not('.open').find('.switchImg').each(function(){
        var closeImgSrc = $(this).attr('src');
        if (closeImgSrc.indexOf("_on.png") > 0) {
          $(this).attr('src', changeImgSrc(closeImgSrc));
        }
      });
  
      function changeImgSrc(src) {
        if (src.indexOf('_on.png') > 0) {
          return src.replace('_on.png', '_off.png')
        } else {
          return src.replace('_off.png', '_on.png')
        }
      }
    }
  });

});