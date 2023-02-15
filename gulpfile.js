const {
    src,
    dest,
    series
} = require('gulp');
const sass = require('gulp-sass')(require('sass'))
const minifyCSS = require("gulp-minify-css")

function build() {
    return src('components/css/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest('dist/css'))
}

exports.build = build;
exports.default = series(build);