$(document).ready(function(){
//	alert($("#blog_list").attr("detial-url"));
	var html = "";
	var json = "";
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
//			alert(obj[1].id);
			for(var i = 0; i < obj.length; i++) {
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
				html += '<img src="imgs/main-pic/'+obj[i].blog_img+'" alt="通用的占位符缩略图">';
				html += '</a>';
				html += '<p>作者：'+obj[i].blog_auther+'</p>';
				html += '<p>'+obj[i].blog_content+'</p>';
				html += '<p>';
				html += '<a class="btn btn-primary btn-sm bg-color" href="http://localhost/blog/index.php/Home/Index/detial/?id=' + i + '" role="button">Learn more »</a>';
				html += '</p>';
				html += '</div>';
				html += '</div>';
			}
			html += '<div class="">';
			html += '<ul class="pagination">';
			html += '<li class="disabled">';
			html += '<a>&laquo;</a>';
			html += '</li>';
			html += '<li class="active">';
			html += '<a href="#">1</a>';
			html += '</li>';
			html += '<li>';
			html += '<a id="turnTo">2</a>';
			html += '</li>';
			html += '<li>';
			html += '<a href="#">3</a>';
			html += '</li>';
			html += '<li>';
			html += '<a href="#">4</a>';
			html += '</li>';
			html += '<li>';
			html += '<a href="#">5</a>';
			html += '</li>';
			html += '<li>';
			html += '<a href="#">&raquo;</a>';
			html += '</li>';
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
