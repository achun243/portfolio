/**
 * UNIQLO L1 Scripts
 * 
 * @author  katsuma@team-lab.com
 * @version 1.2.2
 * @require jquery 1.6
 * @require jquery easing 1.3
 */

/*
 * uniqlo utils
 */
if(location.href.indexOf("file:///")==0 && window.console){
	$.extend({log: function(msg){console.log(msg)}});
}else{
	$.extend({log: function(){}});
}

/*
 * image rollover plugin
 */
(function($){
	$.fn["rollover"] = function(options){
		var settings = $.extend({
			"suffix" : "_o"
		}, options);
		
		var _imgs = [];
		
		this.each(function(){
			var dsrc  = $(this).attr('src');
			var ftype = dsrc.substring(dsrc.lastIndexOf('.'), dsrc.length);
			var hsrc  = (dsrc.indexOf(settings.suffix+ftype)>0) ? dsrc:dsrc.replace(ftype, settings.suffix+ftype);
			// preload
			_imgs.push(new Image());
			_imgs[_imgs.length-1].src = hsrc;
			
			$(this)
				.attr({"dsrc": dsrc, "hsrc": hsrc})
				.mouseover(function(){$(this).attr("src", $(this).attr("hsrc"));})
				.mouseout( function(){$(this).attr("src", $(this).attr("dsrc"));});
		});
		return this;
	};
})(jQuery);

/*
 * image rollover toggle plugin
 * @require image rollover plugin
 */
(function($){
	$.fn["rolloverToggle"] = function(options){
		var settings = $.extend({
			"current": true,
			"suffix" : "_o"
		}, options);
		
		this.each(function(){
			if(settings.current){
				// default -> hover
				$(this).attr({
					"dsrc": $(this).attr("hsrc"),
					"src" : $(this).attr("hsrc")
				});
			}else{
				// hover -> default
				$(this).attr({
					"dsrc": $(this).attr("hsrc").replace(settings.suffix,""),
					"src" : $(this).attr("hsrc").replace(settings.suffix,"")
				});
			}
		});
		return this;
	};
})(jQuery);

/*
 * image loader with callback plugin
 */
(function($){
	$.fn["imageLoader"] = function(callback){
		var _length = $(this).length;
		var _loaded = function(){
			_length--;
			if(_length==0) callback.apply();
		};
		this.each(function(){
			$("<img>")
				.attr("src", $(this).attr("src"))
				.load(_loaded)
				.error(_loaded);
		});
		return this;
	};
})(jQuery);

/*
 * L1 uniqlo header plugin
 * @require image rollover plugin
 */
