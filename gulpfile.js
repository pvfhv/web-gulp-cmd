/**
 * Created by Anchao on 2015/10/4.
 */
'use strict'
//
//var gulp = require('gulp');
//var del = require('del');
//var changed = require('gulp-changed');
////html
//var jade = require('gulp-jade');
////css
//var compass = require('gulp-compass');
////image
//var minimage = require('gulp-image');
////js
//var watchify = require('watchify');
//var browserify=require('browserify');
//var source = require('vinyl-source-stream');
//var buffer = require('vinyl-buffer');
//var gutil = require('gulp-util');
//var sourcemaps = require('gulp-sourcemaps');
//var assign = require('lodash.assign');
//var uglify = require('gulp-uglify');
//
//var browserSync = require('browser-sync').create();
//var reload = browserify.reload;
//
//
//var config = {
//    'dist': 'dist',
//    'sass': 'sass/**/*.scss',
//    'distCss': 'dist/css',
//	'distScript': 'dist/scripts',
//    'distImg': 'dist/images',
//	'mainJs': 'main.js',
//    'js':{
//        entries: './scripts/main.js',
//        extensions: ['.js', '.jsx', '.es6'],
//        debug: true
//    }
//};
//
//gulp.task('clean', function (cb) {
//    del(['dist'], cb);
//});
//
////样式
//gulp.task('styles', function () {
//    del.sync([config.distCss]);
//    gulp.start(['copyFont']);
//
//    return gulp.src(config.sass)
//        .pipe(changed(config.distCss))
//        .pipe(compass({
//            config_file: 'config.rb',
//            css: config.distCss,
//            sass: 'sass'
//        }))
//        .pipe(gulp.dest(config.distCss))
//        .pipe(reload({stream: true}));
//});
//
////copy bootstrap服务器端字体
//gulp.task('copyFont',function(){
//    var src='node_modules/bootstrap-sass/assets/fonts/bootstrap/*';
//    var dest= config.distCss+'/fonts/';
//
//    return gulp.src(src)
//        .pipe(gulp.dest(dest));
//});
//
////html_template
//gulp.task('templates', function() {
//     return gulp.src('./template/*.jade')
//        .pipe(jade({
//            doctype:'html',
//            pretty:false
//        }))
//        .pipe(gulp.dest(config.dist))
//        .pipe(reload({stream: true}));
//});
//
////image
//gulp.task('image', function () {
//    return gulp.src('images/{,*/}*.{gif,jpeg,jpg,png,ico}')
//        .pipe(minimage())
//        .pipe(gulp.dest(config.distImg));
//});
//
////copy所有
//gulp.task('copy',function(){
//   gulp.start(['templates','image','copyFont'])
//});
//
//gulp.task('browserSync', function () {
//    browserSync({
//        server: {
//            baseDir: './dist/'
//        },
//        port: 3000,
//        open: false
//    });
//});
//
//gulp.task('watchify', function(){
//    //与browserify联合使用，监听Js变化
//    var b = watchify(browserify(assign({},watchify.args, config.js)));
//    b.on('update', bundle); // 当任何依赖发生改变的时候，运行打包工具
//    b.on('log', gutil.log); // 输出编译日志到终端
//
//    function bundle() {
//        return b.bundle()
//            // 如果有错误发生，记录这些错误
//            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
//            .pipe(source(config.mainJs))
//            // 可选项，如果你不需要缓存文件内容，就删除
//            .pipe(buffer())
//            // 可选项，如果你不需要 sourcemaps，就删除
//            .pipe(sourcemaps.init({loadMaps: true})) // 从 browserify 文件载入 map
//			.pipe(uglify())
//            // 在这里将变换操作加入管道
//            .pipe(sourcemaps.write('./')) // 写入 .map 文件
//            .pipe(gulp.dest(config.distScript))
//            .pipe(reload({stream: true}));
//    }
//
//    return bundle();
//});
//
//gulp.task('default', function () {
//    gulp.start(['browserSync']);
//});


