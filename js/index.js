/**********************************首页开始************************************/
$(function(){
	$("#videobox video")[0].pause();
})
//底部音频动画
$(".surprise-pic li").hover(function(){
	$(this).animate({"background-position-y":"15px"},200)
	$(this).children("audio")[0].play();
},function(){
	$(this).animate({"background-position-y":"50px"},200)
	$(this).children()[0].pause();
})
//侧面导航动画
$("#suspension a").hover(function(){
	$(this).stop(true)
	$(this).animate({"background-position-x":"0px"},500)
},function(){
	$(this).stop(true)
	$(this).animate({"background-position-x":"-55px"},500)
})

//导航条切换样式
$("#hmenu div a").click(function(){
	$("#hmenu div").css("background-color","white");
	$("#hmenu div a").css("color","#616161");
	$(this).parent().css("background-color","#fa7433");
	$(this).css("color","white");
})

$(".tupianyangshi:odd").hover(function(){
	$(this).addClass("movetupian");
},function(){
	$(this).removeClass("movetupian");
})

$(".tupianyangshi:even").hover(function(){
	$(this).addClass("rubberBand");
},function(){
	$(this).removeClass("rubberBand");
})
//圆动画
$(".animate-pic img").mouseover(function(){
	$("#baiyuanleft,#baiyuanright").hide(500);
	$("#baiyuanleft").css({"display":"none"});
	$("#hongyuanleft,#hongyuanright").slideDown(500);
	$("#hongyuanright").css({"display":"block"});
	
})
$(".animate-pic img").mouseout(function(){
	$("#hongyuanleft,#hongyuanright").css({"display":"none"})
	$("#baiyuanleft,#baiyuanright").css({"display":"block"})
})

//三角动画
$(".function-pic2 .animate-pic").hover(function(){
	$("#sanjia1").addClass("fadeOutLeft");
	$("#sanjia2").addClass("fadeOutLeft2");
	$("#sanjia3").addClass("fadeOutLeft1");
},function(){
	$("#sanjia1").removeClass("fadeOutLeft");
	$("#sanjia2").removeClass("fadeOutLeft2");
	$("#sanjia3").removeClass("fadeOutLeft1");
})

//点击登录或注册  开始

$("#lrclose").click(function(){
	$("#logandreg").css("display","none");
	emailYan1();
})

$("#larheader a").click(function(){
	$("#login").css("display","block");
	$("#larheader i").css("display","none");
	$(this).css("color","red");
	$(this).next().css("color","lightgray")
	$(this).children().css("display","block");
	$("#register").css("display","none");
})

$("#larheader a:eq(1)").click(function(){
	$("#login").css("display","none");
	$(this).css("color","red");
	$(this).prev().css("color","lightgray")
	$("#larheader i").css("display","none");
	$(this).children().css("display","block");
	$("#register").css("display","block");
})
//结束

var type = window.location.search
if (type === '?type=login') {
	$("#message_tip").show()
	$("#message_tip").html('欢迎' + localStorage.getItem('name'));
	setTimeout(function () {
		$("#message_tip").hide()
	},3000)
}

//提交登录信息
$("#logok").click(function(){
	//$("#logusername").val(),"logpwd":$("#logpwd").val()
	var name = localStorage.getItem('name')
	var pwd = localStorage.getItem('pwd')
	if($("#logusername").val() === name && $("#logpwd").val() === pwd){
		window.location.href = 'index.html?type=login'
	}
	else{
		alert("账号或密码错误");
	}
});

//提交注册信息  开始
//用户名正则表达式
var yanusername=/^[a-z](\w{1,9})$/i;
//密码正则表达式
var yanpwd=/^.{6,10}$/i;
//邮箱正则表达式
var yanemail=/^([\w-])+@([\w-])+((\.[\w-]{2,3}){1,2})$/i;

//用户名验证
$("#username").focus(function(){
	$("#register dd:eq(0)").html("&nbsp;2-10个字符,可使用字母数字、下划线,需要以字母开头")
})

