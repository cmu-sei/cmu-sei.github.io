import { shallowMount } from '@vue/test-utils'
import { SdsPaginator } from '@cmu-sei/sei-design-system'
import { describe, expect, it, beforeEach, vi } from 'vitest'
import Component from '../../../components/RepoList.vue'

describe('RepoList.vue', () => {
  let props: Record<string, unknown>

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
      sort: false,
      paginate: false,
      pageSize: 10
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

  it('filters by name, owner, or language', async () => {
    props.filter = true
    const wrapper = shallowMount(Component, {
      props,
      global: {
        stubs: {
          Container: { template: '<div><slot /></div>' }
        }
      }
    })

    await wrapper.find('input').setValue('javascript')

    const cards = wrapper.findAllComponents({ name: 'RepoCard' })
    expect(cards).toHaveLength(1)
    expect(cards[0]?.props('item').name).toBe('<NAME 2>')
  })

  it('paginates filtered results and resets to the first page when filtering', async () => {
    props.filter = true
    props.paginate = true
    props.pageSize = 1
    const wrapper = shallowMount(Component, {
      props,
      global: {
        stubs: {
          Container: { template: '<div><slot /></div>' }
        }
      }
    })

    const paginator = wrapper.findComponent(SdsPaginator)
    expect(paginator.props()).toMatchObject({ currentPage: 1, totalPages: 2 })

    paginator.vm.$emit('go-to-page', { page: 2 })
    await wrapper.vm.$nextTick()
    expect(wrapper.findComponent(SdsPaginator).props('currentPage')).toBe(2)

    await wrapper.find('input').setValue('javascript')
    expect(wrapper.findComponent(SdsPaginator).props()).toMatchObject({ currentPage: 1, totalPages: 1 })
    expect(wrapper.findAllComponents({ name: 'RepoCard' })).toHaveLength(1)
  })

  it('changes the results per page', async () => {
    props.filter = true
    props.paginate = true
    props.pageSize = 1
    const wrapper = shallowMount(Component, {
      props,
      global: {
        stubs: {
          Container: { template: '<div><slot /></div>' }
        }
      }
    })

    const resultsSelect = wrapper.findAll('select').at(-1)
    await resultsSelect?.setValue('5')

    expect(wrapper.findAllComponents({ name: 'RepoCard' })).toHaveLength(2)
    expect(wrapper.findComponent(SdsPaginator).props('totalPages')).toBe(1)
  })

  it('scrolls to the title when changing pages', async () => {
    props.filter = true
    props.paginate = true
    props.pageSize = 1
    const scrollIntoView = vi.fn()
    HTMLElement.prototype.scrollIntoView = scrollIntoView
    const wrapper = shallowMount(Component, {
      props,
      global: {
        stubs: {
          Container: { template: '<div><slot /></div>' }
        }
      }
    })

    wrapper.findComponent(SdsPaginator).vm.$emit('go-to-page', { page: 2 })
    await wrapper.vm.$nextTick()

    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth', block: 'start' })
  })

  it('sorts repositories by stars', async () => {
    props.filter = true
    props.sort = true
    const items = props.items as RepoItem[]
    items[0]!.stars = 40
    items[1]!.stars = 150
    const wrapper = shallowMount(Component, {
      props,
      global: {
        stubs: {
          Container: { template: '<div><slot /></div>' }
        }
      }
    })

    await wrapper.find('select').setValue('stars')

    const cards = wrapper.findAllComponents({ name: 'RepoCard' })
    expect(cards.map(card => card.props('item').stars)).toEqual([150, 40])
  })
})
