import { onMounted, onUnmounted } from 'vue'

export function useScrollAnimation() {
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight
      
      if (elementPosition < windowHeight - 100) {
        element.classList.add('animate')
      }
    })
  }

  onMounted(() => {
    animateOnScroll()
    window.addEventListener('scroll', animateOnScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', animateOnScroll)
  })

  return {
    animateOnScroll
  }
}