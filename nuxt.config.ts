// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint'
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      title: 'SEI Open Source @ GitHub',
      titleTemplate: '%s',
      meta: [
        { name: 'google-site-verification', content: 'tuB6hlCtTBaxkJLDTVF5QdXrY031DFO4w1p1fUBR0jA' },
      ],
    },
  },
  css: [
    '@cmu-sei/sei-design-system/open-sans/index.css',
    '@cmu-sei/sei-design-system/source-serif/index.css',
    '~/main.css',
    '@cmu-sei/sei-design-system/dist/style.css',
  ],
  build: {
    transpile: ['@cmu-sei/sei-design-system'],
  },
  compatibilityDate: '2026-07-20',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  typescript: {
    strict: true,
  }
})
