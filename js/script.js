$(document).ready(function () {
    gnb();
    mgnb();
    mainvisual();
    maineduenrol();
    mainpopup();
    modal();
    subnavi();
    notibox();
    category();
    viewtab()
    quickpopup();
    tableScroll();
    uploadFold();
    
}); 

// ::::::::::::::::::::::::: GNB
function gnb (){
    $(".header-bottom-wrap").mouseenter(function() {  
        if($(".gnb-bg-white").css("display") != "block"){  
            $(".gnb-bg-white").slideDown();  
            $(".sub-menu").slideDown();  
            $(".gnb-bg").show();  
        }  
    });  
        $(".header-bottom-wrap").mouseleave(function() {  
            $(".gnb-bg-white").slideUp();
            $(".sub-menu").slideUp();  
            $(".gnb-bg").hide();  
    });  

    var heights = $(".sub-menu").map(function ()  
    {  
        return $(this).height();  
    }).get(),  

    maxHeight = Math.max.apply(null, heights);  
    
    $(".gnb-bg-white").css('height', maxHeight + 50);  
    $(".sub-menu").css('height', maxHeight + 20);    
    
}

// ::::::::::::::::::::::::: M-GNB
function mgnb() {
    $(".btn-menu").click(function () {
            $(".header-bottom-wrap").addClass("on");
            $("body").addClass("all-fixed");
            $(".m-gnb-bg").show();
        });

    // gnb window resize 시 gnb-bg 사라짐
            $(window).resize(function(){
            if($(window).width() > 1024){
                $(".header-bottom-wrap").removeClass("on");
                $(".m-gnb-bg").hide();
                $(".gnb-bg-white").hide();
            }
            });
        $(".slide-close").click(function () {
            $(".header-bottom-wrap").removeClass("on");

            $("body").removeClass("all-fixed");
            $(".m-gnb-bg").hide();
        });
    };


(function($){

    var gnbmUI = {
        click : function(target, speed) {
            var _self = this,
                    $target = $(target);
            _self.speed = speed || 300;
            
            $target.each(function(){
                if(findChildren($(this))){
                    return;
                }
                $(this).addClass('noDepth');
            });
            
            function findChildren(obj){
                return obj.find('> ul').length > 0;
            }
            
            $target.on('click','a', function(e){
                e.stopPropagation();
                var $this = $(this),
                    $depthTarget = $this.next(),
                    $siblings = $this.parent().siblings();
                
                $this.parent('li').find('ul li').removeClass('on');
                $siblings.removeClass('on');
                $siblings.find('ul').slideUp(250);
                
                if($depthTarget.css('display') == 'none'){
                    _self.activeOn($this);
                    $depthTarget.slideDown(_self.speed);
                } else {
                    $depthTarget.slideUp(_self.speed);
                    _self.activeOff($this);
                }
            })

            $(".dep1 > li.on > a").parents(".dep1 > li").find(".dep2").show();
            $(".dep2 > li.on > a").parents(".dep2 > li").find(".dep3").show();
            $(".dep2 > li.on > .dep2-a-b").parents(".dep2 > li").find(".dep2-plus-1").attr("src","/_res/kosha/img/common/ico-minus-orange.png");
            $(".dep3 > li.on > a").parents(".dep3 > li").find(".dep4").show();
            $(".dep3 > li.on > .dep3-a-b").parents(".dep3 > li").find(".dep3-plus-1").attr("src","/_res/kosha/img/common/ico-minus-blue.png");
            $(".dep4 > li.on > a").parents(".dep4 > li").find(".dep5").show();
        },
        activeOff : function($target){
            $target.parent().removeClass('on');	
        },
        activeOn : function($target){
            $target.parent().addClass('on');
        }
    
    };
    $(function(){
        gnbmUI.click('.m-gnb-content li', 300);
        gnbmUI.click('.snb .sit-dep2 li', 300);
    });					 
}(jQuery));


// ::::::::::::::::::::::::: Main Visual
function mainvisual (){
    var swiper = new Swiper("#main-visual", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        paginationClickable: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

// ::::::::::::::::::::::::: Main 교육신청
function maineduenrol (){
    
    var swiper3 = new Swiper('#main-eduenrol', {
        slidesPerView: 'auto',
        spaceBetween: 40,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            798: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },
        }
    });

}

// ::::::::::::::::::::::::: Main popupzone

function mainpopup (){
    $('#main-popup').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		dots:false,
		autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,
		mouseDrag:true,
		touchDrag:true,
        onInitialized  : counter,
        onTranslated : counter,
		responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},		
			1000:{
				items:1
			}
		}
	})
	$('.play').on('click',function(){
		$(this).parents(".banner").find(".owl-carousel").trigger('play.owl.autoplay')
		$(this).removeClass('on');
        $(".carousel-play .stop").addClass('on');

	})
	$('.stop').on('click',function(){
		$(this).parents(".banner").find(".owl-carousel").trigger('stop.owl.autoplay')
		$(this).removeClass('on');
        $(".carousel-play .play").addClass('on');
	})

    function counter(event) {
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var items     = event.item.count;     // Number of items
        var item      = event.item.index + 1;     // Position of the current item
    
        // it loop is true then reset counter from 1
        if(item > items) {
                item = item - items
            }
            $('.counter').html(item+" / "+items);
        }

}


