$(document).ready(function(){
			var X = $(window).scrollTop() 
			$(".header>.bodydiv>ul>li").eq(0).on("click",function(){
				$("html,body").animate({scrollTop:0},1000)
			})
			$(".header>.bodydiv>ul>li").eq(1).on("click",function(){
				$("html,body").animate({scrollTop:750},1000)
			})
			$(".header>.bodydiv>ul>li").eq(2).on("click",function(){
				$("html,body").animate({scrollTop:3400},1000)
			})
			$(".header>.bodydiv>ul>li").eq(3).on("click",function(){
				$("html,body").animate({scrollTop:4100},1000)
			})
			$(".header>.bodydiv>ul>li").eq(4).on("click",function(){
				$("html,body").animate({scrollTop:5258},1000)
			})
//			alert($(".footer").eq(0).offset().top);
			$(document).scroll(function() {
				var topp = $(document).scrollTop();
				if(topp<=350){
					$(".header>.bodydiv>ul>li").removeClass("on");
					$(".header>.bodydiv>ul>li").eq(0).addClass("on");
				}
				if(topp>=350){
					$(".header>.bodydiv>ul>li").removeClass("on");
					$(".header>.bodydiv>ul>li").eq(1).addClass("on");
				}
				if(topp>=3000){
					$(".header>.bodydiv>ul>li").removeClass("on");
					$(".header>.bodydiv>ul>li").eq(2).addClass("on");
				}
				if(topp>=3500){
					$(".header>.bodydiv>ul>li").removeClass("on");
					$(".header>.bodydiv>ul>li").eq(3).addClass("on");
				}
				if(topp>=4700){
					$(".header>.bodydiv>ul>li").removeClass("on");
					$(".header>.bodydiv>ul>li").eq(4).addClass("on");
				}
				if(topp>100){
					
				}
			});
		})
//导航浮动
window.onload=function(){
    function adsorption(){
        var yuding_menu=document.getElementById('top01');
        var scrollTop=0;
        window.onscroll=function(){
            scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
            if(scrollTop>50){
                yuding_menu.className='header header_02';
            }else{
                yuding_menu.className='header';
            }
        }
    }
    adsorption();
}