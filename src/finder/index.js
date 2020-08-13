const glob = require("glob")
const path = require('path')
const homedir = require('os').homedir()
const merge = require('deepmerge')

const defaultOptions = {
  ignore: [
    '**/node_modules/**',
    '**/bower_components/**'
  ]
}

const search = (paths, fileName, options = {}) => {
  let foundFiles = []
  options = merge(
    defaultOptions,
    options
  )
  paths.forEach(filePath => {
    foundFiles = foundFiles.concat(
      glob.sync(
        path.join(filePath, '**', fileName),
        options
      )
    )
  })
  return foundFiles
}

// Convenience method to find all ss yaml config files.
const config = (paths) => {
  return search(
    paths,
    '_config/*.yml',
    {
      ignore: [
        '**/vendor/**'
      ]
    }
  )
}

// Convenience method to find all composer.lock files.
const composer = (paths) => {
  return search(
    paths,
    'composer.lock',
    {
      ignore: [
        '**/vendor/**'
      ]
    }
  )
}

// Convenience method to find all .silverstripe_sanchez files.
// Including the file in home directory.
const sanchez = (paths) => {
  const filename = '.silverstripe_sanchez'
  return [
    path.join(homedir, filename),
    ...search(paths, filename)
  ]
}

// Convenience method to find all node package-lock.json files.
const node = (paths) => {
  return search(paths, 'package-lock.json')
}

module.exports = {
  search,
  config,
  composer,
  sanchez,
  node
}
