const path = require('path')
const read = require('read-installed')

module.exports = (paths = []) => {
  let packages = []
  let promises = paths.map(filePath => {
    return new Promise((resolve, reject) => {
      filePath = path.resolve(filePath)
      read(filePath, {}, (error, data) => {
        if (error) return reject(error)
        packages = packages.concat(Object.keys(data.dependencies))
        resolve()
      })
    })
  })

  return Promise.all(promises)
    .then(() => { return {
      nodePackages: packages,
      nodePaths: paths
    }})
    .catch(console.error)
}
