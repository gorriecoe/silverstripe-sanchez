const { search } = require('../finder')
const merge = require('deepmerge')
const isset = require('isset')

module.exports = (paths, themes) => {
  let output = []
  themes.forEach(theme => {
    output = merge(
      output,
      search(paths, `themes/${theme}/javascript/*.js`).map(jsPath => {
        let name = /([a-zA-Z_]*)\.js$/.exec(jsPath)
        if (isset(name)) {
          name = name[1]
          return {
            name: name.toLowerCase(),
            path: jsPath,
            definition: name,
            body: `<% themedJavascript('${name}') %>`
          }
        }

      })
    )
  })
  return output
}
