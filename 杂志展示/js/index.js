/*鼠标悬停的时候图片上移突出*/
$(".mag-item").mouseover(function(){
    $(this).animate({ marginTop: '15px' }, 150);
}); 
$(".mag-item").mouseleave(function(){
    $(this).animate({ marginTop: '20px' }, 130);
}); 