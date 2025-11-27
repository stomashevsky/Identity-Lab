import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../../types/verification'
import { MembershipCardEnabledFields } from '../../types/documents'

interface MembershipCardVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: MembershipCardEnabledFields
}

export default function MembershipCardVerifiedModal({ isOpen, onClose, enabledFields }: MembershipCardVerifiedModalProps) {
  // Все доступные данные
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: 'First Name', value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: 'Last Name', value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'dateOfBirth', label: 'Date of Birth', value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: 'Card Number', value: 'M7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'Association', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuedOn', label: 'Issued On', value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: 'Expiry Date', value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'membershipType', label: 'Membership Type', value: 'Full member', enabledKey: 'membershipType', isPhoto: false },
    { key: 'status', label: 'Status', value: 'Active', enabledKey: 'status', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="Membership Card"
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}
