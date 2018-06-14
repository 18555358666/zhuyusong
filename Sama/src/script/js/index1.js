;
(function($){

	//滚动条滑动导航条显示隐藏
	function Scrollnavshow(){
		this.$hidebox=$('.hide_nav');
		this.$bstop=true;

	}
		Scrollnavshow.prototype.showhide=function(){
			var that=this;
			$(window).on('scroll',function(){
				var $srcolltop=$(this).scrollTop();
				if ($srcolltop>142&&that.$bstop) {
					that.$bsto=false;
					that.$hidebox.show().css({
						'position':'fixed',
						'top':'-142'
					}).animate({'top':0});
				}else if ($srcolltop<142) {
					that.$bstop=true;
					that.$hidebox.css({
						'position':'static'
					}).hide();
				}
			})
		}

	new Scrollnavshow().showhide();

	/*轮播图*/
	var $oLli=$('.banner_pic li');
	var $uLli=$('.banner_trig li');
	var $right=$('#right');
	var $left=$('#left');
	var num=null;
	var timer=null;

	$uLli.click(function(){
		num=$(this).index();
		tabswitch();
	})

	timer=setInterval(function(){
		num++;
		if (num>$uLli.size()-1) {
			num=0;
		}
		tabswitch();
	},2000)

	$('.banner_pic').hover(function(){
		clearInterval(timer);
	},function(){
			timer=setInterval(function(){
			num++;
			if (num>$uLli.size()-1) {
				num=0;
			}
			tabswitch();
		},2000);
	})



	function tabswitch(){
		$oLli.eq(num).animate({opacity:1}).siblings('li').animate({opacity:0});
		$uLli.eq(num).css('background-color','#1D7CEA').siblings('li').css('background-color','#fff');
	}

})(jQuery)





