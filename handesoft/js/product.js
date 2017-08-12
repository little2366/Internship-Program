$(".q2LCItem").on("click",function(){
    $(this).addClass("itemActive");
    $(this).siblings().removeClass("itemActive");
});