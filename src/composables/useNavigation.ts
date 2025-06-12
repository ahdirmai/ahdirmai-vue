import { ref, onMounted, onUnmounted } from 'vue'

export function useNavigation() {
  const isScrolled = ref(false)
  const isMobileMenuOpen = ref(false)

  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }

  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }

  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      closeMobileMenu()
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isScrolled,
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    scrollToSection
  }
}