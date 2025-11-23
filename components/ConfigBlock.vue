<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  code: string
  lang: string
  filename?: string
}>()

const { copy, copied } = useClipboard({ copiedDuring: 1000 })
</script>

<template>
  <div class="border border-gray-400 dark:border-white/10 overflow-hidden">
    <!-- Header bar (only when filename provided) -->
    <div
      v-if="filename"
      class="flex items-center justify-between px-4 py-2 border-b border-gray-400 dark:border-white/10 bg-gray-200 dark:bg-white/[0.05]"
    >
      <span class="text-xs font-mono opacity-70">{{ filename }}</span>
      <button
        @click="copy(code)"
        class="opacity-70 hover:opacity-100 transition-all"
        :title="copied ? 'Copied!' : 'Copy to clipboard'"
      >
        <Icon :name="copied ? 'uil:check' : 'uil:copy'" class="w-4 h-4" />
      </button>
    </div>

    <!-- Code area -->
    <div class="relative">
      <Shiki
        :lang="lang"
        :code="code"
        :highlightOptions="{
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
          },
          defaultColor: false
        }"
        class="text-sm overflow-x-auto p-4"
      />

      <!-- Fallback copy button (when no filename/header) -->
      <button
        v-if="!filename"
        @click="copy(code)"
        class="absolute top-2 right-2 p-2 bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 opacity-70 hover:opacity-100 transition-all"
        :title="copied ? 'Copied!' : 'Copy to clipboard'"
      >
        <Icon :name="copied ? 'uil:check' : 'uil:copy'" class="w-4 h-4" />
      </button>
    </div>
  </div>
</template>