(function($){
	var $s_picc=$('.left_pic');//左边列表图片
	var $m_picc=$('.datails_spic');//小图的盒子
	var $b_picc=$('.bigpic');//大图
	var $s_glass=$('.small_glass');//小放大镜
	var $b_glass=$('#bpic');//大放大镜的盒子

	var $details_midr=$('.datails_spic');
	var num=0;
	//点击列表小图切换
	$s_picc.on('click',function(){
		num=$(this).index();
		tabswitch();
	})
	//鼠标滑过列表的时候显示小图
	$s_picc.hover(function(){
		num=$(this).index();
		tabswitch();
	})
	//鼠标滑过小图的时候显示小放大镜
	$s_glass.css({
		width:$m_picc.width()*$b_glass.width()/$b_picc.width(),
		height:$m_picc.height()*$b_glass.height()/$b_picc.height()
	});


		
	$m_picc.hover(function(){
		$b_glass.css('visibility','visible');
		$s_glass.css('visibility','visible');
		$s_glass.css({
			width:$m_picc.width()*$b_glass.width()/$b_picc.width()+20+'px',
			height:$m_picc.height()*$b_glass.height()/$b_picc.height()
		});


		var $ratio=$b_glass.width()/$s_glass.width()//比例

		$m_picc.on('mousemove',function(ev){
			var $left=ev.pageX-$details_midr.offset().left-$s_glass.width()/2;
			var $top=ev.pageY-$details_midr.offset().top-$s_glass.height()/2;
			if($left<=0){
				$left=0
			}else if($left>=$m_picc.width()-$s_glass.width()){
				$left=$m_picc.width()-$s_glass.width()
			}
			if($top<=0){
				$top=0
			}else if($top>=$m_picc.height()-$s_glass.height()){
				$top=$m_picc.height()-$s_glass.height()
			}
			$s_glass.css({
				left:$left,
				top:$top
			})
			$b_picc.css({
				left:-$left*$ratio,
				top:-$top*$ratio
			})
		})

	},function(){
		$b_glass.css('visibility','hidden');
		$s_glass.css('visibility','hidden');

	});	

	$s_picc.on('click',function(){
		var $url=$(this).find('img').attr('src');
		$m_picc.find('img').attr('src',$url);
		$b_glass.find('img').attr('src',$url)
	})

	$s_picc.on('mousemove',function(){
		var $url=$(this).find('img').attr('src');
		$m_picc.find('img').attr('src',$url);
		$b_glass.find('img').attr('src',$url)
	})
		
	


	function tabswitch(){
		$s_picc.eq(num).css('border-color','#2b68a5').siblings('li').css('border-color','#ccc');
		$m_picc.eq(num).css('display','block').siblings('li').css('display','none');

	}



	//商品数量加减
	var num=1;
	$('#num_jia').on('click',function(){
		num++;
		$('#numm').val(num);
		
	})
	$('#num_jian').on('click',function(){
		num--;
		if (num<=1) {
			num=1;
		}
		$('#numm').val(num);
	})



	//第一步思路：将商品的id和数量存放的cookie和数据库里面
	var sidarr = [];//将取得cookie存放到此数组
	var numarr = [];

			function getcookievalue(){
				if(getCookie('cartsid')){//cartsid：cookie里面id的名称
					sidarr=getCookie('cartsid').split(',');//cookie转数组
				}
				
				if(getCookie('cartnum')){//cartnum：cookie里面数量的名称
					numarr=getCookie('cartnum').split(',');
				}
			}

			//第三步思路：通过判断商品的id是否存在上面获取的sid里面。
			$('.gouwuche').on('click',function(){
				
			})







})(jQuery);