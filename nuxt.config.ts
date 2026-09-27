// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/motion/nuxt', 'nuxt-shiki', '@nuxtjs/color-mode'],
  css: ['~/app.css'],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
    storageKey: 'theme'
  },

  shiki: {
    bundledLangs: ['bash', 'zsh', 'fish', 'json', 'yaml', 'toml', 'vim', 'markdown', 'typescript', 'javascript'],
    bundledThemes: ['vitesse-dark', 'vitesse-light']
  },

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true
  },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      // Theme colours live on <body>; @nuxtjs/color-mode toggles the `dark` class on <html>
      // before first paint, so SSR markup is theme-agnostic and there is no flash.
      bodyAttrs: { class: 'bg-white text-gray-900 dark:bg-black dark:text-white transition-colors duration-300' },
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