import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../../types/verification'

interface Age18VerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: {
    confirmedAge?: boolean
    cardNumber?: boolean
    issuingAuthority?: boolean
  }
}

export default function Age18VerifiedModal({ isOpen, onClose, enabledFields }: Age18VerifiedModalProps) {
  // Все доступные данные
  const allVerificationData: VerificationData = [
    { key: 'confirmedAge', label: 'Confirmed Age', value: '18+', enabledKey: 'confirmedAge', isPhoto: false },
    { key: 'cardNumber', label: 'Card Number', value: 'A7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="Age 18+"
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

