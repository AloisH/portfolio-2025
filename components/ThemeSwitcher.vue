<script setup lang="ts">
const { theme, toggleTheme } = useTheme()

const themeIcon = computed(() => theme.value === 'dark' ? 'uil:moon' : 'uil:sun')
const themeLabel = computed(() => theme.value === 'dark' ? 'Dark' : 'Light')
</script>

<template>
  <button
    @click="toggleTheme"
    :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
    :class="[
      'group relative flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105 backdrop-blur-sm',
      theme === 'dark'
        ? 'border-gray-700 hover:border-gray-500 bg-gray-900/50'
        : 'border-gray-300 hover:border-gray-400 bg-gray-100/50'
    ]"
  >
    <Icon
      :name="themeIcon"
      :class="[
        'w-5 h-5 transition-transform group-hover:rotate-12',
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      ]"
    />
    <span :class="[
      'text-xs font-mono hidden sm:inline',
      theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
    ]">
      {{ themeLabel }}
    </span>
  </button>
</template>
