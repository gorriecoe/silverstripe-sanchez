const isset = require('isset')
const split = require('./split')

/**
 * Formats the given version to a more suitable version for
 * easy comparison later.
 * e.g. 5.2.3 becomes 5.2
 * @param version
 * @returns Array
 */
const format = (version) => {
  if (typeof version === 'number') {
    return version
  }

  return parseFloat(split(version, '.').slice(0, 1).map(core => {
    if (!isset(core)) {
      return 0
    }

    // Lets just return a stupidly large integer if its "dev-master"
    if (core.indexOf('dev') > -1) {
      return 9999
    }

    // Return a numeric value, removing things like "build" and "pre-release"
    return core.replace(/[^0-9.]/, '')
  }).join('.'))
}

/**
 * Formats string to a min and max version.
 * e.g. 4.0-5.0 becomes {
 *  min: 4.0
 *  max: 5.0
 * }
 * @param versions
 * @returns Array
 */
const range = (versions) => {
  versions = split(versions, '-')
  return {
    min: format(versions[0]) ? format(versions[0]) : 0,
    max: format(versions[1]) ? format(versions[1]) : 9999
  }
}

module.exports = {
  format: format,
  range: range
}
