var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

// Compile all SASS to CSS
gulp.task('csass', function () {
    gulp.src('./sass/**/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass({ precision: 8 }).on('error', sass.logError))
        //.pipe(sourcemaps.write('./sourcemaps'))
        .pipe(gulp.dest('./compiledcss'));
});

// PostCSS
gulp.task('postcss', function () {
    var processors = [
        autoprefixer({ browsers: ['last 2 version'] })
    ];
    gulp.src('./compiledcss/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./css'));
});

// Watch
gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', ['csass']);
    gulp.watch('./compiledcss/*.css', ['postcss']);
});