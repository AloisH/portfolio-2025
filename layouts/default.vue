<script setup lang="ts">
const { resolvedTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>

<template>
  <div :class="[
    'scroll-smooth relative transition-colors duration-300',
    resolvedTheme === 'dark' ? 'dark bg-black text-white' : 'bg-white text-gray-900'
  ]">
    <GridBackground />
    <MainHeader />

    <main id="main-content">
      <slot />
    </main>

    <MainFooter />
  </div>
</template>
