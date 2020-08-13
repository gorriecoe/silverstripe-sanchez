const parse = require('parse-config-file')
const merge = require('deepmerge')
const path = require('path')
const fs = require('fs')

let data = {
  comments: true,
  useItems: true,
  noPackagesBehavior: true,
  snippets: {}
}

module.exports = (paths = []) => {
  // Find all files called .silverstripe_sanchez and parse the data.
  // We accept cson, json or yml formats
  for (const filepath in paths) {
    if (filepath in paths) {
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
