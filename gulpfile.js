var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('script', function(){
	gulp.src(['node_modules/jquery/public/jquery.js' , 'node_modules/materialize-css/public/js/materialize.js' , 'assets/js/*.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('public/js/'));
});

gulp.task('style', function(){
	gulp.src([ 'node_modules/materialize-css/dist/css/materialize.css','assets/sass/main.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(minifyCSS())
	.pipe(concat('style.min.css'))
	.pipe(gulp.dest('public/css/'));
});

gulp.task('watch', function(){
	gulp.watch('assets/sass/*.scss', ['style']);
});
gulp.task('default', ['script','style','watch']);