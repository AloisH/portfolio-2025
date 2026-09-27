<script setup lang="ts">
const { resolvedTheme } = useTheme()
</script>

<template>
  <SectionTemplate>
    <div
      id="contact"
      :class="[
        'px-4 py-16 relative overflow-hidden transition-colors duration-300',
        resolvedTheme === 'dark'
          ? 'bg-gradient-to-r from-gray-950 via-gray-900 to-black text-white'
          : 'bg-gradient-to-r from-gray-50 via-white to-gray-100 text-gray-900'
      ]"
    >
      <div :class="[
        'absolute top-0 right-0 w-96 h-96 bg-gradient-to-br rounded-full -mr-48 -mt-48 blur-3xl transition-opacity duration-300',
        resolvedTheme === 'dark' ? 'from-orange-500/10 to-transparent opacity-50' : 'from-orange-300/20 to-transparent opacity-30'
      ]"></div>
      <div :class="[
        'absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr rounded-full -ml-48 -mb-48 blur-3xl transition-opacity duration-300',
        resolvedTheme === 'dark' ? 'from-purple-500/10 to-transparent opacity-50' : 'from-purple-300/20 to-transparent opacity-30'
      ]"></div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="500"
        class="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between"
      >
        <div>
          <div class="text-sm font-semibold tracking-widest mb-2 font-mono">
            <span :class="resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'">05</span>
            <span class="text-gray-600">//</span>
            <span :class="resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'"> contact.json</span>
          </div>
          <h2 class="text-3xl lg:text-4xl font-semibold mb-2 tracking-tight">
            Let's build something extraordinary together
          </h2>
          <p :class="['flex items-center gap-2 font-mono text-sm transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">
            <svg :class="['w-5 h-5', resolvedTheme === 'dark' ? 'text-gray-500' : 'text-gray-600']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            I would love to speak to you
          </p>
        </div>
        <UiButton
          href="https://www.linkedin.com/in/alois-heloir/"
          target="_blank"
          variant="primary"
          size="lg"
          class="flex-shrink-0"
        >
          <span>Get in touch</span>
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </UiButton>
      </div>
    </div>
  </SectionTemplate>
</template>
