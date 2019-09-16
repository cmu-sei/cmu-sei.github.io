import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/SiteHeader.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('SiteHeader.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Component, { localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
