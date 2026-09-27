<!--
@component SectionTemplate
Reusable wrapper for all sections with centered bordered layout
@slot default - Section content
-->
<template>
  <section class="border-b transition-colors duration-300 border-gray-200 dark:border-gray-800">
    <div class="h-full lg:border-x lg:mx-80 transition-colors duration-300 lg:border-gray-200 dark:lg:border-gray-800">
      <slot></slot>
    </div>
  </section>
</template>
