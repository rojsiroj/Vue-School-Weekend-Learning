import { readFileSync, existsSync } from 'fs'

export function deepMerge(a, b) {
  if (Array.isArray(a) && Array.isArray(b)) {
    return [...a, ...b]
  }

  if (Array.isArray(a) || Array.isArray(b) || typeof a !== 'object') {
    throw new Error('cannot merge two different types')
  }

  const merged = { ...a }
  for (const key of Object.keys(b)) {
    if (typeof a[key] === 'object' || Array.isArray(a[key])) merged[key] = deepMerge(a[key], b[key])
    else merged[key] = b[key]
  }
  return merged
}

export function greeting(a: string) {
  console.log('Hello, ' + a)
}

export function loadConfig() {
  if (!existsSync('../config.json')) return 'undefined'
  return JSON.parse(readFileSync('../config.json', 'utf-8'))
}
