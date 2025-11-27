
<link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css" />
<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>

<style>
img {width:auto}
#container.sub{top: 0;left: 0;bottom: 0;right: 0;width: 100%;height: 100%; overflow: hidden;padding-top:110px}
#container.sub .container_inner{position: relative;}
#container.sub #contents{min-height:500px; padding-bottom: 0px;}

#path{margin-top: 20px; margin-bottom: 50px;  }
#path .inner{text-align: right; width: 1200px; margin:0 auto;}
#path .inner p{color: #999; font-family: 'Dotum';font-size: 12px;}
/* #quick {display:none;} */
/* 서브 페이지 상단 */
.new_pg_tit{font-size:64px;color:#222;text-align:center;padding-top:12px;margin-bottom:100px;letter-spacing:-4px;}

.blind{visibility:hidden;position:absolute;top:0;left:0;width:0;height:0;margin:0;padding:0;background:none;font-size:0;line-height:0}

/* 페이지 상단 공통 탭 */
.topTab {position:relative; text-align: center; z-index:10;}
/* .topTab:after{position: absolute; left: 0; top: 25px; width: 100%; height: 100%;background-color: #f5f5f5;content: '';} */
.topTab ul{display: inline-block; padding-bottom:0px; max-width: 1200px; margin:0 auto;padding-top: 1px;}
.topTab ul li{float: left; width: 200px; height: 50px;  margin-top: -1px;position: relative;z-index: 1;}
.topTab ul li.on{z-index: 2;}
.topTab ul li a{height: 100%; line-height: 50px; display: block;color: #454545; border:1px solid #d5d5d5; margin-left: -1px;background-color: #fff; text-align: center; }
.topTab ul li.on a{color: #f36f21; border:1px solid  #f36f21; font-weight: 500; position: relative; z-index: 2; }

.herpagori_lipo {position:relative;}
.herpagori_lipo * {box-sizing:border-box;}
.herpagori_lipo .sub_title {text-align:center;color:#333333;font-size:40px;font-weight:normal;line-height:1.25;letter-spacing:-2px;padding:0 0 110px 0;}
.herpagori_lipo .inbox {position:relative;width:1200px;height:100%;text-align:center;margin:0 auto;}

.btn_enter {position:fixed;top:170px;right:70px;z-index:100;}
.quick {position:fixed;top:405px;right:134px;width:82px;height:402px;border:1px solid #ffffff;border-radius:60px;z-index:100;}
.quick a {display:block;position:absolute;width:80px;height:65px;line-height:0;}
.quick a em {display:none;position:absolute;height:30px;color:#000000;font-size:16px;font-weight:600;font-style:normal;background:#ff7e15;border-radius:15px;padding:0 25px;align-items:center;justify-content:center;}
.quick a em:after {content:'';position:absolute;top:12px;right:-6px;width:7px;height:7px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/ic_quick1.png') no-repeat center center;}
.quick a:nth-of-type(1) {top:40px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu1.png') no-repeat center center;}
.quick a:nth-of-type(1):hover {background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu1_on.png') no-repeat center center;}
.quick a:nth-of-type(1):hover em {display:flex;top:15px;left:-180px;}
.quick a:nth-of-type(2) {top:105px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu2.png') no-repeat center center;}
.quick a:nth-of-type(2):hover {background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu2_on.png') no-repeat center center;}
.quick a:nth-of-type(2):hover em {display:flex;top:18px;left:-135px;}
.quick a:nth-of-type(3) {top:170px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu3.png') no-repeat center center;}
.quick a:nth-of-type(3):hover {background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu3_on.png') no-repeat center center;}
.quick a:nth-of-type(3):hover em {display:flex;top:20px;left:-135px;}
.quick a:nth-of-type(4) {top:235px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu4.png') no-repeat center center;}
.quick a:nth-of-type(4):hover {background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu4_on.png') no-repeat center center;}
.quick a:nth-of-type(4):hover em {display:flex;top:20px;left:-165px;}
.quick span {display:block;position:absolute;top:300px;width:80px;height:65px;font-size:0;line-height:0;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/quick_menu5.png') no-repeat center center;cursor:pointer;}

.section1 {position:relative;height:1070px;text-align:center;background:#000000;margin-top:-25px;}
.section1 .mvbox {position:absolute;top:50%;left:50%;width:100%;height:100%;transform:translate(-50%,-50%);z-index:10;overflow:hidden;background:#000;z-index:1;}
.section1 .mvbox video {height:100%;}
.section1 .inbox {position:absolute;top:0;left:50%;padding:90px 0 0 0;transform:translateX(-50%);z-index:15;}
.section1 .inbox .tx1 {margin:0 0 133px 0;}
.section1 .inbox .tx2 {text-align:left;margin:0 0 15px 0;}
.section1 .inbox .tx3 {text-align:left;margin:0 0 160px 0;}
.section1 .inbox .tx4 {text-align:left;}

.section2 {position:relative;height:954px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/section2_v2.jpg') no-repeat center top;}
.section2 .inbox {padding:100px 0 0 0;}
.section2 .tx1 {padding:0 0 0 468px;}
.section2 .slide {position:relative;height:450px;padding:0 100px;margin:-15px auto 25px auto;}
.section2 .slide .swiper-slide {display:flex;height:450px;align-items:center;justify-content:center;}
.section2 .slide .swiper-slide img {width:90%;height:90%;margin:0 auto;}
.section2 .slide .swiper-slide.swiper-slide-active {}
.section2 .slide .swiper-slide.swiper-slide-active img {width:100%;height:100%;}
.section2 .slide .swiper-button-prev,
.section2 .slide .swiper-button-next {top:39%;width:62px;height:62px;margin-top:0;color:transparent;}
.section2 .slide .swiper-button-prev {left:0;right:auto;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/ic_prev.png') no-repeat left center;background-size:100% auto;}
.section2 .slide .swiper-button-next {left:auto;right:0;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/ic_next.png') no-repeat right center;background-size:100% auto;}

@media screen and (max-width:639px){
	.section2 .slide .swiper-button-prev, 
	.section2 .slide .swiper-button-next {width:4vw;height:7vw;}
}
.section2 .tx2 {text-align:center;}

.section3 {position:relative;height:959px;background:url('/assets/img/sub/menu-365mc/intro/incheon/dr/dr_01/bg_section3.jpg') no-repeat center top;}
.section3 .inbox {display:flex;justify-content:space-between;}
.section3 .inbox .lt {width:600px;padding:190px 0 0 0;}
.section3 .inbox .lt .tx1 {}
.section3 .inbox .lt .tx2 {padding:0 0 0 70px;margin:-30px 0 170px 0;}
.section3 .inbox .lt .tx3 {text-align:right;}
.section3 .inbox .rt {display:flex;height:100%;padding:0 0 117px 0;flex-direction:column;justify-content:flex-end;align-items:flex-end;}
.section3 .inbox .rt img {margin:0 -116px 0 0;}

.section4 {position:relative;height:2173px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/section4_v2.jpg') no-repeat center top;}
.section4 .inbox1 {position:relative;width:1200px;height:1230px;margin:0 auto;}
.section4 .inbox1 .conts {display:flex;margin:0 0 100px 0;}
.section4 .inbox1 .lt {width:677px;padding:150px 0 0 0;}
.section4 .inbox1 .rt {width:524px;padding:157px 0 0 0;}
.section4 .inbox1 .rt .tx2 {margin:0 0 35px 0;}
.section4 .inbox1 .rt .btn {display:block;}
.section4 .inbox2 {position:relative;width:1200px;height:943px;padding:90px 0 0 0;margin:0 auto;}
.section4 .inbox2 .tx3 {margin:0 0 60px 0;}
.section4 .inbox2 .img {margin:0 0 0 -20px;}
.section4 .inbox2 .gif2 {position:absolute;top:220px;width:1300px;}

.section5 {position:relative;height:1080px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/section5_v2.jpg') no-repeat center top;}
.section5 .inbox {text-align:left;padding:110px 0 0 0;}
.section5 .img1 {margin:0 0 48px 0;}
.section5 .img2 {}
.section5 .tx1 {margin:-46px 0 0 0;}
.section5 .btn {display:block;position:absolute;bottom:205px;right:0;}

.section6 {position:relative;height:2094px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/section6.jpg') no-repeat center top;}
.section6 .inbox {text-align:center;padding:235px 0 0 0;}
.section6 .tx1 {margin:0 0 121px 0;}
.section6 .mv1 {display:block;width:886px;height:498px;margin:0 auto 45px auto;}
.section6 .mv1 iframe {width:100%;height:100%;}
.section6 .btn10 {display:block;margin:0 0 91px 0;}
.section6 .mv2 {display:block;width:886px;height:498px;margin:0 auto 48px auto;}
.section6 .mv2 iframe {width:100%;height:100%;}
.section6 .btn11 {display:block;}

.section7 {position:relative;height:2292px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/section7.jpg') no-repeat center top;}
.section7 .inbox {text-align:center;padding:170px 0 0 0;}
.section7 .tx1 {text-align:left;padding:0 0 0 183px;margin:0 0 95px 0;}
.section7 .tx2 {text-align:left;padding:0 0 0 303px;margin:0 0 100px 0;}
.section7 .img1 {position:relative;margin:0 0 170px 0;z-index:1;}
.section7 .img1:after {content:'';position:absolute;top:205px;left:-30%;right:-30%;height:2px;background:#ff7e15;z-index:-1;}
.section7 .tx3 {text-align:left;padding:0 0 0 183px;margin:0 0 102px 0;}
.section7 .img2 {position:relative;z-index:1;}
.section7 .img2:after {content:'';position:absolute;top:205px;left:-30%;right:-30%;height:2px;background:#ff7e15;z-index:-1;}

/* .footer {display:none;position:relative;height:157px;background:url('/assets/img/sub/menu-suction/incheon/special/herpagori/footer_v2.jpg') no-repeat center top;}
.footer .inbox {display:flex;flex-direction:column;align-items:center;justify-content:center;} */
footer img {width:100%}
.txt_footer {position:fixed;bottom:0;width:100%;height:70px;background:#ff7e15;z-index:70;}
.txt_footer .inbox {display:flex;flex-direction:column;align-items:center;justify-content:center;}

@media (min-width:720px){
	.top-button{display:none!important}
}
</style>

<div id="sub-container" class="sub-container">
     <!-- Title -->
     <div class="title-section title-section-suction">
        <? include "application/views/common/indicate.php";?>

		<div class="title-video-wrap">
            <video autoplay loop playsinline muted width="100%" src="https://365mccdnstor.blob.core.windows.net/cdn/keyvisual/keyvisual-menu-365-video-01.mp4" >
                <source src="https://365mccdnstor.blob.core.windows.net/cdn/keyvisual/keyvisual-menu-365-video-01.mp4" type="video/mp4" />
            </video>
        </div>
        <h2 class="title-section-title">스페셜지방흡입</h2>
        <div class="main-section-menu-wrap">
            <div class="main-section-menu active">
                <a href="/special/herpagori">허파고리 지방흡입</a>
            </div>
            <div class="main-section-menu">
                <a href="/special/face">얼굴지방흡입</a>
            </div>
            <div class="main-section-menu">
                <a href="/special/kdr">웨딩에디션 깍드레</a>
            </div>
            <div class="main-section-menu">
                <a href="/special/yujP">남성에디션 깍가배</a>
            </div>
        </div>
    </div>
    <!--// Title -->

    <!-- Content -->
	<div id="herpagori_lipo" class="herpagori_lipo">
        <div class="sub_title">허파고리 지방흡입</div>
        <div class="btn_enter"><a href="https://incheon.365mc.com/landing/exhibition/?route=ICHOME_hpgr" target="_blank"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section1_1.png" alt="" /></a></div>
				<div class="quick">		
					<a href="http://incheon.365mc.com/diettest/pc?route=ICHOME_hpgr" target="_blank"><em>다이어트테스트</em></a>
					<a href="https://incheon.365mc.com/online/phone?route=ICHOME_hpgr" target="_blank"><em>전화상담</em></a>
					<a href="https://incheon.365mc.com/online/costmail?route=ICHOME_hpgr" target="_blank"><em>비용확인</em></a>
					<a href="https://pf.kakao.com/_xkSLxgxj?route=ICHOME_hpgr" target="_blank"><em>카카오톡상담</em></a>
					<span>TOP</span>
				</div>

				<div class="section1">
					<div class="mvbox">
						<video id="mainVideo1" playsinline muted autoplay loop>
							<source src="https://365mccdnstor.blob.core.windows.net/cdn/365mc/main/main_221110.mp4" type="video/mp4" />							
						</video>
					</div>		
					<div class="inbox">
						<div class="tx1" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section1_1.png" alt="" /></div>
						<div class="tx2" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section1_2.png" alt="" /></div>
						<div class="tx3" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section1_3.png" alt="" /></div>
						<div class="tx4" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1200"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section1_4.png" alt="" /></div>
					</div>
				</div>

				<div class="section2">
					<div class="inbox">
						<div class="tx1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section2_1_v2.png" alt="" /></div>
						<div class="slide aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
							<div class="swiper">
								<div class="swiper-wrapper">
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_1.jpg" alt=""></div>
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_2.jpg" alt=""></div>
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_3.jpg" alt=""></div>
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_4.jpg" alt=""></div>
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_5.jpg" alt=""></div>
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_6.jpg" alt=""></div>
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_7.jpg" alt=""></div>
									<div class="swiper-slide"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/slide2_8.jpg" alt=""></div>
								</div>					
							</div>
							<div class="swiper-button-next"></div>
							<div class="swiper-button-prev"></div>			
						</div>
						<div class="tx2 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section2_2_v2.png" alt="" /></div>
					</div>
				</div>

				<div class="section3">
					<div class="inbox">
						<div class="lt">
							<div class="tx1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section3_1.png" alt="" /></div>
							<div class="tx2 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section3_2.png" alt="" /></div>
							<div class="tx3 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section3_3.png" alt="" /></div>
						</div>
						<div class="rt">
							<img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section3_1.png" alt="" class="aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" />
						</div>
					</div>
				</div>

				<div class="section4">
					<div class="inbox1">
						<div class="conts">
							<div class="lt">
								<div class="tx1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section4_1.png" alt="" /></div>
							</div>
							<div class="rt">
								<div class="tx2 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section4_2_v2.png" alt="" /></div>
								<a href="https://incheon.365mc.com/online/phone?route=ICHOME_hpgr" target="_blank" class="btn aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/btn05.png" alt="" /></a>
							</div>
						</div>
						<div class="gif aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section4_1.gif" alt="" /></div>
					</div>
					<div class="inbox2">
						<div class="tx3 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section4_3.png" alt="" /></div>
						<div class="gif2"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section4_4_v2.gif" alt="" /></div>
					</div>		
				</div>

				<div class="section6">
					<div class="inbox">
						<div class="tx1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section6_1.png" alt="" /></div>
						<img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section6_1.png" alt="" class="aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" />
						<div class="mv1 aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
							<iframe src="https://www.youtube.com/embed/-_CiGgiChB0?t=22&autoplay=1&showinfo=0&controls=1&autohide=1&mute=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>
						<a href="https://youtu.be/-_CiGgiChB0?t=22&route=<?=$route?>" target="_blank" class="btn10 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/btn10.png" alt="" /></a>
						<img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section6_2.png" alt="" class="aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000" />
						<div class="mv2 aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000">
							<iframe src="https://www.youtube.com/embed/kMtFSccDXN8?t=53&autoplay=1&showinfo=0&controls=1&autohide=1&mute=1" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>				
						</div>
						<a href="https://youtu.be/kMtFSccDXN8?t=53&route=<?=$route?>" target="_blank" class="btn11 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/btn11.png" alt="" /></a>
					</div>		
				</div>

				<div class="section7">
					<div class="inbox">
						<div class="tx1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section7_1.png" alt="" /></div>
						<div class="tx2 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section7_2.png" alt="" /></div>
						<div class="img1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section7_1.png" alt="" /></div>
						<div class="tx3 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section7_3.png" alt="" /></div>
						<div class="img2 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section7_2.png" alt="" /></div>
					</div>		
				</div>

				<div class="section5">
					<div class="inbox">
						<div class="img1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section5_1.png" alt="" /></div>
						<div class="img2 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/img_section5_2.png" alt="" /></div>
						<div class="tx1 aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_section5_1.png" alt="" /></div>
						<a href="https://incheon.365mc.com/landing/exhibition/?route=ICHOME_hpgr" target="_blank" class="btn aos-init aos-animate" data-aos="fade-up" data-aos-easing="ease" data-aos-duration="1000"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/btn06.png" alt="" /></a>
					</div>		
				</div>

				<div class="txt_footer"><a href="https://incheon.365mc.com/online/phone?route=ICHOME_hpgr" target="_blank">
					<div class="inbox"><img src="/assets/img/sub/menu-suction/incheon/special/herpagori/txt_footer.png" alt="" /></div></a>
				</div>	
	    </div> 
    </div>
</body>
</html>

<script type="text/javascript">
$(document).ready(function(){
	$(".quick span").click(function(e){
		e.preventDefault();
		$("html, body").animate({scrollTop:0},500);
	});	
});
</script>
<script type="text/javascript">
var swiper = new Swiper(".slide .swiper", {
	loop: true,
	slidesPerView: 3,
    centeredSlides: true,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
    },	
	navigation: {
		nextEl: ".slide .swiper-button-next",
		prevEl: ".slide .swiper-button-prev",
	},
});
$(document).scroll(function(){
	var scrollTop = $(window).scrollTop();
	var secTop = $('.section5').offset().top;
	if (scrollTop >= secTop) {
		$('.txt_footer').css('position','absolute');
	} else {
		$('.txt_footer').css('position','fixed');
	}	
});
</script>