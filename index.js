const snippets = require('./src/snippets')
const init = require('./src/init')
const injection = require('./src/injection')

module.exports = class {
  constructor (options) {
    this.data = init(options)
  }

  get allSnippets () {
    return this.data.snippets
  }

  snippets ({
    scope,
    prefix,
    language
  }) {
    return snippets(
      this.data.snippets,
      scope,
      prefix,
      language,
      this.data.composerPackages,
      this.data.nodePackages
    )
  }

  getUseItemLoc ({ text, useItems }) {
    return injection.getUseItemLoc(
      text,
      useItems,
      this.data.useItems
    )
  }
}
