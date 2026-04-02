import { execFileSync } from 'node:child_process'
import { mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { describe, expect, it } from 'vitest'

const testDir = fileURLToPath(new URL('.', import.meta.url))
const projectRoot = resolve(testDir, '..')
const esmEntry = pathToFileURL(join(projectRoot, 'lib', 'esm', 'index.js')).href
const cjsEntry = join(projectRoot, 'lib', 'cjs', 'index.js')

describe('package interop', () => {
  it('can be consumed via ESM import and CJS require', () => {
    const dir = mkdtempSync(join(tmpdir(), 'content-slug-'))
    const esmScript = join(dir, 'esm.mjs')
    const cjsScript = join(dir, 'cjs.cjs')

    writeFileSync(
      esmScript,
      `import { toContentSlug } from ${JSON.stringify(esmEntry)};\n` +
        `console.log(toContentSlug('j\\'ai mangé des pommes'));\n`,
      'utf8'
    )

    writeFileSync(
      cjsScript,
      `const { toContentSlug } = require(${JSON.stringify(cjsEntry)});\n` +
        `console.log(toContentSlug('j\\'ai mangé des pommes'));\n`,
      'utf8'
    )

    const esmResult = execFileSync('node', [esmScript], {
      encoding: 'utf8',
    }).trim()
    const cjsResult = execFileSync('node', [cjsScript], {
      encoding: 'utf8',
    }).trim()

    expect(esmResult).toBe('mange-pommes')
    expect(cjsResult).toBe('mange-pommes')
  })
})
