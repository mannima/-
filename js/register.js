// $(function(){
// 	//手机号非空判断
// 	$("#phoneId").blur(function(){
// 		if($("#phoneId").val()==""){//如果文本框的值为空的话弹出$("#hintPhone").html("请输入手机号")
// 			$("#hintPhone").html("请输入手机号");
// 			$(".sectionList_RightOne").css({"border-color":"red"});
// 			$("#phoneId").css({"border-left-color":"1px solid red"});
// 		}else{//说明文本框有值把$("#hintPhone").html("请输入手机号")置为空
// 			$("#hintPhone").html("");
// 			$(".sectionList_RightOne").css({"border-color":"#ccc"});
// 			$("#phoneId").css({"border-left-color":"#ccc"});
// 		}
// 	});


// 	//验证手机号正则表达式
// 	$("#phoneId").blur(function(){
// 		var phoneDom = document.getElementById("phoneId");
// 		phoneDom.oninput = function(){
// 			var valDom =parseInt(this.value);
// 			$("#hintPhone").html("");
// 			var reg= /^1[34578]\d{9}$/;
// 			if(reg.test(valDom)){
// 				$("#egex").html("");
// 			}else{
// 				$("#egex").html("手机号码格式不正确，请重新输入");
// 			}
// 		}
// 	});



// 	// $("#pass").blur(function(){
// 	// 	if($("#pass").val()==""){
// 	// 		alert("请输入密码");
// 	// 	}else{
// 	// 		$("#regBtn").click(function(){
// 	// 			.post("regSave.php",{userpass:$("#pass").val(),userphone:$("#phoneId").val()},function(data){
// 	// 				if (data==1) {
// 	// 					location.href="http://127.0.0.1/damaiW/index.html";
// 	// 				}else{
// 	// 					alert("失败");
// 	// 				}
// 	// 				// alert(data);
// 	// 			})
// 	// 		})
// 	// 	}
// 	// })

// });


// $.get("checkuser.php",{"userphone":$("#phoneId").val()},function(data){
// 		if(data==1){
// 			alert("该手机号可以注册");
// 		}else{
// 			alert("该手机号已被注册");
// 		}

$(function(){
	$("#phoneId").blur(function(){
		if($("#phoneId").val()==""){
			alert("用户名输入不能为空");
		}else{
			$.get("checkuser.php",{"userphone":$("#phoneId").val()},function(data){
	  			if (data==1) {
	  				alert("亲，该手机号可以注册");
	  			}else{
	  				alert("亲，该手机号已被注册");
	  			}  			
			})
		}
	})
	$("#pass").blur(function(){
		if($("#pass").val()==""){
			// alert("密码输入不能为空");
		}
	})


	
	$("#regBtn").click(function(){
		$.post("regSave.php",{userpass:$("#pass").val(),userphone:$("#phoneId").val()},function(data){
			if(data==1){
				location.href="login.html";
			}else{
				alert("注册失败");
			}
		})
		// let str = `userpass=${$("#pass").val()}&userphone=${$("#phoneId").val()}`;
		// xhr.send(str);
	})
})