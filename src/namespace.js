/**
 * Return a array of locations for namespacing to be placed.1
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
 * Finds the specified nodes in order to find the specified kind
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
  for(const key in AST) {
      if (AST.hasOwnProperty(key) && AST[key] !== AST) {
        result = find(AST[key], criteria)
        if (result) return result
      }
  }
  return null
}

module.exports = (
  contents = '',
  namespaces = []
) => {
  const AST = parser.parseCode(contents);

  return namespaces.map(namespace => {
    const body = 'use ' + namespace + ';\n'
    let node = null

    node = find(AST, {
      kind: 'useitem',
      name: namespace
    })
    if (isset(node)) {
      return null
    }

    node = find(AST, {
      kind: 'usegroup'
    })
    if (isset(node) && node.hasOwnProperty('loc')) {
      return {
        body: body,
        line: node.loc.start.line - 1,
      }
    }

    node = find(AST, {
      kind: 'namespace'
    })
    if (isset(node) && node.hasOwnProperty('loc')) {
      return {
        body: body,
        line: node.loc.start.line + 1,
      }
    }

    node = find(AST, {
      kind: 'program'
    })
    if (isset(node) && node.hasOwnProperty('loc')) {
      return {
        body: body,
        line: node.loc.start.line + 1,
      }
    }

    return null
  }).filter(namespace => {
    return isset(namespace)
  })
}
