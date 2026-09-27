<script setup lang="ts">
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')
const toggleTheme = () => {
  colorMode.preference = isDark.value ? 'light' : 'dark'
}
</script>

<template>
  <button
    type="button"
    aria-label="Toggle colour theme"
    class="group relative flex items-center gap-2 px-3 py-1.5 rounded-lg border transition-all duration-200 hover:scale-105 backdrop-blur-sm border-gray-300 hover:border-gray-400 bg-gray-100/50 dark:border-gray-700 dark:hover:border-gray-500 dark:bg-gray-900/50"
    @click="toggleTheme"
  >
    <!-- The server does not know the resolved mode, so icon + label render client-side only -->
    <ColorScheme tag="span" placeholder-tag="span" placeholder="" class="flex items-center gap-2">
      <Icon
        :name="isDark ? 'uil:moon' : 'uil:sun'"
        class="w-5 h-5 transition-transform group-hover:rotate-12 text-gray-700 dark:text-gray-300"
      />
      <span class="text-xs font-mono hidden sm:inline text-gray-700 dark:text-gray-300">
        {{ isDark ? 'Dark' : 'Light' }}
      </span>
    </ColorScheme>
  </button>
</template>
