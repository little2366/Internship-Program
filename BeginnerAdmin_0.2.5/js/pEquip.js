/*设定全局变量i,表示图片的张数
  创建一个数组,表示第i个image-holder*/
var i=0;
var myImg = new Array();

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