// npm install --save-dev gulp-sass gulp-minify-css gulp-uglify gulp-concat gulp-rename gulp-jshint gulp-clean gulp-svgmin gulp-imagemin 

    // Gulp
    var gulp = require('gulp'),

    // Sass/CSS stuff
    sass = require('gulp-sass'),
    maps      = require('gulp-sourcemaps'),
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
            .pipe(maps.init())
            .pipe(sass({
                includePaths: require('node-bourbon').includePaths,
                errLogToConsole: false,
                outputStyle: 'expanded'
            }))
            .pipe(maps.write('./'))
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

    gulp.task('clean-folders', function () {
      return gulp.src(['./dist/prod/html', './dist/prod/js'], {read: false})
        .pipe(clean());
    });

    // Build Index for Production
    gulp.task('indexforprod', function() {
        return gulp.src("./*.html")
            .pipe(rename(function (path) {
              //path.suffix += "_prod";
            }))
            .pipe(assetpaths({
                newDomain: 'http://www.jaredcunha.com/mm_images',
                oldDomain : '/dist/prod/images/svg/',
                docRoot : 'public_html',
                filetypes : ['jpg','jpeg','png','gif','svg'],
                templates: true
            }))
            .pipe(htmlreplace({
                'css': 'http://info.livingsocialbusiness.com/l/74522/2015-06-25/mgsy3/74522/23998/global.css',
                'js': 'http://info.livingsocialbusiness.com/l/74522/2015-06-25/mgsym/74522/24000/global.js',
                'contact-form': '%%content%%'
            }))
            .pipe(gulp.dest('dist/prod/html'));
        gulp.src(['/dist/dev/css/global.css'])
    });

    gulp.task('watch', function(){
        gulp.watch('assets/css/**/*.scss', ['compile-css']);
        gulp.watch(["assets/js/**/*.js", "!assets/js/build/*.js"], ['scripts', 'lint', 'move']);
        gulp.watch('*.html', ['indexforprod']);
    });

    gulp.task('default', ['watch','scripts', 'lint', 'move', 'webserver']);