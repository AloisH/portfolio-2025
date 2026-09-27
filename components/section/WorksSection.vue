<script setup lang="ts">
const { resolvedTheme } = useTheme()

interface Work {
  role: string
  company: string
  period: string
  current?: boolean
  context: string
  bullets: string[]
  tags: string[]
}

const works: Work[] = [
  {
    role: 'Senior Product Engineer',
    company: 'PflegeNavi',
    period: 'Oct 2025 - Present',
    current: true,
    context: 'Vienna, Austria · Healthcare FinTech',
    bullets: [
      'Build and maintain 5 production applications (3 web, 2 mobile) covering the full financial lifecycle of nursing-home residents: admission, billing, payment reconciliation. Used by care organizations including Caritas.',
      'Designed the team\'s AI-assisted development workflow with Claude Code (repository context, custom commands, automated review passes), delivering features shelved a year earlier as too expensive and sharply reducing bug-fix turnaround.',
      'Ship Elixir back-end services and TypeScript/React/React Native clients under strict correctness constraints: money movement, audit trails and healthcare data protection (GDPR).',
      'Shape architecture decisions and code review standards across the application portfolio, partnering directly with product managers and healthcare domain experts.'
    ],
    tags: ['Elixir', 'TypeScript', 'React', 'React Native', 'NestJS', 'PostgreSQL']
  },
  {
    role: 'Lead Developer',
    company: 'Ringana',
    period: 'May 2024 - Sep 2025',
    context: 'Vienna, Austria · E-commerce, €300M annual revenue',
    bullets: [
      'Led a team of 5 engineers building the e-commerce platform of a direct-sales cosmetics company with roughly €300M in annual revenue.',
      'Introduced automated testing (unit, integration, Playwright end-to-end) on projects that had none, raising coverage from 0% to 20% and catching 100+ defects before release.',
      'Built a custom CMS as the first step in migrating content off WordPress, now used daily by 5-10 non-technical staff.',
      'Cut CI pipeline time by 50% (10 min to 5 min) and onboarded 10+ engineers across teams onto TypeScript standards, tooling and testing practices.'
    ],
    tags: ['TypeScript', 'Vue.js', 'NestJS', 'Playwright', 'CI/CD', 'Team Leadership']
  },
  {
    role: 'Software Engineer',
    company: 'Barracuda Networks',
    period: 'Nov 2023 - Apr 2024',
    context: 'Vienna, Austria · Enterprise network security',
    bullets: [
      'Developed features in C++ for the CloudGen / NG Firewall enterprise security platform on Linux.',
      'Diagnosed and resolved production incidents affecting firewall performance and reliability.'
    ],
    tags: ['C++', 'Linux', 'Bash', 'Network Security']
  },
  {
    role: 'Software Engineer',
    company: 'Mantu',
    period: 'Feb 2023 - Nov 2023',
    context: 'Vienna, Austria · Internal platforms',
    bullets: [
      'Designed and built an internal identity and access management (IAM) platform securing 100+ applications for 300 employees across the company\'s ERP ecosystem.',
      'Migrated a 200+ component Vue 2 application to Vue 3 single-handedly in one month.',
      'Provisioned and managed the Azure infrastructure as code (IaC) with Terraform.'
    ],
    tags: ['C#/.NET', 'Vue 3', 'Azure', 'Terraform', 'IAM']
  },
  {
    role: 'Software Engineer',
    company: 'Padoa',
    period: 'Sep 2021 - Jan 2022',
    context: 'Paris, France · Occupational health SaaS',
    bullets: [
      'Designed an asynchronous worker system for bulk Excel import/export, moving long-running jobs off the request path so the API no longer blocked under load.',
      'Redesigned the employee history data model to support anonymization, granular permissions and employees shared across multiple companies.'
    ],
    tags: ['Node.js', 'Angular', 'PostgreSQL', 'WebSocket']
  },
  {
    role: 'Teaching Assistant, Programming',
    company: 'EPITA',
    period: 'Sep 2020 - Jul 2022',
    context: 'Paris, France',
    bullets: [
      'Taught and mentored 600+ first-year engineering students in C++, C#, Java, JavaScript and SQL. Authored object-oriented programming exercise sets used across the cohort.'
    ],
    tags: ['C++', 'C#', 'Java', 'JavaScript', 'SQL', 'Teaching']
  },
  {
    role: 'Web Developer',
    company: 'CEOS-IT',
    period: 'Aug 2019 - Jul 2020',
    context: 'Béthune, France',
    bullets: [
      'Promoted from intern to developer. Built REST APIs and client-facing web applications in PHP and JavaScript.',
      'Delivered an electronic document signing solution (Universign API) with an Electron desktop client, and a bulk SMS notification service on the OVH API.'
    ],
    tags: ['PHP', 'JavaScript', 'Electron', 'REST']
  }
]
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
        <article
          v-for="(work, index) in works"
          :key="work.company"
          v-motion="motionReveal(50)"
          :class="[
            'group border transition-[border-color,background-color,box-shadow,translate] duration-300 hover:-translate-y-1 p-6',
            resolvedTheme === 'dark'
              ? 'border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900/80 hover:shadow-lg'
              : 'border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 hover:shadow-lg'
          ]"
        >
          <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-2 mb-4">
            <div>
              <h3 :class="['text-xl font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">
                {{ work.role }}
              </h3>
              <p :class="['text-lg transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">
                {{ work.company }}
              </p>
              <p class="text-sm text-gray-500 font-mono">{{ work.context }}</p>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <span v-if="work.current" class="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span class="text-sm text-gray-500 font-mono">{{ work.period }}</span>
            </div>
          </div>

          <ul :class="['space-y-2 mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            <li v-for="bullet in work.bullets" :key="bullet" class="flex items-start gap-2">
              <span :class="['mt-1', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600']">→</span>
              <span>{{ bullet }}</span>
            </li>
          </ul>

          <div class="flex flex-wrap gap-2">
            <span
              v-for="tag in work.tags"
              :key="tag"
              :class="[
                'px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300',
                resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300'
              ]"
            >
              {{ tag }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </SectionTemplate>
</template>
