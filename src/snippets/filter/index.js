const matchPackages = require('./matchPackage')
const matchPrefix = require('./matchPrefix')
const matchScope = require('./matchScope')
const matchLanguage = require('./matchLanguage')

module.exports = (
  snippets = [],
  scope = true,
  prefix = true,
  language = true,
  composerPackages = [],
  nodePackages = [],
  noPackagesBehavior
) => {
  return snippets.filter(snippet => {
    const conditions = snippet.conditions
    return (scope === true || matchScope(conditions.scope, scope)) &
          (prefix === true || matchPrefix(conditions.prefix, prefix)) &
          (language === true || matchLanguage(conditions.language, language)) &
          matchPackages(conditions.composer, composerPackages, noPackagesBehavior) &
          matchPackages(conditions.node, nodePackages, noPackagesBehavior)
  })
}
