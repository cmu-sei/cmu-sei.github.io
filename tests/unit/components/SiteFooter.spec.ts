import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '../../../components/SiteFooter.vue'

describe('SiteFooter.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
