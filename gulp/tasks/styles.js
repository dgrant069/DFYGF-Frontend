'use strict';

var gulp         = require('gulp');
var sass         = require('gulp-ruby-sass');
var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var handleErrors = require('../util/handle-errors');
var config       = require('../config');
var sourcemaps   = require("gulp-sourcemaps");
var concat       = require('gulp-concat');
var minifycss    = require('gulp-minify-css');
var rename       = require('gulp-rename');

gulp.task('styles', function () {
    if(!global.isProd){
      return sass('src/**/*.scss', { style: 'expanded' })
            .pipe(autoprefixer('last 2 versions'))
            .pipe(sourcemaps.init())
            .pipe(concat('main.css'))
            .pipe(sourcemaps.write({includeContent: false, sourceRoot: '/css'}))
            .pipe(gulp.dest(config.styles.dest))
            .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
    }
    if(global.isProd){
      return sass('src/**/*.scss', { style: 'compressed' })
            .pipe(autoprefixer('last 2 versions'))
            .pipe(concat('main.css'))
            .pipe(rename({suffix: '.min'}))
            .pipe(minifycss())
            .pipe(gulp.dest('build/css'))
            .on('error', handleErrors)
            .pipe(gulp.dest(config.styles.dest));
    }
});