/*设定全局变量i,表示图片的张数
  创建一个数组,表示第i个image-holder*/
var i=0;
var myImg = new Array();

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
    $(this).addClass("current");
    $(this).siblings(".tabbtn-item").removeClass("current");
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

/*上传图文件*/
$("#imgPicker").on("change","input[type='file']",function() {
 
    if (typeof (FileReader) != "undefined") {

        var uploading = $("#uploading");
        var imgPicker = $("#imgPicker");
        ++i;
        var temp = $('<div></div>');          //创建一个div  
        temp.attr('id', i);                   //给div设置id
        temp.addClass('image-holder');        //添加css样式

        /*uploading.append(temp);*/
        temp.insertBefore(imgPicker);
        temp.empty();
        
        var deleteThis = $('<div></div>'); 
        deleteThis.addClass("delete");
        deleteThis.appendTo(temp);

        $(".delete").on("click",function(){
            $(this).parent().remove();
        });

        var reader = new FileReader();
        reader.onload = function (e) {
            $("<img />", {
                "src": e.target.result,
                "class": "thumb-image"
            }).appendTo(temp);
 
        }
        temp.show();
        reader.readAsDataURL($(this)[0].files[0]);
    } else {
        alert("你的浏览器不支持FileReader.");
    }
  
});

/*选择日期*/
$('#datetimepicker').datetimepicker();


/*接单类型点击事件*/
function jdlxOnclick(jdlxObj){
    if(jdlxObj == ''){
        if ($(".jdlx").attr("value") == "jdtypel") {
            $(".jdlx input").stop().animate({"left": "133px"}, 500),
            $(".jdlx").attr("value", "jdtyper")
            $(".jdlx input").attr("value", "不含税")
            $(".jdtype h3").text("不含税报价：不要求报价供方提供发票。")
            $("input[name=enquiryType][value=jdtyper]").attr("checked","checked");//选中
        } else { 
            $(".jdlx input").stop().animate({"left": "0"}, 400),
            $(".jdlx").attr("value", "jdtypel")
            $(".jdlx input").attr("value", "含税")
            $(".jdtype h3").text("含税报价：要求报价供方提供发票。")
            $("input[name=enquiryType][value=jdtypel]").attr("checked","checked");//选中
        }
    }else{
        if(jdlxObj == 'jdtypel'){
            $(".jdlx input").stop().animate({"left": "0"}, 400),
            $(".jdlx").attr("value", "jdtypel")
            $(".jdlx input").attr("value", "含税")
            $(".jdtype h3").text("含税报价：要求报价供方提供发票。")
            $("input[name=enquiryType][value=jdtypel]").attr("checked","checked");//选中
        }else if(jdlxObj == 'jdtyper'){
            $(".jdlx input").stop().animate({"left": "133px"}, 500),
            $(".jdlx").attr("value", "jdtyper")
            $(".jdlx input").attr("value", "不含税")
            $(".jdtype h3").text("不含税报价：不要求报价供方提供发票。")
            $("input[name=enquiryType][value=jdtyper]").attr("checked","checked");//选中
        }
    }
}