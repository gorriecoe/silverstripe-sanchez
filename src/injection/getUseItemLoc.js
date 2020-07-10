/**
 * Return a array of locations for use item namespacing to be placed.
 */

const engine = require('php-parser')
const isset = require('isset')

const parser = new engine({
  parser: {
    debug: false,
    locations: true,
    extractDoc: false,
    suppressErrors: true
  },
  ast: {
    withPositions: true
  }
})

/**
 * Finds the specified node matching the given criteria.
 * @param {Array} nodes
 * @param {Object} criteria
 * @return {Array}
 */
const find = (AST, criteria) => {
  let result
  if (typeof AST !== 'object') {
    return null
  }
  if (Array.isArray(AST)) {
    result = AST.forEach(AST => find(AST, criteria))
    if (result) return result
  }
  if (AST) {
    let pass = true
    for (const criterion in criteria) {
      if (!(
        criteria.hasOwnProperty(criterion) &&
        AST.hasOwnProperty(criterion) &&
        AST[criterion] === criteria[criterion]
      )) {
        pass = false
      }
    }
    if (pass) return AST
  }
  for (const key in AST) {
    if (AST.hasOwnProperty(key) && AST[key] !== AST) {
      result = find(AST[key], criteria)
      if (result) return result
    }
  }
  return null
}

module.exports = (
  contents = '',
  useItems = [],
  allowUseItems = true
) => {
  if (!allowUseItems) {
    return []
  }

  const AST = parser.parseCode(contents)

  return useItems.map(useItem => {
    const body = 'use ' + useItem + ';\n'
    let node = null

    node = find(AST, {
      kind: 'useitem',
      name: useItem
    })
    // Already exists.  Nothing to do here.
    if (isset(node)) {
      return null
    }

    node = find(AST, {
      kind: 'usegroup'
    })
    // If found place at the top of the use group.
    if (isset(node) && node.hasOwnProperty('loc')) {
      return {
        body: body,
        line: node.loc.start.line - 1
      }
    }

    node = find(AST, {
      kind: 'useItem'
    })

    // If found place below the useItem.
    if (isset(node) && node.hasOwnProperty('loc')) {
      return {
        body: '\n' + body + '\n',
        line: node.loc.start.line + 1
      }
    }

    // Lastly place below '<?php' if nothing else is found.
    node = find(AST, {
      kind: 'program'
    })
    if (isset(node) && node.hasOwnProperty('loc')) {
      return {
        body: '\n' + body + '\n',
        line: node.loc.start.line
      }
    }
    return null
  }).filter(useItem => {
    return isset(useItem)
  })
}
