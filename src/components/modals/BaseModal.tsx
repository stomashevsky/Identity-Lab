import { ReactNode } from 'react'
import { Button, useFocusTrap, useBodyScrollLock } from '../ui'

interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: 'small' | 'large' // 400px или 740px
  children: ReactNode
  footer?: {
    primary?: { label: string; onClick: () => void; disabled?: boolean; fullWidth?: boolean }
    secondary?: { label: string; onClick: () => void; fullWidth?: boolean }
  }
  disableFocusTrap?: boolean // Для случаев с вложенными модалками
}

export default function BaseModal({
  isOpen,
  onClose,
  title,
  description,
  size = 'small',
  children,
  footer,
  disableFocusTrap = false,
}: BaseModalProps) {
  const modalRef = useFocusTrap<HTMLDivElement>(isOpen && !disableFocusTrap)
  useBodyScrollLock(isOpen)

  if (!isOpen) return null

  const maxWidthClass = size === 'small' ? 'md:max-w-[400px]' : 'md:max-w-[740px]'

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-30"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        ref={modalRef}
        className={`relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full ${maxWidthClass} max-h-[90vh] md:max-h-[calc(100vh-2rem)] flex flex-col`}
      >
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-10 p-4 md:p-6 w-full">
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
        {footer && <div className="border-t border-[#e5e5e5] md:hidden"></div>}

        {/* Footer */}
        {footer && (
          <div className={`flex flex-row gap-3 items-start w-full p-4 md:p-6 ${
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

