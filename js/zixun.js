$(function(){
	$.get("http://localhost:8888/getzixun",{pageNum:1},function(data){
		insertLi(data);
	})
	$("#numdaohang a").click(function(){
		$.get("http://localhost:8888/getzixun",{pageNum:$(this).html()},function(data){
			insertLi(data);
		})
	})
	
})

function insertLi(data){
	$("#news-box ul li:gt(0)").remove();
	var dataArr=JSON.parse(data);
	for(var i=0;i<dataArr['data'].length;i++){
		var newClo=$("#clone").clone(true);
		newClo.removeAttr("id");
		newClo.find("dt").html(dataArr['data'][i].title);
		newClo.find("p").html(dataArr['data'][i].content);
		newClo.find("h1").html(dataArr['data'][i].time.substr(5));
		newClo.find("span").html(dataArr['data'][i].time.substr(0,4));
		newClo.appendTo("#news-box ul");
	}
}
