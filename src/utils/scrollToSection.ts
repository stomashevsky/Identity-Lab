/**
 * Утилита для прокрутки к секции страницы
 * Гарантированно разблокирует скролл и прокручивает к нужной секции
 */
export function scrollToSection(sectionId: string) {
  // Убираем # если есть
  const id = sectionId.startsWith('#') ? sectionId.slice(1) : sectionId
  
  // Полностью разблокируем скролл на всех уровнях
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
  document.documentElement.style.overflow = ''
  document.documentElement.style.paddingRight = ''
  
  // Также убираем overflow из всех возможных родителей
  const root = document.getElementById('root')
  if (root) {
    root.style.overflow = ''
  }
  
  // Функция для прокрутки
  const performScroll = () => {
    const element = document.getElementById(id)
    if (!element) {
      return false
    }
    
    try {
      // Используем scrollIntoView - он автоматически учитывает scroll-margin-top из CSS
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
      
      return true
    } catch (error) {
      console.error('Error scrolling to section:', error)
      // Запасной вариант - используем window.scrollTo
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
        console.error('Fallback scroll also failed:', fallbackError)
        return false
      }
    }
  }
  
  // Пытаемся найти и прокрутить сразу
  if (performScroll()) {
    return
  }
  
  // Если не нашли, пробуем через requestAnimationFrame
  requestAnimationFrame(() => {
    if (!performScroll()) {
      // Если все еще не нашли, ждем немного и пробуем еще раз
      setTimeout(() => {
        if (!performScroll()) {
          // Последняя попытка - используем только scrollIntoView
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

