/**
 * Build and format a full list of snippets from the defaults list and
 * supplied list,
 */

const isset = require('isset')
const merge = require('deepmerge')
const { split, version, scope } = require('../utilities')
const defaultSnippets = require('./defaults')

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
    packages.forEach(package => {
      output[package] = version.range('0')
    })
  } else {
    for (const package in packages) {
      if (packages.hasOwnProperty(package)) {
        output[package] = version.range(packages[package])
      }
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
const formatPrefix = (name, prefix, moduleName, moduleVersion) => {
  prefix = prefix ? prefix : name
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
 * Evaluates the given value  and formats into a singleline or multiline php comment.
 * TODO: Evaluate if scope is ss and output appropriately.
 * @returns String|null
 */
const formatComment = (value) => {
  if (!isset(value)) {
    return ''
  }

  if (/\r|\n/.exec(value)) {
    // Multline php comment.
    return [
      '/**\n * ',
      value.trim().replace(/(?:\r\n|\r|\n)/g, '\n * '),
      '\n */\n'
    ].join('')
  } else {
    // Singleline php comment.
    return '// ' + value.trim() + '\n'
  }
}

/**
 * Formats the body snippet based on various conditiions.
 * @returns String|null
 */
const formatBody = (snippet) => {
  const comment = formatComment(snippet.comment),
    body = snippet.body
  if (body.includes('${0}')) {
    return comment + body
  }
  return comment + body + '${0}'
}

/**
 * Format snippet.
 * @param RAW
 * @param snippet
 * @returns Object
 */
const formatSnippet = (RAW, snippet) => {
  snippet = snippet ? snippet : RAW

  // Assume some defaults
  let firstComposerName = 'framework',
    firstComposerVersion = '3.0+',
    defaultComposerVersion = '0.0+',
    defaultScope = '.text.html.php, .text.html.ss',
    comment = formatComment(snippet.comment)

  let { composer, node } = isset(snippet.conditions) ? snippet.conditions : {}

  if (isset(composer)) {
    if (Array.isArray(composer)) {
      firstComposerName = formatName(composer[0])
      firstComposerVersion = defaultComposerVersion
    } else {
      firstComposerName = formatName(Object.keys(composer)[0])
      firstComposerVersion = Object.values(composer)[0]
    }
  }

  conditionsScope = isset(snippet.conditions.scope) ? snippet.conditions.scope: defaultScope

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
      scope: scope.format(conditionsScope),
      composer: formatPackages(composer),
      node: formatPackages(node)
    },
    suggestion: {
      snippet: formatBody(snippet),
      body: formatBody(snippet),
      comment: comment,
      name: snippet.name,
      information: [
        firstComposerName,
        firstComposerVersion
      ].join(' '),
      description: snippet.description ? snippet.description : snippet.name,
      url: snippet.url,
      type: 'snippet',
      className: 'suggestion-ss',
      namespaces: split(snippet.namespaces)
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
    if (snippets.hasOwnProperty(name)) {
      const snippet = snippets[name]
      snippet.name = name

      if (isset(snippet.variants)) {
        for (let variant in snippet.variants) {
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
