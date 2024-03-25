import { test, expect } from 'vitest'
import { deepMerge } from '..'

test('shallow merge', () => {
  const merged = deepMerge({ name: 'Siroj' }, { github: 'rojsiroj' })

  expect(merged).toEqual({
    name: 'Siroj',
    github: 'rojsiroj'
  })
})

test('shallow merge with overlaps', () => {
  const merged = deepMerge({ name: 'Siroj', github: 'rojsiroj' }, { twitter: 'rojsiroj_' })

  expect(merged).toEqual({
    name: 'Siroj',
    github: 'rojsiroj',
    twitter: 'rojsiroj_'
  })
})

test('deep merge with overlaps', () => {
  const merged = deepMerge(
    { name: 'Siroj', accounts: { github: 'rojsiroj' }, languages: ['javascript'] },
    { accounts: { twitter: 'rojsiroj_' }, languages: ['typescript', 'vue'] }
  )

  expect(merged).toMatchSnapshot()
})

test('shallow merge with arrays', () => {
  const merged = deepMerge(['vue', 'react'], ['svelte', 'solid'])

  expect(merged).toEqual(['vue', 'react', 'svelte', 'solid'])
})

test('throws errors on merging to different types', () => {
  expect(() => deepMerge(['foo', 'bar'], { foo: 'bar' })).toThrowError(
    'cannot merge two different types'
  )
})
