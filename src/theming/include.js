const { search } = require('../finder');
const merge = require('deepmerge');

module.exports = (paths, themes) => {
  let output = []
  // Push vendor to treat it as the last theme to check.
  themes.push(
    'vendor'
  )
  themes.forEach(theme => {
    output = merge(
      output,
      search(paths, theme + '/**/Includes/*.ss').map(includePath => {
        const include = includePath.replace(
          // Remove /templates and anything before it.
          // Remove /themes/, anything before it and the theme name.
          // Remove /vendor/ and anything before it.
          // Remove Includes/
          // Remove .ss
          /^.*\/templates\/|^.*\/themes\/.*\/|^.*\/vendor\/|Includes\/|\.ss$/g,
          ''
        )
        const name = /([a-zA-Z_]*)\.ss$/.exec(includePath)[1].toLowerCase()
        return {
          name: name,
          path: includePath,
          definition: include,
          body: `<% include ${include} %>`
        }
      })
    )
  })
  return output.filter((theme, index, self) => {
    return self.findIndex(t => t.name === theme.name) === index
  })
}

