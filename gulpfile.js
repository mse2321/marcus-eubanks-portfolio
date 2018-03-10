var gulp = require('gulp');

var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var imagemin = require('gulp-imagemin');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var minifyHTML = require('gulp-minify-html');
var concat = require('gulp-concat');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

// Default task
gulp.task('default', ['sass', 'watch']);

// Build task
gulp.task('build', ['sass', 'html', 'styles', 'images', 'scripts']);

// Compile Sass task
gulp.task('sass', function() {
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});

// Watch task
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch('css/*.scss', ['sass']);
});

// Minify index
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(minifyHTML())
    .pipe(gulp.dest('build/'));
});

// JavaScript build task, removes whitespace and concatenates all files
gulp.task('scripts', function() {
  return browserify('js/jquery1113.js','js/bootstrap.min.js', 'node_modules/angular-hammer/node_modules/angular/angular.min.js', 'node_modules/angular-hammer/node_modules/hammerjs/hammer.min.js', 'node_modules/angular-hammer/angular.hammer.min.js', 'js/me_innovation.js', 'js/ui-bootstrap-tpls-0.13.0.min.js')
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Styles build task, concatenates all the files
gulp.task('styles', function() {
  return gulp.src('css/*.css')
    .pipe(concat('styles.css'))
    //.pipe(cleanCSS())
    .pipe(gulp.dest('build/css'));
});

// Image optimization task
gulp.task('images', function() {
  return gulp.src('images/*')
    .pipe(imagemin())
    //.pipe(imageminPngcrush({reduce: true})())
    .pipe(gulp.dest('build/img'));
});

