import { useState, useCallback } from 'react'

/**
 * Хук для централизованного управления состоянием множества модалок
 * Заменяет множественные useState для каждой модалки на единое управление
 */
export function useModalState<T extends string>(modalTypes: T[]) {
  const [openModals, setOpenModals] = useState<Set<T>>(new Set())

  const openModal = useCallback((type: T) => {
    setOpenModals((prev) => new Set(prev).add(type))
  }, [])

  const closeModal = useCallback((type: T) => {
    setOpenModals((prev) => {
      const next = new Set(prev)
      next.delete(type)
      return next
    })
  }, [])

  const isOpen = useCallback((type: T) => {
    return openModals.has(type)
  }, [openModals])

  const closeAll = useCallback(() => {
    setOpenModals(new Set())
  }, [])

  return {
    openModal,
    closeModal,
    isOpen,
    closeAll,
  }
}

