var gulp = require('gulp');
var sass = require('gulp-scss');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var jsSource, scssSource;

scssSource = 'scss/main.scss';



gulp.task('scss', function() {
    return gulp.src(scssSource)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cleanCss())
        .pipe(gulp.dest('build/css'))
});

gulp.task('default', ['scss'], function() {
    gulp.watch(scssSource, ['scss']);
});
