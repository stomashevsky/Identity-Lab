import { useState, useEffect } from 'react'
import ModalShell from './modals/ModalShell'
import qrCodeImage from '../assets/images/qr-code-verify.png'

interface VerifyConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onAutoClose?: () => void
  documentType: string
}

export default function VerifyConfirmationModal({ isOpen, onClose, onAutoClose, documentType }: VerifyConfirmationModalProps) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      setIsImageLoading(true)
      
      // Автоматическое закрытие через 3 секунды
      const timer = setTimeout(() => {
        if (onAutoClose) {
          onAutoClose()
        }
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isOpen, onAutoClose])

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      title={`Verify ${documentType}`}
      description="Scan the QR code below to verify this document."
      size="small"
      footer={{
        secondary: { label: 'Cancel', onClick: onClose, fullWidth: true },
      }}
    >
      <div className="bg-white border border-[rgba(163,163,163,0.5)] border-solid box-border flex flex-col gap-4 items-center justify-center p-5 rounded-2xl w-fit self-center">
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
    </ModalShell>
  )
}

