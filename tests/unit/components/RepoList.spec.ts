import { shallowMount } from '@vue/test-utils'
import { describe, expect, it, beforeEach } from 'vitest'
import Component from '../../../components/RepoList.vue'

describe('RepoList.vue', () => {
  let props: any

  beforeEach(() => {
    props = {
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
    const wrapper = shallowMount(Component)
    expect(wrapper.props()).toEqual({
      title: 'All Repos',
      items: [],
      filter: false,
      showTitleCount: false,
      sort: false
    })
  })

  it('matches snapshot with default props', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.html()).toMatchSnapshot('defaultProps')
  })

  it('matches snapshot with set props (no filter, no title count, default title)', () => {
    const wrapper = shallowMount(Component, { props })
    expect(wrapper.html()).toMatchSnapshot('noFilterNoTitleCountDefaultTitle')
  })

  it('matches snapshot with set props (with filter, with title count, 4 columns, set title)', () => {
    props.filter = true
    props.showTitleCount = true
    props.colWidth = '4'
    props.title = 'Featured Repos'
    const wrapper = shallowMount(Component, { props })
    expect(wrapper.html()).toMatchSnapshot('withFilterWithTitleCountFourColumnsWithSetTitle')
  })

  // TODO: This is a known bug in @vue/test-utils. Will circle back on this.
  // it('filters by language', async () => {
  //   props.filter = true
  //   const wrapper = shallowMount(Component, { props })
  //   await wrapper.setData({ text: 'javascri' })
  //   expect(wrapper.html()).toMatchSnapshot('FilterByLanguage')
  // })
})
