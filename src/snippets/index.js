const matchPackages = require('./package')
const matchPrefix = require('./prefix')
const matchScope = require('./scope')
const matchLanguage = require('./language')

module.exports = (
  snippets = [],
  scope = true,
  prefix = true,
  language = true,
  composerPackages = [],
  nodePackages = []
) => {
  return snippets.filter(snippet => {
    const conditions = snippet.conditions
    return (scope == true || matchScope(conditions.scope, scope)) &
          (prefix == true || matchPrefix(conditions.prefix, prefix)) &
          (language == true || matchLanguage(conditions.language, language)) &
          matchPackages(conditions.composer, composerPackages) &
          matchPackages(conditions.node, nodePackages)
  })
}
