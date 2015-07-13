// npm install gulp-sass gulp-minify-css gulp-uglify gulp-concat gulp-rename gulp-jshint gulp-clean gulp-svgmin gulp-imagemin gulp-size

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

    // Stats and Things
    size = require('gulp-size');

    // compile all your Sass
    gulp.task('sass', function (){
        gulp.src(['assets/css/global.scss'])
            .pipe(sass({
                includePaths: require('node-bourbon').includePaths,
                errLogToConsole: false,
                includePaths: ['dist/dev/css'],
                outputStyle: 'expanded'
            }))
            .pipe(gulp.dest('dist/dev/css'))
            .pipe(minifycss())
            .pipe(gulp.dest('dist/prod/css'));
    });

    // Scripts
    gulp.task('scripts', function() {
      gulp.src(['assets/js/libs/*.js', 'assets/js/plugins/*.js', 'assets/js/scripts/*.js'])
        .pipe(concat('global.js'))
        .pipe(gulp.dest('dist/dev/js'))
        .pipe(uglify('comments:false'))
        .pipe(gulp.dest('dist/prod/js'))
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

    // Stats and Things
    gulp.task('stats', function () {
        gulp.src('./prod/**/*')
        .pipe(size())
        .pipe(gulp.dest('./prod'));
    });

//

    gulp.task('watch', function(){
        gulp.watch('assets/css/**/*.scss', ['sass']);
        gulp.watch(["assets/js/**/*.js", "!assets/js/build/*.js"], ['scripts', 'lint', 'move']);
    });

    gulp.task('default', ['watch', 'move'])