import { expect, test } from 'vitest'
import { useTitle } from '../../src/useTitle'

test('useTitle should work', () => {
  document.title = 'Roj'

  const title = useTitle()
  expect(title.value).toBe('Roj')

  title.value = 'siroj'
  expect(document.title).toBe('siroj')
})
