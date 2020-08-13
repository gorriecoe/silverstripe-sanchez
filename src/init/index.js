const finder = require('../finder')
const readSanchez = require('./readSanchez')
const readComposerPackages = require('./readComposerPackages')
const readNodePackages = require('./readNodePackages')
const formatSnippets = require('../snippets/format')

module.exports = (options) => {
  const data = {
    rootPaths: options.rootPaths,
    ...readSanchez(
      finder.sanchez(options.rootPaths)
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
