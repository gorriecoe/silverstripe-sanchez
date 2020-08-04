const { search } = require('../finder')

module.exports = (paths) => {
  return search(paths, 'Includes/*.ss').map(includePath => {
    const include = includePath.replace(
      // Remove /themes/, anything before it and the theme name.
      // Remove /vendor/ and anything before it.
      // Remove /templates, /Includes and anything between them.
      // Remove .ss
      /^.*\/themes\/.*\/|^.*\/vendor\/|\/templates.*\/Includes|\.ss$/g,
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
}
