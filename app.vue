<template>
  <div
    data-id="sds-brochure-site"
    class="sds-theme-plaid flex flex-col justify-between w-full min-h-screen text-gray-900 bg-white dark:bg-gray-900 dark:text-gray-100"
  >
    <main>
      <SdsBrochureSiteHeader />
      <section>
        <div class="flex flex-col">
          <Title>SEI Open Source @ GitHub</Title>
          <Body class="bg-white text-gray-900" />
          <SvgDefs />
          <main class="grow mb-2">
            <Masthead />
            <div v-if="loading" class="flex">
              <div class="mx-auto my-8">
                <Spinner />
              </div>
            </div>
            <template v-else>
              <div v-if="error">
                <Container>
                  <div class="border border-danger p-8 bg-red-50 text-red-900 rounded my-8">
                    Oh no! We are unable to load the repo list. Please
                    <button
                      class="link link-danger"
                      @click="getAllRepos"
                    >try again</button>
                    later.
                  </div>
                </Container>
              </div>
              <template v-else>
                <div class="bg-gray-100">
                  <RepoList
                    v-if="recent.length > 0"
                    :items="recent"
                    title="Recent Repos"
                  />
                </div>
                <RepoList
                  v-if="all.length > 0"
                  :items="all"
                  show-title-count
                  filter
                  paginate
                  sort
                />
              </template>
            </template>
          </main>
        </div>
      </section>
    </main>
    <footer>
      <SdsBrochureSiteFooter>
        <template #footer-logo>
          <a
            href="https://sei.cmu.edu/"
            class="block h-fit max-w-96 mr-8"
          >
            <img
              src="/images/sei-logo.svg"
              alt="SEI Logo"
            >
          </a>
        </template>
      </SdsBrochureSiteFooter>
    </footer>
  </div>
</template>

<script setup lang="ts">
const items = ref<Array<ResponseItem | ResponseItem[]>>([])

const loading = ref(false)
const receivedResponse = ref(false)
const error = ref(false)

const { api, colors, repos } = useGithub()

onMounted(() => {
  // let google analytics track the pageview
  // this.$ga.page('/')
  // load all the repos
  getAllRepos()
})

const all = computed<RepoItem[]>(() => {
  const tmpAll: RepoItem[] = []
  const seen = new Set<string>()
  items.value.forEach((item) => {
    // if repo type is org, it returns an array of objects
    if (Array.isArray(item)) {
      item.forEach(i => {
        const tmp: RepoItem = setRepoData(i)
        const key = `${tmp.owner}/${tmp.name}`.toLowerCase()
        if (!seen.has(key)) {
          seen.add(key)
          tmpAll.push(tmp)
        }
      })
    // otherwise, it is an object
    } else {
      const tmp = setRepoData(item)
      const key = `${tmp.owner}/${tmp.name}`.toLowerCase()
      if (!seen.has(key)) {
        seen.add(key)
        tmpAll.push(tmp)
      }
    }
  })
  return tmpAll
})

const recent = computed<RepoItem[]>(() => {
  const tmp = JSON.parse(JSON.stringify(all.value))
  return tmp.sort((a: RepoItem, b: RepoItem) => Number(new Date(b.lastModified)) - Number(new Date(a.lastModified))).slice(0, 3)
})

const getAllRepos = async () => {
  const tmpItems: Array<ResponseItem | ResponseItem[]> = []
  loading.value = true
  receivedResponse.value = false
  error.value = false

  try {
    for await (const i of repos.value) {
      const { data } = await api(i.name, i.type)
      if (data.value) {
        receivedResponse.value = true
        tmpItems.push(data.value)
      }

      if (receivedResponse.value) {
        items.value = tmpItems
      } else {
        error.value = true
      }
    }
  } catch {
    error.value = true
  }

  loading.value = false
}

const setRepoData = (data: ResponseItem) => {
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
      color: (colors.value as unknown as GithubColors)[data.language]?.color ?? '#fff'
    }
  }
}
</script>
