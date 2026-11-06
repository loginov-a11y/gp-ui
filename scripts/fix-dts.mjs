// Переписывает алиас '~/' в .d.ts на относительные пути до корня dist.
// В исходниках '~' = src/, в dist та же структура — '~' = './' от корня.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join, relative, dirname } from 'node:path'

const DIST = new URL('../dist', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')

const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (name.endsWith('.d.ts')) out.push(p)
  }
  return out
}

let patched = 0
for (const file of walk(DIST)) {
  const content = readFileSync(file, 'utf8')
  if (!content.includes("~/")) continue

  const relRoot = relative(dirname(file), DIST).replace(/\\/g, '/') || '.'
  const fixed = content.replace(/(['"])~\//g, `$1${relRoot}/`)
  writeFileSync(file, fixed)
  patched++
}

console.log(`fix-dts: patched ${patched} files`)
