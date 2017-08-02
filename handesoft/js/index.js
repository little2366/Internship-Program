var head=$(".head").height();
$(window).scroll(function(){
	var topScr=$(window).scrollTop();
	if (topScr>head) {
		$(".top").addClass("fixed");
	}else{
		$(".top").removeClass("fixed");
	}
});

$(".nav_bar>ul>li a").mouseenter(function(){
    $(this).css("color",'#333');
});
$(".nav_bar>ul>li a").mouseleave(function(){
    $(this).css("color",'#fff');
});

var isPC = function (){
    var userAgentInfo = navigator.userAgent.toLowerCase();
    var Agents = new Array("android", "iphone", "symbianOS", "windows phone", "ipad", "ipod");
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
    }
    return flag;
};

$(".btn").click(function(){
    var t = $(window).scrollTop();
    var q1_height = $(".q1").height(); 
    var isPC = isPC();
    console.log(isPC);
    if(!isPC){
       q1_height -= 60;
    }
    else{
       q1_height += 60;
    }
    $('body').animate({'scrollTop':t+q1_height},900);
});

$(function(){
    $(window).scroll(function(){
    	var q1_height = $(".q1").offset().top;
        var this_scrollTop = $(this).scrollTop();
        /*根据滑动条位置动画*/
        if(this_scrollTop>q1_height ){
            $(".q2Container").addClass("active");
        };
    });
});