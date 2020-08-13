const { config } = require('../finder')
const fs = require('fs')
const YAML = require('yaml-parser')
const merge = require('deepmerge')
const isset = require('isset')

module.exports = (paths) => {
  let output = {}
  config(paths).forEach(configPath => {
    const contents = fs.readFileSync(
      configPath,
      {
        encoding: 'utf-8'
      }
    ).replace(
      // Remove anything between `---` as it invalidates the parser and
      // has no value in our case.
      /(\-{3,}).+?(\1)/gs,
      ''
    )

    const parsedContents = YAML.safeLoad(
      contents,
      {
        filename: configPath,
        json: true,
        skipInvalid: true,
        noRefs: true
      }
    )

    if (isset(parsedContents)) {
      output = merge(
        output,
        parsedContents
      )
    }
  })

  return output
}
