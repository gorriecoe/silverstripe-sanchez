const merge = require('deepmerge')
const finder = require('../finder')
const readSanchez = require('./readSanchez')
const readComposerPackages = require('./readComposerPackages')
const readNodePackages = require('./readNodePackages')
const snippets = require('../snippets')

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

  data.snippets = snippets.format.formatSnippetsList(merge(
    snippets.defaults,
    data.snippets
  ))

  return data
}
