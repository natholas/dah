var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var bs = require('browser-sync').create();

gulp.task('default', ['minifyCSS', 'html', 'js', 'watch']);

gulp.task('watch', function() {

	bs.init({
        server: {
            baseDir: "./app"
        }
    });

  	gulp.watch('app/styles/*.scss', ['minifyCSS']);
  	gulp.watch(['app/*.html', 'app/**/*.html', 'app/**/**/*.html'], ['html']);
  	gulp.watch(['app/*.js', 'app/**/*.js', 'app/**/**/*.js'], ['js']);
});

gulp.task('minifyCSS', function() {
	gulp.src('app/styles/*.scss')
    .pipe(sass())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('app'))
	.pipe(bs.reload({stream: true}));
})

gulp.task('html', function() {
	gulp.src(['app/*.html', 'app/**/*.html', 'app/**/**/*.html'])
	.pipe(bs.reload({stream: true}));
})

gulp.task('js', function() {
	gulp.src([
		'node_modules/angular/angular.js',
		'node_modules/angular-route/angular-route.js',
		'app/*.js',
		'app/**/*.js',
		'app/**/**/*.js',
		'!app/script.js'
	])
	.pipe(concat('script.js'))
	.pipe(gulp.dest('app'))
	.pipe(bs.reload({stream: true}));
})
