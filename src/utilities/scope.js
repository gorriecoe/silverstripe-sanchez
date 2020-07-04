const split = require('./split')

const defaultScope = [
  '.text.html.php',
  '.text.html.ss'
]

/**
 * Formats the given scope, converting it to an
 * array and removes the first '.'.
 * @param {String|Array} scope
 * @returns {Array}
 */
const format = (scope = defaultScope) => {
  return split(scope).map(string => string.replace(/^\./, ''))
}

module.exports = {
  default: defaultScope,
  format: format
}
