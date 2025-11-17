<!--
@component SectionTemplate
Reusable wrapper for all sections with centered bordered layout
@slot default - Section content
-->
<template>
  <section class="border-b border-gray-100">
    <div class="h-full lg:border-x lg:border-gray-100 lg:mx-80">
      <slot></slot>
    </div>
  </section>
</template>
