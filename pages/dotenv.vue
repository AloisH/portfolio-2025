<script setup lang="ts">
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
    { name: "theme-color", content: "#ffffff", media: "(prefers-color-scheme: light)" },
    { name: "theme-color", content: "#000000", media: "(prefers-color-scheme: dark)" }
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/logo-dark.svg' }
  ]
}))

const fishConfig = `starship init fish | source

if status is-interactive
    # Commands to run in interactive sessions can go here
end

set -gx VOLTA_HOME "$HOME/.volta"
set -gx PATH "$VOLTA_HOME/bin" $PATH`

const zedSettings = `{
  "agent": {
    "default_model": {
      "provider": "zed.dev",
      "model": "claude-sonnet-4-5"
    },
    "always_allow_tool_actions": true
  },
  "wsl_connections": [
    {
      "distro_name": "Ubuntu",
      "projects": [
        { "paths": ["/home/alois"] },
        { "paths": ["/home/alois/portfolio-2025"] }
      ]
    }
  ],
  "icon_theme": "Material Icon Theme",
  "vim_mode": true,
  "ui_font_size": 14,
  "buffer_font_size": 16,
  "theme": {
    "mode": "system",
    "light": "One Light",
    "dark": "GitHub Dark Default"
  },
  "languages": {
    "TypeScript": {
      "formatter": [
        { "code_action": "source.organizeImports" },
        { "code_action": "source.fixAll.eslint" },
        "prettier"
      ]
    },
    "Vue.js": {
      "code_actions_on_format": {
        "source.fixAll.eslint": true,
        "source.organizeImports": true
      }
    }
  },
  "autosave": "on_focus_change",
  "format_on_save": "on",
  "relative_line_numbers": true,
  "git": {
    "inline_blame": { "enabled": true }
  },
  "context_servers": {
    "mcp-server-context7": {
      "source": "extension",
      "enabled": true
    },
    "nuxt-ui": {
      "source": "custom",
      "command": "mcp-remote",
      "args": ["https://ui.nuxt.com/mcp"]
    }
  }
}`

const claudeConfig = `- In all interactions and commit messages, be extremely consise and sacrifice grammar for the sake of concision

## Plan

- At the end of each plan, give me a list of unresolved question to answer, if any. Make the questions extremely consise. Sacrifice grammar for the sake of consision.`

const claudeSettings = `{
  "includeCoAuthoredBy": false,
  "alwaysThinkingEnabled": true
}`
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
            <p class="opacity-70">Fish</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Prompt</h3>
            <p class="opacity-70">Starship</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Tools</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>Volta (Node version manager)</li>
            </ul>
          </div>
        </div>

        <ConfigBlock
          filename="config.fish"
          lang="fish"
          :code="fishConfig"
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
            <p class="opacity-70">System (One Light / GitHub Dark Default)</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Font Size</h3>
            <p class="opacity-70">UI: 14 / Buffer: 16</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">AI Agent</h3>
            <p class="opacity-70">Claude Sonnet 4.5</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Environment</h3>
            <p class="opacity-70">WSL Ubuntu</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Features</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>Vim mode + system clipboard</li>
              <li>Auto-format (Prettier + ESLint)</li>
              <li>Inline git blame</li>
              <li>Relative line numbers</li>
            </ul>
          </div>

          <div>
            <h3 class="font-semibold mb-1">MCP Servers</h3>
            <ul class="list-disc list-inside opacity-70 space-y-1">
              <li>Context7 (docs)</li>
              <li>Nuxt UI</li>
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
            <h3 class="font-semibold mb-1">Style</h3>
            <p class="opacity-70">Extremely concise, sacrifice grammar for brevity</p>
          </div>

          <div>
            <h3 class="font-semibold mb-1">Plan Mode</h3>
            <p class="opacity-70">End plans with concise unresolved questions</p>
          </div>
        </div>

        <ConfigTabs
          :tabs="[
            { filename: 'CLAUDE.md', lang: 'markdown', code: claudeConfig },
            { filename: 'settings.json', lang: 'json', code: claudeSettings }
          ]"
        />
      </div>
    </section>
  </SectionTemplate>
</template>
