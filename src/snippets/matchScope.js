const { arrays, scope } = require('../utilities')

module.exports = (requiredScope, compareScope) => {
  return arrays.matchOne(
    scope.format(requiredScope),
    scope.format(compareScope)
  )
}
