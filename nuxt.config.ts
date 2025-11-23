// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/motion/nuxt'],
  css: ['~/app.css'],

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'dns-prefetch', href: 'https://www.linkedin.com' },
        { rel: 'dns-prefetch', href: 'https://github.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap' }
      ]
    }
  },

  icon: {
    serverBundle: {
      collections: ['uil']
    }
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/']
    }
  },

  vite: {
    plugins: [
      tailwindcss(),
    ],
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue', 'vue-router']
          }
        }
      }
    }
  },
})