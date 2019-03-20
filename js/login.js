$(function(){
	//鼠标滑过input框，给input框添加粉色border
	$(".inputs").mouseenter(function(){
		$(".inputs").css({"border-color":"#ff1268"})
	})
	$(".inputs").mouseleave(function(){
		$(".inputs").css({"border-color":"#e7e7e7"})
	})
	$(".inputss").mouseenter(function(){
		$(".inputss	").css({"border-color":"#ff1268"})
	})
	$(".inputss").mouseleave(function(){
		$(".inputss").css({"border-color":"#e7e7e7"})
	})


	//三种登录方式
	$("#dxdl").click(function(){
		$("#dxdl").css({"color":"#ff1268","background":"#fff","border-top":"2px solid #ff1268"})
		$("#mmdl").css({"color":"#222","background":"#e7e7e7","border-top-color":"#e7e7e7"});
		$("#smdl").css({"color":"#222","background":"#e7e7e7","border-top-color":"#e7e7e7"});
		$(".loginCon2").css({"display":"block"});
		$(".loginCon11").css({"display":"none"});
		$(".loginCon3").css({"display":"none"});
	})

	$("#mmdl").click(function(){
		$("#mmdl").css({"color":"#ff1268","background":"#fff","border-top":"2px solid #ff1268"})
		$("#dxdl").css({"color":"#222","background":"#e7e7e7","border-top-color":"#e7e7e7"});
		$(".loginCon11").css({"display":"block"});
		$(".loginCon2").css({"display":"none"});
		$(".loginCon3").css({"display":"none"});
	})
	$("#smdl").click(function(){
		$("#smdl").css({"color":"#ff1268","background":"#fff","border-top":"2px solid #ff1268"})
		$("#dxdl").css({"color":"#222","background":"#e7e7e7","border-top-color":"#e7e7e7"});
		$("#mmdl").css({"color":"#222","background":"#e7e7e7","border-top-color":"#e7e7e7"});
		$(".loginCon3").css({"display":"block"});
		$(".loginCon11").css({"display":"none"});
		$(".loginCon2").css({"display":"none"});
	})

	
	
	
	


});

// $(function(){
// 	$("#btnD").click(function(){
// 		$.post("../php/loginCheck.php",{userphone:$("#userId").val(),userpass:$("#userPas").val()},function(data){
// 			if(data==0){
// 				let str = $("#userId").val();
// 				addCookie("user",str,7);
// 				console.log(str);
// 				location.href = "index.html";
// 			}else{
// 				alert("登陆失败，用户名或密码错误");
// 			}
// 		});
// 	});
// });
// $(function(){
// 	$(".bgs").on("click",function(){
// 		$.post("loginCheck.php",{userphone:$("#name").val(),userpass:$("#pass").val()},function(data){
// 			if (data==0) {
// 				location.href="netShop.html";
// 			}else{
// 				alert("登录失败");
// 			}
// 		})
// 	})
// })



