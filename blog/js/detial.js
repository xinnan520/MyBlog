$(document).ready(function() {
	$("#myNav").affix({
		offset: {
			top: 90
		}
	});
	
	var url = window.location.href;
	var id = url.substring(url.indexOf("=")+1);
	
	var html = "";
	var json = "";
	$.ajax({
		type: "GET",
		url: "data/detial"+id+".json",
		async: true,
		timeout: 3000, //请求超过3s就算超时
		data: {"curr":1},
		error: function(request) {
			alert("Connection error");
		},
		success: function(response) {
//			alert(response);
			var obj = eval(response);
			$("#type").html(obj[0].blog_type);
			$("#year").html(obj[0].blog_year);
			$("#month").html(obj[0].blog_month);
			$(".blog_content").html('<p>'+obj[0].blog_detial+'</p>');
		}
	});
	
});