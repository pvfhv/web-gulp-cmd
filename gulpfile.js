/**
 * Created by Anchao on 2015/10/4.
 */
'use strict'

var gulp = require('gulp');
var del = require('del');
var changed = require('gulp-changed');
//html
var jade = require('gulp-jade');
var htmlmin = require('gulp-htmlmin');
//css
var compass = require('gulp-compass');
//image
var minimage = require('gulp-image');
//js
var webpack = require('webpack');
var webpackstream = require('webpack-stream');

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var replace = require('gulp-replace');
var makeUrlVer = require('gulp-make-css-url-version');

//var jsdoc = require("gulp-jsdoc");

var config = {
    'dist': 'dist',
    'html': 'dist/*.html',
    'htmlSrc': 'template/*.html',
    'jade': 'template/*.jade',
    'sass': 'sass/**/*.scss',
    'distCss': 'dist/css',
    'simulate': 'simulates/*.json',
    'distsimulate': 'dist/simulates',
    'distScript': 'dist/scripts',
    'image': 'images/{,*/}*.{gif,jpeg,jpg,png,ico,svg}',
    'distImg': 'dist/images',
    'mainJs': 'main.js',
    'js': {
        entries: './scripts/main.js',
        extensions: ['.js', '.jsx', '.es6'],
        debug: true,
        transform: [["babelify", {"presets": ["es2015", "stage-0", "react"]}]]
    },
    'v':Date.now()
};


//删除
gulp.task('clean', function () {
    return del(['dist']).then(function () {
        console.log('删除完成');
    });
});

//jsdoc
//gulp.task('document',function(){
//    var template={
//        path            : "ink-docstrap",
//        systemName      : "Something",
//        footer          : "Something",
//        copyright       : "Something",
//        navType         : "vertical",
//        theme           : "journal",
//        linenums        : true,
//        collapseSymbols : false,
//        inverseNav      : false
//    };
//    var infos={
//        name:'testJSDoc',
//        description:'des',
//        version:'1.0',
//        licenses:'MIT',
//        plugins:[]
//    };
//    var options={
//        showPrivate: false,
//        monospaceLinks: false,
//        cleverLinks: false,
//        outputSourceFiles: true
//    };
//
//    gulp.src("./scripts/test.js")
//        .pipe(jsdoc('./documentation-output',template,infos,options));
//
//});

//html_template
gulp.task('templates', function () {
    gulp.src(config.jade)
        .pipe(changed(config.jade))
        .pipe(jade({
            doctype: 'html',
            pretty: false
        }))
        .pipe(replace(/images?\/(\w+?)(.png)/g, 'images/$1$2?v='+config.v))
        .pipe(replace('css/main.css','css/main.css?v='+config.v))
        .pipe(replace('scripts/main.js','scripts/main.js?v='+config.v))
        .pipe(gulp.dest(config.dist));
});

gulp.task('htmls', function () {
    return gulp.src(config.htmlSrc)
        .pipe(replace(/images?\/(\w+?)(.png)/g, 'images/$1$2?v='+config.v))
        .pipe(replace('css/main.css','css/main.css?v='+config.v))
        .pipe(replace('scripts/main.js','scripts/main.js?v='+config.v))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(config.dist))
        .pipe(reload({stream: true}));
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
        .pipe(makeUrlVer({useDate:true}))
        .pipe(gulp.dest(config.distCss))
        .pipe(reload({stream: true}));
});

gulp.task('styles_build', function () {
    return gulp.src(config.sass)
        .pipe(changed(config.distCss))
        .pipe(compass({
            config_file: 'config_build.rb',
            css: config.distCss,
            sass: 'sass'
        }))
        .pipe(makeUrlVer({useDate:true}))
        .pipe(gulp.dest(config.distCss));
});

//copy bootstrap服务器端字体
gulp.task('copyFont', function () {
    var src = 'node_modules/bootstrap-sass/assets/fonts/bootstrap/*';
    var dest = config.distCss + '/fonts/';

    return gulp.src(src)
        .pipe(gulp.dest(dest))
        .pipe(reload({stream: true}));
});

//copy zeroclipboard.swf
gulp.task('copyFlash', function () {
    var src = 'node_modules/zeroclipboard/dist/ZeroClipboard.swf';
    var dest = config.distScript;

    gulp.src(src)
        .pipe(gulp.dest(dest));
});

//copy simulates
gulp.task('copySimulate', function () {
    gulp.src(config.simulate)
        .pipe(gulp.dest(config.distsimulate));
});

gulp.task('copy', function () {
    gulp.start(['copyFont', 'copyFlash', 'copySimulate']);
});

//image
gulp.task('images', function () {
    return gulp.src([config.image, '!images/icons/*'])
        .pipe(changed(config.image))
        .pipe(minimage())
        .pipe(gulp.dest(config.distImg))
        .pipe(reload({stream: true}));
});

gulp.task('webpack', function () {
    return gulp.src(config.mainJs)
        .pipe(webpackstream({
            watch: true,
            entry: {
                main: './scripts/main.js'
            },
            output: {
                filename: '[name].js',
                sourceMapFilename: '[file].map'
            },
            devtool: "source-map",
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true,
                            presets: ['es2015', 'stage-0', 'react'],
                            compact:false
                        }
                    }
                ]
            },
            plugins: []
        }))
        .pipe(gulp.dest(config.distScript))
        .pipe(reload({stream: true}));
});

gulp.task('webpack_build', function () {
    return gulp.src(config.mainJs)
        .pipe(webpackstream({
            watch: false,
            entry: {
                main: './scripts/main.js'
            },
            output: {
                filename: '[name].js'
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            },
            module: {
                loaders: [
                    {
                        test: /\.jsx?$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            cacheDirectory: true,
                            presets: ['es2015', 'stage-0', 'react'],
                            compact:false
                        }
                    }
                ]
            },
            plugins: [new webpack.optimize.UglifyJsPlugin({minimize: true})]
        }))
        .pipe(gulp.dest(config.distScript));
});

gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './dist/'
        },
        port: 4000,
        open: false
    });

    //监听模板html变化
    gulp.watch("template/*.jade", ['templates']);
    //监听sass变化
    gulp.watch(config.sass, ['styles']);
    //监听image变化
    gulp.watch(config.image, ['images']);
});

gulp.task('build', ['clean'], function () {
    gulp.start(['webpack_build', 'templates', 'htmls', 'styles_build', 'images', 'copy']);
});

gulp.task('watch', ['clean'], function () {
    gulp.start(['browserSync', 'webpack', 'templates', 'htmls', 'styles', 'images', 'copy']);
});

gulp.task('default', ['clean'], function () {
    gulp.start(['watch']);
});