/**
 * Build and format a full list of snippets from the defaults list and
 * supplied list,
 */

const isset = require('isset')
const merge = require('deepmerge')
const { split, version, scope, language } = require('../../utilities')
const defaultSnippets = require('../defaults')

const defaults = {
  composerVersion: '0.0+'
}

/**
 * Store snippets so we don't need to iterate through snippets again.
 */
let allSnippetsStore = null

/**
 * Formats each package version to a min and max version.
 * @param packages
 * @returns Object
 */
const formatPackages = (packages = {}) => {
  const output = {}
  if (Array.isArray(packages)) {
    packages.forEach(packageName => {
      output[packageName] = version.range('0')
    })
  } else {
    for (const packageName in packages) {
      output[packageName] = version.range(packages[packageName])
    }
  }
  return output
}

/**
 * Formats the prefix by appending the first module name.
 * Also format and use the name if the prefix is not defined for convenience.
 * @param prefix
 * @returns String
 */
const formatPrefix = (name, prefix = name, moduleName, moduleVersion) => {
  return [
    prefix.trim()
      .replace('&', 'and')
      .replace(/[^a-zA-Z0-9_]/g, '')
      .toLowerCase(),
    'ss',
    moduleName,
    moduleVersion
  ].join('-')
}

/**
 * Remove vendor name from module name.
 * @param value
 * @returns String|null
 */
const formatName = (value) => {
  if (!isset(value)) {
    return null
  }

  return value.replace(/^[\w-]*\//, '')
}

/**
 * List of common silverstripe comment formats based on there scope.
 * @returns {Object}
 */
const commentFormat = {
  'text.html.php': {
    single: {
      start: '// ',
      end: ''
    },
    multi: {
      start: '/**',
      line: ' * ',
      end: ' */'
    }
  },
  'text.html.ss': {
    single: {
      start: '<!-- ',
      end: ' --!>'
    },
    multi: {
      start: '<!--',
      line: '\t',
      end: '--!>'
    }
  },
  'source.yaml': {
    single: {
      start: '# ',
      end: ''
    },
    multi: {
      start: '# ---',
      line: '# ',
      end: '# ---'
    }
  }
}

/**
 * Evaluates the given value and formats into a singleline or multiline comment.
 * @param {String} value
 * @param {String} scope: defaults to php.
 * @returns String
 */
const formatComment = (value = '', scope = 'text.html.php') => {
  const cf = commentFormat[scope]

  if (!isset(value) || !isset(cf)) {
    return ''
  }

  if (/\r|\n/.exec(value)) {
    // Multline.
    return [
      cf.multi.start + '\n' + cf.multi.line,
      value.trim().replace(
        /(?:\r\n|\r|\n)/g,
        '\n' + cf.multi.line
      ),
      '\n' + cf.multi.end,
      '\n'
    ].join('')
  } else {
    // Singleline.
    return [
      cf.single.start,
      value.trim(),
      cf.single.end,
      '\n'
    ].join('')
  }
}

/**
 * Formats the body snippet based on various conditiions.
 * @returns String|null
 */
const formatBody = (snippet) => {
  const body = snippet.body
  if (body.includes('${0}')) {
    return body
  }
  return body + '${0}'
}

/**
 * Format snippet.
 * @param RAW
 * @param snippet
 * @returns Object
 */
const formatSnippet = (RAW, snippet) => {
  snippet = snippet ? snippet : RAW

  let firstComposerName = 'framework'
  let firstComposerVersion = '3.0+'

  const { composer, node } = isset(snippet.conditions) ? snippet.conditions : {}

  if (isset(composer)) {
    if (Array.isArray(composer)) {
      firstComposerName = formatName(composer[0])
      firstComposerVersion = defaults.composerVersion
    } else {
      firstComposerName = formatName(Object.keys(composer)[0])
      firstComposerVersion = Object.values(composer)[0]
    }
  }

  const conditionsScope = scope.format(
    isset(snippet.conditions.scope) ? snippet.conditions.scope : scope.default
  )

  const conditionsLanguage = language.format(
    isset(snippet.conditions.language) ? snippet.conditions.language : snippet.conditions.scope
  )

  return {
    name: snippet.name,

    // Debug output
    // RAW returns the parent level snippet
    RAW: RAW,
    // original returns variant level if available
    // otherwise it returns the parent level
    original: snippet,
    // End debug output

    conditions: {
      // Add all conditions.
      ...snippet.conditions,
      // Reformat the following conditions.
      prefix: formatPrefix(
        snippet.name,
        snippet.prefix,
        firstComposerName,
        firstComposerVersion
      ),
      scope: conditionsScope,
      language: conditionsLanguage,
      composer: formatPackages(composer),
      node: formatPackages(node)
    },
    suggestion: {
      // snippet: formatBody(snippet),
      body: formatBody(snippet),
      comment: formatComment(
        snippet.comment,
        conditionsScope[0]
      ),
      name: snippet.name,
      information: [
        firstComposerName,
        firstComposerVersion
      ].join(' '),
      description: snippet.description ? snippet.description : snippet.name,
      url: snippet.url,
      type: 'snippet',
      className: 'suggestion-ss',
      useItems: split(snippet.useItems)
    }
  }
}

module.exports = (snippets = {}) => {
  if (allSnippetsStore) {
    return allSnippetsStore
  }

  snippets = merge(
    defaultSnippets,
    snippets
  )

  const output = []

  for (const name in snippets) {
    if (name in snippets) {
      const snippet = snippets[name]
      snippet.name = name

      // Check if snippet has multiple scopes and a comment.
      // In this case we need to create separate variants for each scope.
      if (
        isset(snippet.conditions) &&
        isset(snippet.conditions.scope) &&
        isset(snippet.comment)
      ) {
        const conditionsScope = scope.format(snippet.conditions.scope)

        if (conditionsScope.length >= 2) {
          conditionsScope.forEach(scope => {
            if ('variants' in snippet) {
              snippet.variants.push({
                conditions: {
                  scope: scope
                }
              })
            } else {
              snippet.variants = [
                {
                  conditions: {
                    scope: scope
                  }
                }
              ]
            }
          })
        }
      }

      if (isset(snippet.variants)) {
        for (const variant in snippet.variants) {
          output.push(formatSnippet(
            // Add RAW snippet.
            snippet,
            // Merge parent snippet with variant
            merge(
              snippet,
              snippet.variants[variant]
            )
          ))
        }
      } else {
        output.push(formatSnippet(
          snippet
        ))
      }
    }
  }

  // Store output so we don't need to iterate through snippets again.
  allSnippetsStore = output.sort((a, b) => a.name.localeCompare(b.name))

  return output
}
