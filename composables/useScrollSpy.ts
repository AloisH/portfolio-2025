import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollSpy = () => {
  const activeSection = ref<string>('')
  const isScrolled = ref(false)

  const handleScroll = () => {
    // Check if scrolled more than 50px
    isScrolled.value = window.scrollY > 50

    // Get all sections
    const sections = ['hero', 'works', 'projects', 'skills', 'testimonials', 'contact']
    const scrollPosition = window.scrollY + 100 // Offset for better detection

    // Find active section
    for (const sectionId of sections) {
      const element = document.getElementById(sectionId)
      if (element) {
        const { top, bottom } = element.getBoundingClientRect()
        if (top <= 100 && bottom > 100) {
          activeSection.value = sectionId
          break
        }
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    activeSection,
    isScrolled
  }
}
