const snippets = require('./snippets')
const init = require('./init')
const injection = require('./injection')
const finder = require('./finder')

module.exports = class {
  constructor (options) {
    this.data = init(options)
  }

  // Return all snippets with absolutely no filtering.
  get allSnippets () {
    return this.data.snippets
  }

  // Return all snippets only filtering out the composer and node package requirements.
  get snippets () {
    return snippets.filter(
      this.data.snippets,
      true,
      true,
      true,
      this.data.composerPackages,
      this.data.nodePackages
    )
  }

  // Return a list of snippets that match the given filters.
  snippets ({
    scope,
    prefix,
    language
  }) {
    return snippets.filter(
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
