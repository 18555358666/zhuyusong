(function($){
 function addCookie(key, value, day) {
            var date = new Date(); //创建日期对象
            date.setDate(date.getDate() + day); //过期时间：获取当前的日期+天数，设置给date
            document.cookie = key + '=' + encodeURI(value) + ';expires=' + date; //添加cookie，设置过期时间
        }

        $('#button').on('click', function() {
            $.ajax({
                type: 'post',
                url: '../../php/login.php',
                data: {
                    user: $('.ipt_text').val(),
                    pass: $('.ipt_password').val()
                }
            }).done(function(d) {
                if (!d) {
                    $('#error').html('用户名或者密码错误');
                } else {
                    location.href = '../html/index1.html';
                    addCookie('yonghuming',$('.ipt_text').val(),7);
                }
            })
        });
        
})(jQuery);