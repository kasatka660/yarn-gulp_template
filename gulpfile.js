'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'))
    .pipe(livereload());
});
 
gulp.task('sass:watch', function () {
  livereload.listen();
  gulp.watch('./src/sass/*.scss', ['sass']);
});