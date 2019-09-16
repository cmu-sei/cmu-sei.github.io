<template>
  <b-container fluid class="pt-4 pb-2">
    <b-row>
      <b-col>
        <b-container>
          <b-row>
            <b-col>
              <h3 class="mb-4">
                {{ title }}
                {{ showTitleCount ? `(${items.length})` : '' }}
              </h3>
              <b-row v-if="filter" class="mb-3">
                <b-col md="6">
                  <b-form-input
                    v-model="text"
                    autocomplete="off"
                    placeholder="Filter by title or language"/>
                </b-col>
              </b-row>
              <b-row>
                <b-col
                  v-for="item in filteredItems"
                  :key="item.name"
                  :lg="colWidth"
                  class="mb-4">
                  <repo-card :item="item"/>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import RepoCard from '@/components/RepoCard'

export default {
  components: {
    RepoCard
  },
  props: {
    title: { type: String, default: 'All Repos' },
    colWidth: { type: String, default: '8' },
    items: { type: Array, default: () => [] },
    filter: { type: Boolean, default: false },
    showTitleCount: { type: Boolean, default: false },
    sort: { type: Boolean, default: false }
  },
  data () {
    return {
      text: ''
    }
  },
  computed: {
    filteredItems () {
      if (this.items.length < 1) return []
      if (this.text === '') return this.sortItems(this.items)
      const text = this.text.trim().toLowerCase()
      return this.sortItems(this.items.filter(i => {
        const nameHasText = i.name.toLowerCase().includes(text)
        const ownerHasText = i.owner.toLowerCase().includes(text)
        const langHasText = i.language.title !== null ? i.language.title.toLowerCase().includes(text) : false
        return nameHasText || ownerHasText || langHasText
      }))
    }
  },
  methods: {
    sortItems (items) {
      if (!this.sort) return items
      return items.sort((a, b) => a.owner.localeCompare(b.owner) || a.name.localeCompare(b.name))
    }
  }
}
</script>
