import { mockNuxtImport } from '@nuxt/test-utils/runtime'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { useGithub } from '../../../composables/github'

const { fetch } = vi.hoisted(() => ({ fetch: vi.fn() }))
mockNuxtImport('$fetch', () => fetch)

describe('useGithub', () => {
  beforeEach(() => {
    fetch.mockReset()
  })

  it('fetches every page of organization repositories', async () => {
    const firstPage = Array.from({ length: 100 }, (_, id) => ({ id }))
    const secondPage = [{ id: 101 }]
    fetch.mockResolvedValueOnce(firstPage)
      .mockResolvedValueOnce(secondPage)

    const { data } = await useGithub().api('cmu-sei', 'org')

    expect(data.value).toHaveLength(101)
    expect(fetch).toHaveBeenNthCalledWith(1, 'https://api.github.com/orgs/cmu-sei/repos', {
      method: 'get',
      query: { per_page: 100, page: 1 }
    })
    expect(fetch).toHaveBeenNthCalledWith(2, 'https://api.github.com/orgs/cmu-sei/repos', {
      method: 'get',
      query: { per_page: 100, page: 2 }
    })
  })
})
