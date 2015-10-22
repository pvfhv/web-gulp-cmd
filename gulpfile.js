/**
 * Created by Anchao on 2015/10/4.
 */
'use strict'

var gulp = require('gulp');
var compass = require('gulp-compass');
var jade = require('gulp-jade');
var changed = require('gulp-changed');
var config = {
    'dist':'dist',
    'sass': 'sass/**/*.scss',
    'distCss': 'dist/css'
};

//样式
gulp.task('styles', function () {
    gulp.src(config.sass)
        .pipe(changed(config.distCss))
        .pipe(compass({
            config_file: 'config.rb',
            css: config.distCss,
            sass: 'sass'
        }))
        .pipe(gulp.dest(config.distCss));
});

//copy fonts
gulp.task('copyFont',function(){
    var src='node_modules/bootstrap-sass/assets/fonts/bootstrap/*';
    var dest= config.distCss+'/fonts/';

    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

//template
gulp.task('templates', function() {
    gulp.src('./template/*.jade')
        .pipe(changed(config.dist,{extension: '.html'}))
        .pipe(jade({
            doctype:'html',
            pretty:true
        }))
        .pipe(gulp.dest(config.dist))
});



