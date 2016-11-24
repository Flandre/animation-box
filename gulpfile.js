var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var AUTOPREFIXER_BROWSER = ['last 2 versions'];

gulp.task('scss', function () {
  // scss
  gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_BROWSER))
    .pipe(gulp.dest('dist/'));
  

});

gulp.task('watch', function () {
  gulp.watch('src/*', ['scss'])
    .on('change', function (event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['scss', 'watch']);
