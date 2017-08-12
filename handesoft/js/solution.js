/*给div添加边框*/
$(".q3Items").mouseenter(function(){
    $(this).find(".q3ItemBox").css("border","1px solid #69c2ee");
});
$(".q3Items").mouseleave(function(){
    $(this).find(".q3ItemBox").css("border","1px solid #fff");
});


/*鼠标经过时修改图片*/
window.onload=function(){
    var img_src_before = [],
        img_src_after = [];

    for(var i = 1;i <= 12; ++i){
        
        img_src_before[i] = "../img/solution/q3_" + i + ".png";
        img_src_after[i] = "../img/solution/q_" + i + ".png";
    }
   
    $('.q3Items').mouseenter(function(){
        var i = $(this).attr("id");
        var id = '#' + i;
        $(id).find('img').attr('src',img_src_after[i]); 
    });
    
    /*恢复为原来的图片*/
    $('.q3Items').mouseleave(function(){
        var i = $(this).attr("id");
        var id = '#' + i;
        $(id).find('img').attr('src',img_src_before[i]);  
    });
}