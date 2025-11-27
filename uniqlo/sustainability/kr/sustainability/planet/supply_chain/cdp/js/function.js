var win;
var safari;
if(navigator.platform.indexOf("Win") != -1){
	win = true;
}
if(navigator.userAgent.indexOf("Chrome") < 0 && navigator.userAgent.indexOf('Safari') > 0){
	safari = true;
}

$(document).ready(function () {

	if(win && safari){
		$('body').css('font-family', 'sans-serif');
	}

	$('#pageTop a').click(function(){
		$($.browser.opera ? document.compatMode == 'BackCompat' ? 'body' : 'html' :'html,body').animate({scrollTop:0});
	});

	$('#olive #mainCont .section table tr:even').css('background','#fcfcfc');

	$('.imgDsp').each(function(){
		var x = 0;
		var loop;
		var tgt = $(this).find('.imgArea').find('li');
		var tgtSize = tgt.size();
		var ctl = $(this).find('.ctlArea').find('li');
		tgt.not(':first').css('display','none');
		ctl.css('cursor','pointer');

		clearInterval(loop);
		fade();

		ctl.click(function(){
			x = ctl.index(this);
			tgt.not(tgt.eq(x)).fadeOut('slow').removeClass('act');
			ctl.not(ctl.eq(x)).removeClass('act');
			tgt.eq(x).fadeIn('slow').addClass('act');
			ctl.eq(x).addClass('act');
			clearInterval(loop);
			fade();
		});

		function fade(){
			loop = setInterval(function(){
				if( x == tgtSize - 1) {
					x = 0;
				} else {
					x = x + 1;
				};
				tgt.not(tgt.eq(x)).fadeOut('slow').removeClass('act');
				ctl.not(ctl.eq(x)).removeClass('act');
				tgt.eq(x).fadeIn('slow').addClass('act');
				ctl.eq(x).addClass('act');
				},5000
			);
		};
	});


});