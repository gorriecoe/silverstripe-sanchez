const path = require('path')
const fs = require('fs')
const json = require('json-file')
const { version } = require('../utilities')

const filename = 'composer.lock'

module.exports = (paths = []) => {
  let packages = {}

  paths.map(filePath => {
    filePath = path.resolve(
      path.join(filePath, filename)
    )

    if (fs.existsSync(filePath)) {
      const packagesFound = json.read(filePath).data.packages
      for (const package in packagesFound) {
        if (packagesFound.hasOwnProperty(package)) {
          const element = packagesFound[package]
          packages[element.name] = version.format(element.version)
        }
      }
    }
  })

  return {
    composerPackages: packages,
    composerPaths: paths
  }
}
