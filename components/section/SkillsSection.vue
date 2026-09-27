<script setup lang="ts">
const { resolvedTheme } = useTheme()

interface SkillGroup {
  label: string
  items: string[]
}

const skills: SkillGroup[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Elixir', 'Rust', 'C#', 'C++', 'Java', 'PHP', 'SQL'] },
  { label: 'Frontend & Mobile', items: ['React', 'React Native', 'Vue.js', 'Nuxt', 'Angular', 'TailwindCSS', 'HTML5', 'CSS/SCSS', 'PWA'] },
  { label: 'Backend & Data', items: ['Node.js', 'NestJS', 'Express.js', '.NET', 'PostgreSQL', 'SQL Server', 'REST APIs', 'WebSocket', 'Async workers'] },
  { label: 'Cloud & DevOps', items: ['Docker', 'AWS', 'Azure', 'Terraform (IaC)', 'GitHub Actions', 'CircleCI', 'CI/CD', 'Linux', 'Git', 'Nx'] },
  { label: 'Testing & Quality', items: ['Playwright', 'TDD', 'Unit', 'Integration', 'End-to-end (E2E)', 'Code review'] },
  { label: 'AI Engineering', items: ['Claude Code', 'GitHub Copilot', 'LLM tool calling', 'AI agents', 'Agentic workflows'] },
  { label: 'Security & Compliance', items: ['GDPR', 'IAM', 'Access control', 'Audit trails', 'Healthcare data'] },
  { label: 'Leadership', items: ['Technical leadership', 'Team lead', 'Mentoring', 'Onboarding', 'Product thinking', 'Agile/Scrum'] }
]

const education = {
  school: 'EPITA School of Engineering and Computer Science',
  degree: 'Master of Science in Computer Science (Diplôme d\'Ingénieur)',
  location: 'Paris, France',
  period: '2018 - 2023'
}

const languages = [
  { name: 'French', level: 'Native' },
  { name: 'English', level: 'Fluent, daily working language (TOEIC 975/990)' }
]
</script>

<template>
  <SectionTemplate id="skills">
    <div class="px-4 py-8">
      <h2 :class="[
        'text-sm font-semibold tracking-widest mb-8 font-mono transition-colors duration-300',
        resolvedTheme === 'dark' ? 'text-gray-500' : 'text-gray-600'
      ]">
        <span :class="resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700'">03</span>
        <span class="text-gray-600">//</span> skills.json
      </h2>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(group, index) in skills"
          :key="group.label"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0 }"
          :duration="500"
          :delay="100 + index * 50"
          :class="[
            'border p-6 transition-all duration-300',
            resolvedTheme === 'dark'
              ? 'border-gray-800 bg-gray-900/30 hover:border-gray-700'
              : 'border-gray-200 bg-gray-50/50 hover:border-gray-300'
          ]"
        >
          <h3 :class="['text-sm font-semibold font-mono mb-4 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700']">
            {{ group.label }}
          </h3>
          <ul class="flex flex-wrap gap-2">
            <li
              v-for="item in group.items"
              :key="item"
              :class="[
                'px-3 py-1 text-xs font-medium rounded-full border font-mono transition-colors duration-300',
                resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-100 text-gray-700 border-gray-300'
              ]"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>

      <!-- Education & languages -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        :duration="500"
        :delay="200"
        :class="[
          'mt-6 border p-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 transition-all duration-300',
          resolvedTheme === 'dark'
            ? 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
            : 'border-gray-200 bg-white hover:border-gray-300'
        ]"
      >
        <div>
          <h3 :class="['text-sm font-semibold font-mono mb-2 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700']">
            Education
          </h3>
          <p :class="['font-semibold transition-colors duration-300', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">
            {{ education.school }}
          </p>
          <p :class="['transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            {{ education.degree }}
          </p>
          <p class="text-sm text-gray-500 font-mono">{{ education.location }} · {{ education.period }}</p>
        </div>
        <div>
          <h3 :class="['text-sm font-semibold font-mono mb-2 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-700']">
            Languages
          </h3>
          <ul :class="['space-y-1 transition-colors duration-300', resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700']">
            <li v-for="lang in languages" :key="lang.name">
              <span :class="['font-semibold', resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900']">{{ lang.name }}</span>
              <span class="text-gray-500"> · {{ lang.level }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </SectionTemplate>
</template>
