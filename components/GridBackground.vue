<template>
  <div class="absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-300 opacity-[0.02] dark:opacity-[0.03]">
    <div
      class="absolute inset-0 dark:hidden"
      style="background-image: linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 32px 32px;"
    />
    <div
      class="absolute inset-0 hidden dark:block"
      style="background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 32px 32px;"
    />
  </div>
</template>
