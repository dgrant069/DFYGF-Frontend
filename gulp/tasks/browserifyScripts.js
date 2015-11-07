'use strict';

var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var source       = require('vinyl-source-stream');
var streamify    = require('gulp-streamify');
var sourcemaps   = require('gulp-sourcemaps');
var rename       = require('gulp-rename');
var watchify     = require('watchify');
var browserify   = require('browserify');
var babelify     = require('babelify');
var uglify       = require('gulp-uglify');
var browserSync  = require('browser-sync');
var notify       = require('gulp-notify');
var debowerify   = require('debowerify');
var handleErrors = require('../util/handle-errors');
var config       = require('../config');


function buildScript(file, watch) {
  var bundler = browserify({
    // Specify the entry point of your app
    entries: [config.sourceDir + file],
    // Add file extentions to make optional in your requires
    extensions: ['.coffee', '.js', '.jsx'],
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Enable source maps
    debug: watch
  });

  if ( watch ) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  bundler.transform(babelify, {presets: ["es2015", "react"]});
  bundler.transform(debowerify);

  function rebundle() {
    var stream = bundler.bundle();

    gutil.log('Rebundle...');

    if(watch) {
      return stream.on('error', handleErrors)
          .pipe(source(file))
          .pipe(rename('App.js'))
          .pipe(sourcemaps.write())
          .pipe(gulp.dest(config.scripts.dest))
          .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true, once: true })));
    }
    if(!watch){
      return stream.on('error', handleErrors)
          .pipe(source(file))
          .pipe(rename('App.js'))
          .pipe(streamify(uglify()))
          .pipe(gulp.dest(config.scripts.dest));
    }
  }

  return rebundle();
}

gulp.task('browserifyScripts', function() {
  // Only run watchify if NOT production
  return buildScript('index.js', !global.isProd);
});
