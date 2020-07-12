const { arrays, language } = require('../utilities')

module.exports  = (requiredLanguage, compareLanguage) => {
  return arrays.matchOne(
    language.format(requiredLanguage),
    language.format(compareLanguage)
  )
}
