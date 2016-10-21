var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-scss');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var gcmq = require('gulp-group-css-media-queries');
var jsSource, scssSource;

scssSource = 'scss/main.scss';
jsSource = ['js/template.js','js/*/*.js','js/*/*/*.js'];



gulp.task('scss', function() {
    return gulp.src(scssSource)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gcmq())
        .pipe(gulp.dest('build/css'))
});

gulp.task('js', function() {
    return gulp.src(jsSource)
        .pipe(concat('template.js'))
        .pipe(babel())
        .pipe(gulp.dest('build/js'))
});

gulp.task('default', ['scss','js'], function() {
    gulp.watch(scssSource, ['scss']);
    gulp.watch(jsSource, ['js']);
});
