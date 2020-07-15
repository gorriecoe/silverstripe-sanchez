/**
 * Return a array of locations for use item namespacing to be placed.
 */

const Engine = require('php-parser')
const isset = require('isset')

const parser = new Engine({
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
        criterion in criteria &&
        criterion in AST &&
        AST[criterion] === criteria[criterion]
      )) {
        pass = false
      }
    }
    if (pass) return AST
  }
  for (const key in AST) {
    if (key in AST && AST[key] !== AST) {
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
    if (isset(node) && 'loc' in node) {
      return {
        body: body,
        line: node.loc.start.line - 1
      }
    }

    node = find(AST, {
      kind: 'useItem'
    })

    // If found place below the useItem.
    if (isset(node) && 'loc' in node) {
      return {
        body: '\n' + body + '\n',
        line: node.loc.start.line + 1
      }
    }

    // Lastly place below '<?php' if nothing else is found.
    node = find(AST, {
      kind: 'program'
    })
    if (isset(node) && 'loc' in node) {
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
