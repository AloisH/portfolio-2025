<!--
@component SectionTemplate
Reusable wrapper for all sections with centered bordered layout
@slot default - Section content
-->
<script setup lang="ts">
const { resolvedTheme } = useTheme()
</script>

<template>
  <section :class="[
    'border-b transition-colors duration-300',
    resolvedTheme === 'dark' ? 'border-gray-800' : 'border-gray-200'
  ]">
    <div :class="[
      'h-full lg:border-x lg:mx-80 transition-colors duration-300',
      resolvedTheme === 'dark' ? 'lg:border-gray-800' : 'lg:border-gray-200'
    ]">
      <slot></slot>
    </div>
  </section>
</template>
