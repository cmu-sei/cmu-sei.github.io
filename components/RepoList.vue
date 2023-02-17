<template>
  <Container class="space-y-6 py-8">
    <h3 class="text-3xl text-gray-700">
      {{ title }}
      {{ showTitleCount ? `(${items.length})` : '' }}
    </h3>
    <div v-if="filter" class="space-y-4">
      <input
        v-model="text"
        class="form-control lg:w-6/12"
        type="text"
        autocomplete="off"
        placeholder="Filter by title or language"
      />
      <p class="text-tertiary">Showing {{ filteredItems.length }} of {{ items.length }} repositories.</p>
    </div>
    <div
      class="grid gap-6 pb-4"
      :class="{
        'lg:grid-cols-3': !filter,
        'lg:w-8/12': filter
      }"
    >
      <RepoCard
        v-for="item in filteredItems"
        :key="item.name"
        :item="item" 
      />
    </div>
  </Container>
</template>

<script setup lang="ts">

const props = defineProps({
  title: { type: String, default: 'All Repos' },
  items: { type: Array as PropType<RepoItem[]>, default: () => [] },
  filter: { type: Boolean, default: false },
  showTitleCount: { type: Boolean, default: false },
  sort: { type: Boolean, default: false }
})

const text = ref('')

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
  return items.sort((a, b) => a.owner.localeCompare(b.owner) || a.name.localeCompare(b.name))
}
</script>
