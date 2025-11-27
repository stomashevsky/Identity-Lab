import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../../types/verification'

interface ProofOfAddressVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: {
    fullName?: boolean
    residentialAddress?: boolean
    cardNumber?: boolean
    issuingAuthority?: boolean
    issuedOn?: boolean
    expiryDate?: boolean
  }
}

export default function ProofOfAddressVerifiedModal({ isOpen, onClose, enabledFields }: ProofOfAddressVerifiedModalProps) {
  // Все доступные данные
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: 'First Name', value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: 'Last Name', value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'residentialAddress', label: 'Residential Address', value: '123 Main Street, City, Country', enabledKey: 'residentialAddress', isPhoto: false },
    { key: 'cardNumber', label: 'Card Number', value: 'P7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuedOn', label: 'Issued On', value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: 'Expiry Date', value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="Proof of Address"
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}
