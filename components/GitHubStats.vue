<script setup lang="ts">

const stats = ref({
  repos: 0,
  contributions: 0,
  stars: 0,
  followers: 0,
});

const loading = ref(true);
const error = ref(false);

onMounted(async () => {
  try {
    const response = await fetch("https://api.github.com/users/aloish");
    const data = await response.json();

    stats.value = {
      repos: data.public_repos || 28,
      contributions: 2000, // GitHub API doesn't provide this directly
      stars: 0, // Would need to iterate through repos
      followers: data.followers || 17,
    };

    // Fetch total stars
    const reposResponse = await fetch(
      "https://api.github.com/users/aloish/repos?per_page=100"
    );
    const repos = await reposResponse.json();
    stats.value.stars = repos.reduce(
      (acc: number, repo: any) => acc + (repo.stargazers_count || 0),
      0
    );

    loading.value = false;
  } catch (e) {
    error.value = true;
    loading.value = false;
  }
});
</script>

<template>
  <div v-if="!loading && !error">
    <a
      href="https://github.com/aloish"
      target="_blank"
      rel="noopener noreferrer"
      class="inline-flex items-center gap-2 mb-4 font-mono text-sm font-medium transition-colors hover:opacity-70 text-gray-600 dark:text-gray-400"
    >
      <Icon name="uil:github" class="w-5 h-5" />
      <span>GitHub Activity</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
      </svg>
    </a>

    <div class="grid grid-cols-2 gap-4 lg:grid-cols-4">
    <div
      class="flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-purple-500/50 border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50"
    >
      <div
        class="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text font-mono text-2xl font-bold text-transparent"
      >
        {{ stats.repos }}+
      </div>
      <div class="mt-1 font-mono text-xs text-gray-500">Public Repos</div>
    </div>
    <div
      class="flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-orange-500/50 border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50"
    >
      <div
        class="bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text font-mono text-2xl font-bold text-transparent"
      >
        {{ stats.contributions }}+
      </div>
      <div class="mt-1 font-mono text-xs text-gray-500">Contributions</div>
    </div>
    <div
      class="flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-pink-500/50 border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50"
    >
      <div
        class="bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text font-mono text-2xl font-bold text-transparent"
      >
        {{ stats.stars }}+
      </div>
      <div class="mt-1 font-mono text-xs text-gray-500">GitHub Stars</div>
    </div>
    <div
      class="flex flex-col p-4 backdrop-blur-sm transition-colors hover:border-blue-500/50 border border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900/50"
    >
      <div
        class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text font-mono text-2xl font-bold text-transparent"
      >
        {{ stats.followers }}+
      </div>
      <div class="mt-1 font-mono text-xs text-gray-500">Followers</div>
    </div>
    </div>
  </div>
</template>
