// npm install --save-dev gulp-sass gulp-minify-css gulp-uglify gulp-concat gulp-rename gulp-jshint gulp-clean gulp-svgmin gulp-imagemin 

    // Gulp
    var gulp = require('gulp'),

    // Sass/CSS stuff
    sass = require('gulp-sass'),
    minifycss = require('gulp-minify-css'),

    // JavaScript
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    jshint = require('gulp-jshint'),
    clean = require('gulp-clean'),

    // Images,
    svgmin = require('gulp-svgmin'),
    imagemin = require('gulp-imagemin'),
    filter    = require('gulp-filter'),
    svg2png = require('gulp-svg2png'),

    // Serve
    connect = require('gulp-connect'),

    // Stats and Things
    htmlreplace = require('gulp-html-replace'),
    rename = require('gulp-rename'),
    assetpaths = require('gulp-assetpaths'),
    urlAdjuster = require('gulp-css-url-adjuster');

    // compile all your Sass
    gulp.task('compile-css', function (){
        gulp.src(['assets/css/global.scss'])
            .pipe(sass({
                includePaths: require('node-bourbon').includePaths,
                errLogToConsole: false,
                outputStyle: 'expanded'
            }))
            .pipe(gulp.dest('dist/dev/css'));
        gulp.src(['./dist/dev/css/global.css'])
            .pipe(urlAdjuster({
                replace:  ['/dist/dev/images','/brand/new'],
            }))
            .pipe(minifycss())
            .pipe(gulp.dest('./dist/prod/css'));
    });

    // Scripts
    gulp.task('scripts', function() {
        gulp.src(['assets/js/libs/*.js', 'assets/js/plugins/*.js', 'assets/js/scripts/*.js'])
            .pipe(concat('global.js'))
            .pipe(gulp.dest('dist/dev/js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/prod/js'));
    });

    gulp.task('lint', function() {
        return gulp.src('assets/js/scripts/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });

    gulp.task('move', function(){
      gulp.src('assets/js/polyfills/*.*')
        .pipe(gulp.dest('dist/prod/js'));
      gulp.src('assets/svg/*')
        .pipe(gulp.dest('dist/prod/svg'));
    });

    // Images
    gulp.task('svgmin', function() {
        gulp.src('assets/images/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('dist/dev/images/svg'))
        .pipe(gulp.dest('dist/prod/images/svg'));
    });

    gulp.task('imagemin', function () {
        gulp.src('./dev/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dev/img'))
        .pipe(gulp.dest('./prod/img'));
    });

    gulp.task('svg2png', function () {
        gulp.src('assets/images/*.svg')
            .pipe(svg2png())
            .pipe(gulp.dest('dist/dev/images/svg'))
            .pipe(gulp.dest('dist/prod/images/svg'));
    });

    // Serve
    gulp.task('webserver', function() {
      connect.server();
    });

    // Build Index for Production
    gulp.task('indexforprod', function() {
        gulp.src("./index.html")
            .pipe(rename("index_prod.html"))
            .pipe(assetpaths({
                newDomain: 'http://www.jaredcunha.com/mm_images',
                oldDomain : '/dist/prod/images/svg/',
                docRoot : 'public_html',
                filetypes : ['jpg','jpeg','png','gif','svg'],
                templates: true
            }))
            .pipe(htmlreplace({
                'css': '/dist/prod/css/global.css',
                'js': '/dist/prod/js/global.js',
                'contact-form': '%%content%%'
            }))
            .pipe(gulp.dest('./'));
        gulp.src(['/dist/dev/css/global.css'])
    });

    gulp.task('watch', function(){
        gulp.watch('assets/css/**/*.scss', ['compile-css']);
        gulp.watch(["assets/js/**/*.js", "!assets/js/build/*.js"], ['scripts', 'lint', 'move']);
        gulp.watch('index.html', ['indexforprod']);
    });

    gulp.task('default', ['watch', 'move', 'indexforprod', 'webserver']);