'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    replace = require('gulp-replace');


gulp.task('css', function() {
    return gulp.src('src/sass/stylesheet.sass')
        .pipe(sass({
            includePaths: [
            ]
        }))
        .pipe(autoprefixer({
            browsers: ["last 5 versions"]
        }))
        .pipe(cleanCSS())
        .pipe(replace('@charset "UTF-8";', ''))
        .pipe(gulp.dest('./'));
});

//Watch task
gulp.task('watch',function() {
    gulp.watch('src/sass/**/*.*',['css']);
});