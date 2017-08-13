$(".q2LCItem").on("click",function(){
    $(this).addClass("itemActive");
    $(this).siblings().removeClass("itemActive");
});

$(".q2LCItem").on("click",function(){
    var id = $(this).attr("id");
    console.log(id);
    var title_id = "#q2LTitle" + id;
    $(title_id).css("display","block");
    $(title_id).siblings(".q2LTitle").css("display","none");
});