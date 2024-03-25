import { expect, test, vi } from 'vitest'
import { loadConfig } from '..'

vi.mock('fs', async (importOriginal) => {
  const actual = await importOriginal()
  return {
    ...actual,
    readFileSync() {
      return '{"name": "mocked"}'
    }
  }
})
test.skip('with fs', async () => {
  const result = await loadConfig()
  expect(result).toEqual({ name: 'mocked' })
})
