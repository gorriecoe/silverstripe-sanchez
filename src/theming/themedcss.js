const { search } = require('../finder')
const merge = require('deepmerge')
const isset = require('isset')

module.exports = (paths, themes) => {
  let output = []
  themes.forEach(theme => {
    output = merge(
      output,
      search(paths, `themes/${theme}/css/*.css`).map(cssPath => {
        let name = /([a-zA-Z_]*)\.css$/.exec(cssPath)
        if (isset(name)) {
          name = name[1]
          return {
            name: name.toLowerCase(),
            path: cssPath,
            definition: name,
            body: `<% themedCSS('${name}') %>`
          }
        }
      })
    )
  })
  return output
}
