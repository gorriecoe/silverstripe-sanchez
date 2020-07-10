const parse = require('parse-config-file')
const merge = require('deepmerge')
const homedir = require('os').homedir()
const path = require('path')
const fs = require('fs')

let data = {
  comments: true,
  useItems: true,
  snippets: {}
}

const filename = '.silverstripe_sanchez'

module.exports = (paths = []) => {
  // Always check the home directory by default.
  paths.unshift(homedir)

  // Find all files called .silverstripe_sanchez and parse the data.
  // We accept cson, json or yml formats
  for (const key in paths) {
    if (paths.hasOwnProperty(key)) {
      const filepath = path.resolve(path.join(
        paths[key],
        filename
      ))

      if (fs.existsSync(filepath)) {
        data = merge(
          data,
          parse(
            fs.readFileSync(
              filepath,
              {
                encoding: 'utf-8'
              }
            )
          )
        )
      }
    }
  }

  return data
}
