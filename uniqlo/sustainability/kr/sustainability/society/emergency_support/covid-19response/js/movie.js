
// modal open
var openModal=""; //Insert modal class name
var openModalBg="";
$(function() {
  $('.modal-trigger').click(function() {
    // Get data-modal class name
    openModal = $('.modal_moviearea');
    openModalBg =$('.modal_overlay');
    $('.modal_contentsInner').append('<video id="movie_content" width="960" height="540" controls src="/jp/en/contents/sustainability/society/emergency_support/covid-19response/img/200928_jp_comp.mp4"></video>');
    openModal.fadeIn(400); //Fade display
    openModalBg.fadeIn(400);
    openModal.show();
    openModalBg.show();
  });
});
// modalclose
$(function() {
  $('.modal_close').click(function() {
    $('#movie_content').remove();
    $('.modal_moviearea').fadeOut(400); //Fade out display
    $('.modal_overlay').fadeOut(400); //Fade out display
    $('.modal_moviearea').hide();
    $('.modal_overlay').hide();
  });
});

// modalclose
$(function() {
  $('.modal_overlay').click(function() {
    $('#movie_content').remove();
    $('.modal_moviearea').fadeOut(400); //Fade out display
    $(this).fadeOut(400); //Fade out display
    $('.modal_moviearea').hide();
    $(this).hide();
  });
});
