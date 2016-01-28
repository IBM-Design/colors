'use strict';

/*--- requires --------------------------------------------------------------*/
var gulp = require('gulp'),
    map = require('through2-map'),
    handlebars = require('handlebars'),
    colors = require('./source/colors.js');

/*--- compile templates in gulp pipeline ------------------------------------*/
function compile(context) {
  return map.obj(function(chunk) {
    var template = handlebars.compile(chunk.contents.toString());
    chunk.contents = new Buffer(template(context));
    return chunk;
  });
}

/*--- build task ------------------------------------------------------------*/
gulp.task('build', function() {
  return gulp.src('./source/templates/*')
    .pipe(compile({ colors: colors }))
    .pipe(gulp.dest('./dist'));
});

/*--- default task ----------------------------------------------------------*/
gulp.task('default', ['build']);
