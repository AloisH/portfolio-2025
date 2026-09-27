<script setup lang="ts">
const { resolvedTheme } = useTheme()

interface Project {
  name: string
  kind: string
  description: string
  highlights?: string[]
  tags: string[]
  github?: string
  live?: string
}

const featured: Project = {
  name: 'Protocolys',
  kind: 'Founder & engineer · Medical protocol SaaS in production',
  description: 'Licensed and in daily production at a radiology practice (client: Imalliance), saving 30+ staff hours per week.',
  highlights: [
    'Schema-driven engine where each medical specialty is a configurable domain: typed fields generate the protocol card, patient form and validation workflow at runtime, so a new specialty is set up in an afternoon without a developer.',
    'Front-desk staff resolve standard cases in under 10 seconds. Only exceptions escalate to a physician through a traceable validation circuit.',
    'Owned architecture, product, self-hosted Docker deployment, GDPR data model and go-to-market.'
  ],
  tags: ['SaaS', 'Healthcare', 'Docker', 'GDPR', 'Product']
}

const projects: Project[] = [
  {
    name: 'charpente',
    kind: 'Fullstack starter template',
    description: 'Rust/Axum API + Vue 3 SPA + Nuxt site in a single binary. Types generated end-to-end from the OpenAPI spec, cookie auth, S3 uploads, CI/CD and Docker deploy out of the box. Shipped as a Copier template so fixes propagate to generated projects.',
    tags: ['Rust', 'Axum', 'Vue 3', 'Nuxt 4', 'OpenAPI'],
    github: 'https://github.com/AloisH/charpente'
  },
  {
    name: 'cabane',
    kind: 'One-page starter template',
    description: 'The small sibling of charpente: one Nuxt 4 page, an admin dashboard behind a shared secret, SQLite in a file, same lint/test/CI/GHCR tooling and none of the infrastructure.',
    tags: ['Nuxt 4', 'Nuxt UI', 'SQLite'],
    github: 'https://github.com/AloisH/cabane'
  },
  {
    name: 'internal-linktree',
    kind: 'Clinic portal & identity provider',
    description: 'Internal portal for a radiology clinic: role-based app and document directory, admin UI, and the establishment\'s OpenID Connect identity server (Better Auth) that other apps log in through.',
    tags: ['Nuxt 4', 'Better Auth', 'OIDC', 'SQLite'],
    github: 'https://github.com/AloisH/internal-linktree'
  },
  {
    name: 'Capture CLI',
    kind: 'Developer tooling for AI agents',
    description: 'Rust CLI that captures the output of long-running processes by name (dev servers, builds) so AI agents can grep, tail and read logs on demand.',
    tags: ['Rust', 'CLI', 'AI agents'],
    github: 'https://github.com/AloisH/capture-cli'
  },
  {
    name: 'Mini Agentic Harness',
    kind: 'AI agent framework',
    description: 'A minimal agentic loop in Rust built from scratch: LLM tool calling, bash execution and autonomous multi-step workflows against a local model.',
    tags: ['Rust', 'LLM', 'Tool calling'],
    github: 'https://github.com/AloisH/mini-agentic-harness'
  },
  {
    name: 'Protocol',
    kind: 'Offline-first PWA',
    description: 'Routine-tracking app with recurring schedules, progress charts and full offline capability. Local-first, no backend.',
    tags: ['Nuxt 4', 'IndexedDB', 'PWA'],
    github: 'https://github.com/AloisH/protocol',
    live: 'https://protocol.heloir.dev'
  },
  {
    name: 'Bistro',
    kind: 'SaaS starter kit',
    description: 'Production-ready Nuxt 4 SaaS boilerplate: Better Auth, Prisma/PostgreSQL, multi-tenancy, RBAC, Polar payments, Resend email.',
    tags: ['Nuxt 4', 'Prisma', 'Better Auth'],
    github: 'https://github.com/AloisH/bistro'
  },
  {
    name: 'warframe-spy',
    kind: 'Data tool',
    description: 'Ranks Warframe missions by platinum profitability from the official drop table and live warframe.market trade history. Static site rebuilt server-side.',
    tags: ['Node.js', 'Data', 'Static site'],
    github: 'https://github.com/AloisH/warframe-spy',
    live: 'https://aloish.github.io/warframe-spy/'
  },
  {
    name: 'GitHub PR Comment Copier',
    kind: 'Chrome extension',
    description: 'Copies GitHub PR review comments, with file paths, line numbers and code context, as AI-friendly XML in one click.',
    tags: ['TypeScript', 'Chrome extension', 'Vite'],
    github: 'https://github.com/AloisH/github-copy-comment'
  },
  {
    name: 'Stud\'Asso',
    kind: 'Open source',
    description: 'Association management platform. Led a team of four.',
    tags: ['Angular', 'NestJS']
  },
  {
    name: 'ImalysRCP',
    kind: 'Medical platform',
    description: 'PHP platform for multidisciplinary medical meetings, used for 1,000+ patients.',
    tags: ['PHP']
  },
  {
    name: 'ZombsCastle',
    kind: 'Mobile game',
    description: 'Published on Google Play.',
    tags: ['Mobile', 'Game']
  }
]

