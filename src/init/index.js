const readConfig = require('./readConfig')
const readComposerPackages = require('./readComposerPackages')
const readNodePackages = require('./readNodePackages')
const formatSnippets = require('./formatSnippets')

module.exports = (options) => {
  const data = {
    ...readConfig(options.configPaths),
    ...readComposerPackages(options.composerPaths),
    ...readNodePackages(options.nodePaths),
    ...options.config
  }

  data.snippets = formatSnippets(data.snippets)

  return data
}
