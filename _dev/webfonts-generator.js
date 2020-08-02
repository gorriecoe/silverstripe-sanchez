const webfontsGenerator = require('webfonts-generator')
const glob = require('glob')

module.exports = () => {
  glob('resources/icons/*.svg', 'nonull', (error, files) => {
    if (error) {
      console.log('Webfonts generator - Files NOT found', error)
    } else {
      console.log('Webfonts generator - Files found', files)
      webfontsGenerator({
        files: files,
        dest: 'resources/font/',
        fontName: 'ssicon',
        types: [
          'eot',
          'woff2'
        ],
        templateOptions: {
          classPrefix: 'ssicon-',
          baseSelector: '.ssicon'
        },
        html: true
      }, (error) => {
        if (error) {
          console.log('Webfonts generator - Failed!', error)
        } else {
          console.log('Webfonts generator - Done!')
        }
      })
    }
  })
}
