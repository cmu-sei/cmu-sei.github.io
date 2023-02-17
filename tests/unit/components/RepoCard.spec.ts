import { shallowMount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Component from '../../../components/RepoCard.vue'

describe('RepoCard.vue', () => {
  it('matches snapshot with default props', () => {
    const wrapper = shallowMount(Component)
    expect(wrapper.html()).toMatchSnapshot('defaultProps')
  })

  it('matches snapshot with set props', () => {
    const props = {
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
    const wrapper = shallowMount(Component, { props })
    expect(wrapper.html()).toMatchSnapshot('withProps')
  })
})
