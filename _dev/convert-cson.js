const CSON = require('cson')
const settings = require('./settings')
const fs = require('fs')
const path = require('path')

for (const key in settings) {
  if (settings.hasOwnProperty(key)) {
    const json = settings[key]
    const filePath = path.resolve(
      'resources/cson/',
      key + '.cson'
    )
    const result = CSON.createCSONString(
      json
    )

    if (result instanceof Error) {
      console.log(result.stack)
    } else {
      fs.writeFile(filePath, result, (error) => {
        if (error) {
          return console.log('Convert cson - Failed!', error)
        }
        console.log('Convert cson - Done!')
      })
    }
  }
}
