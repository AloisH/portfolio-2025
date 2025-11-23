export type Theme = 'light' | 'dark'

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => 'dark')

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme
    if (import.meta.client) {
      localStorage.setItem('theme', newTheme)
    }
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'dark' ? 'light' : 'dark')
  }

  const initTheme = () => {
    if (import.meta.client) {
      const stored = localStorage.getItem('theme') as Theme | null
      theme.value = stored || 'dark'
    }
  }

  return {
    theme,
    resolvedTheme: theme,
    setTheme,
    toggleTheme,
    initTheme
  }
}
