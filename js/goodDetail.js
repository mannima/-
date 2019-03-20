$(function(){
	$("#GPXZTIT").click(function(){
		$("#GPXZTIT").css({"border-top":"4px solid #ff1268","cursor":"default","border-right":"1px solid #eee","border-left":"1px solid #eee","border-bottom-color":"#fff"});
		$("#GPXZ").css({"display":"block"});
		$("#SPXQ").css({"display":"none"});
		$("#SPXQTIT").css({"border-top":"none","cursor":"pointer","background-color":"transparent","border":"1px solid transparent"});
	})
	$("#SPXQTIT").click(function(){
		$("#GPXZ").css({"display":"none"});
		$("#SPXQ").css({"display":"block"});
		$("#SPXQTIT").css({"border-top":"4px solid #ff1268","cursor":"default","border-right":"1px solid #eee","border-left":"1px solid #eee","border-bottom-color":"#fff"});
		$("#GPXZTIT").css({"border-top":"none","cursor":"pointer","background-color":"transparent","border":"1px solid transparent"});
	})


	$(".selectRight_list_item").click(function(){
		$(this).addClass("selectRight_list_item2");
		$(".selectRight_list_item2").css({"border":"2px solid #ff1268","color":"#ff1268","background":"url(img/duihao2.png) no-repeat","background-size":"18px 18px","background-position":"right bottom"});
		$(".selectRight_list_item").not(this).removeClass("selectRight_list_item2");
		$(".selectRight_list_item").not(this).css({"border":"1px solid  #e2e2e2","color":"#000","background":"none"});
		let str = $(this).html();
		$(".priceTwo").html(str);
		console.log(str)
	})


	//加号按钮事件
	$(".addition").click(function(){
		let count = $(".count").val();//数量
		count++;
		$(this).prev().val(count<1?1:count);
		if(count>1){
			$(".minus").css("color","#000");
		}
	})
	//减号按钮事件
	$(".minus").click(function(){
		let count = $(".count").val();//数量
		count--;
		$(this).next().val(count<1?1:count);
		if(count<2){
			$(".minus").css("color","#ccc");
		}
	})
})





$(function(){
	console.log(location.search);
	let str = location.search;
	let strId = str.split("+")[1];
	console.log(strId);
	$.get("getGoodsinfo.php",{"goodsId":strId},function(data){
	let imgs = data.goodsImg;
	let names = data.goodsName;
	let dates = data.beiyong1;
	let citys = data.beiyong3;
	console.log(names);
	$("#goodName").html(names);
	$("#datess").html(dates);
	$("#city").html(citys);
	console.log(dates);
	 $("#imgsssssssss").attr("src",`${data.goodsImg}`)
	},"json");

	getCookie("user");
	console.log(getCookie("user"));
	let users = getCookie("user");
	$("#reserveBtn").click(function(){
		$.get("addShoppingCart.php",{
			"vipName":"user",
			"goodsId":"strId",
			"goodsCount":0
		},function(data){
			console.log(data);
			if(data){
				location.href = "qurRenDingDan.html";
			}
		})
	})
})




