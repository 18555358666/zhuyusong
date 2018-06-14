;(function($){
	//轮播图
 $.ajax({
        url: 'http://localhost/zhuyusong/Sama/php/index1.php',
        dataType:'json'
        }).done(function(bannerdata) { 
        	var $bannerdata=bannerdata.lunbotu;
        	var $mmmg=$('.mmmg');
        	var $btnggg=$('.btnggg');
        	for(var i=0;i<7;i++){
        		$mmmg.eq(i).attr('src',$bannerdata[i].url);
        		$btnggg.eq(i).html($bannerdata[i].title);
        	}

});
	//主题内容第一排
$.ajax({
        url: 'http://localhost/zhuyusong/Sama/php/index1.php',
        dataType:'json'
        }).done(function(main_data){
        var $maindata=main_data.main_1_data;
        var $piccbox=$('.wrap_top_f1');
  		var $stt='';
        $.each($maindata,function(index,ele){
        	$stt +=`<div class="item main_1" style="width:250px"><a href="javascript:;" target="_blank">
					<div class="i_size_box">
					<img class="img_agent" src=${ele.url} alt="" />
					</div>
					<p>${ele.title}</p>
					<span><em>￥</em>${ele.price}<span>
        		</a></div>`
        	$piccbox.html($stt);
        })
})
    //主题内容第二,三排
$.ajax({
		url:'http://localhost/zhuyusong/Sama/php/index1.php',
		dataType:'json'
		}).done(function(main_mid){
		var $main_mid=main_mid.main_2_data;
		var $stt='';
		var $str=$('#prod_box');
		$.each($main_mid,function(index,ele){
			$stt +=`<div class="item">
						<a href="javascript:;" title=${ele.suggest} target="_blank">
						<div class="i_sizi_box" style = 'width:300px'>
							<img class="img_agent" src=${ele.url.split(',')[0]} alt="">
						</div>
						<p class="i_sizi_tit" style="text-align:center">${ele.title}</p>
						<span>
							<em>￥</em>
							${ele.price}
						</span>
						</a>
						<div class="outline">
							<p class="item_info">${ele.suggest}</p>
							<p class="item_info">${ele.suggest2}</p>		
						</div>
					</div>`;
				$str.html($stt);
		})
})



$.ajax({
		url:'http://localhost/zhuyusong/Sama/php/index1.php',
		dataType:'json'
		}).done(function(main_btm){
			var $main_btm=main_btm.main_3_data;
			var $suppkit=$('.suppkit');
			var $str='';
		$.each($main_btm,function(index,ele){
			$str+=`<div class="item" style="width: 250px;">
							<a href="javascript:;" target="_blank">
								<div class="i_size_box">
									<img class="img_agent" src=${ele.url} alt="">
								</div>
								<p class="is_tags_mark">
									<strong class="jsd_tag"></strong>
									${ele.title}
								</p>
								<span>
									<em>￥</em>
									${ele.price}
								</span>
								<div class="marking">
									<img src="//d7.samsclub-estore.com/N06/M05/D7/34/CgQIzVeHRJWASp0VAAAH1FgN4oQ35900.tmp" alt="">
								</div>
							</a>
					</div>`;
			$suppkit.html($str);
		})
			
})	


$.ajax({
		url:'http://localhost/zhuyusong/Sama/php/index1.php',
		dataType:'json'
		}).done(function(main_foott){
			var $main_foott=main_foott.main_4_data;
			var $suppjkl=$('.suppjkl');
			var $str='';
		$.each($main_foott,function(index,ele){
			$str+=`<div class="item" style="width: 250px;">
							<a href="javascript:;" target="_blank">
								<div class="i_size_box">
									<img class="img_agent" src=${ele.url} alt="">
								</div>
								<p class="is_tags_mark">
									<strong class="jsd_tag"></strong>
									${ele.title}
								</p>
								<span>
									<em>￥</em>
									${ele.price}
								</span>
								<div class="marking">
									<img src="//d7.samsclub-estore.com/N06/M05/D7/34/CgQIzVeHRJWASp0VAAAH1FgN4oQ35900.tmp" alt="">
								</div>
							</a>
					</div>`;
			$suppjkl.html($str);
		})
			
})	



$.ajax({
		url:'http://localhost/zhuyusong/Sama/php/index1.php',
		dataType:'json'
		}).done(function(main_foott){
			var $main_foott=main_foott.main_1_data;
			var $suppabc=$('.suppabc');
			var $str='';
		$.each($main_foott,function(index,ele){
			$str+=`<div class="item" style="width: 250px;">
							<a href="javascript:;" target="_blank">
								<div class="i_size_box">
									<img class="img_agent" src=${ele.url} alt="">
								</div>
								<p class="is_tags_mark">
									<strong class="jsd_tag"></strong>
									${ele.title}
								</p>
								<span>
									<em>￥</em>
									${ele.price}
								</span>
								<div class="marking">
									<img src="//d7.samsclub-estore.com/N06/M05/D7/34/CgQIzVeHRJWASp0VAAAH1FgN4oQ35900.tmp" alt="">
								</div>
							</a>
					</div>`;
			$suppabc.html($str);
		})	
})
	


$.ajax({
		url:'http://localhost/zhuyusong/Sama/php/index1.php',
		dataType:'json'
		}).done(function(main_foott){
			var $main_foott=main_foott.main_3_data;
			var $supprng=$('.supprng');
			var $str='';
		$.each($main_foott,function(index,ele){
			$str+=`<div class="item" style="width: 250px;">
							<a href="javascript:;" target="_blank">
								<div class="i_size_box">
									<img class="img_agent" src=${ele.url} alt="">
								</div>
								<p class="is_tags_mark">
									<strong class="jsd_tag"></strong>
									${ele.title}
								</p>
								<span>
									<em>￥</em>
									${ele.price}
								</span>
								<div class="marking">
									<img src="//d7.samsclub-estore.com/N06/M05/D7/34/CgQIzVeHRJWASp0VAAAH1FgN4oQ35900.tmp" alt="">
								</div>
							</a>
					</div>`;
			$supprng.html($str);
		})	
})




$.ajax({
		url:'http://localhost/zhuyusong/Sama/php/index1.php',
		dataType:'json'
		}).done(function(main_foott){
			var $main_foott=main_foott.main_4_data;
			var $suppedg=$('.suppedg');
			var $str='';
		$.each($main_foott,function(index,ele){
			$str+=`<div class="item" style="width: 250px;">
							<a href="javascript:;" target="_blank">
								<div class="i_size_box">
									<img class="img_agent" src=${ele.url} alt="">
								</div>
								<p class="is_tags_mark">
									<strong class="jsd_tag"></strong>
									${ele.title}
								</p>
								<span>
									<em>￥</em>
									${ele.price}
								</span>
								<div class="marking">
									<img src="//d7.samsclub-estore.com/N06/M05/D7/34/CgQIzVeHRJWASp0VAAAH1FgN4oQ35900.tmp" alt="">
								</div>
							</a>
					</div>`;
			$suppedg.html($str);
		})	
})


$.ajax({
		url:'http://localhost/zhuyusong/Sama/php/index1.php',
		dataType:'json'
		}).done(function(xiangqing){
			var xiangqing=(xiangqing.main_2_data)[0].url.split(',');
			var arr=xiangqing.shift();
			var $smallpic=$('.smallpic');
			for (var i=0;i<=arr.length;i++) {
        		$smallpic.eq(i).attr('src',xiangqing[i]);
			}
			$smallpic.eq(0).css('display','block');
})
		
})(jQuery);