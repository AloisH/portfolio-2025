<template>
  <header class="border-b border-gray-100 bg-white">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black">
      Skip to main content
    </a>
    <div class="px-4 py-3 lg:mx-80 lg:border-x lg:border-gray-100 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <img src="/logo.svg" alt="H Logo" class="w-8 h-8" />
        <h1 class="text-lg font-medium">Atelier Heloir</h1>
      </div>
      <div class="flex gap-3">
        <a
          href="https://github.com/aloish"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github link"
          class="hover:opacity-70 transition-opacity"
        >
          <Icon
            name="uil:github"
            class="w-6 h-6 text-gray-700"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/alois-heloir/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn link"
          class="hover:opacity-70 transition-opacity"
        >
          <Icon
            name="uil:linkedin"
            class="w-6 h-6 text-gray-700"
          />
        </a>
      </div>
    </div>
  </header>
</template>
