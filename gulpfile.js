var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

gulp.task('script', function(){
	gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/materialize-css/dist/js/materialize.js','assets/js/*.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('public/js/'));
});

gulp.task('script-code', function(){
    gulp.src(['node_modules/jquery/dist/jquery.js','node_modules/materialize-css/dist/js/materialize.js'])
    .pipe(concat('libraries.js'))
    .pipe(gulp.dest('public/js/'));

    gulp.src(['assets/js/pantallados.js'])
    .pipe(concat('num-validate.js'))
    .pipe(gulp.dest('public/js/'));

    gulp.src(['assets/js/codigo.js'])
    .pipe(concat('code-validate.js'))
    .pipe(gulp.dest('public/js/'));

    gulp.src(['assets/js/pantalla6.js'])
    .pipe(concat('card-validate.js'))
    .pipe(gulp.dest('public/js/'));

    gulp.src(['assets/js/pantalla6-2.js'])
    .pipe(concat('card-pass-validate.js'))
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
gulp.task('default', ['script', 'script-code','style','watch']);