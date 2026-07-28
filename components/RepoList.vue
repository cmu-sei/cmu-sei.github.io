<template>
  <Container class="space-y-6 py-8">
    <h2 ref="titleElement" class="text-h2">
      {{ title }}
      {{ showTitleCount ? `(${items.length})` : '' }}
    </h2>
    <div v-if="filter" class="space-y-4">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-end">
        <label class="flex grow flex-col gap-1">
          <span class="font-semibold">Filter repositories</span>
          <input
            v-model="text"
            class="form-control"
            type="search"
            autocomplete="off"
            placeholder="Name, owner, or language">
        </label>
        <label v-if="sort" class="flex flex-col gap-1">
          <span class="font-semibold">Sort by</span>
          <select v-model="sortBy" class="form-control min-w-48">
            <option value="name">Name (A-Z)</option>
            <option value="updated">Recently updated</option>
            <option value="stars">Most stars</option>
            <option value="forks">Most forks</option>
          </select>
        </label>
        <label v-if="paginate" class="flex flex-col gap-1">
          <span class="font-semibold">Results per page</span>
          <select v-model.number="resultsPerPage" class="form-control min-w-32">
            <option v-for="size in pageSizeOptions" :key="size" :value="size">
              {{ size }}
            </option>
          </select>
        </label>
      </div>
      <p class="text-tertiary" aria-live="polite">
        {{ resultSummary }}
      </p>
    </div>
    <div
      class="grid gap-6 pb-4"
      :class="{
        'lg:grid-cols-3': !filter,
        'lg:w-8/12': filter
      }"
    >
      <RepoCard
        v-for="item in visibleItems"
        :key="`${item.owner}/${item.name}`"
        :item="item"
      />
    </div>
    <SdsPaginator
      v-if="paginate"
      :key="totalPages"
      :current-page="currentPage"
      :total-pages="totalPages"
      @go-to-page="goToPage"
    />
  </Container>
</template>

<script setup lang="ts">
import { SdsPaginator } from '@cmu-sei/sei-design-system'

const props = defineProps({
  title: { type: String, default: 'All Repos' },
  items: { type: Array as PropType<RepoItem[]>, default: () => [] },
  filter: { type: Boolean, default: false },
  showTitleCount: { type: Boolean, default: false },
  sort: { type: Boolean, default: false },
  paginate: { type: Boolean, default: false },
  pageSize: { type: Number, default: 10, validator: (value: number) => value > 0 }
})

const text = ref('')
const currentPage = ref(1)
const titleElement = ref<HTMLElement>()
const resultsPerPage = ref(props.pageSize)
const sortBy = ref('name')
const pageSizeOptions = [5, 10, 25, 50, 100, 150]

const filteredItems = computed(() => {
  if (props.items.length < 1) return []
  if (text.value === '') return sortItems(props.items)
  const searchText = text.value.trim().toLowerCase()
  return sortItems(props.items.filter(i => {
    const nameHasText = i.name.toLowerCase().includes(searchText)
    const ownerHasText = i.owner.toLowerCase().includes(searchText)
    const langHasText = i.language.title !== null ? i.language.title.toLowerCase().includes(searchText) : false
    return nameHasText || ownerHasText || langHasText
  }))
})

const sortItems = (items: RepoItem[]) => {
  if (!props.sort) return items
  return [...items].sort((a, b) => {
    if (sortBy.value === 'updated') {
      return Number(new Date(b.lastModified)) - Number(new Date(a.lastModified))
    }
    if (sortBy.value === 'stars') return b.stars - a.stars
    if (sortBy.value === 'forks') return b.forks - a.forks
    return a.owner.localeCompare(b.owner) || a.name.localeCompare(b.name)
  })
}

const totalPages = computed(() => props.paginate ? Math.ceil(filteredItems.value.length / resultsPerPage.value) : 1)

const visibleItems = computed(() => {
  if (!props.paginate) return filteredItems.value
  const start = (currentPage.value - 1) * resultsPerPage.value
  return filteredItems.value.slice(start, start + resultsPerPage.value)
})

const resultSummary = computed(() => {
  const total = filteredItems.value.length
  if (total === 0) return `Showing 0 of ${props.items.length} repositories.`
  if (!props.paginate) return `Showing ${total} of ${props.items.length} repositories.`

  const start = (currentPage.value - 1) * resultsPerPage.value + 1
  const end = Math.min(start + resultsPerPage.value - 1, total)
  const matching = text.value.trim() ? ` matching ${props.items.length} total` : ''
  return `Showing ${start}-${end} of ${total}${matching} repositories.`
})

const goToPage = async ({ page }: { page: number | string }) => {
  currentPage.value = Number(page)
  await nextTick()
  titleElement.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

watch([text, resultsPerPage, sortBy], () => {
  currentPage.value = 1
})

watch(totalPages, pages => {
  currentPage.value = Math.min(currentPage.value, Math.max(pages, 1))
})
</script>
