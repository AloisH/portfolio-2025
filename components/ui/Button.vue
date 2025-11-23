<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  href?: string
  target?: string
}>(), {
  variant: 'primary',
  size: 'default'
})

const { resolvedTheme } = useTheme()

const wrapperClasses = computed(() => {
  if (props.variant === 'primary') {
    return 'rainbow-border p-[2px]'
  }
  return ''
})

const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none'

const variantClasses = computed(() => ({
  primary: resolvedTheme.value === 'dark'
    ? 'bg-black text-white hover:shadow-lg hover:shadow-purple-500/50 w-full h-full'
    : 'bg-white text-black hover:shadow-lg hover:shadow-blue-500/50 w-full h-full',
  secondary: 'border border-zinc-800 hover:border-zinc-700 focus:ring-zinc-700',
  ghost: 'hover:bg-zinc-900 focus:ring-zinc-800'
}))

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  default: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg'
}

const buttonClasses = computed(() => [
  baseClasses,
  variantClasses.value[props.variant],
  sizeClasses[props.size]
].join(' '))
</script>

<template>
  <span v-if="variant === 'primary'" :class="wrapperClasses">
    <a
      v-if="href"
      :href="href"
      :target="target"
      :class="buttonClasses"
    >
      <span class="relative z-10 inline-flex items-center"><slot /></span>
    </a>
    <button
      v-else
      :class="buttonClasses"
    >
      <span class="relative z-10 inline-flex items-center"><slot /></span>
    </button>
  </span>
  <template v-else>
    <a
      v-if="href"
      :href="href"
      :target="target"
      :class="buttonClasses"
    >
      <span class="relative z-10 inline-flex items-center"><slot /></span>
    </a>
    <button
      v-else
      :class="buttonClasses"
    >
      <span class="relative z-10 inline-flex items-center"><slot /></span>
    </button>
  </template>
</template>
