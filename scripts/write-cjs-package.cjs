const fs = require('node:fs')
const path = require('node:path')

const outputDir = path.join(__dirname, '..', 'lib', 'cjs')
const packagePath = path.join(outputDir, 'package.json')

fs.mkdirSync(outputDir, { recursive: true })
fs.writeFileSync(packagePath, `${JSON.stringify({ type: 'commonjs' }, null, 2)}\n`, 'utf8')
