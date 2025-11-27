/**
 * Utility for scrolling to a page section
 * Guarantees scroll unlock and scrolls to the target section
 */
export function scrollToSection(sectionId: string) {
  // Remove # if present
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId

  // Fully unlock scroll on all levels
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.documentElement.style.overflow = ''
  document.documentElement.style.paddingRight = ''
  
  // Also remove overflow from all possible parents
  const root = document.getElementById('root')
  if (root) {
    root.style.overflow = ''
  }
  
  // Scroll function
  const performScroll = () => {
    const element = document.getElementById(id)
    if (!element) {
      return false
    }
    
    try {
      // Use scrollIntoView - it automatically accounts for scroll-margin-top from CSS
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
      
      return true
    } catch (error) {
      // Silently handle scroll errors in production
      if (import.meta.env.DEV) {
        // eslint-disable-next-line no-console
        console.warn('Error scrolling to section:', error)
      }
      // Fallback - use window.scrollTo
      try {
        const rect = element.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const navbar = document.querySelector('[class*="border-b"]') as HTMLElement
        const navbarHeight = navbar?.offsetHeight || 80
        const targetPosition = rect.top + scrollTop - navbarHeight
        
        window.scrollTo({
          top: Math.max(0, targetPosition),
          behavior: 'smooth'
        })
        return true
      } catch (fallbackError) {
        // Silently handle scroll errors in production
        if (import.meta.env.DEV) {
          // eslint-disable-next-line no-console
          console.warn('Fallback scroll also failed:', fallbackError)
        }
        return false
      }
    }
  }
  
  // Try to find and scroll immediately
  if (performScroll()) {
    return
  }

  // If not found, try via requestAnimationFrame
  requestAnimationFrame(() => {
    if (!performScroll()) {
      // If still not found, wait a bit and try again
      setTimeout(() => {
        if (!performScroll()) {
          // Last attempt - use only scrollIntoView
          const element = document.getElementById(id)
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            })
          }
        }
      }, 100)
    }
  })
}

