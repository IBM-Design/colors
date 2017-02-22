const ase = require('ase-utils'),
      clean = require('gulp-clean'),
      fs = require('fs'),
      path = require('path'),
      gulp = require('gulp'),
      handlebars = require('handlebars'),
      jeditor = require("gulp-json-editor"),
      map = require('through2-map'),
      rename = require('gulp-rename'),
      shell = require('gulp-shell'),
      spy = require('through2-spy');


module.exports = function(options) {
  /*--- paths and files  ------------------------------------------------------*/
  const filename = module.parent.filename,
        rootPath = filename.substring(0, Math.max(filename.lastIndexOf("/"), filename.lastIndexOf("\\"))),
        basePath = rootPath.includes('color-bee')
          ? ''
          : '/node_modules/color-bee';

  const config = {
    output: options.output
      ? `${rootPath}/${options.output}`
      : `${rootPath}/`,
    partials: `${rootPath}${basePath}/source/templates/partials`,
    helpers: `${rootPath}${basePath}/source/templates/helpers`,
    source: options.source
      ? `${rootPath}/${options.source}`
      : './source/colors.js',
    templates: rootPath.includes('color-bee')
      ? './source/templates'
      : `${rootPath}/node_modules/color-bee/source/templates`,
  };

  const colors = require(config.source);

  console.log(`Color Bee is buzzing the ${colors.name} palette from ${config.source} to ${config.output}!`);

  if (!fs.existsSync(config.output)){
    fs.mkdirSync(config.output);
  }

  /*--- functions -------------------------------------------------------------*/

  function hexToRgb(hex) {
      // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
      var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      hex = hex.replace(shorthandRegex, function(m, r, g, b) {
          return r + r + g + g + b + b;
      });

      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
          red: parseInt(result[1], 16) / 255,
          green: parseInt(result[2], 16) / 255,
          blue: parseInt(result[3], 16) / 255,
          alpha: 1
      } : null;
  };

  /*--- build tasks ------------------------------------------------------------*/
  gulp.task('ase', function() {
    let aseObj = {
      "version": colors.version,
      "groups": [],
      "colors": []
    };

    aseObj.groups = colors.palettes.map(function(obj){
      const color = obj.name;
      const aseGroup = {
        name: color
      };
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
          "name": color + ' ' + colors.grade,
          "model": 'RGB',
          "color": hex(colors.value),
          "type": "global"
        };
        return formColor;
      });
      aseGroup.colors = formArray;
      return aseGroup;
    });
    aseObj["colors"] = [].concat.apply([], aseObj.colors);
    fs.writeFileSync(`${config.output}/${colors.name}.ase`, ase.encode(aseObj));
  });

  gulp.task('clr', [ 'sketchpalette' ], function () {
    gulp.src(`${config.output}${colors.name}.scl`)
      .pipe(shell([
        `chmod u+x ${rootPath}${basePath}/lib/color-tool/color-tool`,
        `${rootPath}${basePath}/lib/color-tool/color-tool create-clr ${config.output}${colors.name}.scl ${config.output}${colors.name}.clr`,
      ]))
      .pipe(clean({force: true}))
  });

  gulp.task('eyeglass', () =>
    gulp.src('./eyeglass-exports.js')
      .pipe(gulp.dest(config.output))
  );

  gulp.task('partials', () =>
    gulp.src(`${config.partials}/*`)
      .pipe(spy.obj(chunk =>
        // register each file in the partials folder as a handlebars partial,
        // using its own path name, to be compiled on demand when referenced
        handlebars.registerPartial(chunk.relative, chunk.contents.toString())
      ))
  );

  gulp.task('helpers', () => {
    gulp.src(`${config.helpers}/*.js`)
      .pipe(spy.obj((chunk) => {
        // remove .js extension name
        const helperName = chunk.relative.replace(/\.js$/, '');

        // register each file in the helpers folder as a handlebars helper,
        // using its own file name, to create the helper name.
        handlebars.registerHelper(helperName, require(path.join(config.helpers, chunk.relative)))
      }))
  });

  gulp.task('sketchpalette', ['templates'], function () {
    gulp.src(`${config.output}/${colors.name}.json`)
      .pipe(jeditor(function(json) {
        let sketchPalette = {
          compatibleVersion: "1.4",
          pluginVersion: "1.5"
        };
        sketchPalette.colors = Object.keys(json).map(function (color) { return json[color]; });
        sketchPalette.colors = sketchPalette.colors.map(function(color) {
            var arr = Object.keys(color).map(function (grade) { return color[grade]; });
            return arr
        });
        sketchPalette.colors = [].concat.apply([], sketchPalette.colors);
        sketchPalette.colors = sketchPalette.colors.map(hex => (hexToRgb(hex)));
        return sketchPalette;
      }))
      .pipe(rename(`${colors.name}.sketchpalette`))
      .pipe(gulp.dest(config.output))
  })

  gulp.task('templates', ['helpers', 'partials'], () => {
    gulp.src(`${config.templates}/*.hbs`)
      .pipe(map.obj(chunk => {
        // compile each handlebars file in the templates folder, then evaluate
        // the compiled template with the color definitions as context data,
        // and replace the pipeline item with the output buffer
        var template = handlebars.compile(chunk.contents.toString());
        chunk.contents = new Buffer(template({ colors: colors }));
        return chunk;
      }))
      .pipe(rename(path => {
        // a template file of the form AAA.hbs produces output file name.AAA
        const dot = path.basename.lastIndexOf('.');
        path.extname = path.basename.substring(dot);
        path.basename = path.extname === 'scss' ? `_${colors.name}.` : `${colors.name}.`;
      }))
      .pipe(gulp.dest(config.output))
  });

  gulp.task('default', [ 'ase', 'clr', 'eyeglass'], () => {
    console.log('🐝 Color Bee is done buzzing!')
  });

  gulp.start('default');
};
