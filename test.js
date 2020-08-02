const test = require('ava')

const runInit = () => {

}

test('foo', t => {
  runInit()
	t.pass();
})

test('bar', async t => {
	const bar = Promise.resolve('bar')
	t.is(await bar, 'bar')
})