//----------------------------------------华丽的分隔线-------------------------------------------------------------------

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    compass=require('gulp-compass'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    eslint = require('gulp-eslint'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    htmlReplace = require('gulp-html-replace'),
    image = require('gulp-image'),
    svgmin = require('gulp-svgmin'),
    htmlmin = require('gulp-htmlmin'),
    reload = browserSync.reload,
    p = {
        //js: [require.resolve("babel/polyfill"), './scripts/app.js'],
        js: {
            'entries' : './scripts/app.js',
            'extensions': ['.js', '.jsx', '.es6']
        },
        scss: 'styles/**/*.scss',
        bundle: 'app.js',
        distJs: 'dist/scripts',
        distCss: 'dist/css',
        distHtml: 'dist',
        distImg: 'dist/images',
        dist: 'dist'
    };

gulp.task('clean', function(cb) {
    del(['dist'], cb);
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './'
        },
        port: 3000,
        open: false
    });
});

gulp.task('watchify', function() {
    var bundler = watchify(browserify(p.js, { debug: true }));

    function rebundle() {
        return bundler
            .bundle()
            .on('error', notify.onError())
            .pipe(source(p.bundle))
            .pipe(gulp.dest(p.distJs))
            .pipe(reload({stream: true}));
    }

    bundler.transform(babelify)
        .on('update', rebundle);
    return rebundle();
});

/*
 生产环境
 注释pipe(sourcemaps.init({loadMaps: true}))
 */
gulp.task('browserify', function() {
    browserify(p.js)
        .transform(babelify)
        .bundle()
        .pipe(source(p.bundle))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(p.distJs));
});

gulp.task('styles', function() {
    del.sync([p.distCss]);
    gulp.start(['copyFont']);
    return gulp.src(p.scss)
        .pipe(changed(p.distCss))
        .pipe(compass({
            config_file: './config.rb',
            sass:'styles',
            css:p.distCss
        }))
        .pipe(gulp.dest(p.distCss))
        .pipe(reload({stream: true}));
});

gulp.task('html-replace', function () {
    var replacements = {
        css: 'css/main.css',
        js: 'scripts/app.js'
    };

    return gulp.src('{,*/}*.html')
        .pipe(htmlReplace(replacements))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(p.distHtml));
});


gulp.task('image', function () {
    return gulp.src('images/{,*/}*.{gif,jpeg,jpg,png}')
        .pipe(image())
        .pipe(gulp.dest(p.distImg));
});

gulp.task('svg', function () {
    return gulp.src('images/{,*/}*.svg')
        //.pipe(svgmin())
        .pipe(gulp.dest(p.distImg));
});

//copy fonts
gulp.task('copyFont',function(){
    var src='node_modules/bootstrap-sass/assets/fonts/bootstrap/*';
    var dest= p.distCss+'/fonts/';

    return gulp.src(src)
        .pipe(gulp.dest(dest));
});

//copy templates
gulp.task('copyTemplates',function(){
    return gulp.src('templates/*')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(p.dist+'/templates/'));
});

//copy simulation
gulp.task('copySimulation',function(){
    return gulp.src('simulation/*')
        .pipe(gulp.dest(p.dist+'/simulation/'));
});

gulp.task('copy', function() {
    gulp.start(['copyFont','copyTemplates','copySimulation']);
});

gulp.task('lint', function() {
    return gulp.src('scripts/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('watchTask', function() {
    gulp.watch(p.scss, ['styles']);
    // gulp.watch('scripts/**/*.js', ['lint']);
});

gulp.task('watch', ['clean'], function() {
    gulp.start(['browserSync', 'watchTask', 'watchify', 'styles', 'image', 'svg', 'copy']);
});

gulp.task('build', ['clean'], function() {
    process.env.NODE_ENV = 'production';
    gulp.start(['browserify', 'styles', 'html-replace', 'image', 'svg', 'copy']);
});

gulp.task('default', function() {
    gulp.start('watch');
});



