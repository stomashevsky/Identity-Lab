import { useEffect } from 'react'

import ModalShell from './modals/ModalShell'
import QRCodeDisplay from './modals/QRCodeDisplay'
import { DocumentType } from '../constants/documents'
import qrCodeImage from '../assets/images/qr-code-verify.png'

interface VerifyConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onAutoClose?: () => void
  documentType: DocumentType
}

export default function VerifyConfirmationModal({ isOpen, onClose, onAutoClose, documentType }: VerifyConfirmationModalProps) {
  useEffect(() => {
    if (isOpen && onAutoClose) {
      // Auto-close after 3 seconds
      const timer = setTimeout(() => {
        onAutoClose()
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
      <QRCodeDisplay src={qrCodeImage} />
    </ModalShell>
  )
}

