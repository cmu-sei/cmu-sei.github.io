<template>
  <div
    id="app"
    class="d-flex flex-column vh-100"
  >
    <site-header class="header"/>
    <main class="page-content">
      <masthead/>
      <div v-if="loading" class="d-flex justify-content-center align-content-center mt-5 mb-5">
        <b-spinner class="spinner" label="Loading..."></b-spinner>
      </div>
      <template v-else>
        <b-container v-if="error">
          <b-row>
            <b-col>
              <b-alert show variant="danger">
                Unable to load repo list.
                <b-link @click="getAllRepos" class="text-sei-red-darkest">Please try again.</b-link>
              </b-alert>
            </b-col>
          </b-row>
        </b-container>
        <template v-else>
          <repo-list
            v-if="recent.length > 0"
            :items="recent"
            class="bg-sei-gray-lightest"
            title="Recent Repos"
            col-width="4"/>
          <repo-list
            v-if="all.length > 0"
            :items="all"
            show-title-count
            filter
            sort/>
        </template>
      </template>
    </main>
    <site-footer class="footer mt-auto"/>
  </div>
</template>

<script>
import github from '@/api/github'
import repos from '@/data/repos'
import colors from '@/data/github-colors'
import SiteHeader from '@/components/SiteHeader'
import Masthead from '@/components/Masthead'
import RepoList from '@/components/RepoList'
import SiteFooter from '@/components/SiteFooter'

export default {
  name: 'app',
  components: {
    SiteHeader,
    Masthead,
    RepoList,
    SiteFooter
  },
  data () {
    return {
      all: [],
      recent: [],
      loading: false,
      error: false
    }
  },
  mounted () {
    // let google analytics track the pageview
    this.$ga.page('/')
    // load all the repos
    this.getAllRepos()
  },
  methods: {
    async getAllRepos () {
      try {
        const requests = []
        this.loading = true
        this.error = false
        repos.forEach(i => {
          requests.push(github(i.name, i.type))
        })
        const items = await Promise.all(requests)
        items.forEach(({ data }) => {
          // if repo type is org, it returns an array of objects
          if (Array.isArray(data)) {
            data.forEach(i => {
              const tmp = this.setRepoData(i)
              this.all.push(tmp)
            })
          // otherwise, it is an object
          } else {
            const tmp = this.setRepoData(data)
            this.all.push(tmp)
          }
        })
        const tmp = JSON.parse(JSON.stringify(this.all))
        this.recent = tmp.sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified)).slice(0, 3)
        this.loading = false
      } catch (e) {
        if (e) this.error = true
      }
    },
    setRepoData (data) {
      return {
        lastModified: data.updated_at,
        owner: data.owner.login,
        ownerUrl: data.owner.html_url,
        name: data.name,
        url: data.html_url,
        description: data.description !== '' ? data.description : 'There is no description for this repository.',
        stars: data.stargazers_count,
        forks: data.forks_count,
        language: {
          title: data.language,
          color: typeof colors[data.language] !== 'undefined' ? colors[data.language].color : '#fff'
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/colors.scss';

// Style all placeholders
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  font-style: italic;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  font-style: italic;
}

::-ms-input-placeholder { /* Microsoft Edge */
  font-style: italic;
}
</style>

<style lang="scss">
// This global code block forces the footer to the bottom
html, body {
  width: 100%;
  height: 100%;
}
</style>

<style lang="scss" scoped>
// This scoped code block forces the footer to the bottom
#app {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.page-content {
  flex-grow: 1;
}

.header,
.page-content,
.footer {
  flex-shrink: 0;
}

// Resize the loading spinner
.spinner {
  width: 3rem;
  height: 3rem;
}
</style>
