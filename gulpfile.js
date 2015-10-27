/**
 * Created by Anchao on 2015/10/4.
 */
'use strict'

var gulp = require('gulp');
var del = require('del');
var changed = require('gulp-changed');
//html
var jade = require('gulp-jade');
//css
var compass = require('gulp-compass');
//image
var minimage = require('gulp-image');
//js
var webpack= require('webpack');
var webpackstream = require('webpack-stream');
var watchify = require('watchify');
var browserify=require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var uglify = require('gulp-uglify');
var babelify = require('babelify');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;



var config = {
    'dist': 'dist',
    'html': 'dist/*.html',
    'jade': 'template/*.jade',
    'sass': 'sass/**/*.scss',
    'distCss': 'dist/css',
    'distScript': 'dist/scripts',
    'image':'images/{,*/}*.{gif,jpeg,jpg,png,ico}',
    'distImg': 'dist/images',
    'mainJs': 'main.js',
    'js':{
        entries: './scripts/main.js',
        extensions: ['.js', '.jsx', '.es6'],
        debug: true,
        transform: [babelify]
    }
};

//删除
gulp.task('clean', function () {
    return del(['dist']);
});


//html_template
gulp.task('templates', function() {
    gulp.src(config.jade)
        .pipe(changed(config.jade))
        .pipe(jade({
            doctype:'html',
            pretty:false
        }))
        .pipe(gulp.dest(config.dist));
});



//样式
gulp.task('styles', function () {
    return gulp.src(config.sass)
        .pipe(changed(config.distCss))
        .pipe(compass({
            config_file: 'config.rb',
            css: config.distCss,
            sass: 'sass'
        }))
        .pipe(gulp.dest(config.distCss))
        .pipe(reload({stream: true}));
});
//copy bootstrap服务器端字体
gulp.task('copyFont',function(){
    var src='node_modules/bootstrap-sass/assets/fonts/bootstrap/*';
    var dest= config.distCss+'/fonts/';

    return gulp.src(src)
        .pipe(gulp.dest(dest))
        .pipe(reload({stream: true}));
});




//image
gulp.task('images', function () {
    return gulp.src([config.image,'!images/icons/*'])
        .pipe(changed(config.image))
        .pipe(minimage())
        .pipe(gulp.dest(config.distImg))
        .pipe(reload({stream: true}));
});

//监听js
gulp.task('watchify', function(){
    //与browserify联合使用，监听Js变化
    var b = watchify(browserify(assign({},watchify.args, config.js)));
    b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具
    b.transform(babelify).on('update', bundle);//当jsx发生变化，运行打包工具
    b.on('log', gutil.log); // 输出编译日志到终端

    function bundle() {
        return b.bundle()
            // 如果有错误发生，记录这些错误
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source(config.mainJs))
            // 可选项，如果你不需要缓存文件内容，就删除
            .pipe(buffer())
            // 可选项，如果你不需要 sourcemaps，就删除
            .pipe(sourcemaps.init({loadMaps: true})) // 从 browserify 文件载入 map
            .pipe(uglify())
            // 在这里将变换操作加入管道
            .pipe(sourcemaps.write('./')) // 写入 .map 文件
            .pipe(gulp.dest(config.distScript))
            .pipe(reload({stream: true}));
    }

    return bundle();
});

gulp.task('webpack', function() {
    return gulp.src(config.mainJs)
        .pipe(webpackstream({
            watch: true,
            entry: {
                main: './scripts/main.js'
            },
            output: {
                filename: '[name].js',
                sourceMapFilename:'[file].map'
            },
            devtool:"source-map",
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel'
                    }
                ]
            },
            plugins:[new webpack.optimize.UglifyJsPlugin({minimize: true})]
        }))
        .pipe(gulp.dest(config.distScript))
        .pipe(reload({stream: true}));
});

//打包js
gulp.task('browserify', function () {
    return browserify(config.js)
        .transform(babelify)
        .bundle()
        .pipe(source(config.mainJs))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(config.distScript))
        .pipe(reload({stream: true}));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './dist/'
        },
        port: 3000,
        open: false
    });

    //监听模板html变化
    gulp.watch("template/*.jade",['templates']);
    //监听sass变化
    gulp.watch(config.sass,['styles']);
    //监听image变化
    gulp.watch(config.image,['images']);
});

gulp.task('build',['clean'],function () {
    gulp.start(['browserify','templates','styles','images']);
});

gulp.task('watch',['clean'],function () {
    gulp.start(['browserSync','webpack','templates','styles','images']);
});

gulp.task('default',['clean'], function () {
    gulp.start(['browserSync','watchify','templates','styles','images']);
});