<template>
  <b-container fluid class="bg-sei-gray-darkest text-sei-gray-lightest pt-5 pb-5">
      <b-row>
        <b-col>
          <b-container>
            <b-row class="mb-4">
              <b-col md class="mb-2 mb-md-0">
                <address>
                  Carnegie Mellon University<br>
                  Software Engineering Institute<br>
                  4500 Fifth Avenue<br>
                  Pittsburgh, PA 15213-2612<br>
                  <b-link href="tel:412-268-5800">412-268-5800</b-link>
                </address>
              </b-col>
              <b-col md class="mb-2 mb-md-0">
                <ul class="list-social list-inline">
                  <li class="list-inline-item">
                    <b-link href="https://www.facebook.com/SEICMU/" class="social facebook" target="_blank">
                      <span class="sr-only">Facebook</span>
                    </b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://twitter.com/sei_cmu" class="social twitter" target="_blank">
                      <span class="sr-only">Twitter</span>
                    </b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://www.linkedin.com/company/software-engineering-institute" class="social linkedin" target="_blank">
                      <span class="sr-only">LinkedIn</span>
                    </b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://www.youtube.com/user/TheSEICMU" class="social youtube" target="_blank">
                      <span class="sr-only">YouTube</span>
                    </b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://podcasts.apple.com/us/podcast/software-engineering-institute-sei-podcast-series/id566573552?mt=2" class="social itunes" target="_blank">
                      <span class="sr-only">iTunes</span>
                    </b-link>
                  </li>
                </ul>
              </b-col>
              <b-col md class="mb-4 mb-md-0">
                <b-button
                  class="btn-contact rounded-0 pt-4 pb-4"
                  variant="outline-light"
                  size="lg"
                  block
                  href="https://sei.cmu.edu/contact-us/">Contact Us</b-button>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <ul class="list-inline small">
                  <li class="list-inline-item">
                    <b-link href="https://www.sei.cmu.edu/locations/index.cfm">Office Locations</b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://www.sei.cmu.edu/additional-sites-directory/index.cfm">Additional Sites Directory</b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://www.sei.cmu.edu/legal/index.cfm">Legal Info</b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://www.cmu.edu/hr/ethics-hotline/">CMU Ethics Hotline</b-link>
                  </li>
                  <li class="list-inline-item">
                    <b-link href="https://www.sei.cmu.edu/index.cfm">www.sei.cmu.edu</b-link>
                  </li>
                </ul>
              </b-col>
            </b-row>
            <b-row>
              <b-col>
                <small>&copy;{{ year }} Carnegie Mellon University</small>
              </b-col>
            </b-row>
          </b-container>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    year () {
      const d = new Date()
      return d.getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/colors.scss';

.list-inline.small .list-inline-item {
  &:not(:first-of-type):before {
    content: '|';
    margin-right: .5em;
  }
}

a:not(.social):not(.btn-contact) {
  color: $color-sei-gray-lightest;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    border-bottom: 1px solid $color-sei-gray-lightest;
  }
}

.social {
  height: 30px;
  width: 30px;
  background-image: url("../assets/images/sprites-social.png");
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
