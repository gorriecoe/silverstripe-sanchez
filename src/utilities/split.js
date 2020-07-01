const isset = require('isset')

/**
 * Converts the given value to array.
 * @param value
 * @param delimiter
 * @returns Array
 */
module.exports = (value, delimiter = ',') => {
  if (!isset(value)) {
    return []
  }

  if (typeof value === 'string') {
    value = value.split(delimiter)
  }

  if (Array.isArray(value)) {
    return value.map(string => string.trim())
  }

  return []
}
