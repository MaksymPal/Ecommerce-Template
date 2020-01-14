const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style () {
    return gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./src'))
    .pipe(browserSync.stream())
};

function watch () {
    browserSync.init ({
        server: ['./', './src']
    })
    gulp.watch('./src/**/*.scss', style);
    gulp.watch('./src/*.html').on('change', browserSync.reload);
};

exports.style = style;
exports.watch = watch;