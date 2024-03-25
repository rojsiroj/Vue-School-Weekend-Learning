import { expect, test } from 'vitest'
import Example from '../../src/Example.vue'
import { mount } from '@vue/test-utils'

test('component', () => {
  expect(Example).toBeDefined()

  const wrapper = mount(Example, {
    props: {
      name: 'Siroj'
    }
  })
  expect(wrapper.text()).toBe('Hello Siroj!')
})
