// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      "~/components/atoms",
      "~/components/molecules",
      "~/components/organisms",
      "~/components/templates",
    ],
  },
});
