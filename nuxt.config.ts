// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
  buildModules: ["@nuxtjs/google-analytics"],
  googleAnalytics: { id: "G-8HTZNV5NTS" },
});
