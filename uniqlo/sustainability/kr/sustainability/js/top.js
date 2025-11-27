/**
 * UNIQLO L1 Scripts
 * 
 * @author  katsuma@team-lab.com
 * @version 1.1
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
			"animate"  : false
		}, options);
		
		// 第三階層を閉じる
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
			// outline対策
			$(this).find("a").focus(function(){
				$(this).blur();
			});
			
			// 検索フォーム
			$(this)
				.find(settings.searchID)
				.focus(function(){
					$(this).parent().parent().addClass("inputFocus");
				})
				.blur(function(){
					$(this).parent().parent().removeClass("inputFocus");
				});
			
			// 第二階層からの第三階層開閉
			$(settings.mainID).find(".navCategory>li").click(function(e){
				// 子階層がなければページ遷移
				if($(this).find(">ul").length==0) return;
				if($(e.target).hasClass("sub")) return;
				if($(e.target).parent().parent().hasClass("sub")) return;
				
				// 子階層があればプルダウン展開
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
			
			// ヘッダからマウスが離れた2秒後に第三階層を自動で閉じる
			// ヘッダ外クリックで第三階層閉じる
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
			
			// ロールオーバー変更
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

/*
 * L1 banner with category filter plugin
 * @require image rollover toggle plugin
 * @require image loader with callback plugin
 */
