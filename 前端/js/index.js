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
    if(string == '发布加工需求'){
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


/*选择付款的方式*/
$(".payType").on("click",function(){

    if($(this).hasClass("typeContC")){
       $(this).siblings(".payType").removeClass("typeContC");
   }
});


/*是否含税点击事件*/
function hslxOnclick(hslxObj){
    if(hslxObj == ''){
        if ($(".hslx").attr("value") == "hstypel") {
            $(".hslx input").stop().animate({"left": "126px"}, 500),
            $(".hslx").attr("value", "hstyper")
            $(".hslx input").attr("value", "不含税")
            $(".hstype h3").text("不含税报价：不要求报价供方提供发票。")
            $("input[name=enquiryType][value=hstyper]").attr("checked","checked");//选中
        } else { 
            $(".hslx input").stop().animate({"left": "0"}, 400),
            $(".hslx").attr("value", "hstypel")
            $(".hslx input").attr("value", "含税")
            $(".hstype h3").text("含税报价：要求报价供方提供发票。")
            $("input[name=enquiryType][value=hstypel]").attr("checked","checked");//选中
        }
    }else{
        if(hslxObj == 'hstypel'){
            $(".hslx input").stop().animate({"left": "0"}, 400),
            $(".hslx").attr("value", "hstypel")
            $(".hslx input").attr("value", "含税")
            $(".hstype h3").text("含税报价：要求报价供方提供发票。")
            $("input[name=enquiryType][value=hstypel]").attr("checked","checked");//选中
        }else if(hslxObj == 'hstyper'){
            $(".hslx input").stop().animate({"left": "126px"}, 500),
            $(".hslx").attr("value", "hstyper")
            $(".hslx input").attr("value", "不含税")
            $(".hstype h3").text("不含税报价：不要求报价供方提供发票。")
            $("input[name=enquiryType][value=hstyper]").attr("checked","checked");//选中
        }
    }
}

/*是否缴纳滞纳金点击事件*/
function znjlxOnclick(znjlxObj){
    if(znjlxObj == ''){
        if ($(".znjlx").attr("value") == "znjtypel") {
            $(".znjlx input").stop().animate({"left": "126px"}, 500),
            $(".znjlx").attr("value", "znjtyper")
            $(".znjlx input").attr("value", "不缴纳滞纳金")
            $(".znjtype h3").text("不缴纳滞纳金：发单方对接单方逾期申报税款或未按规定期限缴纳税款的行为不将给予的经济制裁。")
            $("input[name=enquiryType][value=znjtyper]").attr("checked","checked");//选中
        } else { 
            $(".znjlx input").stop().animate({"left": "0"}, 400),
            $(".znjlx").attr("value", "znjtypel")
            $(".znjlx input").attr("value", "缴纳滞纳金")
            $(".znjtype h3").text("缴纳滞纳金：发单方对接单方逾期申报税款或未按规定期限缴纳税款的行为给予的经济制裁。")
            $("input[name=enquiryType][value=znjtypel]").attr("checked","checked");//选中
        }
    }else{
        if(znjlxObj == 'znjtypel'){
            $(".znjlx input").stop().animate({"left": "0"}, 400),
            $(".znjlx").attr("value", "znjtypel")
            $(".znjlx input").attr("value", "缴纳滞纳金")
            $(".znjtype h3").text("缴纳滞纳金：发单方对接单方逾期申报税款或未按规定期限缴纳税款的行为给予的经济制裁。")
            $("input[name=enquiryType][value=znjtypel]").attr("checked","checked");//选中
        }else if(znjlxObj == 'znjtyper'){
            $(".znjlx input").stop().animate({"left": "126px"}, 500),
            $(".znjlx").attr("value", "znjtyper")
            $(".znjlx input").attr("value", "不缴纳滞纳金")
            $(".znjtype h3").text("不缴纳滞纳金：发单方对接单方逾期申报税款或未按规定期限缴纳税款的行为不将给予的经济制裁。")
            $("input[name=enquiryType][value=znjtyper]").attr("checked","checked");//选中
        }
    }
}

/*是否自选商家点击事件*/
function sjlxOnclick(sjlxObj){
    if(sjlxObj == ''){
        if ($(".sjlx").attr("value") == "sjtypel") {
            $(".sjlx input").stop().animate({"left": "126px"}, 500),
            $(".sjlx").attr("value", "sjtyper")
            $(".sjlx input").attr("value", "不自选商家")
            $(".sjtype h3").text("不自选商家：系统给发单方匹配合适的接单方。")
            $("input[name=enquiryType][value=sjtyper]").attr("checked","checked");//选中
        } else { 
            $(".sjlx input").stop().animate({"left": "0"}, 400),
            $(".sjlx").attr("value", "sjtypel")
            $(".znjlx input").attr("value", "自选商家")
            $(".sjtype h3").text("自选商家：发单方自行选择合适的接单方。")
            $("input[name=enquiryType][value=sjtypel]").attr("checked","checked");//选中
        }
    }else{
        if(sjlxObj == 'sjtypel'){
            $(".sjlx input").stop().animate({"left": "0"}, 400),
            $(".sjlx").attr("value", "sjtypel")
            $(".sjlx input").attr("value", "自选商家")
            $(".sjtype h3").text("自选商家：发单方自行选择合适的接单方。")
            $("input[name=enquiryType][value=sjtypel]").attr("checked","checked");//选中
        }else if(sjlxObj == 'sjtyper'){
            $(".sjlx input").stop().animate({"left": "126px"}, 500),
            $(".sjlx").attr("value", "sjtyper")
            $(".sjlx input").attr("value", "不自选商家")
            $(".sjtype h3").text("不自选商家：系统给发单方匹配合适的接单方。")
            $("input[name=enquiryType][value=sjtyper]").attr("checked","checked");//选中
        }
    }
}

/*是否包含质量违约金点击事件*/
function wyjlxOnclick(wyjlxObj){
    if(wyjlxObj == ''){
        if ($(".wyjlx").attr("value") == "wyjtypel") {
            $(".wyjlx input").stop().animate({"left": "126px"}, 500),
            $(".wyjlx").attr("value", "wyjtyper")
            $(".wyjlx input").attr("value", "不含违约金")
            $(".wyjtype h3").text("不含违约金：发单方不会对接单方的违约行为进行扣款处罚。")
            $("input[name=enquiryType][value=wyjtyper]").attr("checked","checked");//选中
        } else { 
            $(".wyjlx input").stop().animate({"left": "0"}, 400),
            $(".wyjlx").attr("value", "wyjtypel")
            $(".wyjlx input").attr("value", "含违约金")
            $(".wyjtype h3").text("含违约金：发单方会对接单方的违约行为进行扣款处罚。")
            $("input[name=enquiryType][value=wyjtypel]").attr("checked","checked");//选中
        }
    }else{
        if(wyjlxObj == 'wyjtypel'){
            $(".wyjlx input").stop().animate({"left": "0"}, 400),
            $(".wyjlx").attr("value", "wyjtypel")
            $(".wyjlx input").attr("value", "含违约金")
            $(".wyjtype h3").text("含违约金：发单方会对接单方的违约行为进行扣款处罚。")
            $("input[name=enquiryType][value=wyjtypel]").attr("checked","checked");//选中
        }else if(wyjlxObj == 'wyjtyper'){
            $(".wyjlx input").stop().animate({"left": "126px"}, 500),
            $(".wyjlx").attr("value", "wyjtyper")
            $(".wyjlx input").attr("value", "不含违约金")
            $(".wyjtype h3").text("不含违约金：发单方不会对接单方的违约行为进行扣款处罚。")
            $("input[name=enquiryType][value=znjtyper]").attr("checked","checked");//选中
        }
    }
}


/*图形验证码*/
var verifyCode = new GVerify("v_container");
/*验证是否正确*/
/*document.getElementById("my_button").onclick = function(){
    var res = verifyCode.validate(document.getElementById("code_input").value);
    if(res){
        alert("验证正确");
    }else{
        alert("验证码错误");
    }
}*/


/*获取手机验证码*/
$(function (){
    //获取手机验证码
    $("#j_getVerifyCode").on("click",getVerifyCode({
        callBack: function (){//按钮点击后的回调函数，-----必须-----
            //在这里你还是可以对你的按钮进行操作
            //console.log(this);
            alert("验证码发送成功");
        },
        time: 60,//定时时间，以秒为单位，默认60秒
        getCurrentTime: function (time){//获取倒计时当前时间
            //console.log(time);
            //console.log(this);//这里的这个this执行按钮
            //console.log("=================================");
        },
        isPhone: true,//是否为发送手机验证码，如果是则会验证手机号格式，-----必须-----
        getPhone: function (){//获取手机号，此处一定要return
            return $("#j_phone").val();
        },
        //phoneReg: /^1[34578]\d{9}$/,//手机号验证正则
        phoneCallBack: function (){//当手机号有误时的回调，默认会中止操作
            alert("您输入的手机号有误");
        },
        timeIsUpText: "重新发送",//倒计时时间到了后按钮所显示文字
        timeRunnigText: "s后重新发送",//倒计时时间正在走的时候按钮所显示文字。默认为"xxs后重新获取"
        unabledClass: "unlabed"//按钮不能用的样式，即点击按钮后的样式
    }));
    
});

;(function (window,document){
    function getVerifyCode(options) {
        var fn = arguments.callee;
        return function() {
            clearInterval(timer);
            if(!(options && Object.prototype.toString.call(options.callBack) == "[object Function]")) {
                throw new Error("Error");
            }
            var that = $(this);
            if(options.isPhone){
                var phone = options.getPhone(),
                    reg = options.phoneReg || /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(!reg.test(phone)) {
                    options.phoneCallBack && options.phoneCallBack.call(that,phone);
                    return;
                }
            }
            
            var timer = null,
                time = options.time || 60,
                count = 0,
                interval = 1000,
                start = new Date().getTime(),
                targetTime = time * 1000,
                unabledClass = options.unabledClass,
                timeIsUpText = options.timeIsUpText,
                timeRunnigText = options.timeRunnigText;
            that.off("click");
            that.addClass(unabledClass);
            timer = setTimeout(function() {
                var wucha = 0,
                    nextRunTime = interval,
                    currentFn = arguments.callee;
                count ++;
                wucha = new Date().getTime() - (start + count * interval);
                wucha = (wucha <= 0) ? 0 : wucha;
                nextRunTime = interval - wucha;
                nextRunTime = (nextRunTime <= 0) ? 0 : nextRunTime
                if((targetTime -= interval) <= 0){
                    clearTimeout(timer);
                    /*time = 60;*/
                    that.html(timeIsUpText).removeClass(unabledClass);
                    that.on("click", fn(options));
                }else{
                    time--;
                    that.html(time + timeRunnigText);
                    if(options.getCurrentTime && (Object.prototype.toString.call(options.getCurrentTime) == "[object Function]")){
                        options.getCurrentTime.call(that,time);
                    }
                    timer = setTimeout(currentFn,nextRunTime);
                }
            }, interval);
            options.callBack.call(that);
        }
    }
    window.getVerifyCode = getVerifyCode;
})(window,document);

/*发布设备弹出提示*/
$('#equipBtn').on("click",function(){
    swal("设备已成功发布", "You clicked the button!", "success");
});