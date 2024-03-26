const t = require('tap')
const { Minimatch, GLOBSTAR } = require('../')

const patterns = []
for (const a of ['**', '**/**', '**/**/**']) {
  for (const b of ['**', '**/**', '**/**/**']) {
    for (const c of ['**', '**/**', '**/**/**']) {
      patterns.push(`x/${a}/y/${b}/z/${c}`)
    }
  }
}

for (const m of patterns.map(p => new Minimatch(p))) {
  t.same(m.globParts, [['x', '**', 'y', '**', 'z', '**']])
}