(function($){
	$.fn["l1Banner"] = function(options){
		// settings
		var settings = $.extend({
			"animate"  : false,
			"interval" : 3000
		}, options);
		
		// アニメーション設定（false指定でie7,8はアニメーションOFF）
		if(!settings.animate && $.support.opacity){
			settings.animate = true;
		}
		
		// china width 950 fix
		var _content_width = $("#content").width();
		var _content_height_min = $("#content_banner_top .content_banner_inner").height();
		var _content_height_max = $("#content_banner_top").height();
		
		var _content_banner_category;
		var _content_banner_current = 0;
		// カテゴリフィルタの固定リンクハッシュをヘッダのAタグから抽出
		var _content_location_permalinks = [];
		$("#navHeader>li>a").each(function(){
			_content_location_permalinks.push("#"+$(this).attr("href").split("#")[1]);
		});
		
		var _timer_content_banner_loading;
		var _timer_content_banner_rotation;
		var _timer_content_banner_toggle;
		var _is_mouseover_header = false;
		
		// カテゴリ選択初期化
		var _initialize = function(callback){
			// location.hash判定
			var c, l = location.hash.replace("#!","").toLowerCase();
			if($.inArray(location.hash, _content_location_permalinks)!=-1){
				_content_banner_category = "#content_banner_"+l;
				c = ".category_"+l;
				$("#header_"+l)
					.addClass("selected")
					.find(">img")
					.rolloverToggle()
					.end()
					.find("+ul.navCategory")
					.show();
				
				$("#header")
					.css({"overflow":"hidden"})
					.stop()
					.delay(400)
					.animate({height:100}, 400, "easeOutQuint", function(){
						$("#header").css({"overflow":"visible"});
					});
			}else{
				_content_banner_category = "#content_banner_top";
				c = "";
				$("#top").addClass("selected");
				$("#content_banner_loading").hide();
			}
			
			// カレントバナー切替
			$("#content_banner>div")
				.filter(":not(#content_banner_loading)")
				.hide()
				.end()
				.filter(_content_banner_category)
				.show();
			
			// カレントコンテンツ切替
			if(c!=""){
				if(!settings.animate){
					$("#content_blocks>.content_block_list>li:not("+c+")").hide();
				}else{
					$("#content_blocks>.content_block_list>li:not("+c+")").slideUp(600, "easeOutQuint");
				}
			}
			
			// バナーが無限ループできるよう先頭要素のクローンを末尾に追加
			$("#content_banner>div").each(function(){
				var $imgs = $(this).find(".content_banner_item");
				if($imgs.length<=1) return;
				$imgs.eq(0).clone(true).appendTo($(this).find(".content_banner_inner"));
				$(this).find(".content_banner_inner").css("width", _content_width*($imgs.length+1));
			});
			
			// カレントバナー画像の読み込み完了したらローテーション開始
			if($.support.opacity){
				$(_content_banner_category+" img").imageLoader(function(){
					$("#content_banner_loading").delay(400).fadeOut(400);
					_timer_content_banner_rotation = setTimeout(_rotateBanner, settings.interval);
					callback.apply();
				});
			// IE7,8は画像読み込み待ちしない
			}else{
				$("#content_banner_loading").delay(400).fadeOut(400);
				_timer_content_banner_rotation = setTimeout(_rotateBanner, settings.interval);
				callback.apply();
			}
		};
		
		// 自動ローテーション
		var _rotateBanner = function(){
			_timer_content_banner_rotation = null;
			_content_banner_current++;
			var $target = $(_content_banner_category + " .content_banner_inner");
			var l = $(_content_banner_category+" .content_banner_item").length-1;
			$target.stop().animate({left:-_content_width*_content_banner_current}, 750, "easeInOutQuart", function(){
				var c = parseInt($(this).css('left').replace('px')) / -_content_width;
				// 末尾までローテーションしたらコールバックで先頭に戻す
				if(c == l) $target.css({'left':0});
				_rotateStart();
			});
			if(_content_banner_current==l) _content_banner_current = 0;
			// サムネイル部のカレント表示を更新
			if(!settings.animate){
				$(_content_banner_category+">.content_banner_thumbs .content_banner_thumb")
					.eq(_content_banner_current)
					.find(".content_banner_thumb_current>img")
					.css({top:0})
					.end()
					.siblings()
					.find(".content_banner_thumb_current>img")
					.css({top:38});
			}else{
				$(_content_banner_category+">.content_banner_thumbs .content_banner_thumb")
					.eq(_content_banner_current)
					.find(".content_banner_thumb_current>img")
					.stop()
					.delay(300)
					.animate({top:0}, 350, "easeOutQuint")
					.end()
					.siblings()
					.find(".content_banner_thumb_current>img")
					.stop()
					.delay(300)
					.animate({top:38}, 350, "easeOutQuint");
			}
		};
		
		// バナーカテゴリ切替
		var _switchBanner = function(cat){
			$.log("category current: " + cat);
			_rotateStop();
			
			// サムネイルエリアを閉じる
			//$("#content_banner").stop().animate({height:470}, 400, "easeOutQuart");
			// サムネイルエリアをフェードアウト
			$(".content_banner_thumbs").stop().animate({opacity:0}, 300);
			
			// ローディング
			clearTimeout(_timer_content_banner_loading);
			_timer_content_banner_loading = setTimeout(function(){
				$("#content_banner_loading")
					.stop()
					.fadeOut(200, _rotateStart);
				$(".content_banner_thumbs").stop().animate({opacity:1}, 200);
			}, 500);
			
			$("#content_banner_loading")
				.stop()
				.css({opacity:($("#content_banner_loading").css("opacity")==1)?0:$("#content_banner_loading").css("opacity")})
				.show()
				.animate({opacity:1}, 250, function(){
					$(_content_banner_category).hide();
					_content_banner_current = 0;
					_content_banner_category = "#content_banner_" + cat;
					
					// 表示する前に初期化
					$(_content_banner_category+" .content_banner_inner")
						.stop(true, true)
						.css({'left':0})
						.parent()
						.parent()
						.find(">.content_banner_thumbs")
						.find(">.content_banner_thumb:not(.first_thumb) .content_banner_thumb_current>img")
						.stop(true, true)
						.css({top:38})
						.end()
						.find(">.content_banner_thumb.first_thumb .content_banner_thumb_current>img")
						.stop(true, true)
						.css({top:0})
						.closest(_content_banner_category)
						.show();
				});
		};
		
		// ローテーションタイマー開始
		var _rotateStart = function(){
			if(_is_mouseover_header || $(_content_banner_category+" .content_banner_item").length<=1){
				_rotateStop();
				return;
			}
			if(_timer_content_banner_rotation == null){
				//$.log("banner: rotate timer start");
				_timer_content_banner_rotation = setTimeout(_rotateBanner, settings.interval);
			}
		};
		
		// ローテーションタイマー停止
		var _rotateStop = function(){
			//$.log("banner: rotate timer stop");
			clearTimeout(_timer_content_banner_rotation);
			_timer_content_banner_rotation = null;
		};
		
		// ウィンドウのフォーカス判定（inactive時はローテーション停止）
		$(window)
			.focus(_rotateStart)
			.blur (_rotateStop);
		
		// main
		_initialize(function(){
			
			// ヘッダでのカテゴリフィルタ
			var speed_  = 600;
			var easing_ = "easeOutQuint";
			
			// top
			$("#top")
				.click(function(){
					// カレント判定
					if($(this).hasClass("selected")) return false;
					$("#navHeader>li>a").removeClass("selected");
					$(this).addClass("selected");
					
					// 第二階層を閉じる
					$("#navHeader .sub").hide();
					$("#header").delay(200).stop().delay(100).animate({height:50}, 400, "easeOutQuint", function(){
						$("#header").css({"overflow":"hidden"});
					});
					
					// ヘッダ切替
					$("#navHeader>li>a>img").rolloverToggle({current:false});
					
					// バナー切替
					_switchBanner($(this).attr("id"));
					
					// コンテンツ切替
					if(!settings.animate){
						$("#content_blocks>.content_block_list>li")
							.show();
					}else{
						$("#content_blocks>.content_block_list>li")
							.stop(true, true)
							.slideDown(speed_, easing_);
					}
					return false;
				});
				
			// category
			$("#navHeader>li>a")
				.click(function(){
					// カレント判定
					if($(this).hasClass("selected")) return false;
					$("#top, #navHeader>li>a").removeClass("selected");
					$(this).addClass("selected");
					
					// 第二階層の重なり順制御
					$(this)
						.find("+ul a.selected")
						.removeClass("selected")
						.find(">img")
						.rolloverToggle({current:false})
						.end()
						.end()
						.parent()
						.addClass("current")
						.siblings()
						.removeClass("current");
					
					// 第二階層を開く
					//$("#navHeader .sub").hide();
					$("#navHeader a.selected+.sub").slideUp(200);
					$(this).parent().find(">ul").show();
					if($("#header").css("height")!="100px"){
						$("#header").delay(200).stop().animate({height:100}, 400, "easeOutQuint", function(){
							$("#header").css({"overflow":"visible"});
						});
					}
					
					// ヘッダ切替
					$("#navHeader>li>a:not(#"+$(this).attr("id")+")>img").rolloverToggle({current:false});
					$(this).find(">img").rolloverToggle();
					
					// バナー切替
					var cat = $(this).attr("id").replace("header_","");
					_switchBanner(cat);
					
					// コンテンツ切替
					var c = ".category_" + cat;
					if(!settings.animate){
						$("#content_blocks>.content_block_list>li")
							.filter(":not("+c+")")
							.hide()
							.end()
							.filter(c)
							.show();
					}else{
						$("#content_blocks>.content_block_list>li")
							.filter(":not("+c+")")
							.stop(true, true)
							.slideUp(speed_, easing_)
							.end()
							.filter(c)
							.stop(true, true)
							.slideDown(speed_, easing_);
					}
					return false;
				});
			
			// ヘッダへのマウスオーバーでバナーローテーション停止
			//$("#header>.navArea").hover(_rotateStop, _rotateStart);
			$("#header>.navArea").hover(
				function(){
					_is_mouseover_header = true;
					_rotateStop();
					$("#content_blocks .contentCrossFade").crossFade({stop:true});
				},
				function(){
					_is_mouseover_header = false;
					_rotateStart();
					$("#content_blocks .contentCrossFade").crossFade();
				}
			);
			
			// バナーエリアへのマウスオーバーでバナーローテーション停止
			$("#content_banner").hover(_rotateStop, _rotateStart);
			
			// サムネイルクリックでバナーのカレントを移動
			$("#content_banner>div").each(function(){
				$(this).find(".content_banner_thumbs a")
					.click(function(){
						if(!settings.animate){
							$(this)
								.find(".content_banner_thumb_current>img")
								.css({top:0})
								.end()
								.parent()
								.siblings()
								.find("a>.content_banner_thumb_current>img")
								.css({top:19});
						}else{
							$(this)
								.find(".content_banner_thumb_current>img")
								.stop()
								.animate({top:0}, 150, "easeOutQuart")
								.end()
								.parent()
								.siblings()
								.find("a>.content_banner_thumb_current>img")
								.stop()
								.animate({top:19}, 250, "easeOutQuart");
						}
					})
					.each(function(i, elem){
						$(this)
							.click(function(){
								$(_content_banner_category+" .content_banner_inner")
									.stop()
									.animate({left:(-_content_width*i)}, 750, "easeOutQuart");
								_content_banner_current = i;
								$.log("banner current: "+i.toString());
								return false;
							});
					});
			});
			
			// バナー左右の次へ／前へ
			$("#content_banner_nav_prev")
				.mouseover(function(){
					$("#content_banner").trigger("mouseover");
				})
				.mouseout(function(){
					$("#content_banner").trigger("mouseout");
				})
				.click(function(){
					$(_content_banner_category+">.content_banner_thumbs a:eq(" + (_content_banner_current-1).toString() +")")
						.trigger("click");
				});
			$("#content_banner_nav_next")
				.mouseover(function(){
					$("#content_banner").trigger("mouseover");
				})
				.mouseout(function(){
					$("#content_banner").trigger("mouseout");
				})
				.click(function(){
					$(_content_banner_category+">.content_banner_thumbs a:eq(" + (_content_banner_current+1).toString() +")")
						.trigger("click");
				});
		});
		return this;
	};
})(jQuery);

