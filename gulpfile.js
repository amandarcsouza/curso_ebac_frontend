const gulpJs = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagesMin = require('gulp-imagemin');
const uglity =  require('gulp-uglify');

function comprimirJS(){
    return gulpJs.src('./source/scripts/*.js')
    .pipe(uglity())
    .pipe(gulpJs.dest('./build/scripts'))
}

function comprimirImagens() {
    return gulpJs.src('./source/images/*')
    .pipe(imagesMin())
    .pipe(gulpJs.dest('./build/images'))
}

function compilarSass (){
    return gulpJs.src('./source/styles/main.scss')
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(gulpJs.dest('./build/styles'));
}

exports.default = function(){
    gulpJs.watch('./source/scripts/*.js', {ignoreInitial: false}, gulpJs.series(comprimirJS));
    gulpJs.watch('./source/images/*', {ignoreInitial: false}, gulpJs.series(comprimirImagens));
    gulpJs.watch('./source/styles/*.scss', {ignoreInitial: false}, gulpJs.series(compilarSass));
}