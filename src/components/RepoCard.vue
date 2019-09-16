<template functional>
  <div class="border border-sei-gray-lightest bg-white p-3 h-100">
    <h4>
      <b-link :href="props.item.ownerUrl" class="text-cmu-red font-weight-bold">{{ props.item.owner }}</b-link>
      <span class="d-inline-block ml-1 mr-1">/</span>
      <b-link :href="props.item.url" class="text-cmu-red">{{ props.item.name }}</b-link>
    </h4>
    <p class="small">{{ props.item.description }}</p>
    <div class="info-section">
      <span class="d-inline-block mr-3 font-weight-bold">
        <svg><use xlink:href="#star"/></svg>
        {{ props.item.stars }}
      </span>
      <span class="d-inline-block mr-3 font-weight-bold">
        <svg><use xlink:href="#fork"/></svg>
        {{ props.item.forks }}
      </span>
      <span class="d-inline-block font-weight-bold">
        <i
          class="d-inline-block rounded-circle"
          :style="{backgroundColor: props.item.language.color}"
          aria-hidden="true"/>
        {{ props.item.language.title }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
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
  }
}
</script>

<style lang="scss" scoped>
h4 {
  font-size: 1.1rem;
}

.info-section {
  font-size: 14px;
}

svg {
  height: 1rem;
  width: 1rem;
}

.rounded-circle {
  width: .75rem;
  height: .75rem;
  background: black;
  vertical-align: middle;
}
</style>
