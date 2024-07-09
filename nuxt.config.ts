// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-swiper',
    '@nuxt/image',
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: 'PT. Data Integrasi Semesta - Your Trusted Partner',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      meta: [
        {
          name: 'description',
          content: 'IoT company that offer a wide range of customizable solutions to meet your needs, including building technology, fire safety, security, and other IT products. Our company specializes in advanced technologies such as Smart Building Solutions, Data Center Infrastructure, Control Room Infrastructure, and Interactive Multimedia Technology. Discover how our innovative solutions can enhance your operations and ensure top-notch safety and efficiency.',
        },
        {
          name: 'keywords',
          content: 'Smart building solutions, Data center and control room infrastructure, Interactive multimedia technology, Fire safety, IT products'
        }
      ],
    }
  },
  tailwindcss: {
    configPath: '~/tailwind.config.js',
  },
  css: [
    '@/assets/styles/tailwind.css'
  ],
  googleFonts: {
    families: {
      Poppins: [400, 500, 600, 700],
    }
  },
})
