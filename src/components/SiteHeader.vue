<template functional>
  <header class="bg-cmu-red">
    <b-container>
      <b-row>
        <b-col>
          <h1 class="mt-2 mb-2">
            <b-link
              class="d-inline-block"
              href="https://www.cmu.edu/"
            >
              <svg class="cmu-wordmark"><use xlink:href="#cmu-wordmark"/></svg>
            </b-link>
          </h1>
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

h1 {
  font-size: 1.6rem;
}

.cmu-wordmark {
  fill: $color-white;
  height: 27px;
}
</style>
