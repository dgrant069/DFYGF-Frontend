'use strict';

var config              = require('../config');
var browserSync         = require('browser-sync');
var gulp                = require('gulp');
var historyApiFallback  = require('connect-history-api-fallback');

gulp.task('browserSync', function() {
    //If I ever decide to set up an express server
    // browserSync({
    //   proxy: 'localhost:' + config.serverport
    // });

    browserSync.init({
        server: {
            baseDir: "./build",
            middleware: [ historyApiFallback() ]
        }
    });
});