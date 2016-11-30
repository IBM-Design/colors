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
  templates: './source/templates/*.hbs',
  output: './'
};

/*--- build task ------------------------------------------------------------*/
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

function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        red: parseInt(result[1], 16) / 256,
        green: parseInt(result[2], 16) / 256,
        blue: parseInt(result[3], 16) / 256,
        alpha: 1
    } : null;
};

gulp.task('sketchpalette', [ 'templates' ], function () {
  gulp.src("./ibm-colors.json")
    .pipe(jeditor(function(json) {
      let sketchPalette = {
        compatibleVersion: "1.4",
        pluginVersion: "1.5",
      };
      sketchPalette.colors = Object.keys(json).map(function (color) { return json[color]; });
      sketchPalette.colors = sketchPalette.colors.map(function(color) {
          var arr = Object.keys(color).map(function (tone) { return color[tone]; });
          return arr
      });
      sketchPalette.colors = [].concat.apply([], sketchPalette.colors);
      sketchPalette.colors = sketchPalette.colors.map(hex => (hexToRgb(hex)));
      return sketchPalette;
    }))
    .pipe(rename('ibm-colors.sketchpalette'))
    .pipe(gulp.dest(config.output))
})

gulp.task('templates', ['partials'], () =>
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

gulp.task('build', [ 'package', 'ase', 'clr', 'sketchpalette' ]);

/*--- default task ----------------------------------------------------------*/
gulp.task('default', [ 'build' ]);
