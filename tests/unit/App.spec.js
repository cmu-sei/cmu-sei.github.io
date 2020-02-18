import { shallowMount, createLocalVue } from '@vue/test-utils'
import Component from '@/App.vue'
import BootstrapVue from 'bootstrap-vue'
import github from '@/api/github'

jest.mock('@/api/github', () => jest.fn((name, type) => {
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
}))

const mocks = {
  $ga: {
    page: jest.fn()
  }
}

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('App.vue', () => {
  it('gets all and recent repos on mounted', async () => {
    const wrapper = shallowMount(Component, { localVue, mocks })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.all).toEqual([{ description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'certfuzz', owner: 'CERTCC', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'dranzer', owner: 'CERTCC', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'seahorn', owner: 'seahorn', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'dart', owner: 'cps-sei', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'dmplc', owner: 'cps-sei', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'mzsrm', owner: 'cps-sei', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'mcda', owner: 'cps-sei', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'pycloud', owner: 'SEI-TTG', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'cloudlet-client', owner: 'SEI-TTG', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'client-lib-android', owner: 'SEI-TTG', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'client-lib', owner: 'SEI-TTG', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'android-logger', owner: 'SEI-TTG', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'speech-server', owner: 'SEI-TTG', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'speech-android', owner: 'SEI-TTG', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'ip6tables-configuration', owner: 'CERTCC', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'osate2-core', owner: 'osate', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'examples', owner: 'osate', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'ErrorModelV2', owner: 'osate', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'osate2-plugins', owner: 'osate', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'development', owner: 'osate', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'osate-ge', owner: 'osate', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'osate2-ba', owner: 'osate', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'scvs', owner: 'SEI-CERT', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'gams', owner: 'jredmondson', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'Vulnerability-Data-Archive', owner: 'CERTCC', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: 'Vulnerability-Data-Archive-Tools', owner: 'CERTCC', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: org', forks: 54, language: { color: '#b07219', title: 'Java' }, lastModified: undefined, name: undefined, owner: 'cmu-sei', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }])
    expect(wrapper.vm.recent).toEqual([{ description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, name: 'certfuzz', owner: 'CERTCC', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: org', forks: 54, language: { color: '#b07219', title: 'Java' }, owner: 'cmu-sei', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }, { description: 'Type: repo', forks: 54, language: { color: '#b07219', title: 'Java' }, name: 'seahorn', owner: 'seahorn', ownerUrl: 'https://<OWNER_URL>', stars: 20, url: 'https://<URL>' }])
  })

  it('throws error when repos are unable to be retrieved', async () => {
    github.mockImplementationOnce(() => Promise.reject(Error('error thrown')))
    const wrapper = shallowMount(Component, { localVue, mocks })
    await wrapper.vm.$nextTick()
    expect(wrapper.vm.error).toBe(true)
  })

  it('matches snapshots', async () => {
    const wrapper = shallowMount(Component, { localVue, mocks })
    expect(wrapper.html()).toMatchSnapshot('Loading')
    await wrapper.vm.$nextTick()
    expect(wrapper.html()).toMatchSnapshot('DoneLoading')
  })
})
