/**
 * Match 2 given arrays to check all values match
 * @param needles
 * @param haystack
 * @returns Boolean
 */
const matchEvery = (needles, haystack) => {
  if (!(Array.isArray(needles) && Array.isArray(haystack))) {
    return false
  }

  // Don't bother checking every value if the length of needles is greater than haystack.
  if (needles.length >= haystack.length) {
    return false
  }

  return needles.every(item => {
    return haystack.indexOf(item) !== -1
  })
}

/**
 * Match 2 given arrays to find at list 1 matching value
 * @param needles
 * @param haystack
 * @returns Boolean
 */
const matchOne = (needles, haystack) => {
  if (!(Array.isArray(needles) && Array.isArray(haystack))) {
    return false
  }

  return needles.some(item => {
    return haystack.indexOf(item) !== -1
  })
}

module.exports = {
  matchEvery: matchEvery,
  matchOne: matchOne
}
