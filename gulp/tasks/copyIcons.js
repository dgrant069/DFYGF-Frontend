'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyIcons', function() {
  return gulp.src(config.icons.src)
    .pipe(gulp.dest(config.buildDir));
});
