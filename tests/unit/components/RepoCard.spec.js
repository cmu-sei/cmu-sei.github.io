import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/RepoCard.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('RepoCard.vue', () => {
  it('matches snapshot with default props', () => {
    const wrapper = shallowMount(Component, { localVue })
    expect(wrapper.html()).toMatchSnapshot('defaultProps')
  })

  it('matches snapshot with set props', () => {
    const propsData = {
      item: {
        owner: '<OWNER>',
        ownerUrl: 'https://github.com/<OWNER>',
        name: '<NAME>',
        url: 'https://github.com/<OWNER>/<NAME>',
        description: 'Nulla quis lorem ut libero malesuada feugiat.',
        stars: 150,
        forks: 25,
        language: {
          title: 'Python',
          color: '#3572A5'
        }
      }
    }
    const wrapper = shallowMount(Component, { localVue, propsData })
    expect(wrapper.html()).toMatchSnapshot('withProps')
  })
})
