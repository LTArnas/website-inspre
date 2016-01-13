var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile all SASS to CSS
gulp.task('csass', function () {
    gulp.src('./sass/**/*.scss')
        .pipe(sass({precision:8}).on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// Watch
gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['csass']);
});