'use strict';

var gulp   = require('gulp');
var config = require('../config');

gulp.task('copyIndex', function() {
    // returngulp.src(config.html.src)
    gulp.src(config.html.src)
        .pipe(gulp.dest(config.html.dest));
});