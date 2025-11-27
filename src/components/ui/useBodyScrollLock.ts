import { useEffect, useRef } from 'react'

/**
 * Hook to lock/unlock body scroll when modal is open
 * Preserves the original overflow value and restores it when unlocked
 */
export function useBodyScrollLock(isLocked: boolean) {
  const originalOverflowRef = useRef<string | null>(null)

  useEffect(() => {
    if (isLocked) {
      // Save the current overflow value if not already saved
      // Only save if overflow is not already 'hidden' (for nested modals)
      if (originalOverflowRef.current === null) {
        const currentOverflow = document.body.style.overflow || ''
        // If overflow is already hidden, it means another modal is open
        // In that case, we don't need to save/restore
        if (currentOverflow !== 'hidden') {
          originalOverflowRef.current = currentOverflow
        }
      }
      // Lock the scroll
      document.body.style.overflow = 'hidden'
    } else {
      // Restore the original overflow value only if we saved one
      if (originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current
        originalOverflowRef.current = null
      }
    }

    // Cleanup function
    return () => {
      if (isLocked && originalOverflowRef.current !== null) {
        document.body.style.overflow = originalOverflowRef.current
        originalOverflowRef.current = null
      }
    }
  }, [isLocked])
}

