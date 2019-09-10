/* global require */

var gulp = require('gulp'),
browserSync = require('browser-sync'),
reload = browserSync.reload,
concat = require('gulp-concat'),
rigger = require('gulp-rigger'),
sourcemaps = require('gulp-sourcemaps'),
less = require('gulp-less'),
watch = require('gulp-watch');

var autoprefixer = require('gulp-autoprefixer');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var path = require('path');
var notify = require("gulp-notify");
var cssGlobbing = require('gulp-css-globbing');

var plumber = require('gulp-plumber');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');

var paths = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        style: 'build/',
        img: 'build/imgs/',
        video: 'build/video/',
        lib: 'build/lib/',
        fonts: 'build/fonts/',
        docs: 'build/docs/'
    },
    src: { 
        html: 'src/html/**/*.html', 
        js: 'src/js/*.js',
        style: 'src/styles/**/*.less',
        img: 'src/imgs/**/*.*',
        video: 'src/video/**/*.*',
        lib: 'src/lib/**/*.*',
        fonts: 'src/fonts/**/*.*',
        docs: 'src/docs/**/*.*'
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/**/*.js',
        style: 'src/**/*.less',
        img: 'src/imgs/**/*.*',
        video: 'src/video/**/*.*',
        docs: 'src/docs/**/*.*'
    },
    clean: './build'
};

gulp.task('server', function() {
	browserSync.init({
        server: {
           baseDir: paths.build.html,
           index: "index.html"
       }
   });
});

gulp.task('html', function () {
    return gulp.src(paths.src.html) 
    .pipe(rigger()) 
    .pipe(gulp.dest(paths.build.html)) 
    .pipe(reload({stream: true}));
});

gulp.task('less', function() {
   return gulp.src(paths.src.style)
   .pipe(less())
   .pipe(concat('app.css'))
   .pipe(gulp.dest(paths.build.style))
   .pipe(reload({stream: true}));
});

gulp.task('styles', function() {
    return gulp.src('src/styles/style.scss')
    .pipe(sourcemaps.init())
    .pipe(cssGlobbing({
        extensions: ['.scss']
    }))
    .pipe(sass({
        includePaths: require('node-bourbon').with('./node_modules'),
        sourcemap: true,
        style: 'compact'
    }).on('error', sass.logError).on('error', notify.onError(function (error) {
        return 'An error occurred while compiling sass.\nLook in the console for details.\n' + error;
    })))
    .pipe(autoprefixer({
        browsers: ['last 3 versions', '> 2%'],
        remove: false,
        cascade: false
    }))
    // .pipe(concat('styles.css'))
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.stream({match: '**/*.css'}));
});

gulp.task('image', function () {
    return gulp.src(paths.src.img)
    .pipe(gulp.dest(paths.build.img))
    .pipe(reload({stream: true}));
});
gulp.task('video', function () {
    return gulp.src(paths.src.video)
    .pipe(gulp.dest(paths.build.video))
    .pipe(reload({stream: true}));
});
gulp.task('docs', function () {
    return gulp.src(paths.src.docs)
    .pipe(gulp.dest(paths.build.docs))
    .pipe(reload({stream: true}));
});
gulp.task('fonts', function () {
    return gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.build.fonts))
    .pipe(reload({stream: true}));
});
gulp.task('vendor', function () {
    return gulp.src(paths.src.lib)
    .pipe(gulp.dest(paths.build.lib))
    .pipe(reload({stream: true}));
});

gulp.task('js', function () {
    return gulp.src(paths.src.js)
    .pipe(rigger())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.build.js))
    .pipe(reload({stream: true}));
});

gulp.task('iconfont', function(){
  return gulp.src([path.join('./src', 'imgs/icons/', '**/*.svg')])
    .pipe(iconfont({
        fontName: 'icons', // required
        appendUnicode: true, // recommended option
        formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'], // default, 'woff2' and 'svg' are available
        timestamp: Math.round(Date.now()/1000), // recommended to get consistent builds when watching files
        normalize: true,
        fontHeight: 500
    }))
    .on('glyphs', function(glyphs, options) {
      var pipe = gulp.src(path.join('./src', 'imgs/icons/templates/webfont.template.css'))
        .pipe(consolidate('lodash', {
          glyphs: glyphs,
          fontName: 'icons',
          fontPath: '../fonts/',
          className: 'icon'
        }))
        .pipe(rename('_icons.scss'))
        .pipe(gulp.dest('./src/styles'));
    })
    .pipe(gulp.dest(path.join('./build', 'fonts/')));
});

gulp.task('build', ['html', 'js', 'iconfont', 'styles', 'image', 'video', 'docs', 'vendor', 'fonts']);

gulp.task('watch', function(){
    watch([paths.watch.html], function(event, cb) {
        gulp.start('html');
    });
    watch([paths.watch.style], function(event, cb) {
        gulp.start('less');
    });
    watch(['src/styles/**/*.scss'], function(event, cb) {
        gulp.start('styles');
    });
    watch([paths.watch.js], function(event, cb) {
        gulp.start('js');
    });
    watch([paths.watch.img, '!src/imgs/icons/**/.*'], function(event, cb) {
        gulp.start('image');
    });
    watch([paths.watch.video], function(event, cb) {
        gulp.start('video');
    });
    watch([paths.watch.docs], function(event, cb) {
        gulp.start('docs');
    });
    watch(['src/imgs/icons/**.*'], function(event, cb) {
        gulp.start('iconfont');
    });
});

gulp.task('default', ['build', 'server', 'watch']);
