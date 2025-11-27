import { useEffect, useRef, useState } from 'react'

interface UseParallaxOptions {
  speed?: number // 0-1, where 0 is no movement, 1 is full scroll movement. Typical: 0.1-0.2 for subtle
  disabled?: boolean
}

/**
 * Hook for parallax motion effect based on scroll position
 * Optimized with requestAnimationFrame for 60 FPS performance
 */
export function useParallax(options: UseParallaxOptions = {}) {
  const { speed = 0.15, disabled = false } = options
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLElement>(null)
  const rafRef = useRef<number>()
  const initialOffsetRef = useRef<number | null>(null)

  useEffect(() => {
    if (disabled) {
      setOffset(0)
      return
    }

    const element = elementRef.current
    if (!element) return

    // Store initial position
    if (initialOffsetRef.current === null) {
      initialOffsetRef.current = element.getBoundingClientRect().top + window.scrollY
    }

    const updateParallax = () => {
      const element = elementRef.current
      if (!element) return

      const rect = element.getBoundingClientRect()
      const scrollY = window.scrollY
      const viewportHeight = window.innerHeight

      // Only calculate parallax when element is visible in viewport
      if (rect.bottom >= 0 && rect.top <= viewportHeight) {
        // Calculate parallax: element moves slower than scroll
        const scrollProgress = scrollY * speed
        setOffset(scrollProgress)
      }

      rafRef.current = requestAnimationFrame(updateParallax)
    }

    rafRef.current = requestAnimationFrame(updateParallax)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [speed, disabled])

  return {
    ref: elementRef,
    offset,
    style: {
      transform: `translateY(${offset}px)`,
      willChange: disabled ? 'auto' : 'transform',
    },
  }
}

