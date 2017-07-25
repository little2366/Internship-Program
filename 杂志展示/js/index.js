/*菜单栏的选中*/
$(".menu-item").mouseover(function(){
	$(this).addClass("menuActive");
});
$(".menu-item").mouseleave(function(){
	$(this).removeClass("menuActive");
});

/*鼠标悬停的时候图片上移突出*/
$(".mag-item").mouseover(function(){
    $(this).animate({ marginTop: '15px' }, 150);
}); 
$(".mag-item").mouseleave(function(){
    $(this).animate({ marginTop: '20px' }, 130);
}); 