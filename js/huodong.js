$(function(){
	$.get("http://localhost:8888/gethuodong",function(data){
		insertLi(data);
	})
})

function insertLi(data){
	var dataArr=JSON.parse(data);
	for(var i=0;i<dataArr['data'].length;i++){
		var newClo=$("#clone").clone(true);
		newClo.removeAttr("id");
		newClo.find("h1").html(dataArr['data'][i].time.substr(5,5))
		newClo.find("span:eq(0)").html(dataArr['data'][i].time.substr(0,4))
		newClo.find("span:eq(1)").html("活动时间"+dataArr['data'][i].time)
		newClo.find("img").attr("src",dataArr['data'][i].img)
		newClo.find("p:eq(0)").html(dataArr['data'][i].title)
		newClo.find("p:eq(1)").html(dataArr['data'][i].content)
		newClo.appendTo("#news-box ul");
		if(dataArr['data'][i].img=="0"){
			newClo.find("img").remove();
			$(".liright:eq("+(i+1)+")").css("width","82%");
			$(".liright:eq("+(i+1)+")").find("h3").css({"height":"33px","width":"160%"});
			$(".liright:eq("+(i+1)+")").find("dd").css("margin-left","0px");
			$(".liright:eq("+(i+1)+")").find("p:eq(1)").css("width","170%");
			$(".liright:eq("+(i+1)+")").find("a").css({"bottom":"-5px","left":"0"});
		}
	}
}
