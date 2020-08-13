const test = require('ava')
const Enginez = require('./src')
const { sanchez } = require('./src/finder')
const SS4Path = './_dev/test/ss4'

const runInit = (path) => {
  return new Enginez({
    rootPaths: [
      path
    ],
    config: {
      comments: true,
      useItems: true
    }
  })
}

// @todo Build proper tests

test('config', t => {
  const sanchez = runInit(SS4Path)
  sanchez.readConfig()
  console.log(sanchez.data.config);
	t.pass();
})

test('theme', t => {
  const sanchez = runInit(SS4Path)
  sanchez.indexTheme()
  console.log(
    sanchez.data.includes,
    sanchez.data.themedCSS,
    sanchez.data.themedJavascript
  )
	t.pass();
})

test('themesnippets', t => {
  const sanchez = runInit(SS4Path)
  sanchez.buildThemeSnippets()
  console.log(
    sanchez.snippets({
      prefix: 'theme',
      language: 'ss'
    })
  )
	t.pass();
})

test('definition', t => {
  const sanchez = runInit(SS4Path)
  sanchez.readConfig()
  sanchez.indexTheme()
  console.log(
    sanchez.getDefinitionPath({
      type: 'include',
      definition: 'SilverStripe\\Blog\\PostSummary'
    }),
    sanchez.getDefinitionPath({
      type: 'include',
      definition: 'SilverStripe/Blog/PostSummary'
    }),
    sanchez.getDefinitionPath({
      type: 'themedCSS',
      definition: 'app'
    }),
    sanchez.getDefinitionPath({
      type: 'themedJavascript',
      definition: 'app'
    })
  )
	t.pass();
})
