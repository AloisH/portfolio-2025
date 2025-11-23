<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const props = defineProps<{
  tabs: Array<{
    filename: string
    lang: string
    code: string
  }>
}>()

const activeTab = ref(0)
const { copy, copied } = useClipboard({ copiedDuring: 1000 })
</script>

<template>
  <div class="border border-gray-400 dark:border-white/10 overflow-hidden">
    <!-- Tab buttons -->
    <div class="flex items-center justify-between border-b border-gray-400 dark:border-white/10">
      <div class="flex flex-1">
        <button
          v-for="(tab, index) in tabs"
          :key="tab.filename"
          @click="activeTab = index"
          class="flex-1 px-4 py-2 text-xs font-mono transition-all"
          :class="
            activeTab === index
              ? 'bg-gray-200 dark:bg-white/[0.05] opacity-100'
              : 'bg-transparent opacity-70 hover:opacity-100'
          "
        >
          {{ tab.filename }}
        </button>
      </div>
      <button
        @click="copy(tabs[activeTab].code)"
        class="px-4 py-2 opacity-70 hover:opacity-100 transition-all bg-gray-200 dark:bg-white/[0.05]"
        :title="copied ? 'Copied!' : 'Copy to clipboard'"
      >
        <Icon :name="copied ? 'uil:check' : 'uil:copy'" class="w-4 h-4" />
      </button>
    </div>

    <!-- Active tab content -->
    <div class="relative">
      <Shiki
        :key="activeTab"
        :lang="tabs[activeTab].lang"
        :code="tabs[activeTab].code"
        :highlightOptions="{
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark'
          },
          defaultColor: false
        }"
        class="text-sm overflow-x-auto p-4"
      />
    </div>
  </div>
</template>
