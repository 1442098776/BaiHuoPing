$(function(){
	
//	导航菜单start
//$(".header-r").find("li").hover(function(){
//	$(this).addClass("fore-act").siblings().removeClass("fore-act");
//	$(this).find(".dropdown").fadeIn();	
//},function(){
//	$(this).find(".dropdown").fadeOut();	
//})

//$(".header-r .dropdown").find("li").hover(function(){
//	$(this).addClass("active").siblings().removeClass("active");
//})

//2楼start
$(".tab-nav").find("li").click(function(){
	$(this).addClass("active").siblings().removeClass("active");
})
	
//	4楼-start
$(".slider4 .bd").find("li").click(function(){
	var url=$(this).attr("urls");
	var details=$(this).attr("details");
	var title=$(this).find(".titles").html();
	var sign=$(this).find("span").html();
	$(".section4 .main-nomal").fadeOut();
	
      var str=''
      str+='<div class="main mains">'
      str+='<div class="main-img">'
      str+='<span><img src="'+url+'" alt="" /></span>'
      str+='</div>'
      str+='<div class="main-txt">'
      str+='<h4 class="tle">'+title+'</h4>'
      str+='<span>'+sign+'</span>'
      str+='<p class="details">'+details+'</p>'
      str+='</div>'
      str+='</div>'
	$(".section4").find(".null-main").empty();
	$(".section4").find(".null-main").append(str)
	
	
//  $(".section4 .mains").removeClass("ml-block");
//  $(".section4 .mains").addClass("ml-block");
//	$(".section4 .mains").find(".main-img img").attr("src",url);
//	$(".section4 .mains").find(".main-txt .tle").html(title);
//	$(".section4 .mains").find(".main-txt span").html(sign);
//	$(".section4 .mains").find(".main-txt .details").html(details);
	
})
	
	
	
	
	
	
	
	
})



