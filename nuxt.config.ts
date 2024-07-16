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
          content: 'We specialize in building services and fire safety engineeringwe are a leading system integrator specializing in building services and fire safety engineering, utilizing the latest technologies and IoT solutions. we provide a wide range of cutting-edge building technologies, fire safety, security, and IT products. offering comprehensive value-added services, XYZ provides ICT system integration, software development, consulting, implementation, and operational support.',
        },
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
