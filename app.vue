<script setup lang="ts">
const { resolvedTheme, initTheme } = useTheme()

onMounted(() => {
  initTheme()
})

useHead(() => ({
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
    { name: "theme-color", content: resolvedTheme.value === 'dark' ? "#000000" : "#ffffff" }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo-dark.svg' }
  ]
}))
</script>

<template>
  <div :class="[
    'scroll-smooth relative transition-colors duration-300',
    resolvedTheme === 'dark' ? 'bg-black text-white' : 'bg-white text-gray-900'
  ]">
    <GridBackground />
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
