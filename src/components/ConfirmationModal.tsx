import { useState, useEffect } from 'react'
import { Button, useFocusTrap, useBodyScrollLock } from './ui'
import qrCodeImage from '../assets/images/qr-code-issue.png'

interface ConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onBack: () => void
  documentType: string
}

export default function ConfirmationModal({ isOpen, onClose, onBack, documentType }: ConfirmationModalProps) {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const modalRef = useFocusTrap<HTMLDivElement>(isOpen)
  useBodyScrollLock(isOpen)

  useEffect(() => {
    if (isOpen) {
      setIsImageLoading(true)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-30"
        onClick={onClose}
      />
      
      <div ref={modalRef} className="relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full md:max-w-[400px] max-h-[90vh] md:max-h-[calc(100vh-2rem)] flex flex-col">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-10 p-4 md:p-6 items-center w-full">
          <div className="flex flex-col gap-1.5 items-start w-full">
            <h2 className="font-bold leading-none text-lg text-[#0a0a0a] w-full">
              Issue {documentType}
            </h2>
            <p className="font-normal leading-5 text-sm text-[#737373] w-full">
              Scan the QR code below to add the document.
            </p>
          </div>

          <div className="bg-white border border-[rgba(163,163,163,0.5)] border-solid box-border flex flex-col gap-4 items-center justify-center p-5 rounded-2xl">
            <div className="relative shrink-0 size-[240px]">
              {isImageLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#e5e5e5] border-t-[#171717]"></div>
                </div>
              )}
              <img 
                alt="QR Code" 
                className={`absolute inset-0 max-w-none object-cover pointer-events-none size-full ${isImageLoading ? 'opacity-0' : 'opacity-100'} transition-opacity`}
                src={qrCodeImage}
                onLoad={() => setIsImageLoading(false)}
                onError={() => setIsImageLoading(false)}
              />
            </div>
          </div>
          </div>
        </div>

        {/* Divider - только на мобильных */}
        <div className="border-t border-[#e5e5e5] md:hidden"></div>

        {/* Footer */}
        <div className="flex flex-row gap-3 items-start w-full p-4 md:p-6">
          <Button variant="secondary" onClick={onBack} fullWidth>
            Back
          </Button>
          <Button variant="primary" onClick={onClose} fullWidth>
            Done
          </Button>
        </div>
      </div>
    </div>
  )
}

