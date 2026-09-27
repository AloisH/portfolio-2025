<script setup lang="ts">
const { resolvedTheme } = useTheme()

useHead(() => ({
  title: "Aloïs Heloir - Portfolio 2025",
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: "description",
      content:
        "Aloïs Heloir is a Senior Full-Stack Product Engineer based in Vienna. Nearly 5 years shipping production software in healthcare, e-commerce and security with TypeScript, React, React Native, NestJS, Elixir and PostgreSQL.",
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: "Aloïs Heloir - Portfolio 2025" },
    { property: "og:description", content: "Senior Full-Stack Product Engineer. Shipping production software in healthcare, e-commerce and security with TypeScript, React, React Native, NestJS, Elixir and PostgreSQL." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Aloïs Heloir - Portfolio 2025" },
    { name: "twitter:description", content: "Senior Full-Stack Product Engineer · TypeScript, React, React Native, NestJS, Elixir" },
    { name: "theme-color", content: resolvedTheme.value === 'dark' ? "#000000" : "#ffffff" }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo-dark.svg' }
  ]
}))
</script>

<template>
  <SectionHeroSection />
  <SectionWorksSection />
  <SectionProjectsSection />
  <SectionSkillsSection />
  <SectionTestimonialSection />
  <SectionContactSection />
</template>
