<template>
  <footer class="border-t transition-colors duration-300 border-gray-200 bg-white dark:border-gray-800 dark:bg-black">
    <div class="px-4 py-6 lg:mx-80 lg:border-x transition-colors duration-300 lg:border-gray-200 dark:lg:border-gray-800">
      <GitHubStats />
    </div>

    <div class="px-4 py-8 lg:mx-80 lg:border-x border-t flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 transition-colors duration-300 lg:border-gray-200 border-gray-200 dark:lg:border-gray-800 dark:border-gray-800">
      <div>
        <div class="text-lg font-medium font-mono mb-1">Atelier Heloir</div>
        <div class="text-sm text-gray-500">© 2025 All rights reserved</div>
      </div>
      <div class="flex gap-4 items-center">
        <NuxtLink
          to="/dotenv"
          class="text-sm hover:opacity-70 transition-colors duration-200 px-1 text-gray-600 dark:text-gray-400"
        >
          .dotenv
        </NuxtLink>
        <div class="w-px h-6 flex-shrink-0 bg-gray-300 dark:bg-gray-700"></div>
        <a
          href="https://github.com/aloish"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github link"
          class="hover:opacity-70 hover:scale-110 transition-all duration-200"
        >
          <Icon
            name="uil:github"
            class="w-6 h-6 text-gray-700 dark:text-gray-300"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/alois-heloir/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin link"
          class="hover:opacity-70 hover:scale-110 transition-all duration-200"
        >
          <Icon
            name="uil:linkedin"
            class="w-6 h-6 text-gray-700 dark:text-gray-300"
          />
        </a>
      </div>
    </div>
  </footer>
</template>
