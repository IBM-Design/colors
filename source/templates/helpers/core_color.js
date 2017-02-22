function coreColor(palette) {
  let coreColor;

  palette.values.forEach(colorValue => {
    if (parseInt(colorValue.grade) === parseInt(palette.core)) {
      coreColor = colorValue.value;
    }
  });

  return coreColor;
}

module.exports = coreColor;
