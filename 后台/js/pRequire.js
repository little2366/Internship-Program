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

/*判定是否含税*/
$("#hsCheck").click(function(){

    if($(this).find('input').is(':checked')){
        document.getElementById("hsLabel").innerText = '含税报价：要求报价供方提供发票。';
    }else{
       document.getElementById("hsLabel").innerText = '不含税报价：不要求报价供方提供发票。';
    }
});

$("#znjCheck").click(function(){

    if($(this).find('input').is(':checked')){
        document.getElementById("znjLabel").innerText = '缴纳滞纳金：发单方对接单方逾期申报税款或未按规定期限缴纳税款的行为给予的经济制裁。';
    }else{
       document.getElementById("znjLabel").innerText = '不缴纳滞纳金：发单方对接单方逾期申报税款或未按规定期限缴纳税款的行为不将给予的经济制裁。';
    }

});

$("#sjCheck").click(function(){

    if($(this).find('input').is(':checked')){
        document.getElementById("sjLabel").innerText = '自选商家：发单方自行选择合适的接单方。';
    }else{
       document.getElementById("sjLabel").innerText = '不自选商家：系统给发单方匹配合适的接单方。';
    }

});

$("#wyjCheck").click(function(){

    if($(this).find('input').is(':checked')){
        document.getElementById("wyjLabel").innerText = '含违约金：发单方会对接单方的违约行为进行扣款处罚。';
    }else{
       document.getElementById("wyjLabel").innerText = '不含违约金：发单方不会对接单方的违约行为进行扣款处罚。';
    }

});
