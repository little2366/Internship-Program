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
    $(this).css("color",'rgb(32,82,153)');
});
$(".nav_bar>ul>li a").mouseleave(function(){
    $(this).css("color",'#222');
});

/*判断是手机端还是其他设备*/
function detectmob() {  
    if( navigator.userAgent.match(/Android/i)  
    || navigator.userAgent.match(/webOS/i)  
    || navigator.userAgent.match(/iPhone/i)   
    || navigator.userAgent.match(/BlackBerry/i)  
    || navigator.userAgent.match(/Windows Phone/i)  
    ){  
        return true;  
    }  
    else {  
        return false;  
    }  
} 

$(".slideDown").click(function(){
    var t = $(window).scrollTop();
    var q1_height = $(".q1").height(); 
    if(!detectmob()){
       q1_height -= 80;
    }
    else{
       q1_height += 60;
    }
    $('body').animate({'scrollTop':t+q1_height},600);
});


$(".q2Img").mouseenter(function(){
    $(this).animate({'width':70,"height":70},300);
});
$(".q2Img").mouseleave(function(){
    $(this).animate({'width':60,"height":60},300);
});


$("body").scroll(function(){
    var t = $(window).scrollTop();
    var q1_height = $(".q1").height();  
    if(!detectmob()){
       q1_height -= 80;
    }
    else{
       q1_height += 60;
    }
    $('body').animate({'scrollTop':t+q1_height},600);

});


$(function(){
    $(window).scroll(function(){
    	var q1_height = $(".q1").offset().top;
        var q2_height = $(".q2").height();
        var q2_scroll = q1_height + q2_height;
        var this_scrollTop = $(this).scrollTop();
        /*根据滑动条位置动画*/
        if(this_scrollTop>q2_scroll ){
            $(".q2Container").addClass("q2Active");
        };
        var q3_height = $(".q3").height();  
        var q4_height = $(".q4").height();  
        var q4_scroll = q1_height + q2_height + q3_height + q4_height;
        if(this_scrollTop > q4_scroll ){
            $(".q4").addClass("q4Active");
            $(".q4Img").addClass("q4ImgActive");
            $(".q4HeadTitle").addClass("q4HeadTitleActive");
        };
    });
});



$(".fa-bars").on("click",function(){
    var display =$('.menu').css('display');

	if(display == 'none'){
	    $(".menu").css("display","block");
	    $(".menu").removeClass("html-body-overflow");
	    $(".other,.q1").animate({left: '-=70vw'}, 600);  
        $(document.body).addClass("html-body-overflow");

	}
	else{
	    $(".other,.q1").animate({left: '+=70vw'}, 600,function() {
	    	$(".menu").css("display","none");
	    }); 
	    $(document.body).removeClass("html-body-overflow");
	}
    
});

$(".menu li").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$(".q1").on("click",function(){
	var display =$('.menu').css('display');

    if(display == 'block'){
	    
	    $(".other,.q1").animate({left: '+=70vw'}, 600,function() {
	    	$(".menu").css("display","none");
	    });  
	    $(document.body).removeClass("html-body-overflow");
	}
});

