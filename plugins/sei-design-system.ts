import '@cmu-sei/sei-design-system/volar'
import SdsComponents from '@cmu-sei/sei-design-system'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(SdsComponents)
})
