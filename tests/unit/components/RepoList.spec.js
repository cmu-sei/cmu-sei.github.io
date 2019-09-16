import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/components/RepoList.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('RepoList.vue', () => {
  let propsData

  beforeEach(() => {
    propsData = {
      items: [
        {
          owner: '<OWNER>',
          ownerUrl: 'https://github.com/<OWNER>',
          name: '<NAME>',
          url: 'https://github.com/<OWNER>/<NAME>',
          description: 'Nulla quis lorem ut libero malesuada feugiat.',
          stars: 150,
          forks: 25,
          language: {
            title: null,
            color: null
          }
        },
        {
          owner: '<OWNER 2>',
          ownerUrl: 'https://github.com/<OWNER 2>',
          name: '<NAME 2>',
          url: 'https://github.com/<OWNER 2>/<NAME 2>',
          description: 'Cras ultricies ligula sed magna dictum porta.',
          stars: 40,
          forks: 12,
          language: {
            title: 'Javascript',
            color: '#b00'
          }
        }
      ]
    }
  })

  it('matches its default props if none are set', () => {
    const wrapper = shallowMount(Component, { localVue })
    expect(wrapper.props()).toEqual({
      title: 'All Repos',
      colWidth: '8',
      items: [],
      filter: false,
      showTitleCount: false,
      sort: false
    })
  })

  it('matches snapshot with default props', () => {
    const wrapper = shallowMount(Component, { localVue })
    expect(wrapper.html()).toMatchSnapshot('defaultProps')
  })

  it('matches snapshot with set props (no filter, no title count, default title)', () => {
    const wrapper = shallowMount(Component, { localVue, propsData })
    expect(wrapper.html()).toMatchSnapshot('noFilterNoTitleCountDefaultTitle')
  })

  it('matches snapshot with set props (with filter, with title count, 4 columns, set title)', () => {
    propsData.filter = true
    propsData.showTitleCount = true
    propsData.colWidth = '4'
    propsData.title = 'Featured Repos'
    const wrapper = shallowMount(Component, { localVue, propsData })
    expect(wrapper.html()).toMatchSnapshot('withFilterWithTitleCountFourColumnsWithSetTitle')
  })

  it('filters by language', () => {
    propsData.filter = true
    const wrapper = shallowMount(Component, { localVue, propsData })
    wrapper.setData({ text: 'javascri' })
    expect(wrapper.html()).toMatchSnapshot('FilterByLanguage')
  })
})
