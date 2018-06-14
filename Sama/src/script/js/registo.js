;
(function($){

	//开关
	var $usernamelock = false;
    var $passwordlock = false;
    var $repasswordlock = false;
    var $emaillock = false;


	$('#username').on('blur',function(){
	//用户名：4-20字符长度，支持汉字、字母、数字
		var $that = $(this);
		var reg1 = /^([\u4e00-\u9fa5]|\w){4,20}$/;
		var $username = $(this).val();
		if ($username != '') {
			if (reg1.test($username)) {
				   //将用户名传给后端进行匹配用户名是否存在
                $.ajax({
                    type: 'post',
                    url: '../../php/reg.php',
                    async: true, //异步
                    //dataType:,//数据类型
                    data: {
                        repeatname: $username
                    }
                }).done(function(d) { //成功--success  后端返回的结果
                    if (!d) { //没有重复
                        $('.prompt_text_default').eq(0).css('color', 'green').html('√');
                        $usernamelock = true;
                    } else { //有重复
                       $('.prompt_text_default').eq(0).css('color', 'red').html('该用户名已存在');
                        $usernamelock = false;
                    }
                });
					
			}else {
				$('.prompt_text_default').eq(0).css('color', 'red').html('格式有误');
			}
		}else {
			$('.prompt_text_default').eq(0).css('color', 'red').html('用户名不能为空');
		}

	})



	//电子邮箱
    $('#email').on('blur', function() {
        var reg = /^([\w][\w\-]+)\@([\w][\w\-]+)\.([\w][\w\-]+)$/;
        var $email = $(this).val();
        if ($email != '') {
            if (reg.test($email)) { //通过的
               $('.prompt_text_default').eq(1).css('color', 'green').html('√');
                $emaillock = true;
            } else { //不通过
                $('.prompt_text_default').eq(1).css('color', 'red').html('格式有误');
                $emaillock = false;
            }

        } else { //不通过
           $('.prompt_text_default').eq(1).css('color', 'red').html('邮箱不能为空');
            $emaillock = false;
        }
    });

	//密码
	$('#password').on('blur',function(){
		var reg = /.{6,}/;
		var $password = $(this).val();
		if ($password != '') {
            if (reg.test($password)) { //通过的
               $('.prompt_text_default').eq(2).css('color', 'green').html('√');
                $passwordlock = true;
            } else { //不通过
                $('.prompt_text_default').eq(2).css('color', 'red').html('密码格式有误');
                $passwordlock = false;
            }

        } else { //不通过
            $('.prompt_text_default').eq(2).css('color', 'red').html('密码不能为空');
            $passwordlock = false;
        }
	})



	//密码重复
    $('#repassword').on('blur', function() {
        var $repass = $(this).val();
        if ($repass != '') {
            if ($passwordlock) {//密码重复验证需要密码格式正确。
                if ($repass == $('#password').val()) {
                   $('.prompt_text_default').eq(3).css('color', 'green').html('√');
                    $repasswordlock = true;
                } else {
                    $('.prompt_text_default').eq(3).css('color', 'red').html('密码匹配错误');
                    $repasswordlock = false;
                }
            } else { //不通过
                $('.prompt_text_default').eq(3).css('color', 'red').html('密码格式错误');
                $repasswordlock = false;
            }
        } else {
            $('.prompt_text_default').eq(3).css('color', 'red').html('密码重复不能为空');
            $repasswordlock = false;
        }

    });

    $('#phonenum').on('blur',function(){
    	var reg = /^1[3|5|7|8]\d{9}$/;
     	var $iphnum = $(this).val();
    	if ($iphnum != '') {
    		if (reg.test($iphnum)) {
    			$('.prompt_text_default').eq(4).css('color', 'green').html('√')
    		}else {
    			$('.prompt_text_default').eq(4).css('color', 'red').html('手机号格式有误');
    		}
    	}else {
    		 $('.prompt_text_default').eq(4).css('color', 'red').html('密码重复不能为空');
    	}
    })


     //submit自动跳转--基于form表单的action
    //当提交表单时，会发生 submit 事件。
    $('form').on('submit', function() {
        if ($('#username').val() == '') {
           $('.prompt_text_default').eq(0).css('color', 'red').html('用户名不能为空');
            $('#username').focus();
            return false;
        }
        if ($('#password').val() == '') {
           $('.prompt_text_default').eq(2).css('color', 'red').html('密码不能为空');
            return false;
        }
        if ($('#password').val() != $('#repassword').val()) {
           $('.prompt_text_default').eq(3).css('color', 'red').html('密码重复不能为空');
            return false;
        }
        if ($('#email') == '') {
           $('.prompt_text_default').eq(1).css('color', 'red').html('邮箱不能为空');
            return false;
        }
        if ($('#phonenum') == '') {
           $('.prompt_text_default').eq(4).css('color', 'red').html('邮箱不能为空');
            return false;
        }

        //所有的表单通过验证才有效果
        if (!$usernamelock || !$passwordlock || !$repasswordlock || !$emaillock) { //如果namelock为false，阻止跳转。
            return false;
        } else {

        }
      })  
})(jQuery);