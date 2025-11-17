<template>
  <SectionTemplate>
    <div class="px-4 py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gray-700 to-transparent opacity-20 rounded-full -mr-48 -mt-48"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gray-700 to-transparent opacity-20 rounded-full -ml-48 -mb-48"></div>

      <div class="relative z-10 flex flex-col lg:flex-row gap-8 items-start lg:items-center justify-between">
        <div>
          <div class="text-sm text-accent-400 font-semibold tracking-wide mb-2">03 CONTACT</div>
          <h2 class="text-3xl lg:text-4xl font-semibold mb-2">
            Let's build something extraordinary together
          </h2>
          <p class="text-gray-300 flex items-center gap-2">
            <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            I would love to speak to you
          </p>
        </div>
        <a
          href="https://www.linkedin.com/in/alois-heloir/"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative bg-white hover:bg-accent-50 text-gray-900 hover:text-accent-600 px-8 py-4 inline-flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-2xl font-medium rounded-xl"
        >
          <span class="relative">Get in touch</span>
          <svg class="w-5 h-5 transition-transform group-hover:translate-x-1 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
      </div>
    </div>
  </SectionTemplate>
</template>
