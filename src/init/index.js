const finder = require('../finder')
const readConfig = require('./readConfig')
const readComposerPackages = require('./readComposerPackages')
const readNodePackages = require('./readNodePackages')
const formatSnippets = require('../snippets/format')

module.exports = (options) => {
  const data = {
    rootPaths: options.rootPaths,
    ...readConfig(
      finder.config(options.rootPaths)
    ),
    ...readComposerPackages(
      finder.composer(options.rootPaths)
    ),
    ...readNodePackages(
      finder.node(options.rootPaths)
    ),
    ...options.config
  }

  data.snippets = formatSnippets(data.snippets)

  return data
}
