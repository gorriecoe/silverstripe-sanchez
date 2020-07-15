const { strings } = require('../utilities')

module.exports = (requiredPrefix, prefix) => {
  if (!requiredPrefix.length || !prefix.length) {
    return false
  }

  return strings.match(requiredPrefix, prefix)
}
