const split = require('./split')
const arrays = require('./arrays')

const defaultLanguages = [
  'php',
  'ss'
]

const silverstripeAliases = [
  'ss',
  'silverstripe',
  'SilverStripe'
]

/**
 * Formats the given language, converting it to an
 * array last given snope to produce the language.
 * @param {String|Array} language
 * @returns {Array}
 */
const format = (language = defaultLanguages) => {
  let languages = split(language).map(string => {
    return split(string, '.').pop()
  })

  // If one of the silverstripe aliases are used add them to languages for filtering later.
  if (arrays.matchOne(languages, silverstripeAliases)) {
    languages= languages.concat(
      silverstripeAliases
    )
  }

  return languages
}

module.exports = {
  default: defaultLanguages,
  format: format
}
