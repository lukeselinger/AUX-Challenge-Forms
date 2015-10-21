var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

gulp.task('minify', function(){
	return gulp.src('build/assets/css/styles.css')
	.pipe(autoprefixer('last 2 version'))
	.pipe(gulp.dest('build/assets/css/'))
	.pipe(rename({suffix: '.min'}))
	.pipe(minifycss())
	.pipe(gulp.dest('build/assets/css/'))
});

gulp.task('js-uglify', function(){
	return gulp.src(
		['build/assets/js/vendor/jquery.min.js',
		'build/assets/js/vendor/jquery.creditCardValidator.js',
		'build/assets/js/*.js'])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('build/assets/js/'))
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(gulp.dest('build/assets/js/'))
})

gulp.task('default', function(){
	console.log("I have configured a gulpfile");
});