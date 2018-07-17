$(document).ready(function(){
//	alert($("#blog_list").attr("detial-url"));
	var url = window.location.href;
	if (url.endsWith("html")) {
		var page = "1";
	} else {
		if (url.endsWith("#")) {
			url = url.substring(0, url.length - 1);
		}
		var page = url.substring(url.indexOf("=")+1);
	}
	
//	alert(page);
	var html = "";
	var json = "";
	var pageLength;
	$.ajax({
		type: "GET",
		url: "data/data.json",
		async: true,
		timeout: 3000, //请求超过3s就算超时
		data: {"curr":1},
		error: function(request) {
			alert("Connection error");
		},
		success: function(response) {
//			alert(response);
			var obj = eval(response);
//			alert(obj.length)
			if (obj.length%10>0) {
				pageLength = obj.length/10+1;
			} else {
				pageLength = obj.length/10;
			}
			
//			alert(obj[1].id);
			for(var i = 10*(page-1); i < 10*(page-1)+10&& i<obj.length; i++) {
				html += '<div class="panel panel-default">';
				html += '<div class="panel-heading">';
				html += '<div class="row">';
				html += '<div class="col-lg-3 col-md-3 col-sm-5 col-xs-6">';
				html += '<h7>';
				html += '<span class="label label-info">'+obj[i].blog_type+'</span>';
				html += '</h7>';
				html += '</div>';
				html += '<div class="col-lg-2 col-md-2 col-sm-2 col-xs-4 pull-right">';
				html += '<h7>'+obj[i].blog_time+'</h7>';
				html += '</div>';
				html += '</div>';
				html += '</div>';
				html += '<div class="panel-body">';
				html += '<h4>'+obj[i].blog_title+'</h4>';
				html += '<a href="detial.html?id='+obj[i].id+'" class="thumbnail">';
				html += '<img src=obj[i].blog_img+'" alt="通用的占位符缩略图">';
				html += '</a>';
				html += '<p>作者：'+obj[i].blog_auther+'</p>';
				html += '<p>'+obj[i].blog_content+'</p>';
				html += '<p>';
				html += '<a class="btn btn-primary btn-sm bg-color" href="detial.html?id=' + i + '" role="button">Learn more »</a>';
				html += '</p>';
				html += '</div>';
				html += '</div>';
			}
			html += '<div class="">';
			html += '<ul class="pagination">';
			
//			alert(pageLength)
			if(page==1){
				html += '<li class="disabled">';
				html += '<a>&laquo;</a>';
				html += '</li>';
			} else {
				html += '<li>';
				html += '<a href=index.html?page='+(page-1)+'>&laquo;</a>';
				html += '</li>';
			}
			
			
			for(var i=1; i<=pageLength; i++){
				if(i==page){
					html += '<li class="active">';
				}else {
					html += '<li>';
				}
				
				html += '<a href="index.html?page='+i+'">'+i+'</a>';
				html += '</li>';
			}
			
			if (page==pageLength) {
				html += '<li class="disabled">';
				html += '<a>&raquo;</a>';
				html += '</li>';
			} else {
				html += '<li>';
				html += '<a href=index.html?page='+(parseInt(page)+1)+'>&raquo;</a>';
				html += '</li>';
			}
			
			
			
			html += '</ul>';
			html += '</div>';
			
			$("#blog_list").html(html);
		}
	});
});
$("#turnTo").on("click",function(){
	getList();
});

function getList(){
	alert(111);
}
