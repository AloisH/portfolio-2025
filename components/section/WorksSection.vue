<script setup lang="ts">
const { resolvedTheme } = useTheme()
</script>

<template>
  <SectionTemplate id="works">
    <div class="px-4 py-8">
      <h2 :class="[
        'text-sm font-semibold tracking-widest mb-8 font-mono transition-colors duration-300',
        resolvedTheme === 'dark' ? 'text-gray-500' : 'text-gray-600'
      ]">
        <span :class="resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'">01</span>
        <span class="text-gray-600">//</span> works.json
      </h2>

      <div class="space-y-6">
        <!-- Ringana -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="500"
          :delay="100"
          :class="[
            'group border transition-all duration-300 hover:-translate-y-1 p-6 relative overflow-hidden',
            resolvedTheme === 'dark'
              ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 hover:shadow-lg'
              : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 hover:shadow-lg'
          ]"
        >
          <div class="relative">
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
              <div>
                <h3 :class="['text-xl font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">Tech lead & Web Developer</h3>
                <p :class="['text-lg transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Ringana</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span class="text-sm text-gray-500 font-mono">May 2024 - Present</span>
              </div>
            </div>
            <p :class="['leading-relaxed mb-3 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
              As a Tech Lead, leading and collaborating with a team of 4 developers to build the e-commerce website of Ringana.
            </p>
            <ul :class="['space-y-1 mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
              <li class="flex items-start gap-2">
                <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
                <span>Fixing over 100 bugs and improving the functionality of the website</span>
              </li>
              <li class="flex items-start gap-2">
                <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
                <span>Improving developer experience by implementing proper typescript</span>
              </li>
            </ul>
            <div class="flex flex-wrap gap-2">
              <span :class="['px-3 py-1 text-xs font-medium border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">TypeScript</span>
              <span :class="['px-3 py-1 text-xs font-medium border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">E-commerce</span>
              <span :class="['px-3 py-1 text-xs font-medium border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Team Leadership</span>
            </div>
          </div>
        </div>

        <!-- Barracuda -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="500"
          :delay="200"
          :class="[
            'group border transition-all duration-300 hover:-translate-y-1 p-6',
            resolvedTheme === 'dark'
              ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 hover:shadow-lg'
              : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 hover:shadow-lg'
          ]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 :class="['text-xl font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">Software Engineer</h3>
              <p :class="['text-lg transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Barracuda</p>
            </div>
            <div class="text-sm text-gray-500 font-mono">Nov 2023 - Apr 2024</div>
          </div>
          <p :class="['leading-relaxed mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            Working on a firewall project at Barracuda Network, focusing on C++ code. Responsibilities include fixing bug and improving the functionality of the NG Firewall.
          </p>
          <div class="flex flex-wrap gap-2">
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">C++</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Network Security</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Firewall</span>
          </div>
        </div>

        <!-- Mantu -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="500"
          :delay="300"
          :class="[
            'group border transition-all duration-300 hover:-translate-y-1 p-6',
            resolvedTheme === 'dark'
              ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 hover:shadow-lg'
              : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 hover:shadow-lg'
          ]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 :class="['text-xl font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">Software Engineer</h3>
              <p :class="['text-lg transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Mantu</p>
            </div>
            <div class="text-sm text-gray-500 font-mono">Feb 2023 - Nov 2023</div>
          </div>
          <ul :class="['space-y-2 mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            <li class="flex items-start gap-2">
              <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>Design, development and support of an internally developed product centralizing access rights to the company's ERP</span>
            </li>
            <li class="flex items-start gap-2">
              <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>Migrating a Vue2 application to Vue3 of over 200 components</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-2">
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Vue 3</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Migration</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">ERP</span>
          </div>
        </div>

        <!-- Epita -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="500"
          :delay="400"
          :class="[
            'group border transition-all duration-300 hover:-translate-y-1 p-6',
            resolvedTheme === 'dark'
              ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 hover:shadow-lg'
              : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 hover:shadow-lg'
          ]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 :class="['text-xl font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">YAKA - Programming Assistant</h3>
              <p :class="['text-lg transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Epita</p>
            </div>
            <div class="text-sm text-gray-500 font-mono">Feb 2022 - Jul 2022</div>
          </div>
          <p :class="['leading-relaxed mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            Programming assistant for more than 600 first year engineering students.
          </p>
          <div class="flex flex-wrap gap-2">
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">C++</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">SQL</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Java</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">JavaScript</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Teaching</span>
          </div>
        </div>

        <!-- Padoa -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="500"
          :delay="500"
          :class="[
            'group border transition-all duration-300 hover:-translate-y-1 p-6',
            resolvedTheme === 'dark'
              ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 hover:shadow-lg'
              : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 hover:shadow-lg'
          ]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 :class="['text-xl font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">Fullstack developer</h3>
              <p :class="['text-lg transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">Padoa</p>
            </div>
            <div class="text-sm text-gray-500 font-mono">Sep 2021 - Jan 2022</div>
          </div>
          <ul :class="['space-y-2 mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            <li class="flex items-start gap-2">
              <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>Working on the main PADOA application with Angular 12 frontend and NodeJS 14 backend with Express and PostgreSQL</span>
            </li>
            <li class="flex items-start gap-2">
              <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>API optimization: Implemented worker system to handle heavy Excel import/export tasks preventing backend crashes</span>
            </li>
            <li class="flex items-start gap-2">
              <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>Redesigned employee modification history system with access control, anonymization, and multi-company support</span>
            </li>
            <li class="flex items-start gap-2">
              <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>UI redesign of filter selection interface</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-2">
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Angular</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Node.js</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">PostgreSQL</span>
            <span :class="['px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300', resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300']">Express</span>
          </div>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>
