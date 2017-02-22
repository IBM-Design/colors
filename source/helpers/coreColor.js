function coreColor(handlebars) {
  handlebars.registerHelper('core_color', function(palette) {
    let coreColor;

    palette.values.forEach(colorValue => {
      if (parseInt(colorValue.grade) === parseInt(palette.core)) {
        coreColor = colorValue.value;
      }
    });

    return coreColor;
  });
}

module.exports = coreColor;
