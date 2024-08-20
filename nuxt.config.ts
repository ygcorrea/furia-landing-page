// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/google-fonts', 'nuxt-mdi', '@pinia/nuxt'],
  googleFonts: {
    families: {
      Kufam: {
        wght: [400, 600, 900],
      },
      Anton: true,
      Poppins: [100, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    preconnect: true,
  },
  imports: {
    dirs: ['stores'],
  },

  css: ['@/assets/main.css'],
});
