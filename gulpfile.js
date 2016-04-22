'use strict';

const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('es5', function () {
  return gulp.src(['src/**/*.js'], { base: '.' })
    .pipe(babel())
    .pipe(gulp.dest('./es5'));
});
