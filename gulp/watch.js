'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

gulp.task('watch', ['inject'], function () {
  gulp.watch([
    paths.src + '/**/*.html',
    paths.src + '/*.html',
    paths.src + '/**/*.js',
    './scss/**/*.scss',
    'bower.json'
  ], ['inject']);
});
