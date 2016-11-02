'use strict';

/*--- requires --------------------------------------------------------------*/
var colors = require('./source/colors.js'),
    gulp = require('gulp'),
    handlebars = require('handlebars'),
    jeditor = require("gulp-json-editor"),
    map = require('through2-map'),
    rename = require('gulp-rename'),
    spy = require('through2-spy');

/*--- paths and files  ------------------------------------------------------*/
var config = {
  partials: './source/templates/partials/*',
  appFiles: './source/*.{ase,clr,sketchpalette}',
  templates: './source/templates/*.hbs',
  output: './'
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

gulp.task('package', () =>
  gulp.src("./package.json")
    .pipe(jeditor({
      'version': colors.version
    }))
    .pipe(gulp.dest(config.output))
);

gulp.task('build', [ 'appFiles', 'package', 'partials' ], () =>
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
