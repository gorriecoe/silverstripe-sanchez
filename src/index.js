const snippets = require('./snippets')
const init = require('./init')
const injection = require('./injection')
const { include, themeCascade, themedCSS, themedJavascript } = require('./theming')
const config = require('./config')

module.exports = class {
  constructor (options) {
    this.data = init(options)
  }

  readConfig () {
    this.data.config = config(this.data.rootPaths)
  }

  indexTheme () {
    if (!this.data.config) {
      this.readConfig()
    }

    this.data.themeCascade = themeCascade(this.data.config)
    this.data.includes = include(
      this.data.rootPaths,
      this.data.themeCascade
    )
    this.data.themedCSS = themedCSS(
      this.data.rootPaths,
      this.data.themeCascade
    )
    this.data.themedJavascript = themedJavascript(
      this.data.rootPaths,
      this.data.themeCascade
    )
  }

  buildThemeSnippets () {
    if (!this.data.themeCascade) {
      this.indexTheme()
    }

    this.data.snippets = this.data.snippets.concat([
      ...this.data.includes,
      ...this.data.themedCSS,
      ...this.data.themedJavascript,
    ].map(snippet => {
      snippet.name = `${snippet.type} ${snippet.name}`
      snippet.prefix = snippet.type + snippet.name
      snippet.conditions = {
        scope: '.text.html.ss',
        language: 'ss'
      }
      return snippets.format.formatSnippet(snippet)
    }))
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
      this.data.nodePackages,
      this.data.noPackagesBehavior
    )
  }

  getUseItemLoc ({ text, useItems }) {
    return injection.getUseItemLoc(
      text,
      useItems,
      this.data.useItems
    )
  }

  getDefinitionPath ({ type, definition }) {
    if (!this.data.themeCascade) {
      this.indexTheme()
    }
    
    if(!definition) {
      return null
    }

    const definitionAlt = definition.replace(/\//g, '\\\\')
    let paths = []
    switch (type) {
      case 'include':
        paths = this.data.includes
        break
      case 'themedCSS':
        paths = this.data.themedCSS
        break
      case 'themedJavascript':
        paths = this.data.themedJavascript
        break
      default:
        return null
    }

    const foundDefinition = paths.find(p => {
      return p.definition === definition || p.definition === definitionAlt
    })

    if (foundDefinition) {
      return foundDefinition.path
    }
  }
}