/*
 * L1 animated rollover plugin
 */
(function($){
	$.fn["animatedRollover"] = function(options){
		// settings
		var settings = $.extend({
			duration:350
		}, options);
		
		// main
		this.each(function(){
			$(this).hover(
				function(){
					$(this)
						.find(".overlay")
						.stop()
						.css({left:-690})
						.animate({left:-230}, settings.duration, "easeOutQuart");
				},
				function(){
					$(this)
						.find(".overlay")
						.stop()
						.animate({left:230}, settings.duration*0.6, "easeInCubic");
				}
			);
		});
		return this;
	};
})(jQuery);

/*
 * L1 uniqlo logo allocation plugin
 */
(function($){
	$.fn["logoAllocation"] = function(options){
		// settings
		var settings = $.extend({
			"cofMin"  : 8,
			"cofMax"  : 12,
			"retryMax":10
		}, options);
			
		var _content_logo_allocations = [];
		var _content_logo_element = $("<li />")
			.addClass("logo_block")
			.addClass("contentH10")
			.css({display:"none"});
		
		// main
		this.each(function(i, elem){
		
			// 縦4-6ブロックごとにロゴ1つ配置
			var cof = Math.floor(Math.random()*(settings.cofMax-settings.cofMin+1))+settings.cofMin;
			var len = $(this).find(">li").length;
			var cnt = Math.floor(len/cof);
			
			for(var j=0; j<cnt; j++){
				var k, h, r = settings.retryMax;
				
				while(true){
					k = cof*j+j+1;
					k += Math.floor(Math.random()*cof)+1;
					// インデックスをグリッド番号に翻訳
					h = 0;
					$(this)
						.find(">li")
						.each(function(i,elem){
							h+= ($(this).hasClass("contentH05"))?0:
								($(this).hasClass("contentH10"))?1:2;
							if(k==i+1){
								h++;
								return false;
							}
						});
					// 横並びにならないようにカブリ総当り判定
					if($.inArray(h, _content_logo_allocations)!=-1){
						$.log("かぶったー: "+i.toString()+"-"+j.toString());
						r--;
						if(r>0) continue;
					}
					break;
				}
				if(r>0){
					_content_logo_allocations.push(h);
					$(this)
						.find(">li:nth-child("+k.toString()+")")
						//.after("<li class='logo_block contentH10'></li>");
						.after(_content_logo_element.clone());
				}
			}
		});
		
		if($("#top").hasClass("selected")){
			// ie fix
			if(!$.support.opacity){
				$("#content_blocks .logo_block").show();
			}else{
				$("#content_blocks .logo_block").slideDown(600, "easeOutQuint");
			}
		}
		$.log(_content_logo_allocations);
		return this;
	};
})(jQuery);

