<script setup lang="ts">
const { resolvedTheme } = useTheme()

const stats = ref({
  repos: 0,
  contributions: 0,
  stars: 0,
  followers: 0
})

const loading = ref(true)
const error = ref(false)

onMounted(async () => {
  try {
    const response = await fetch('https://api.github.com/users/aloish')
    const data = await response.json()

    stats.value = {
      repos: data.public_repos || 0,
      contributions: 1200, // GitHub API doesn't provide this directly
      stars: 0, // Would need to iterate through repos
      followers: data.followers || 0
    }

    // Fetch total stars
    const reposResponse = await fetch('https://api.github.com/users/aloish/repos?per_page=100')
    const repos = await reposResponse.json()
    stats.value.stars = repos.reduce((acc: number, repo: any) => acc + (repo.stargazers_count || 0), 0)

    loading.value = false
  } catch (e) {
    error.value = true
    loading.value = false
  }
})
</script>

<template>
  <div v-if="!loading && !error" class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
    <div :class="[
      'flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-purple-500/50',
      resolvedTheme === 'dark' ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'
    ]">
      <div class="text-2xl font-bold font-mono bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">{{ stats.repos }}+</div>
      <div class="text-xs text-gray-500 font-mono mt-1">Public Repos</div>
    </div>
    <div :class="[
      'flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-orange-500/50',
      resolvedTheme === 'dark' ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'
    ]">
      <div class="text-2xl font-bold font-mono bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">{{ stats.contributions }}+</div>
      <div class="text-xs text-gray-500 font-mono mt-1">Contributions</div>
    </div>
    <div :class="[
      'flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-pink-500/50',
      resolvedTheme === 'dark' ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'
    ]">
      <div class="text-2xl font-bold font-mono bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">{{ stats.stars }}+</div>
      <div class="text-xs text-gray-500 font-mono mt-1">GitHub Stars</div>
    </div>
    <div :class="[
      'flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-blue-500/50',
      resolvedTheme === 'dark' ? 'bg-gray-900/50 border border-gray-800' : 'bg-gray-50 border border-gray-200'
    ]">
      <div class="text-2xl font-bold font-mono bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{{ stats.followers }}+</div>
      <div class="text-xs text-gray-500 font-mono mt-1">Followers</div>
    </div>
  </div>
</template>
