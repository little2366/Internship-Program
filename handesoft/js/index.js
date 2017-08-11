var head=$(".head").height();
$(window).scroll(function(){
	var topScr=$(window).scrollTop();
	if (topScr>head) {
		$(".top").addClass("fixed");
	}else{
		$(".top").removeClass("fixed");
	}
});

$(".nav_bar>ul>li a").on("click",function(){
    $(this).addClass("dActive");
});


/*此处为下滑按钮的js代码*/
/*$(".slideDown").click(function(){
    var t = $(window).scrollTop();
    var q1_height = $(".q1").height(); 
    if(!detectmob()){
       q1_height -= 80;
    }
    else{
       q1_height += 60;
    }
    $('body').animate({'scrollTop':t+q1_height},600);
});*/


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


$('#carousel ul').carouFredSel({
    prev: '#prev',
    next: '#next',
    pagination: "#pager",
    scroll: 1000
});

var bannerSlider = new Slider($('#banner_tabs'), {
    time: 5000,
    delay: 400,
    event: 'hover',
    auto: true,
    mode: 'fade',
    controller: $('#bannerCtrl'),
    activeControllerCls: 'active'
});
$('#banner_tabs .flex-prev').click(function() {
    bannerSlider.prev()
});
$('#banner_tabs .flex-next').click(function() {
    bannerSlider.next()
});