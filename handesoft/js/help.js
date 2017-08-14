$(".q2LItem").on("click",function(){
    $(this).addClass("active");
    $(this).siblings().removeClass("active");
});

$(".q2LItem").on("click",function(){
    var id = $(this).attr("id");
    var title_id = "#q2Right" + id;
    $(title_id).css("display","block");
    $(title_id).siblings(".q2Right").css("display","none");
});