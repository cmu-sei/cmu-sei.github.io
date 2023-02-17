<template>
  <div class="bg-gray-900 text-gray-50 py-8">
    <Container>
      <div class="flex flex-col lg:flex-row gap-6 mb-6">
        <address class="not-italic">
          Carnegie Mellon University<br>
          Software Engineering Institute<br>
          4500 Fifth Avenue<br>
          Pittsburgh, PA 15213-2612<br>
          <NuxtLink
            href="tel:412-268-5800"
            class="hover:underline underline-offset-4"
          >412-268-5800</NuxtLink>
        </address>
        <div class="grow flex">
          <ul class="flex gap-2 lg:mx-auto">
            <li>
              <NuxtLink
                href="https://www.facebook.com/SEICMU/"
                class="social facebook"
                target="_blank"
              >
                <span class="sr-only">Facebook</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="https://twitter.com/SEInews"
                class="social twitter"
                target="_blank"
              >
                <span class="sr-only">Twitter</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="https://www.linkedin.com/company/software-engineering-institute"
                class="social linkedin"
                target="_blank"
              >
                <span class="sr-only">LinkedIn</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="https://www.youtube.com/user/TheSEICMU"
                class="social youtube"
                target="_blank"
              >
                <span class="sr-only">YouTube</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                href="https://itunes.apple.com/us/podcast/software-engineering-institute-sei-podcast-series/id566573552?mt=2"
                class="social itunes"
                target="_blank"
              >
                <span class="sr-only">iTunes</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <NuxtLink
            href="https://sei.cmu.edu/contact-us/"
            class="py-6 px-28 btn btn-outline btn-light rounded-none text-xl"
          >Contact Us</NuxtLink>
        </div>
      </div>
      <div>
        <ul class="text-xs">
          <li class="inline-block after:content-['|'] after:mx-2">
            <NuxtLink
              href="https://www.sei.cmu.edu/locations/index.cfm"
              class="hover:underline underline-offset-4"
            >Office Locations</NuxtLink>
          </li>
          <li class="inline-block after:content-['|'] after:mx-2">
            <NuxtLink
              href="https://www.sei.cmu.edu/additional-sites-directory/index.cfm"
              class="hover:underline underline-offset-4"
            >Additional Sites Directory</NuxtLink>
          </li>
          <li class="inline-block after:content-['|'] after:mx-2">
            <NuxtLink
              href="https://www.sei.cmu.edu/legal/index.cfm"
              class="hover:underline underline-offset-4"
            >Legal Info</NuxtLink>
          </li>
          <li class="inline-block after:content-['|'] after:mx-2">
            <NuxtLink
              href="https://www.cmu.edu/hr/ethics-hotline/"
              class="hover:underline underline-offset-4"
            >CMU Ethics Hotline</NuxtLink>
          </li>
          <li class="inline-block">
            <NuxtLink
              href="https://www.sei.cmu.edu/index.cfm"
              class="hover:underline underline-offset-4"
            >www.sei.cmu.edu</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="mt-6">
        <small>&copy;{{ year }} Carnegie Mellon University</small>
      </div>
    </Container>
  </div>
</template>

<script setup lang="ts">
const year = computed(() => {
  const d = new Date()
  return d.getFullYear()
})
</script>

<style lang="postcss" scoped>
.social {
  height: 30px;
  width: 30px;
  background-image: url("/images/sprites-social.png");
  background-repeat: no-repeat;
  background-size: auto 100%;
  content: '';
  display: inline-block;

  &:hover,
  &:focus,
  &:active {
    border-bottom: none;
    opacity: 0.5;
  }

  &.facebook {
    background-position: 0 0;
  }
  &.twitter {
    background-position: -32px 0;
  }
  &.linkedin {
    background-position: -96px 0;
  }
  &.youtube {
    background-position: -129px 0;
  }
  &.itunes {
    background-position: -161px 0;
    border-radius: 50%;
  }
}
</style>