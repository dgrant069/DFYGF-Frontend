var gulp = require('gulp'),
	del = require('del'),
	browserify = require('browserify'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	browserSync = require('browser-sync'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	babelify = require('babelify'),
	gutil = require('gulp-util'),
	sourcemaps = require("gulp-sourcemaps"),
	babel = require("gulp-babel"),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	imagemin = require('gulp-imagemin'),
	rename = require('gulp-rename'),
	notify = require('gulp-notify'),
	cache = require('gulp-cache');


gulp.task('default', ['serve']);

// Cleaning dist/ folder
// cb is callback
gulp.task('clean', function(cb) {
	del(['build/**'], cb);
	del(['dev/**'], cb);
})

// Running livereload server
gulp.task('server', function() {
	browserSync.init({
		server: {
			baseDir: "./dev"
		},
		files: ["dev/**/*.*"]
	});
})

// Templates
gulp.task('html', function(){
	gulp.src('src/index.html')
    	.pipe(gulp.dest('dev'));
});

// Sass compilation
gulp.task('styles', function() {
	return sass('src/**/*.scss', { style: 'expanded' })
		.pipe(autoprefixer('last 2 versions'))
		.pipe(sourcemaps.init())
		.pipe(concat('app.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dev/css'))
		.pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('styles:min', function() {
	return sass('src/**/*.scss', { style: 'compressed' })
		.pipe(autoprefixer('last 2 versions'))
		.pipe(sourcemaps.init())
		.pipe(concat('app.css'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('build/css'))
		.pipe(notify({ message: 'Styles task complete' }));
});


// JSLint/JSHint validation
gulp.task('lint', function() {
	return gulp.src('src/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
})

// JavaScript compilation
gulp.task('scripts', function() {
	return browserify('./src/app.jsx')
		.transform(babelify)
		.bundle()
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dev/js'))
		.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('scripts:min', function() {
	return browserify('./src/app.jsx')
		.transform(babelify)
		.bundle()
		.pipe(source('src/**/*.js'))
		.pipe(sourcemaps.init())
		.pipe(concat('app.js'))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
		.pipe(notify({ message: 'Scripts task complete' }));
});

// Image Stuff
gulp.task('images', function() {
	return gulp.src('src/assets/**/*')
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('build'))
		.pipe(notify({ message: 'Images task complete' }));
});


// Compiling resources and serving application
gulp.task('serve', ['clean', 'lint', 'html', 'styles', 'scripts', 'server'], function() {
	return gulp.watch(['src/**'],
		['lint', 'styles', 'scripts', browserSync.reload]
	);
})

gulp.task('serve:minified', ['clean', 'lint', 'html', 'styles:min', 'scripts:min', 'server'], function() {
	return gulp.watch(['src/**'],
		['lint', 'styles:min', 'scripts:min', browserSync.reload]
	);

	// gulp.watch(['src/**']).on('change', browserSync.reload);
});

gulp.task('replaceHTML', function(){
  gulp.src(path.HTML)
    .pipe(htmlreplace({
      'js': 'build/' + path.MINIFIED_OUT
    }))
    .pipe(gulp.dest(path.DEST));
});
