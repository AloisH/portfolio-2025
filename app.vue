<script setup lang="ts">
useHead({
  title: "Aloïs Heloir - Portfolio 2025",
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: "description",
      content:
        "Aloïs Heloir is a Teamlead & Senior Fullstack Developer. He is passionate about building innovative solutions that make a difference in the world",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: "Aloïs Heloir - Portfolio 2025" },
    { property: "og:description", content: "Teamlead & Senior Fullstack Developer. Building innovative solutions with Vue, Angular, NodeJS, C++, and PostgreSQL." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Aloïs Heloir - Portfolio 2025" },
    { name: "twitter:description", content: "Teamlead & Senior Fullstack Developer" },
    { name: "theme-color", content: "#3b82f6" }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo-dark.svg' }
  ]
});
</script>

<template>
  <div class="bg-white scroll-smooth">
    <MainHeader />

    <main id="main-content">
      <SectionHeroSection />
      <SectionWorksSection />
      <SectionTestimonialSection />
      <SectionContactSection />
    </main>

    <MainFooter />
  </div>
</template>
