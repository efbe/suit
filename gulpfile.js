'use strict';

var gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    del          = require('del'),
    cleanCSS     = require('gulp-clean-css'),
    runSequence  = require('run-sequence'),
    sass         = require('gulp-sass'),
    scsslint     = require('gulp-scss-lint'),
    tasks        = require('gulp-task-listing');

var config = {
    distFolder: 'dist',
    devFolder: 'dev'
};


// Lists the available gulp tasks
gulp.task('help', tasks);


// Clean generated CSS & min folder
gulp.task('clean', function () {
  return del([
    config.devFolder + '/css/*',
    config.distFolder + '/min/*'
  ]);
});


// Lints SCSS files according to the custom config
gulp.task('lint', function () {
    return gulp.src(config.devFolder + '/**/*.scss')
        .pipe(scsslint({
            'config': '.scss-lint.yml'
        }));
});


// Create CSS files from SCSS groups
gulp.task('sass', function () {
  return gulp.src(config.devFolder + '/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.devFolder + '/css'));
});


// Minify CSS files & add autoprefixes
gulp.task('minify', function () {
  return gulp.src(config.devFolder + '/css/*.css')
    .pipe(autoprefixer({
        browsers: ['last 2 version', '> 5%']
    }))
    .pipe(cleanCSS({
        compatibility: '*', // IE10+
        level: {
            2: {
                restructureRules: true // This merges the "frame" & "theme" selector rules into one in the minified CSS
            }
        }
    }))
    .pipe(gulp.dest(config.distFolder + '/min'));
});


// Build sass with lint + minify
gulp.task('dist', function () {
    runSequence('lint', 'sass', 'minify');
});


// The de-facto default task
gulp.task('default', function () {
  // place code for your default task here
});
