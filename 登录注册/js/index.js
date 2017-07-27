$(".tabbtn-item").on("click",function(){
    $(this).addClass("active");
    $(this).siblings(".tabbtn-item").removeClass("active");
    var string=$(this).find("span").text();
    if(string == '账号登录'){
       $(".con1").css("display","block");
       $(".con2").css("display","none");
    }else{
       $(".con1").css("display","none");
       $(".con2").css("display","block");
    }
});