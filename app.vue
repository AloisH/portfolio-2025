<script setup lang="ts">
import MainFooter from "./components/MainFooter.vue";
import ContactSection from "./components/section/ContactSection.vue";
import HeroSection from "./components/section/HeroSection.vue";
import TestimonialSection from "./components/section/TestimonialSection.vue";
import WorksSection from "./components/section/WorksSection.vue";
import SectionTemplate from "./components/SectionTemplate.vue";

useHead({
  title: "Aloïs Heloir - Portfolio 2025",
  meta: [
    {
      name: "description",
      content:
        "Aloïs Heloir is a Teamlead & Senior Fullstack Developer. He is passionate about building innovative solutions that make a difference in the world",
    },
  ],
});
</script>

<template>
  <div>
    <MainHeader />

    <main>
      <HeroSection />
      <SectionTemplate class="h-16" />
      <WorksSection />
      <SectionTemplate class="h-16" />
      <TestimonialSection />
      <SectionTemplate class="h-16" />
      <ContactSection />
      <SectionTemplate class="h-16" />
    </main>

    <MainFooter />
  </div>
</template>
