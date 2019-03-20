
//动态添加商品列表
function showList(objs){
    let htmlStr="";
    for(let i in objs){
        htmlStr+=`<div class="search_pic_item">
        				<a href="#"></a>
						<div class="search_pic_item_ct">
							<div class="search_pic_item_img">
								<a href="goodsDetail.html?+${objs[i].goodsId}">
									<img src="${objs[i].goodsImg}">
								</a>
							</div>
							<div class="search_pic_item_txt">
								<h3>
									<a href="#">${objs[i].goodsName}</a>
								</h3>
								<p class="search_pic_item_txt_time">${objs[i].beiyong1}</p>
								<p class="search_pic_item_txt_piao">
									<em>
										<em>${objs[i].goodsPrice}-${objs[i].beiyong2}元</em>
									</em>售票中
								</p>
								<p class="search_pic_item_txt_icon"></p>
							</div>
						</div>
					</div>`;
					console.log(objs);
    }
    $(".lissss").html(htmlStr);
}    
$(function(){
    $.get("getGoodsList.php",showList,"json");    
       
})