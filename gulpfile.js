'use strict';

/*--- requires --------------------------------------------------------------*/
var gulp = require('gulp'),
    rename = require('gulp-rename'),
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

/*--- convert template file name to output file name ------------------------*/
function untemplate(path) {
  // a template file of the form AAAA.BBB.hbs produces an output file AAAA.BBB
  var dot = path.basename.lastIndexOf('.');
  path.extname = path.basename.substring(dot);
  path.basename = path.basename.substring(0, dot);
}

/*--- build task ------------------------------------------------------------*/
gulp.task('build', function() {
  return gulp.src('./source/templates/*')
    .pipe(compile({ colors: colors }))
    .pipe(rename(untemplate))
    .pipe(gulp.dest('./dist'));
});

/*--- default task ----------------------------------------------------------*/
gulp.task('default', ['build']);
