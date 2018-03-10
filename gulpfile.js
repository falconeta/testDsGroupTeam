//jshint ignore: start
var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var replace = require('gulp-string-replace');
var report = require('jshint-stylish');
var reportHtml = require('gulp-jshint-html-reporter');
deletefile = require('gulp-clean');
const sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
var removeCode = require('gulp-remove-code');


gulp.task('sass', function () {
    return gulp.src('./source/sass/*scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./source/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./source/sass/*.scss', ['sass']);
});

gulp.task('jshint', function () {
    return gulp.src('source/javascript/*.js').pipe(jshint())
        .pipe(jshint.reporter(report));
});

gulp.task('jshintHtml', function () {
    gulp.src('log').pipe(deletefile());
    return gulp.src('source/javascript/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter(reportHtml, {
            filename: __dirname + '/log/reportQuality.html',
            createMissingFolders: true
        }));
});
gulp.task('build', function () {
    gulp.src('source/html/*.html')
        .pipe(replace('../css/index.css', 'index.css'))
        .pipe(replace('../../node_modules/bootstrap/dist/css/bootstrap.min.css', '../node_modules/bootstrap/dist/css/bootstrap.min.css'))
        .pipe(removeCode({ production: true }))
        .pipe(replace('<script src="../../node_modules/jquery/dist/jquery.js"></script>', '<script src="../node_modules/jquery/dist/jquery.js"></script>'))
        .pipe(replace('<script src="../../node_modules/tether/dist/js/tether.js"></script>', '<script src="../node_modules/tether/dist/js/tether.js"></script>'))
        .pipe(replace('<script src="../../node_modules/bootstrap/dist/js/bootstrap.js"></script>', '<script src="../node_modules/bootstrap/dist/js/bootstrap.js"></script>'))
        .pipe(replace('<script src="../javascript/index.js"></script>', '<script src="bundle.js"></script>'))
        .pipe(replace('<script src="../javascript/form.js"></script>', '<script src="bundle.js"></script>'))
        .pipe(replace('<script src="../javascript/details.js"></script>', '<script src="bundle.js"></script>'))
        .pipe(gulp.dest('dist'));
    gulp.src('source/css/*.css')
        .pipe(replace('../img/load.gif', 'img/load.gif'))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist'));
    gulp.src('source/img/*')
        .pipe(gulp.dest('dist/img'));
    gulp.src('source/javascript/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        .pipe(uglify()).pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'));
});