module.exports = (options) => {
  return {
    ...require('./readConfig')(options.configPaths),
    ...require('./readComposerPackages')(options.composerPaths),
    ...require('./readNodePackages')(options.nodePaths),
    ...options.config
  }
}
