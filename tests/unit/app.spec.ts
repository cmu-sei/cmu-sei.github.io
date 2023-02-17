import { shallowMount } from '@vue/test-utils'
import { mockNuxtImport } from 'nuxt-vitest/utils'
import { describe, expect, it, vi } from 'vitest'
import Component from '../../app.vue'

mockNuxtImport('useGithub', () => {
  return () => {
    return {
      api: vi.fn((name, type) => {
        return {
          data: {
            owner: {
              login: name.split('/')[0],
              html_url: 'https://<OWNER_URL>'
            },
            name: name.split('/')[1],
            html_url: 'https://<URL>',
            description: `Type: ${type}`,
            stargazers_count: 20,
            forks_count: 54,
            language: 'Java'
          }
        }
      }),
      colors: {
        'Java': {
          'color': '#814CCC',
          'url': '<MOCK_URL>'
        }
      },
      repos: [
        {
          name: 'test/hello',
          type: 'repo'
        },
        {
          name: 'test2/world',
          type: 'repo'
        }
      ]
    }
  }
})

const mocks = {
  $ga: {
    page: vi.fn()
  }
}

describe('App.vue', () => {
  it('gets all and recent repos on mounted', async () => {
    const wrapper = shallowMount(Component)
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot('homepage')
  })

  // it('throws error when repos are unable to be retrieved', async () => {
  //   github.mockImplementationOnce(() => Promise.reject(Error('error thrown')))
  //   const wrapper = shallowMount(Component, { mocks })
  //   await wrapper.vm.$nextTick()
  //   expect(wrapper.vm.error).toBe(true)
  // })

  it('matches snapshots', async () => {
    const wrapper = shallowMount(Component, { mocks })
    expect(wrapper.html()).toMatchSnapshot('Loading')
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot('DoneLoading')
  })
})
