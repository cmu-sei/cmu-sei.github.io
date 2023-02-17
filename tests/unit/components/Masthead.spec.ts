import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '../../../components/Masthead.vue'

describe('Masthead.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
