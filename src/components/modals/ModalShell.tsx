import { ReactNode, useEffect } from 'react'
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

  if (!isOpen) return null

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
  return (
    <div className={MODAL_RESPONSIVE_CLASSES.container.base}>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-30"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`${MODAL_RESPONSIVE_CLASSES.modal.base} ${maxWidthClass} ${MODAL_RESPONSIVE_CLASSES.modal.maxHeight}`}
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
}

