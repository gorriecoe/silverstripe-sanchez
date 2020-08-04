const { search } = require('../finder')

module.exports = (paths) => {
  return search(paths, 'themes/*/js/*.js').map(jsPath => {
    const name = /([a-zA-Z_]*)\.js$/.exec(jsPath)[1]
    return {
      name: name.toLowerCase(),
      path: jsPath,
      definition: name,
      body: `<% themedJavascript(${name}) %>`
    }
  })
}
