const path = require('path')
const fs = require('fs')
const json = require('json-file')
const { version } = require('../utilities')

module.exports = (paths = []) => {
  const packages = {}

  paths.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const packagesFound = json.read(filePath).data.packages
      for (const packageFound in packagesFound) {
        const element = packagesFound[packageFound]
        packages[element.name] = version.format(element.version)
      }
    }
  })

  return {
    composerPackages: packages,
    composerPaths: paths
  }
}
