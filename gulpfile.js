'use strict';

/*--- requires --------------------------------------------------------------*/
var ase = require('ase-utils'),
    colors = require('./source/colors.js'),
    fs = require('fs'),
    gulp = require('gulp'),
    handlebars = require('handlebars'),
    jeditor = require("gulp-json-editor"),
    map = require('through2-map'),
    rename = require('gulp-rename'),
    shell = require('gulp-shell'),
    spy = require('through2-spy');

/*--- paths and files  ------------------------------------------------------*/
var config = {
  ase: './ibm-colors.ase',
  partials: './source/templates/partials/*',
  appFiles: './source/*.clr',
  templates: './source/templates/*.hbs',
  output: './'
};

/*--- build task ------------------------------------------------------------*/
gulp.task('appFiles', () =>
  gulp.src(config.appFiles)
    .pipe(gulp.dest(config.output))
);

gulp.task('ase', function() {
  let aseObj = {
    "version": colors.version,
    "groups": [],
  };

  aseObj.colors = colors.palettes.map(function(obj){
    const color = obj.name;
    const formArray = obj.values.map(function(colors){
      const hex = function(hex) {
        const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
        hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
        });

        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? [
          parseInt(result[1], 16) / 255,
          parseInt(result[2], 16) / 255,
          parseInt(result[3], 16) / 255
        ] : null;
      }

      const formColor = {
        "name": color + ' ' + colors.tone,
        "model": 'RGB',
        "color": hex(colors.value),
        "type": "global"
      };
      return formColor;
    });
    return formArray;
  });
  aseObj["colors"] = [].concat.apply([], aseObj.colors);
  fs.writeFileSync(config.output + 'ibm-colors.ase', ase.encode(aseObj));
});

gulp.task('clr', [ 'ase' ], function () {
  gulp.src("")
    .pipe(shell([
      './lib/Ase2Clr ibm-colors.ase',
    ]))
})

gulp.task('package',  () =>
  gulp.src("./package.json")
    .pipe(jeditor({
      'version': colors.version
    }))
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

gulp.task('build', [ 'appFiles', 'package', 'partials', 'ase', 'clr' ], () =>
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
