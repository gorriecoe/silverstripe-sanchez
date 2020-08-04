const { search } = require('../finder')

module.exports = (paths) => {
  return search(paths, 'themes/*/css/*.css').map(cssPath => {
    const name = /([a-zA-Z_]*)\.ss$/.exec(cssPath)[1]
    return {
      name: name.toLowerCase(),
      path: cssPath,
      definition: name,
      body: `<% themedCSS(${name}) %>`
    }
  })
}
