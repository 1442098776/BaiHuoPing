$(function () {
    $('.antage>div').hover(function(){
        $(this).addClass('text').siblings().removeClass('text'); 
    }); 
    $(window).scroll(function(){
        $('.antage>div').each(function (n,i) {
            if ($(this).offset().top - $(window).scrollTop() < $(window).height()/2) {
                $(this).stop().show(1000); 
            }
		}); 
	}); 
	// 轮播图1
    var l = $('.box>.ul>li').length, 
			l1 = (l-3) * 1, 
		     w = $('.box>.ul>li').outerWidth(true); 
		     $('.side,.box').css('width', w * 3 + 'px'); 
		     $('.box>.ul').css('width', l * w + 'px'); 

		var n = -1;
		var t1;	    
		
		clearInterval(t1); 
		auto(); 
		showTime(); 
		
		$('.lt').click(function () {
			clearInterval(t1); 
			n = n <= 0?l1:--n; 
			sw = (n * w); 
			$('.box').stop().animate( {"scrollLeft":sw}, 500); 
			showTime(); 
		}); 
		$('.rt').click(function () {
			var n = 1; 
			clearInterval(t1); 
			auto(); 
			showTime(); 
		}); 
		$('.box>.ul>li').hover(function(){
			clearInterval(t1);
		},function(){
			showTime(); 
		});

		function auto() {
		   n = n >= l1?0: ++n; 
		   sw = (n * w); 
		   $('.box').stop().animate( {"scrollLeft":sw}, 500); 
		}
		function showTime() {
			t1 = setInterval(auto, 2000); 
		}; 

		// 轮播图2
		clearInterval(t2);
		showTime1();
		$('.upBtn,.downBtn').click(function(){
			if($(this).hasClass('upBtn')){
				clearInterval(t2);
				n1=n1<=0?l1:--n1;
			    $('.sellerCount>.contenCount>ul').eq(n1-1).stop().fadeIn('slow').addClass('sellerUl').siblings().stop().fadeOut(0).removeClass('sellerUl');
			}
			if($(this).hasClass('downBtn')){
				clearInterval(t2);
				auto1();
				showTime1();
			}
		});
		$('.sellerCount').hover(function(){
			clearInterval(t2);
		},function(){
			clearInterval(t2);
			showTime1();
		});
		var l1=$('.sellerCount>.contenCount>ul').length-1,
			n1=0,t2;
		function auto1(){
			n1=n1>=l1?0:++n1;
			$('.sellerCount>.contenCount>ul').eq(n1-1).stop().fadeIn('slow').addClass('sellerUl').siblings().stop().fadeOut(0).removeClass('sellerUl');
		}
		function showTime1(){
			t2=setInterval(auto1,3000);
		}
}); 