const cardClasses = computed(() => [
  'border transition-[border-color,background-color,box-shadow,translate] duration-300 hover:-translate-y-1 p-6',
  resolvedTheme.value === 'dark'
    ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 hover:shadow-lg'
    : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 hover:shadow-lg'
])

const tagClasses = computed(() => [
  'px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300',
  resolvedTheme.value === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300'
])
</script>

<template>
  <SectionTemplate id="projects">
    <div class="px-4 py-8">
      <h2 :class="[
        'text-sm font-semibold tracking-widest mb-8 font-mono transition-colors duration-300',
        resolvedTheme === 'dark' ? 'text-gray-500' : 'text-gray-600'
      ]">
        <span :class="resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'">02</span>
        <span class="text-gray-600">//</span> projects.json
      </h2>

      <!-- Featured product -->
      <article
        v-motion="motionReveal(50)"
        :class="[cardClasses, 'mb-6 relative overflow-hidden']"
      >
        <div class="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-transparent rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
        <div class="relative">
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 :class="['text-xl font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">
                {{ featured.name }}
              </h3>
              <p :class="['text-lg transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">
                {{ featured.kind }}
              </p>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <span class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span class="text-sm text-gray-500 font-mono">In production</span>
            </div>
          </div>
          <p :class="['leading-relaxed mb-3 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            {{ featured.description }}
          </p>
          <ul :class="['space-y-2 mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            <li v-for="highlight in featured.highlights" :key="highlight" class="flex items-start gap-2">
              <span aria-hidden="true" :class="['shrink-0 select-none', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>{{ highlight }}</span>
            </li>
          </ul>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in featured.tags" :key="tag" :class="tagClasses">{{ tag }}</span>
          </div>
        </div>
      </article>

      <!-- Other projects -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(project, index) in projects"
          :key="project.name"
          v-motion="motionReveal((index % 3) * 75)"
          :class="[cardClasses, 'flex flex-col']"
        >
          <div class="flex items-start justify-between gap-3">
            <h3 :class="['text-lg font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">
              {{ project.name }}
            </h3>
            <div v-if="project.github || project.live" class="flex items-center gap-2 flex-shrink-0">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${project.name} on GitHub`"
                class="hover:opacity-70 hover:scale-110 transition-all duration-200"
              >
                <Icon name="uil:github" :class="['w-5 h-5', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']" />
              </a>
              <a
                v-if="project.live"
                :href="project.live"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${project.name} live site`"
                class="hover:opacity-70 hover:scale-110 transition-all duration-200"
              >
                <Icon name="uil:external-link-alt" :class="['w-5 h-5', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']" />
              </a>
            </div>
          </div>
          <p class="text-sm text-gray-500 font-mono mb-3">{{ project.kind }}</p>
          <p :class="['text-sm leading-relaxed flex-1 mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            {{ project.description }}
          </p>
          <div class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" :class="tagClasses">{{ tag }}</span>
          </div>
        </article>
      </div>
    </div>
  </SectionTemplate>
</template>
