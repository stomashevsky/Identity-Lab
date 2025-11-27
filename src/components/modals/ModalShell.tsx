import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Button, useFocusTrap, useBodyScrollLock } from '../ui'
import { type ModalSize, MODAL_RESPONSIVE_CLASSES } from './modalConfig'

// Types for footer buttons
export interface ModalFooterButton {
  label: string
  onClick: () => void
  fullWidth?: boolean
}

export interface ModalPrimaryButton extends ModalFooterButton {
  disabled?: boolean
}

export interface ModalFooter {
  primary?: ModalPrimaryButton
  secondary?: ModalFooterButton
}

export interface ModalShellProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: ModalSize
  children: ReactNode
  footer?: ModalFooter
  disableFocusTrap?: boolean // For nested modals
  disableEscapeClose?: boolean // Disable ESC key close
}

export default function ModalShell({
  isOpen,
  onClose,
  title,
  description,
  size = 'small',
  children,
  footer,
  disableFocusTrap = false,
  disableEscapeClose = false,
}: ModalShellProps) {
  const modalRef = useFocusTrap<HTMLDivElement>(isOpen && !disableFocusTrap)
  useBodyScrollLock(isOpen)
  const [isAnimating, setIsAnimating] = useState(false)
  const [shouldRender, setShouldRender] = useState(isOpen)

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      // Start with closed state, then animate to open
      setIsAnimating(false)
      // Trigger enter animation on next frame
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      })
    } else {
      // Trigger exit animation
      setIsAnimating(false)
      // Remove from DOM after animation
      const timer = setTimeout(() => {
        setShouldRender(false)
      }, 200) // Match modal-exit duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Handle ESC key close
  useEffect(() => {
    if (!isOpen || disableEscapeClose) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose, disableEscapeClose])

  if (!shouldRender) return null

  const maxWidthClass = MODAL_RESPONSIVE_CLASSES.modal.maxWidth[size]

  /**
   * Responsive modal behavior:
   * 
   * Mobile (< 768px):
   * - Appears from bottom (items-end)
   * - Full screen width (w-full)
   * - Rounded only on top (rounded-t-2xl)
   * - Max height 90vh
   * - No container padding (p-0)
   * - Divider visible before footer
   * 
   * Desktop (>= 768px):
   * - Centered vertically and horizontally (items-center)
   * - Container padding 1rem (p-4)
   * - Rounded on all sides (rounded-2xl)
   * - Max width depends on size (400px or 740px)
   * - Max height calc(100vh - 2rem)
   * - Divider hidden
   */
  
  const modalContent = (
    <div className={MODAL_RESPONSIVE_CLASSES.container.base}>
      {/* Background overlay - covers entire viewport */}
      <div
        className={`fixed inset-0 bg-[#0a0a0a] transition-opacity duration-200 ${
          isAnimating ? 'opacity-30' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Modal - centered in viewport */}
      <div
        ref={modalRef}
        className={`${MODAL_RESPONSIVE_CLASSES.modal.base} ${maxWidthClass} ${MODAL_RESPONSIVE_CLASSES.modal.maxHeight} transition-all duration-200 ease-spring-out relative ${
          isAnimating
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-[0.95]'
        }`}
      >
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className={MODAL_RESPONSIVE_CLASSES.content.wrapper}>
            {/* Header */}
            {title && (
              <div className="flex flex-col gap-1.5 items-start w-full">
                <h2 className="font-bold leading-none text-lg text-[#0a0a0a] w-full">
                  {title}
                </h2>
                {description && (
                  <p className="font-normal leading-5 text-sm text-[#737373] w-full">
                    {description}
                  </p>
                )}
              </div>
            )}

            {/* Content */}
            {children}
          </div>
        </div>

        {/* Divider - только на мобильных */}
        {footer && <div className={MODAL_RESPONSIVE_CLASSES.divider.base}></div>}

        {/* Footer */}
        {footer && (
          <div className={`${MODAL_RESPONSIVE_CLASSES.footer.base} ${
            footer.primary && footer.secondary ? 'justify-end' : 
            footer.primary && footer.primary.fullWidth ? 'justify-stretch' :
            footer.secondary && footer.secondary.fullWidth ? 'justify-stretch' :
            'justify-end'
          }`}>
            {footer.secondary && (
              <Button
                variant="secondary"
                onClick={footer.secondary.onClick}
                fullWidth={footer.secondary.fullWidth}
              >
                {footer.secondary.label}
              </Button>
            )}
            {footer.primary && (
              <Button
                variant="primary"
                onClick={footer.primary.onClick}
                disabled={footer.primary.disabled}
                fullWidth={footer.primary.fullWidth}
              >
                {footer.primary.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )

  // Render modal via Portal at body level to escape parent container constraints
  return createPortal(modalContent, document.body)
}

