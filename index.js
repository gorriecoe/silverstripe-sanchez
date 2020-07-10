const snippets =  require('./src/snippets')
const init = require('./src/init')
const injection =  require('./src/injection')

module.exports = class {
  data = {}

  constructor (options) {
    this.data = init(options)
  }

  snippets ({scope, prefix}) {
    return snippets(
      this.data.snippets,
      scope,
      prefix,
      this.data.composerPackages,
      this.data.nodePackages
    )
  }

  getUseItemLoc ({text, useItems}) {
    return injection.getUseItemLoc(
      text,
      useItems,
      this.data.useItems
    )
  }
}
