const isset = require('isset')

module.exports = (config) => {
  if (
    isset(config) &&
    isset(config['SilverStripe\\View\\SSViewer']),
    isset(config['SilverStripe\\View\\SSViewer'].themes)
  ) {
    return config['SilverStripe\\View\\SSViewer'].themes.filter(themeName => {
      // Remove any variable theme
      return !themeName.startsWith('$')
    })
  }
  return []
}
