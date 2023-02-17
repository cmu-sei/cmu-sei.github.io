import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '../../../components/SiteHeader.vue'

describe('SiteHeader.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
