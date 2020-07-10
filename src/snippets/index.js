const matchPackages = require('./package')
const matchPrefix = require('./prefix')
const matchScope = require('./scope')

module.exports = (
  snippets = [],
  scope = '',
  prefix = '',
  composerPackages = [],
  nodePackages = []
) => {
  return snippets.filter(snippet => {
    const conditions = snippet.conditions
    return matchPrefix(conditions.prefix, prefix) &
          matchScope(conditions.scope, scope) &
          matchPackages(conditions.composer, composerPackages) &
          matchPackages(conditions.node, nodePackages)
  })
}