//:::::::::::::::::::::::::: Modal Popup
        function modal() {
            $('.btn-popup01').click(function () {
                $('.popup-box-wrap').addClass("active");
                return false;
            });
            $('.btn-close').click(function () {
                $('.popup-box-wrap').removeClass("active");
                return false;
            });
        }

        function modal2() {
            $('.btn-popup02').click(function () {
                $('.popup-box-wrap02').addClass("active");
                return false;
            });
            $('.btn-close').click(function () {
                $('.popup-box-wrap02').removeClass("active");
                return false;
            });
        }
        
        function modal3() {
            $('.btn-popup03').click(function () {
                $('.popup-box-wrap03').addClass("active");
                return false;
            });
            $('.btn-close').click(function () {
                $('.popup-box-wrap03').removeClass("active");
                return false;
            });
        }


//:::::::::::::::::::::::::: Sub Navi
function subnavi() {
    $(".nav-1dep > a").click(function() {
        if($(this).hasClass('on') == false){
            $(this).addClass('on');
            $(this).parents(".nav-1dep").find(".nav-2dep").slideDown(200);
        }else{
            $(this).removeClass('on');
            $(this).parents(".nav-1dep").find(".nav-2dep").slideUp(200);
        }
        return false;
    });
}


//:::::::::::::::::::::::::: quick Popup
function quickpopup() {
    $('.quick-popup-open').click(function () {
        if($('.quick-popup').hasClass('active') == false){
            $('.quick-popup-open').addClass("active");
            $('.quick-popup').addClass("active");
        }else{
            $('.quick-popup-open').removeClass("active");
            $('.quick-popup').removeClass("active");
        }
        return false;
    });
    $('.quick-popup-close').click(function () {
        $('.quick-popup-open').removeClass("active");
        $('.quick-popup').removeClass("active");
        return false;
    });
}

//:::::::::::::::::::::::::: Noti box - 유의사항
function notibox() {
    $(".noti-box a.btn-open").click(function() {
        if($(this).hasClass('on') == false){
            $(this).addClass('on');
            $(this).parents(".noti-box").find(".cont-box").slideDown(200);
        }else{
            $(this).removeClass('on');
            $(this).parents(".noti-box").find(".cont-box").slideUp(200);
        }
        return false;
    });
}

//:::::::::::::::::::::::::: Noti box - 유의사항
function category() {
    $(".category-wrap li > a").click(function() {
        if($(this).hasClass('on') == false){
            $(this).addClass('on');
        }else{
            $(this).removeClass('on');
        }
        return false;
    });
}


//:::::::::::::::::::::::::: view Tab - 교육신청
function viewtab(e, num) {
    var num = num || 0;
    var menu = $(".view-tab > ul").children();
    var con = $(".view-tab-box").children();
    var select = $(menu).eq(num);
    var i = num;

    select.addClass('on');
    con.eq(num).show();

    menu.click(function () {
        if (select !== null) {
            select.removeClass("on");
            con.eq(i).hide();
        }

        select = $(this);
        i = $(this).index();
        

        select.addClass('on');
        con.eq(i).show().addClass('on');
    });
}


//:::::::::::::::::::::::::: view-upload-fold

function uploadFold() {
    $(".view-upload-fold").click(function() {
        if($(this).hasClass('on') == false){
            $(this).addClass('on');
            $('.view-upload ul li:not(:first-child)').slideDown(200);
        }else{
            $(this).removeClass('on');
            $('.view-upload ul li:not(:first-child)').slideUp(200);
        }
        return false;
    });
}


//:::::::::::::::::::::::::: table-scroll-box
function tableScroll() {

	//2018-10-23 게시판 type01 스크롤
	$(".table-scroll-box").each(function(){
		if($(this).children("table")){
			$(this).on("touchmove, scroll", function(){
				$(this).children(".ico-scroll").fadeOut();
			});
		} else {
			$(this).children(".ico-scroll").remove();
		}
	});


	var startY = 0;
	var moveY = 0;
	var startX = 0;
	var moveX = 0;

	var startevent = false;
	var moveevnt = false;

	if($(".table-scroll-box").length > 0) {	   
		$(".table-scroll-box").bind('touchmove', function(e){
			if(startevent){
				moveevnt = true;
				var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
				moveY = touch.screenY;
				moveX = touch.screenX;
			} else {
				moveevnt = false;
			}
		});
	};
}

