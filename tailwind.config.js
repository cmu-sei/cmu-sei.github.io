import sdsBaseConfig from '@sds/tailwindcss-3'
import colors from '@sds/tailwindcss-3/tailwindcss/config/tailwindcss-colors.js'

module.exports = {
  presets: [sdsBaseConfig],
  content: [
    './app.vue',
    './components/*.vue',
    './node_modules/@sds/components-vue3/src/components/**/*.{vue,js,ts}'
  ],
  // use tailwind's official dark mode
  darkMode: "class",
  // important set to true so the
  // @tailwindcss/typography plugin
  // can be overridden with utility
  // classes
  important: true,
  theme: {
    // sei design theme settings
    extend: {
      fontFamily: require("./tailwindcss/config/tailwindcss-font-family"),
      typography: require("./tailwindcss/config/tailwindcss-typography"),
      colors: {
        primary: colors.blue[500],
        secondary: colors.gray[700],
        tertiary: colors.gray[500],
        success: colors.green[500],
        info: colors.teal[500],
        warning: colors.orange[500],
        danger: colors.red[500],
        light: colors.gray[100],
        dark: colors.gray[900]
      }
    }
  },
  plugins: [
    require("./tailwindcss/plugins/btn"),
    require("./tailwindcss/plugins/input-group"),
    require("./tailwindcss/plugins/link"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
