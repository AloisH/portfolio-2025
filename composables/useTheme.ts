export type Theme = 'light' | 'dark'

/** Id of the <style> injected by the inline head script (see nuxt.config.ts) when the stored theme differs from the SSR default. */
const PENDING_STYLE_ID = 'theme-pending'

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

  const initTheme = async () => {
    if (!import.meta.client) return
    const stored = localStorage.getItem('theme') as Theme | null
    theme.value = stored || 'dark'

    // The page was SSR'd dark. If the visitor stored "light", the head script hid <body> and
    // disabled transitions. Wait for the DOM to re-render with the light classes, flush styles
    // while transitions are still off, then reveal: no dark→light flash, no 300ms colour tween.
    await nextTick()
    const pending = document.getElementById(PENDING_STYLE_ID)
    if (pending) {
      void document.body.offsetHeight
      pending.remove()
    }
    document.documentElement.style.removeProperty('background-color')
    document.documentElement.style.removeProperty('color-scheme')
  }

  return {
    theme,
    resolvedTheme: theme,
    setTheme,
    toggleTheme,
    initTheme
  }
}
