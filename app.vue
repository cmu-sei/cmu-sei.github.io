<template>
  <div class="flex flex-col h-screen w-screen">
    <Title>SEI Open Source @ GitHub</Title>
    <Body class="bg-white text-gray-900" />
    <SvgDefs />
    <SiteHeader class="shrink-0" />
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
            <div class="border border-danger p-8 bg-red-100 text-red-900 rounded my-8">
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
            sort
          />
        </template>
      </template>
    </main>
    <SiteFooter class="shrink-0" />
  </div>
</template>

<script setup lang="ts">
const items = ref<ResponseItem[]>([])

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
  items.value.forEach((item) => {
    // if repo type is org, it returns an array of objects
    if (Array.isArray(item)) {
      item.forEach(i => {
        const tmp: RepoItem = setRepoData(i)
        tmpAll.push(tmp)
      })
    // otherwise, it is an object
    } else {
      const tmp = setRepoData(item)
      tmpAll.push(tmp)
    }
  })
  return tmpAll
})

const recent = computed<RepoItem[]>(() => {
  const tmp = JSON.parse(JSON.stringify(all.value))
  return tmp.sort((a: RepoItem, b: RepoItem) => Number(new Date(b.lastModified)) - Number(new Date(a.lastModified))).slice(0, 3)
})

const getAllRepos = async () => {
  const tmpItems: ResponseItem[] = []
  loading.value = true
  receivedResponse.value = false
  error.value = false

  for await (const i of repos.value) {
    const { data } = await api(i.name, i.type)
    if (data.value) {
      receivedResponse.value = true
      tmpItems.push(data.value)
    }
  }

  if (receivedResponse.value) {
    items.value = tmpItems
  } else {
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
      color: typeof (colors.value as unknown as GithubColors)[data.language] !== 'undefined' ?
        (colors.value as unknown as GithubColors)[data.language].color :
        '#fff'
    }
  }
}
</script>
