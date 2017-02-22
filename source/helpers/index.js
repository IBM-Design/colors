const coreColor = require('./coreColor');

function registerHelpers(handlebars) {
  coreColor(handlebars);
}

module.exports = registerHelpers;