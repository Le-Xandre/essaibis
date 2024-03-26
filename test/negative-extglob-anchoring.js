const t = require('tap')
const mm = require('../').minimatch
const pattern = 'a/b/*/!(bar)/*'
const nope = 'a/b/c/bar/x'
const yup = 'a/b/c/baz/x'
t.equal(mm(nope, pattern), false)
t.equal(mm.makeRe(pattern).test(nope), false)
t.equal(mm(yup, pattern), true)
t.equal(mm.makeRe(pattern).test(yup), true)
