<template functional>
  <b-container class="mt-2 mb-2">
    <b-row>
      <b-col>
        <h2 class="border-bottom border-sei-gray-lighter mt-2 mb-4 pb-3 display-4">
          <a
            href="https://sei.cmu.edu"
          >Software Engineering Institute</a>
        </h2>
        <h3 class="mb-3">SEI on GitHub</h3>
        <b-row>
          <b-col lg="8">
            <p>Use this site to access and download the software, tools, and methods that the SEI creates, tests, refines, and disseminates. Organizations and individuals worldwide use these technologies and management techniques to improve the results of software projects, the quality and behavior of software systems, and the security and survivability of networked systems.</p>
            <p>For more information about the SEI and its other work, visit <a href="https://sei.cmu.edu" class="text-cmu-red">sei.cmu.edu.</a></p>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.display-4 {
  font-size: 3.125rem;
}

h2 a {
  color: $color-sei-gray-darker;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: $color-sei-red;
  }
}
</style>
