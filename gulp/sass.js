'use strict';

var gulp = require('gulp');

var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

var path = {
  sass: ['./scss/**/*.scss']
};

gulp.task('sass', function (done) {
  gulp.src('./scss/app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./src/css/'))
    .pipe(minifyCss())
    .pipe(rename({extname: '.min.css'}))
    .pipe(gulp.dest('./src/css/'))
    .on('end', done);
});

gulp.task('sass:watch', function () {
  gulp.watch(path.sass, ['sass']);
});
