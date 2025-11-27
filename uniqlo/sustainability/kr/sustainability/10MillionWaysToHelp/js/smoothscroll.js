/*=========================================
 base script
=========================================*/

$(document).ready(function(){
	/* Smooth Scroll and Delete Hash */
	$('a[href*=#]:not([href*=banner1]), area')
	.not('#gnav_header a')
	.unbind("click.anc")
	.click(function(){
		if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
			var target=$(this.hash);
			var navHeight = 50;
			if($('body').hasClass('pc')){
				navHeight = 96;
			}
			target=target.length&&target;
			if(target.length){
				var sclpos=navHeight;var scldurat=800;
				var targetOffset=target.offset().top-sclpos;
				$('html,body').animate({scrollTop:targetOffset},{duration:scldurat,easing:""});
				return false;
			}
		}
	});
	/* Coordinate List (out L3 banner) */
	$('.coorde-catalog').each(function(){
		$(this).find('.listCoordinate dd').autoHeight({column:4});
	});
});
