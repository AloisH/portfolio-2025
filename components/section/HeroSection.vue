<script setup lang="ts">
const { resolvedTheme } = useTheme()

const stack = ['TypeScript', 'React', 'React Native', 'NestJS', 'Elixir', 'PostgreSQL']
</script>

<template>
  <SectionTemplate>
    <div id="hero" class="px-4 py-16 relative overflow-hidden">
      <!-- Blur orb decorations -->
      <div class="absolute top-1/4 right-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div class="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div
        v-motion="motionReveal(0)"
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
          Senior Product Engineer @ PflegeNavi · Vienna, Austria
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
          Senior Full-Stack Product Engineer
        </h2>
        <p :class="[
          'mt-4 max-w-2xl leading-relaxed transition-colors duration-300',
          resolvedTheme === 'dark' ? 'text-gray-500' : 'text-gray-600'
        ]">
          Nearly 5 years shipping production software in healthcare, e-commerce and security.
          I own products end to end, from architecture and delivery to deployment and first paying users.
          Former team lead bringing testing culture, faster CI and AI-assisted engineering to the teams I join.
          At home in correctness-critical domains: payments, auditability, GDPR and healthcare data.
        </p>
        <ul class="mt-6 flex flex-wrap gap-2" aria-label="Core stack">
          <li
            v-for="tech in stack"
            :key="tech"
            :class="[
              'px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300',
              resolvedTheme === 'dark' ? 'bg-gray-900/60 text-gray-300 border-gray-800' : 'bg-gray-50 text-gray-700 border-gray-200'
            ]"
          >
            {{ tech }}
          </li>
        </ul>
      </div>

      <div
        v-motion="motionReveal(100)"
        class="mt-8 flex flex-wrap gap-4"
      >
        <UiButton href="#works" variant="primary">
          <span>View Works</span>
          <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </UiButton>
        <UiButton href="#projects" variant="secondary">
          Products & Projects
        </UiButton>
        <UiButton href="https://www.linkedin.com/in/alois-heloir/" target="_blank" variant="secondary">
          Get in touch
        </UiButton>
      </div>
    </div>
  </SectionTemplate>
</template>
