<script setup lang="ts">
import SectionTemplate from "../SectionTemplate.vue";
</script>

<template>
  <SectionTemplate>
    <div
      class="py-16 text-white bg-gradient-to-r from-black to-gray-800 p-4 flex flex-col lg:flex-row gap-4 justify-between"
    >
      <div>
        <h1 class="text-2xl font-semibold">
          Let’s build something extraordinary together
        </h1>
        <p class="text-gray-400">I would love to speak to you</p>
      </div>
      <a
        href="https://www.linkedin.com/in/alois-heloir/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button class="bg-white hover:bg-gray-200 text-black px-4 py-2">
          Contact me
        </button>
      </a>
    </div>
  </SectionTemplate>
</template>
