const gulp = require ('gulp');
const sass = require ('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function comprimeImagens(){
    return gulp.src('./source/images/*.{jpg,png}')
        .pipe(imagemin())
        .pipe (gulp.dest('./build/images'))
}

function comprimeJavaScript(){
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/styles/main.scss')
        .pipe(sass( ))
        .pipe(gulp.dest('./build/styles'))
}

exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;

exports.default = gulp.series(comprimeJavaScript, compilaSass, comprimeImagens);