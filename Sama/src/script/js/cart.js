(function($){

//商品数量加减
	var num=1;
	$('.num_jia').on('click',function(){
		num++;
		$('.numm').val(num);
		
	})
	$('.num_jian').on('click',function(){
		num--;
		if (num<=1) {
			num=1;
		}
		$('.numm').val(num);
	})

})(jQuery);