$("#username").blur(usernameYan);
function usernameYan(){
	if($("#username").val()==""){
		$("#register dd:eq(0)").html("<span style='color:red'>&nbsp;内容不能为空</span>")
		return false;
	}
	if(yanusername.test($("#username").val())){
		$("#register dd:eq(0)").html("<span style='color:lawngreen'>&nbsp;名字OK</span>");
	}
	else{
		$("#register dd:eq(0)").html('<span style="color:red">&nbsp;2-10个字符,可使用字母数字、下划线,需要以字母开头</span>');
		return false;
	}
}
//密码验证
$("#pwd").focus(function(){
	$("#register dd:eq(1)").html("&nbsp;6-10个字符,区分大小写")
})

$("#pwd").blur(pwdYan)
function pwdYan(){
	if($("#pwd").val()==""){
		$("#register dd:eq(1)").html("<span style='color:red'>&nbsp;内容不能为空</span>")
		return false;
	}
	if(yanpwd.test($("#pwd").val())){
		$("#register dd:eq(1)").html("<span style='color:lawngreen'>&nbsp;密码OK</span>");
		return true;
	}
	else{
		$("#register dd:eq(1)").html('<span style="color:red">&nbsp;6-10个字符,区分大小写</span>');
		return false;
	}
}

//确认密码
$("#pwdagain").focus(function(){
	$("#register dd:eq(2)").html("&nbsp;请再次输入密码")
})

$("#pwdagain").blur(function(){
	if($("#pwdagain").val()==""){
		$("#register dd:eq(2)").html("<span style='color:red'>&nbsp;内容不能为空</span>")
		return false;
	}
	if($("#pwdagain").val()==$("#pwd").val()){
		$("#register dd:eq(2)").html("<span style='color:lawngreen'>&nbsp;确认密码OK</span>");
		return true;
	}
	else{
		$("#register dd:eq(2)").html('<span style="color:red">&nbsp;密码不一致</span>');
		return false;
	}
})

//验证邮箱
$("#email").focus(emailYan1);
function emailYan1(){
	$("#register dd:eq(3)").html("&nbsp;目前只支持.com .net .cn .org后缀的邮箱")
}

$("#email").blur(emailYan);
function emailYan(){
	if($("#email").val()==""){
		$("#register dd:eq(3)").html("<span style='color:red'>&nbsp;内容不能为空</span>")
		return false;
	}
	if(yanemail.test($("#email").val())){
		$("#register dd:eq(3)").html("<span style='color:lawngreen'>&nbsp;邮箱OK</span>");
		return true;
	}
	else{
		$("#register dd:eq(3)").html('<span style="color:red">&nbsp;目前只支持.com .net .cn .org后缀的邮箱</span>');
		return false;
	}
}
//提交
$("#regok").click(function(){
	usernameYan();
	pwdYan();
	emailYan();
	if(pwdYan()&&emailYan()){
		localStorage.setItem('name', $("#username").val())
		localStorage.setItem('pwd', $("#pwd").val())
		alert("注册成功，请登录")
		window.location.href = 'login.html'
	}
	else{
		alert("格式错误请重新填写")
	}
})
//注册结束

//首页视频点开
$("#bcright").click(function(){
	$("#kuaiyavideo").css("display","block");
	$("#videobox video")[0].load();
	$("#videobox video")[0].play();
})
//关闭
$("#videobox div").click(function(){
	$("#kuaiyavideo").css("display","none");
	$("#videobox video")[0].pause();
})
/**********************************首页结束************************************/

/**********************************帮助开始************************************/
$("#helpboleft ul li").click(function(){
	$("#helpboleft ul li").css({"background-color":"#fafafa","color":"black"})
	$("#helpboright ul li").hide(500).css("display","none");
	if($(this).html()=="使用指南"){
		$("#list1").slideDown(1000);
		$("#list1").css({"display":"block"});
		$("#helpbottom").css("height","1956px")
	}
	else if($(this).html()=="功能介绍"){
		$("#list2").slideDown(1000);
		$("#list2").css({"display":"block"});
		$("#helpbottom").css("height","738px")
	}
	else{
		$("#list3").slideDown(1000);
		$("#list3").css({"display":"block"});
		$("#helpbottom").css("height","1950px")
	}
	$(this).css({"background-color":"white","color":"blue"});
})

/**********************************帮助结束************************************/