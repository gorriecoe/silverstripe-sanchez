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

const ymlAliases = [
  'yml',
  'yaml',
  'Yaml'
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
    languages = languages.concat(
      silverstripeAliases
    )
  }

  // If one of the yml aliases are used add them to languages for filtering later.
  if (arrays.matchOne(languages, ymlAliases)) {
    languages = languages.concat(
      ymlAliases
    )
  }

  // Remove any duplicates that may be caused by concatinating aliases.
  return languages.filter((language, index) => {
    return languages.indexOf(language) === index;
  })
}

module.exports = {
  default: defaultLanguages,
  format: format
}
