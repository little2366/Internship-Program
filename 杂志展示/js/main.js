// JavaScript Document
function addfav(id,favtype){
	jQuery.post("/ajax/submit.asp",{action:"addFav",id:id,favtype:favtype},function(data){
		if (data=="needlog")
		{
			if(confirm("Please login first!"))
			{
			location.href="/member/login.asp?referer="+location.href;
			}
		}else{
		alert(data);	}
	});
}
$(document).ready(function(e) {
    $("img.product").lazyload()
});
$(".search-query").bind("blur",function(){
	if($(this).val()=="")
	{
		$(this).val(this.defaultValue);
		}
	});
$(".search-query").bind("focus",function(e){
	if($(this).val()==this.defaultValue)
	{
		$(this).val("");
		}	
		$(this).keydown(function(e){
			if(e.keyCode==13){
				searchSubmit();
			}
			});	
	});
function searchSubmit()
{
	var tmp=$(".ts-xuan").text();
	var queryStr=$(".search-query").val();
	if(queryStr=="Search Company")
	{
		queryStr=""
		}
	        if(tmp.indexOf("By Company")>=0)
			{
            window.location.href="index.asp?cname="+ encodeURIComponent(queryStr);
			}
			else if(tmp.indexOf("By Prouduct")>=0)
			{
				window.location.href="product.asp?cname="+ encodeURIComponent(queryStr);
				}
			else if(tmp.indexOf("By People")>=0)
			{
				window.location.href="people.asp?cname="+ encodeURIComponent(queryStr);
				}
	}
	$("input[type='checkbox']").bind("click",function(){
		if($(this).prop("checked"))
		{
			$(this).val("1")		
		}
		else
		{
			$(this).val("0")
			}
		})
	$(".js_filter").bind("click",function(){
		var obj=$(this).find("input[type='checkbox']");
		if(obj.prop("checked"))
		{
			obj.prop("checked",false);
			$("#form1").children("input[name='"+obj.attr("name")+"']").val("0")
			}
		else
		{
			obj.prop("checked");
			$("#form1").children("input[name='"+obj.attr("name")+"']").val("1")
			}
		$("#form1").submit();
		})
$("#filter input[type='checkbox']").bind("click",function(e){
	e.preventDefault();
	if($(this).prop("checked"))
	{
		$("#form1").children("input[name='"+$(this).attr("name")+"']").val("1")
		}
	else
	{
		$("#filter_name").attr("name",$(this).attr("name"));
		$("#form1").children("input[name='"+$(this).attr("name")+"']").val("0")
		}
		$("#form1").submit();
	})
	$(".ts-xuan").bind("click",function(e){
	   
		if($(".ts-xuan-list").is(":visible"))
		{
			$(".ts-xuan-list").hide();
			}
			else
			{
			$(".ts-xuan-list").show();
			}
		e.stopPropagation();
		});
    $(".ts-xuan-list a").bind("click",function(e){
		var temp=$(".ts-xuan").text();
		$(".ts-xuan").text($(this).text());
		$(this).text(temp);
		$(".ts-xuan-list").hide();
		return false;
		});
$("div").not(".ts-xuan").bind("click",function(){
	$(".ts-xuan-list").hide();
	})
$(".search-btn").click(function(){
	searchSubmit();
	});
$(window).bind("scroll",function(){
	$("img").find(":has(src1)")
	})
$(".modal-footer a.btn:first").click(function(){
	$("#modalRate").hide();
	});
$("#modalRate .close").click(function(){
		$("#modalRate").hide();
	});
$("#login-modal .close").click(function(){
		$("#login-modal").hide();
	});

	$("a.f_submit").click(function(){
		$("#reviewForm").submit();
		});
	$(".denglu input[data-toggle='modal']").click(function(){
		$("#login-modal").show();
		})
$(".dropmenu2 li a").bind("click",function(){
	location.href="index.asp?endmarket="+$(this).attr("data-val");
	return false;
	})
function closeRat()
{
	$("#modalRate").hide();
	}
	$(".denglu .l-kuang").bind("focus",function(){
		if($(this).val()===this.defaultValue)
		{this.value="";$(this).css("color","#000")}
		}).bind("blur",function(){
			if($(this).val()==="")
			{
				this.value=this.defaultValue;
				$(this).css("color","#CCC")
				}
			})
function GetUrlParms()    
{
    var args=new Object();   
    var query=location.search.substring(1);//鑾峰彇鏌ヨ涓�   
    var pairs=query.split("&");//鍦ㄩ€楀彿澶勬柇寮€   
    for(var   i=0;i<pairs.length;i++)   
    {   
        var pos=pairs[i].indexOf('=');//鏌ユ壘name=value   
            if(pos==-1)   continue;//濡傛灉娌℃湁鎵惧埌灏辫烦杩�   
            var argname=pairs[i].substring(0,pos);//鎻愬彇name   
            var value=pairs[i].substring(pos+1);//鎻愬彇value   
            args[argname]=unescape(value);//瀛樹负灞炴€�   
    }
    return args;
}
function redirectHref()
{          
location.href=window.location.href;
	}
$(".oauthLogin").live("click",function(e){
	e.preventDefault();
     oauthLogin($(this).attr("data-type"));
	})
function oauthLogin(a){
	if(a=="facebook")
	{
		facebook_login();
	}
	else
	{
	var b=screen.width/2-400,c=screen.height/2-250;window.open("http://www.imould.com/member/oauth/"+a+"_login","","height=400, width=800, left="+b+", top="+c+" toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=yes")}
}
(function(){
	var timeout= 100;
    var closetimer= 0;
    var ddmenuitem= 0;
var b= function()
{
	if(ddmenuitem) ddmenuitem.hide();
}
var a=function()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}
	$(".dropdown").bind("mouseover",function(){
		a();
		ddmenuitem=$(this).next(".dropmenu");
		ddmenuitem.show();	
		}).bind("mouseout",function(){
		closetimer = window.setTimeout(b, timeout);
			})
	$(".dropmenu").bind("mouseover",function(){
		a();
		}).mouseout(function(){closetimer = window.setTimeout(b, timeout);})
			
	})()