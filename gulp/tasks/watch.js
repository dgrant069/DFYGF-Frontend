'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('watch', ['browserSync'], function() {
// gulp.task('watch', ['browserSync', 'server'], function() {

  // Scripts are automatically watched by Watchify inside Browserify task
  // gulp.watch(config.scripts.src,    ['scripts']);
  gulp.watch(config.styles.src,     ['styles']);
  gulp.watch(config.images.src,     ['imagemin']);
  gulp.watch(config.html.src,       ['copyIndex']);
});