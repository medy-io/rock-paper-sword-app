var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-csso');

sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(gulp.dest('src/css'))
});
 
gulp.task('sass: watch', function () {
  gulp.watch('./App.scss', ['sass']);
});

gulp.task('default', [ 'sass', 'sass: watch' ]);