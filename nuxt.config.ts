// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/image', '@vueuse/motion/nuxt', 'nuxt-shiki'],
  css: ['~/app.css'],

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
      // Runs before first paint. SSR/prerender always renders the dark theme; when the visitor
      // stored "light", hide the body and disable transitions until useTheme().initTheme() flips
      // the state and reveals the page. Self-removes after 2s in case hydration never happens.
      script: [
        {
          key: 'theme-init',
          tagPriority: 'critical',
          innerHTML: "(function(){try{if(localStorage.getItem('theme')!=='light')return;var s=document.createElement('style');s.id='theme-pending';s.textContent='body{visibility:hidden}*,*::before,*::after{transition:none!important}';document.head.appendChild(s);var h=document.documentElement;h.style.backgroundColor='#fff';h.style.colorScheme='light';setTimeout(function(){var e=document.getElementById('theme-pending');if(e)e.remove()},2000)}catch(e){}})();"
        }
      ],
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