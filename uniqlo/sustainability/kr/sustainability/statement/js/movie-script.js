// JavaScript Document

(function ($) {

	//YouTube iFrame API
	$(window).load(function(){
	  //Modal
		$(".playbtn").each(function(){
			$(this).click(function () {
				modalyoutube_open(this.href);
				return false;
			});
		})
		//Modal Create
		$('#sustainabilityVideos').append(
			'<div id="movie_modal_bg">'+
			'</div>'+
			'<div id="movie_modal_content">'+
			'<a id="modalyoutube_close" href="javascript:void(0)">'+
			'<img src="./img/180406-button_close.png" alt="">'+
			'</a>'+
			'<div id="modalyoutube_movie">'+
			// '<div id="modalyoutube_player">'+
			// '</div>'+
			'</div>'+
			'</div>'
		)
		//Modal Open
		function modalyoutube_open(href){
			$("div#movie_modal_bg").animate(
				{opacity: "show"},
				{duration: "fast", easing: "linear", complete:
					function (){
						modalyoutube_autoplay(href);
					}
				}
			);
		}
		function modalyoutube_autoplay(href){
			var modalWidth = $("#content").width();
			var modalHeight = modalWidth * 0.5;
			var herfWidth = modalWidth*0.05;
			var herfHeight = modalHeight/3;
			$("div#movie_modal_content").css('height',modalHeight);
			// $("div#movie_modal_content").css('top',herfHeight);
			// $("div#movie_modal_content").css('left',herfWidth);
			$("div#movie_modal_content").animate(
				{opacity: "show"},
				{duration: "1", easing: "linear", complete:function (){
						$("#modalyoutube_movie").html('<iframe src="'+href+'?rel=0&wmode=transparent&autoplay=1&autohide=1" frameborder="0" allowfullscreen></iframe>');
					}
				}
			);
		}
		//Modal Close
		$("#movie_modal_bg , #modalyoutube_close").click(function () {
			$("div#movie_modal_bg , div#movie_modal_content").animate(
				{opacity: "hide"},
				{duration: "fast", easing: "linear", complete: function(){
					$("#modalyoutube_movie").empty();
				}}
			);
			return false;
		});
	});
	
})(jQuery);
