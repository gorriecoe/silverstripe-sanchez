const { matchEvery } = require("./arrays")

/**
 * Match 2 given strings
 * @param string1
 * @param string2
 * @returns Boolean
 */
const match = (string1, string2) => {
  return string1.toLowerCase().startsWith(string2.toLowerCase())
}

module.exports = {
  match: match
}
