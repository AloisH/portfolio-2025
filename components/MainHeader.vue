<script setup lang="ts">
const { resolvedTheme } = useTheme()
const { activeSection, isScrolled } = useScrollSpy()

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'works', label: 'Works' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' }
]
</script>

<template>
  <header :class="[
    'sticky top-0 z-40 backdrop-blur-md transition-all duration-300',
    isScrolled
      ? resolvedTheme === 'dark'
        ? 'border-b border-gray-800 bg-black/80'
        : 'border-b border-gray-200 bg-white/80'
      : 'border-b border-transparent'
  ]">
    <a href="#main-content" :class="[
      'sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:border',
      resolvedTheme === 'dark'
        ? 'focus:bg-black focus:text-white focus:border-white'
        : 'focus:bg-white focus:text-black focus:border-black'
    ]">
      Skip to main content
    </a>
    <div :class="[
      'px-4 py-3 lg:mx-80 lg:border-x flex justify-between items-center',
      resolvedTheme === 'dark' ? 'lg:border-gray-800' : 'lg:border-gray-200'
    ]">
      <NuxtLink to="/" class="flex items-center gap-2 hover:opacity-70 transition-opacity duration-200">
        <img src="/logo.svg" alt="H Logo" class="w-8 h-8" />
        <h1 class="text-lg font-medium font-mono">Atelier Heloir</h1>
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden md:flex gap-6 items-center">
        <NuxtLink
          v-for="section in sections"
          :key="section.id"
          :to="`/#${section.id}`"
          :class="[
            'text-sm font-medium transition-all duration-200 hover:scale-105',
            activeSection === section.id
              ? resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
              : resolvedTheme === 'dark' ? 'text-gray-500 hover:text-gray-300' : 'text-gray-600 hover:text-gray-900'
          ]"
        >
          {{ section.label }}
        </NuxtLink>
      </nav>

      <div class="flex gap-3 items-center">
        <ThemeSwitcher />

        <a
          href="https://github.com/aloish"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github link"
          class="hover:opacity-70 hover:scale-110 transition-all duration-200"
        >
          <Icon
            name="uil:github"
            :class="[
              'w-6 h-6',
              resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            ]"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/alois-heloir/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn link"
          class="hover:opacity-70 hover:scale-110 transition-all duration-200"
        >
          <Icon
            name="uil:linkedin"
            :class="[
              'w-6 h-6',
              resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            ]"
          />
        </a>
      </div>
    </div>
  </header>
</template>
