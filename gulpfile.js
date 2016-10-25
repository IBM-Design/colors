'use strict';

/*--- requires --------------------------------------------------------------*/
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    map = require('through2-map'),
    spy = require('through2-spy'),
    handlebars = require('handlebars'),
    colors = require('./source/colors.js');

/*--- paths and files  ------------------------------------------------------*/
var config = {
  partials: './source/templates/partials/*',
  appFiles: './source/*.{ase,clr,sketchpalette}',
  templates: './source/templates/*.hbs',
  output: './dist'
};
    
/*--- build task ------------------------------------------------------------*/
gulp.task('appFiles', () =>
  gulp.src(config.appFiles)
    .pipe(gulp.dest(config.output))
);

gulp.task('partials', () =>
  gulp.src(config.partials)
    .pipe(spy.obj(chunk =>
      // register each file in the partials folder as a handlebars partial,
      // using its own path name, to be compiled on demand when referenced
      handlebars.registerPartial(chunk.relative, chunk.contents.toString())
    ))
);

gulp.task('build', [ 'appFiles', 'partials' ], () =>
  gulp.src(config.templates)
    .pipe(map.obj(chunk => {
      // compile each handlebars file in the templates folder, then evaluate
      // the compiled template with the color definitions as context data,
      // and replace the pipeline item with the output buffer
      var template = handlebars.compile(chunk.contents.toString());
      chunk.contents = new Buffer(template({ colors: colors }));
      return chunk;
    }))
    .pipe(rename(path => {
      // a template file of the form AAAA.BBB.hbs produces output file AAAA.BBB
      var dot = path.basename.lastIndexOf('.');
      path.extname = path.basename.substring(dot);
      path.basename = path.basename.substring(0, dot);
    }))
    .pipe(gulp.dest(config.output))
);

/*--- default task ----------------------------------------------------------*/
gulp.task('default', [ 'build' ]);
