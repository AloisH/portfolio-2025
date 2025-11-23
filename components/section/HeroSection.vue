<script setup lang="ts">
const { resolvedTheme } = useTheme()
</script>

<template>
  <SectionTemplate>
    <div id="hero" class="px-4 py-16 relative overflow-hidden">
      <!-- Blur orb decorations -->
      <div class="absolute top-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="500"
      >
        <div :class="[
          'inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium rounded-full backdrop-blur-sm transition-colors duration-300',
          resolvedTheme === 'dark'
            ? 'text-green-400 bg-green-950/30 border border-green-800/50'
            : 'text-green-700 bg-green-50 border border-green-200'
        ]">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Available for opportunities
        </div>
        <h1 :class="[
          'text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent mb-4',
          resolvedTheme === 'dark'
            ? 'bg-gradient-to-r from-white via-gray-100 to-gray-400'
            : 'bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500'
        ]">
          Aloïs Heloir
        </h1>
        <h2 :class="[
          'text-xl lg:text-2xl mt-2 font-mono transition-colors duration-300',
          resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
        ]">
          Techlead & Senior Fullstack Developer
        </h2>
        <p :class="[
          'mt-4 max-w-2xl leading-relaxed transition-colors duration-300',
          resolvedTheme === 'dark' ? 'text-gray-500' : 'text-gray-600'
        ]">
          Building innovative web solutions with Vue, Angular, and modern tooling. Passionate about clean code, team collaboration, and delivering exceptional user experiences.
        </p>
      </div>

      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="500"
        :delay="100"
        class="mt-8 flex flex-wrap gap-4"
      >
        <UiButton href="#works" variant="primary">
          <span>View Works</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </UiButton>
        <UiButton href="https://www.linkedin.com/in/alois-heloir/" target="_blank" variant="secondary">
          Get in touch
        </UiButton>
      </div>
    </div>
  </SectionTemplate>
</template>
