/**
 * Created by Anchao on 2015/10/4.
 */
'use strict'

var gulp = require('gulp');
var compass = require('gulp-compass');
var config = {
    'sass': 'sass/**/*.scss',
    'css': 'dist/css'
};


gulp.task('styles', function () {
    gulp.src(config.sass)
        .pipe(compass({
            config_file: 'config.rb',
            css: config.css,
            sass: 'sass'
        }))
        .pipe(gulp.dest(config.css));
});
