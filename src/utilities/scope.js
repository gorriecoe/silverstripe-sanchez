const split = require('./split')

/**
 * Formats the given scope, converting it to an
 * array and removes the first '.'.
 * @param scope
 * @returns Array
 */

const format = (scope = []) => {
  return split(scope).map(string => string.replace(/^\./, ''))
}

module.exports = {
  format: format
}
