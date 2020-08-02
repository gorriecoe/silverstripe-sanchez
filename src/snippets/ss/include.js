const { search } = require('../../finder')

module.exports = testett = (paths) => {
  return search(paths, 'Includes/*.ss').map(includePath => {
    const include = includePath.replace(
      // Remove /themes/, anything before it and the theme name.
      // Remove /vendor/ and anything before it.
      // Remove /templates, /Includes and anything between them.
      // Remove .ss
      /^.*\/themes\/.*\/|^.*\/vendor\/|\/templates.*\/Includes|\.ss$/g,
      ''
    )
    console.log(`<% include ${include} %>`);
    return {
      conditions: {
        prefix: include
      },
      suggestion: {
        body: `<% include ${include} %>`
      }
    }
  })
}

testett(['/Users/gorrie/Projects/mwlr'])
