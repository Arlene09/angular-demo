'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var browserSync = require('browser-sync');


function browserSyncInit(baseDir, files, browser) {
  
  browser = browser === undefined ? 'default' : browser;
  var routes = null;

  browserSync.instance = browserSync.init(files, {
    startPath: '/',
    server: {
      baseDir: baseDir,
      routes: routes
    },
    browser: browser
  });
}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    paths.tmp + '/serve',
    paths.src
  ], [
    paths.src + '/css/*.css',
    paths.src + '/**/*.js',
    paths.src + '/img/**/*',
    paths.tmp + '/serve/*.html',
    paths.src + '/**/*.html',
    paths.src + '/*.html'
  ]);
});
