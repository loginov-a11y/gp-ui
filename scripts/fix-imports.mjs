// Добавляет явные импорты vue / vue-i18n / vue-router в файлы пакета.
// В Nuxt-проекте эти API автоимпортировались; в библиотеке — нет.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const SRC = new URL('../src', import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, '$1')

const VUE_RUNTIME = [
  'ref', 'computed', 'watch', 'watchEffect', 'watchPostEffect', 'watchSyncEffect',
  'unref', 'toRef', 'toRefs', 'reactive', 'readonly', 'shallowRef', 'shallowReactive',
  'shallowReadonly', 'triggerRef', 'toValue', 'customRef', 'markRaw',
  'isRef', 'isReactive', 'isReadonly', 'isProxy',
  'onMounted', 'onUnmounted', 'onBeforeMount', 'onBeforeUnmount', 'onUpdated',
  'onBeforeUpdate', 'onActivated', 'onDeactivated', 'onErrorCaptured',
  'nextTick', 'inject', 'provide', 'getCurrentInstance', 'useAttrs', 'useSlots',
  'h', 'resolveComponent', 'defineComponent', 'defineAsyncComponent', 'toDisplayString',
  'mergeProps', 'cloneVNode', 'createVNode', 'useCssModule', 'useTemplateRef',
  'onServerPrefetch', 'effectScope', 'getCurrentScope', 'onScopeDispose'
]
const VUE_TYPES = [
  'Ref', 'ComputedRef', 'MaybeRef', 'MaybeRefOrGetter', 'PropType', 'Component',
  'Slots', 'VNode', 'CSSProperties', 'ComponentPublicInstance', 'InjectionKey',
  'ExtractPropTypes', 'StyleValue', 'WatchStopHandle'
]

const walk = (dir, out = []) => {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) walk(p, out)
    else if (/\.(vue|ts)$/.test(name)) out.push(p)
  }
  return out
}

const files = walk(SRC)
const report = []

for (const file of files) {
  const content = readFileSync(file, 'utf8')

  const blocks = []
  if (file.endsWith('.vue')) {
    const re = /<script[^>]*>/g
    let m
    while ((m = re.exec(content))) {
      const end = content.indexOf('</script>', m.index)
      if (end === -1) continue
      blocks.push({ tagEnd: m.index + m[0].length, end })
    }
  } else {
    blocks.push({ tagEnd: 0, end: content.length })
  }
  if (!blocks.length) continue

  let newContent = content
  for (const block of [...blocks].reverse()) {
    const { tagEnd, end } = block
    const code = newContent.slice(tagEnd, end)

    const declared = new Set()
    for (const im of code.matchAll(/import\s+(?:type\s+)?(?:\{([^}]*)\}|(\w+)|\*\s+as\s+(\w+))/g)) {
      if (im[1]) for (const part of im[1].split(',')) {
        const name = part.trim().replace(/^type\s+/, '').split(/\s+as\s+/).pop()?.trim()
        if (name) declared.add(name)
      }
      if (im[2]) declared.add(im[2])
      if (im[3]) declared.add(im[3])
    }
    for (const d of code.matchAll(/\b(?:const|let|var|function|class|interface|type|enum)\s+(\w+)/g)) {
      declared.add(d[1])
    }

    const needVue = VUE_RUNTIME.filter((n) => !declared.has(n) && new RegExp(`\\b${n}\\b`).test(code))
    const needTypes = VUE_TYPES.filter((n) => !declared.has(n) && new RegExp(`\\b${n}\\b`).test(code))
    const needI18n = !declared.has('useI18n') && /\buseI18n\b/.test(code)
    const needRouter = ['useRoute', 'useRouter'].filter(
      (n) => !declared.has(n) && new RegExp(`\\b${n}\\b`).test(code)
    )

    let injected = ''
    if (needVue.length) injected += `import { ${needVue.join(', ')} } from 'vue'\n`
    if (needTypes.length) injected += `import type { ${needTypes.join(', ')} } from 'vue'\n`
    if (needI18n) injected += `import { useI18n } from 'vue-i18n'\n`
    if (needRouter.length) injected += `import { ${needRouter.join(', ')} } from 'vue-router'\n`

    if (injected) {
      const insertAt = code.startsWith('\n') ? 1 : 0
      newContent = newContent.slice(0, tagEnd + insertAt) + injected + newContent.slice(tagEnd + insertAt)
      report.push(`${file.replace(SRC, '')}`)
    }
  }

  if (newContent !== content) writeFileSync(file, newContent)
}

console.log(`Patched ${report.length} files`)
