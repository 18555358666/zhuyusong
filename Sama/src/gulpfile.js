var gulp=require('gulp');//引入gulp插件
var html=require('gulp-minify-html');//引入html压缩插件
var sass=require('gulp-sass');//引入sass编译插件
var css=require('gulp-minify-css');//引入css压缩插件
var connect=require('gulp-connect');//配置自刷新插件
/*var jshint=require('gulp-jshint');//js错误代码检测
var concat=require('gulp-concat');//代码合并
var uglify=require('gulp-uglify');//js压缩插件
var rename=require('gulp-rename')//重命名插件*/
var imagemin=require('gulp-imagemin');//引入图片插件



//复制
gulp.task('copyhtml', function() {
  gulp.src('*.html').pipe(gulp.dest('../dist/'));
});

//html压缩文件
gulp.task('uglifyhtml',function(){
	gulp.src('html/*.html')//引入文件
	.pipe(html())//应用压缩插件
	.pipe(gulp.dest('../dist/html/'));//输出
});

//监听压缩
gulp.task('watchhtml',function(){
	gulp.watch('html/*.html',function(){
		gulp.run('uglifyhtml');
	})
})

//编译sass
gulp.task('sass',function(){
	gulp.src('scss/*.scss')
	.pipe(sass())//编译sass
	.pipe(gulp.dest('./css/'));//当前目录
});

gulp.task('watchsass',function(){
	gulp.watch('scss/*.scss',function(){
		gulp.run('sass')
	})
});

//压缩css文件
gulp.task('uglifycss',function(){
	gulp.src('css/*.css')//引入文件
	.pipe(css())//应用压缩插件
	.pipe(gulp.dest('../dist/css/'));//输出
});

//监听压缩
gulp.task('watchcss',function(){
	gulp.watch('css/*.css',function(){//监听
		gulp.run('uglifycss');
	})
});


//页面自刷新
gulp.task('connect',function(){
	connect.server({
		port:8888,
		livereload:true
	})
})

gulp.task('connecthtml',function(){
	gulp.src(['html/*.html','css/*.css'])
	.pipe(connect.reload());
})

gulp.task('connectwatch',function(){
	gulp.watch(['html/*.html','css/*.css'],['connecthtml']);
})

//压缩图片
gulp.task('imagemin',function(){
	gulp.src('img/*.png')
	.pipe(imagemin())
	.pipe(gulp.dest('../dist/img'));
})
gulp.task('default',['watchhtml','watchsass','watchcss','connect','connectwatch','imagemin']);