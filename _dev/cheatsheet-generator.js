const json2md = require('json2md')
const Enginez = require('../src')
const fs = require('fs')
const path = require('path')

module.exports = testtt = () => {
  const sanchez = new Enginez({
    rootPaths: ['']
  })

  snippetsmd = sanchez.allSnippets.map(snippet => {
    let output = [
      { h2: snippet.suggestion.name },
      { h3: 'Conditions' },
      { h4: 'Prefix or Autocomplete' },
      { p: snippet.conditions.prefix }
    ]

    if (snippet.conditions.composer) {
      output = output.concat([
        { h4: 'Composer' },
        { ul: Object.keys(snippet.conditions.composer) },
      ])
    }

    if (snippet.conditions.language) {
      output = output.concat([
        { h4: 'Language' },
        { ul: snippet.conditions.language },
      ])
    }

    output.push({ h3: 'Content' })

    if (snippet.suggestion.useItems.length) {
      output.push({ code: {
        content: snippet.suggestion.useItems.map(useitem => {
          return `use ${useitem}\n`
        })
      }})
    }

    if (snippet.suggestion.comment) {
      output.push({ code: {
        content: snippet.suggestion.comment
      }})
    }

    if (snippet.suggestion.body) {
      output.push({ code: {
        content: snippet.suggestion.body
      }})
    }

    return output
  })

  md = json2md([
    { h1: 'Snippets' },
    ...snippetsmd
  ])

  const filePath = path.resolve(
    '../resources','snippets.md'
  )

  if (md instanceof Error) {
    console.log(md.stack)
  } else {
    fs.writeFile(filePath, md, (error) => {
      if (error) {
        return console.log('Snippets generator - Failed!', error)
      }
      console.log('Snippets generator - Done!')
    })
  }
}

testtt()
