/*sologo的文字滚动*/
$(document).ready(function(){
    var index = 0;
    var autoTimer = 0;//全局变量 目的实现左右点击同步
    var clickEndFlag = true;//设置每条走完才能再点击

    var oInner = $(".font-inner");
    var oLi = $(".font-inner li");

    //克隆第一个放到最后（实现无缝）
    oLi.eq(0).clone(true).appendTo(oInner);

    //alert(oLi.length);//5
    //alert($(".font-inner li").length);//6

    var liHeight = $(".scroll-txt").height();//获取视口的高度
    var totalHeight = (oLi.length * oLi.eq(0).height());//获取li的总高度

    //给ul赋值高度
    oInner.height(totalHeight);
    function tab(){
        oInner.stop().animate({
            top: -index * liHeight
        },400,function(){
            clickEndFlag = true;//上一条走完才为true
            if(index == oLi.length) {
                oInner.css({top: 0});
                index = 0;
            }
        })
    }
    function next() {
        index++;
        if(index > oLi.length) {
            index = 0;
        }
        tab();
    }
    function prev() {
        index--;
        if(index < 0) {
            index = oLi.size() -1;//因为index的0 == 第一个Li，减1也就是_index = Li的长度减1
            oInner.css("top",- oLi.size() * liHeight);//当_index为-1时执行这条，也就是走到li的最后一个
        }
        tab();
    }
    //切换到下一条
    $(".scroll-txt .gt").on("click", function() {
        if(clickEndFlag){
            next();
            clickEndFlag = false;
        }
    });
    //切换到上一条
    $(".scroll-txt .lt").on("click", function() {
        if(clickEndFlag){
            prev();
            clickEndFlag = false;
        }
    });
    //自动轮播
    autoTimer = setInterval(next,3000);
    $(".font-inner a").hover(function(){
        clearInterval(autoTimer);
    },function() {
        autoTimer = setInterval(next,3000);
    });
    //鼠标放到左右方向时关闭定时器
    $(".scroll-txt .lt,.scroll-txt .gt").hover(function(){
        clearInterval(autoTimer);
    },function(){
        autoTimer = setInterval(next,3000);
    });
});

/*tabbtn的选择*/
$(".tabbtn-item").on("click",function(){
    $(this).addClass("active");
    $(this).siblings(".tabbtn-item").removeClass("active");
    var string=$(this).find("span").text();
    if(string == '发布需求'){
       $(".con1").css("display","block");
       $(".con2").css("display","none");
    }else{
       $(".con1").css("display","none");
       $(".con2").css("display","block");
    }
});

/*typeCont是否选中*/
$(".typeCont").on("click",function(){

    if($(this).hasClass("typeContC")){
        $(this).removeClass("typeContC");
    }else{
        $(this).addClass("typeContC");
    }
    
});