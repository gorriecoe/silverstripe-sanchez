const glob = require("glob")
const path = require('path')
const homedir = require('os').homedir()

const options = {
  ignore: [
    'node_modules',
    'bower_components'
  ]
}

const search = (paths, fileName) => {
  let foundFiles = []
  paths.forEach(filePath => {
    foundFiles = foundFiles.concat(
      glob.sync(
        path.join(filePath, '**' ,fileName),
        options
      )
    )
  })
  return foundFiles
}

const config = (paths) => {
  const filename = '.silverstripe_sanchez'
  return [
    path.join(homedir, filename),
    ...search(paths, filename)
  ]
}

const composer = (paths) => {
  return search(paths, 'composer.lock')
}

const node = (paths) => {
  return search(paths, 'package-lock.json')
}

module.exports = {
  search,
  config,
  composer,
  node
}
