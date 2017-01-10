var gulp     = require('gulp'),
	clean    = require('gulp-clean'),
	scsslint = require('gulp-scss-lint'),
	tasks    = require('gulp-task-listing');

var config = {
    distFolder: 'dist',
    sassDir: 'dev/scss'
};

// Cleans up the generated part of the dist folder
gulp.task('clean-generated', function () {
    return gulp.src(
    	config.distFolder + '/css/generated/', {read: false})
    .pipe(clean());
});


// Cleans up the min folder
gulp.task('clean-min', function () {
    return gulp.src(
    	config.distFolder + 'min/*.css',
    	{read: false})
    .pipe(clean());
});


// Cleans up all of the generated folders
gulp.task('clean-all', ['clean-generated', 'clean-min']);


// Lists the available gulp tasks
gulp.task('help', tasks);


// Lints SCSS files
gulp.task('lint', function() {
    return gulp.src(config.sassDir + '/**/*.scss')
        .pipe(scsslint({
            'config': '.scss-lint.yml'
        }));
});

gulp.task('default', function() {
  // place code for your default task here
});