/*
 * L1 image crossfade plugin
 */
(function($){
	$.fn["crossFade"] = function(options){
		// settings
		var settings = $.extend({
			"selector" : ">a>img:odd",
			"duration" : 400,
			// yugop demo
			//"interval" : 1330
			"interval" : 2666,
			"stop"     : false
		}, options);
		
		// timer
		if(typeof $.L1ImageCrossFadeTimer === "undefined") {
			$.extend({L1ImageCrossFadeTimer:0});
		}
		
		// ie fix
		if(!$.support.opacity) settings.interval *= 1.5;
		
		// main
		var $target = $(this).filter(":visible").find(settings.selector);
		if(!settings.stop){
			$.L1ImageCrossFadeTimer = setInterval(function(){
				$target.stop(true, true).fadeToggle(settings.duration, "easeInOutQuart");
			},settings.interval);
			$.log("L1 image crossfade start");
		}else{
			clearInterval($.L1ImageCrossFadeTimer);
			$.log("L1 image crossfade stop");
		}
		return this;
	};
})(jQuery);

/*
 * animated page top plugin
 */
(function($){
	$.fn["animatedPageTop"] = function(options){
		// settings
		var settings = $.extend({
		}, options);
		
		// main
		this.each(function(){
			$(this).click(function(){
				//$(window).scrollTop(0);
				$("html,body").animate({scrollTop:0}, "slow", "easeOutQuart");
				$(this).blur();
				return false;
			});
		});
		return this;
	};
})(jQuery);

// initialize
$(function(){
	$(".imgover").rollover();
	$("#header").l1header().l1Banner();
	// lazy evaluation
	setTimeout(function(){
		// $("#content_blocks>ul").logoAllocation();
		$("#content_blocks>ul>li").animatedRollover();
		$("#content_blocks .contentCrossFade").crossFade();
		$("#goPageTop>a").animatedPageTop();
	},600);
});
