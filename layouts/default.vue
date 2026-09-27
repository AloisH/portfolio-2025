<template>
  <div class="scroll-smooth relative min-h-screen">
    <GridBackground />
    <MainHeader />

    <main id="main-content">
      <slot />
    </main>

    <MainFooter />
  </div>
</template>
