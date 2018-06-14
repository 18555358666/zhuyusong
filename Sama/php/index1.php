<?php  
	header('content-type:text/html;charset=utf-8');
	$conn=mysql_connect('localhost','root','');

	mysql_select_db('Sama');
	mysql_query('SET NAMES UTF8');



	//轮播图数据输出
	$banner=mysql_query("select * from bannerpic");
	$banner_arr=array();
	for($i=0;$i<mysql_num_rows($banner);$i++){
		$banner_arr[$i]=mysql_fetch_array($banner,MYSQLI_ASSOC);
	}



	//主题内容第一排输出
	$main_1=mysql_query("select * from main_1");
	$main_1_arr=array();
	for($i=0;$i<mysql_num_rows($main_1);$i++){
		$main_1_arr[$i]=mysql_fetch_array($main_1,MYSQLI_ASSOC);
	}



	//主题内同第二三排输出
	$main_2=mysql_query("select * from main_2");
	$main_2_arr=array();
	for($i=0;$i<mysql_num_rows($main_2);$i++){
		$main_2_arr[$i]=mysql_fetch_array($main_2,MYSQLI_ASSOC);
	}


	$main_3=mysql_query("select * from main_3");
	$main_3_arr=array();
	for($i=0;$i<mysql_num_rows($main_3);$i++){
		$main_3_arr[$i]=mysql_fetch_array($main_3,MYSQLI_ASSOC);
	}


	$main_4=mysql_query("select * from main_4");
	$main_4_arr=array();
	for($i=0;$i<mysql_num_rows($main_4);$i++){
		$main_4_arr[$i]=mysql_fetch_array($main_4,MYSQLI_ASSOC);
	}


	$glass=mysql_query("select * from glass");
	$glass_arr=array();
	for($i=0;$i<mysql_num_rows($glass);$i++){
		$glass_arr[$i]=mysql_fetch_array($glass,MYSQLI_ASSOC);
	}


	//4首页数据接口
	class indexdata{

	}

	$index=new indexdata();
	$index->lunbotu=$banner_arr;
	$index->main_1_data=$main_1_arr;
	$index->main_2_data=$main_2_arr;
	$index->main_3_data=$main_3_arr;
	$index->main_4_data=$main_4_arr;
	$index->glass=$glass_arr;




	echo json_encode($index);
?>