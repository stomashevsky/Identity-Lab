import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { DigitalIdentityEnabledFields } from '../types/documents'

interface DigitalIdentityVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: DigitalIdentityEnabledFields
}

export default function DigitalIdentityVerifiedModal({ isOpen, onClose, enabledFields }: DigitalIdentityVerifiedModalProps) {
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: 'First Name', value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: 'Last Name', value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'photograph', label: 'ID Photo', value: '', enabledKey: 'photograph', isPhoto: true },
    { key: 'dateOfBirth', label: 'Date of Birth', value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'placeOfBirth', label: 'Place of Birth', value: 'City, Country', enabledKey: 'placeOfBirth', isPhoto: false },
    { key: 'nationality', label: 'Nationality', value: 'Not specified', enabledKey: 'nationality', isPhoto: false },
    { key: 'residentialAddress', label: 'Residential Address', value: '123 Main Street, City, Country', enabledKey: 'residentialAddress', isPhoto: false },
    { key: 'cardNumber', label: 'Card Number', value: 'ID7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuingCountry', label: 'Issuing Country', value: 'Country', enabledKey: 'issuingCountry', isPhoto: false },
    { key: 'documentType', label: 'Document Type', value: 'ID card', enabledKey: 'documentType', isPhoto: false },
    { key: 'issuedOn', label: 'Issued On', value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: 'Expiry Date', value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="Digital Identity"
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

