<script setup lang="ts">
const { resolvedTheme } = useTheme()

useHead(() => ({
  title: ".dotenv - Configuration | Aloïs Heloir",
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    {
      name: "description",
      content: "Development environment configuration for Terminal, Zed, and Claude"
    },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { property: "og:title", content: ".dotenv - Configuration | Aloïs Heloir" },
    { property: "og:description", content: "Development environment configuration" },
    { property: "og:type", content: "website" },
    { name: "theme-color", content: resolvedTheme.value === 'dark' ? "#000000" : "#ffffff" }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo-dark.svg' }
  ]
}))

const zshrcConfig = `# Path to oh-my-zsh
export ZSH="$HOME/.oh-my-zsh"

# Theme
ZSH_THEME="powerlevel10k/powerlevel10k"

# Plugins
plugins=(
  git
  docker
  zsh-autosuggestions
  zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# Aliases
alias ls='ls --color=auto'
alias ll='ls -lah'
alias g='git'
alias d='docker'
alias dc='docker-compose'`

const zedSettings = `{
  "theme": "One Dark",
  "buffer_font_family": "JetBrains Mono",
  "buffer_font_size": 14,
  "vim_mode": true,
  "format_on_save": "on",
  "tab_size": 2,
  "soft_wrap": "editor_width",
  "show_inline_completions": true,
  "languages": {
    "Vue": {
      "format_on_save": "on",
      "formatter": "prettier"
    },
    "TypeScript": {
      "format_on_save": "on",
      "formatter": "prettier"
    }
  }
}`

const claudeConfig = `# Global Instructions

- Extremely concise in all interactions
- Sacrifice grammar for concision

## Plan Mode

- End each plan with unresolved questions
- Keep questions extremely concise

## MCP Servers

- **Context7**: Up-to-date library docs
- **GitHub**: PR/issue integration`
</script>

<template>
  <SectionTemplate>
    <section class="py-8 px-4">
      <header class="mb-6">
        <h1 class="text-4xl font-bold mb-2">.dotenv</h1>
        <p class="text-lg opacity-70">Development environment configuration</p>
      </header>
    </section>
  </SectionTemplate>

  <SectionTemplate>
    <section class="py-6 px-4">
      <header class="mb-4">
        <h2 class="text-2xl font-bold mb-2">Terminal</h2>
        <p class="opacity-70 mb-4">Shell and terminal configuration</p>
      </header>

      <div class="space-y-6">
        <div class="space-y-3">
          <div>
            <h3 class="font-semibold mb-1">Shell</h3>
            <p class="opacity-70">Zsh with Oh My Zsh</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Theme</h3>
            <p class="opacity-70">Powerlevel10k</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Key Plugins</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>git</li>
              <li>zsh-autosuggestions</li>
              <li>zsh-syntax-highlighting</li>
              <li>docker</li>
            </ul>
          </div>
        </div>

        <ConfigBlock
          filename=".zshrc"
          lang="bash"
          :code="zshrcConfig"
        />
      </div>
    </section>
  </SectionTemplate>

  <SectionTemplate>
    <section class="py-6 px-4">
      <header class="mb-4">
        <h2 class="text-2xl font-bold mb-2">Zed</h2>
        <p class="opacity-70 mb-4">Code editor setup</p>
      </header>

      <div class="space-y-6">
        <div class="space-y-3">
          <div>
            <h3 class="font-semibold mb-1">Theme</h3>
            <p class="opacity-70">One Dark</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Font</h3>
            <p class="opacity-70">JetBrains Mono</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Key Extensions</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>Vue</li>
              <li>TypeScript</li>
              <li>Prettier</li>
              <li>ESLint</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Features</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>Vim mode enabled</li>
              <li>Inline AI assistance</li>
              <li>Auto-format on save</li>
            </ul>
          </div>
        </div>

        <ConfigBlock
          filename="settings.json"
          lang="json"
          :code="zedSettings"
        />
      </div>
    </section>
  </SectionTemplate>

  <SectionTemplate>
    <section class="py-6 px-4">
      <header class="mb-4">
        <h2 class="text-2xl font-bold mb-2">Claude</h2>
        <p class="opacity-70 mb-4">AI assistant configuration</p>
      </header>

      <div class="space-y-6">
        <div class="space-y-3">
          <div>
            <h3 class="font-semibold mb-1">Model</h3>
            <p class="opacity-70">Claude Sonnet 4.5</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Communication Style</h3>
            <p class="opacity-70">Extremely concise, grammar sacrificed for brevity</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Preferences</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>Plan mode for complex tasks</li>
              <li>Todo list for multi-step workflows</li>
              <li>Direct execution for simple tasks</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-1">MCP Servers</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>Context7 (docs)</li>
              <li>GitHub integration</li>
            </ul>
          </div>
        </div>

        <ConfigBlock
          filename="CLAUDE.md"
          lang="markdown"
          :code="claudeConfig"
        />
      </div>
    </section>
  </SectionTemplate>
</template>
