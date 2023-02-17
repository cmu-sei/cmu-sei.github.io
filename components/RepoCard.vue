<template>
  <div class="border bg-white p-4 h-48 flex flex-col">
    <h4 class="flex gap-2">
      <NuxtLink
        :href="item.ownerUrl"
        class="link link-danger font-bold"
      >{{ item.owner }}</NuxtLink>
      <span>/</span>
      <NuxtLink
        :href="item.url"
        class="link link-danger"
      >{{ item.name }}</NuxtLink>
    </h4>
    <p class="text-sm grow">{{ item.description }}</p>
    <div class="flex gap-4 font-bold text-sm">
      <div class="flex gap-1">
        <svg class="w-4 h-4 mt-0.5"><use xlink:href="#star"/></svg>
        <span>{{ item.stars }}</span>
      </div>
      <div class="flex gap-1">
        <svg class="w-4 h-4 mt-0.5"><use xlink:href="#fork"/></svg>
        <span>{{ item.forks }}</span>
      </div>
      <div class="flex gap-1">
        <i
          :style="{backgroundColor: `${item.language.color} !important`}"
          class="block w-4 h-4 rounded-full bg-black mt-0.5"
          aria-hidden="true"
        />
        <span>{{ item.language.title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  item: {
    type: Object as PropType<RepoItem>,
    default: () => {
      return {
        owner: null,
        ownerUrl: null,
        name: null,
        url: null,
        description: null,
        stars: 0,
        forks: 0,
        language: {
          title: null,
          color: '#fff'
        }
      }
    }
  }
})
</script>
