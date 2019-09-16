import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/SiteFooter.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('SiteFooter.vue', () => {
  it('matches snapshot', () => {
    const wrapper = shallowMount(Component, { localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
