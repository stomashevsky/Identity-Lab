import { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import { Toast, ToastType } from '../components/ui/Toast'
import ToastContainer from '../components/ui/Toast'

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => string
  showSuccess: (message: string, duration?: number) => string
  showError: (message: string, duration?: number) => string
  showInfo: (message: string, duration?: number) => string
  closeToast: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

let toastIdCounter = 0

interface ToastProviderProps {
  children: ReactNode
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: ToastType = 'info', duration?: number) => {
    const id = `toast-${++toastIdCounter}`
    const newToast: Toast = {
      id,
      message,
      type,
      duration,
    }

    setToasts((prev) => [...prev, newToast])
    return id
  }, [])

  const closeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const showSuccess = useCallback((message: string, duration?: number) => {
    return showToast(message, 'success', duration)
  }, [showToast])

  const showError = useCallback((message: string, duration?: number) => {
    return showToast(message, 'error', duration)
  }, [showToast])

  const showInfo = useCallback((message: string, duration?: number) => {
    return showToast(message, 'info', duration)
  }, [showToast])

  return (
    <ToastContext.Provider value={{ showToast, showSuccess, showError, showInfo, closeToast }}>
      {children}
      <ToastContainer toasts={toasts} onClose={closeToast} />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