(function($){
	$.fn["l1header"] = function(options){
		// settings
		var settings = $.extend({
			"imgClass" : ".imgover",
			"mainID"   : "#navHeader",
			"subClass" : "navCategory",
			"cartID"   : "#gnav_cart_trigger",
			"searchID" : "#searchFocus",
			"duration" : 200,
			"animate"  : false,
			"click"    : false
		}, options);
		
		// 隨ｬ荳蛾嚴螻､繧帝哩縺倥ｋ
		var _closeHeaderLevel3 = function(){
			$("#navHeader .navCategory a.selected")
			.removeClass("selected")
			.find(">img")
			.rolloverToggle({current:false})
			.end()
			.find("+ul.sub")
			.slideUp(200);
		};
		
		// main
		this.each(function(){
			// outline蟇ｾ遲�
			$(this).find("a").focus(function(){
				$(this).blur();
			});
			// 繝倥ャ繝隨ｬ莠碁嚴螻､縺ｧ驕ｷ遘ｻ縺励↑縺��縺ｯ繧ｯ繝ｪ繝�け縺薙ｍ縺�
			if(!settings.click){
				$(this).find("ul.navCategory>li>a").click(function(){
					if($(this).attr("href")=="#") return false;
				});
			}
			
			// 讀懃ｴ｢繝輔か繝ｼ繝�
			$(this)
				.find(settings.searchID)
				.focus(function(){
					$(this).parent().parent().addClass("inputFocus");
				})
				.blur(function(){
					$(this).parent().parent().removeClass("inputFocus");
				});
			
			// 髢矩哩繝医Μ繧ｬ縺後け繝ｪ繝�け縺ｮ蝣ｴ蜷�
			if(settings.click){
				// 隨ｬ莠碁嚴螻､縺九ｉ縺ｮ隨ｬ荳蛾嚴螻､髢矩哩
				$(settings.mainID).find(".navCategory>li").click(function(e){
					// 蟄宣嚴螻､縺後↑縺代ｌ縺ｰ繝壹�繧ｸ驕ｷ遘ｻ
					if($(this).find(">ul").length==0) return;
					if($(e.target).hasClass("sub")) return;
					if($(e.target).parent().parent().hasClass("sub")) return;
					
					// 蟄宣嚴螻､縺後≠繧後�繝励Ν繝繧ｦ繝ｳ螻暮幕
					if(!$(this).find(">a").hasClass("selected")){
						$(this)
							.find(">a")
							.addClass("selected")
							.find(">img")
							.rolloverToggle()
							.end()
							.end()
							.find(">ul")
							.slideDown(settings.duration)
							.end()
							.siblings()
							.find(">a.selected")
							.removeClass("selected")
							.find(">img")
							.rolloverToggle({current:false})
							.end()
							.find("+ul")
							.slideUp(settings.duration);
					}else{
						$(this)
							.find(">a.selected")
							.removeClass("selected")
							.find(">img")
							.rolloverToggle({current:false})
							.end()
							.find("+ul")
							.slideUp(settings.duration);
					}
					return false;
				});
				
				// 繝倥ャ繝縺九ｉ繝槭え繧ｹ縺碁屬繧後◆2遘貞ｾ後↓隨ｬ荳蛾嚴螻､繧定�蜍輔〒髢峨§繧�
				// 繝倥ャ繝螟悶け繝ｪ繝�け縺ｧ隨ｬ荳蛾嚴螻､髢峨§繧�
				var _timer_header_lv3_autohide;
				$("#header>.navArea").hover(
					function(){
						clearTimeout(_timer_header_lv3_autohide);
						$("#container").unbind("click");
					},
					function(){
						_timer_header_lv3_autohide = setTimeout(_closeHeaderLevel3, 2000);
						$("#container").click(_closeHeaderLevel3);
					}
				);
			
			// 髢矩哩繝医Μ繧ｬ縺後�繧ｦ繧ｹ繧ｪ繝ｼ繝舌�縺ｮ蝣ｴ蜷�
			}else{
				// 隨ｬ莠碁嚴螻､縺ｮ髢矩哩
				var _timer_header_toggle;
				$("#navHeader").hover(
					function(){
						clearTimeout(_timer_header_toggle);
						$("#header").stop().animate({height:50}, 400, "easeOutQuint", function(){
							$("#header").css({"overflow":"visible"});
						});
					},
					function(){
						_timer_header_toggle = setTimeout(function(){
							$("#header").stop().delay(100).animate({height:50}, 400, "easeOutQuint", function(){
								$("#header").css({"overflow":"hidden"});
							});
						}, 500);
					});
				
				// 隨ｬ莠碁嚴螻､縺ｮ驕�ｻｶ繧ｯ繝ｭ繝ｼ繧ｺ逕ｨ繧ｫ繝ｬ繝ｳ繝郁｡ｨ遉ｺ菫晄戟
				$("#navHeader>li").mouseover(function(){
					$("#navHeader>li").removeClass("current");
					$(this).addClass("current");
				});
				
				// �馴嚴螻､繝峨Ο繝��繝繧ｦ繝ｳ
				$(settings.mainID).find("li").hover(
					function(){
						if(!settings.animate && $(this).parent().attr("id") == settings.mainID.replace("#","")){
							$(this).find(">ul").show();
						}else{
							$(this).find(">ul:not(:animated)").slideDown(settings.duration);
						}
					},
					function(){
						// 繧ｫ繝ｬ繝ｳ繝医き繝�ざ繝ｪ隨ｬ莠碁嚴螻､縺ｯ髢峨§縺ｪ縺�
						if($(this).find(">ul").hasClass(settings.subClass)) return;
						if(!settings.animate && $(this).parent().attr("id") == settings.mainID.replace("#","")){
							$(this)
								.find(".sub")
								.hide()
								.end()
								.find(">ul")
								.hide();
						}else{
							$(this).find(">ul").slideUp(settings.duration, function(){
								// 繧｢繝九Γ繝ｼ繧ｷ繝ｧ繝ｳ縺ｮ繧ｿ繧､繝溘Φ繧ｰ谺｡隨ｬ縺ｧ隨ｬ荳蛾嚴螻､縺悟叙繧頑ｮ九＆繧後ｋ縺ｮ縺ｧ蠑ｷ蛻ｶ逧�↓髢峨§繧�
								$(this).find(".sub").hide();
							});
						}
					});
			}
			
			// 繝ｭ繝ｼ繝ｫ繧ｪ繝ｼ繝舌�螟画峩
			$(this).find(settings.imgClass)
				.unbind("mouseover")
				.unbind("mouseout")
				.parent()
				.parent()
				.hover(
					function(){
						var $img = $(this).find(">a>img");
						$img.attr("src", $img.attr("hsrc"));
					},
					function(){
						var $img = $(this).find(">a>img");
						$img.attr("src", $img.attr("dsrc"));
					});
		});
		return this;
	};
})(jQuery);


// initialize
$(function(){
	$(".imgover").rollover();
});

 