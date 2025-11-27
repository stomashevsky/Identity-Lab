import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../types/verification'
import { DriversLicenseEnabledFields } from '../types/documents'

interface DriversLicenseVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: DriversLicenseEnabledFields
}

export default function DriversLicenseVerifiedModal({ isOpen, onClose, enabledFields }: DriversLicenseVerifiedModalProps) {
  // All available data
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: 'First Name', value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: 'Last Name', value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'photograph', label: 'Photograph', value: '', enabledKey: 'photograph', isPhoto: true },
    { key: 'dateOfBirth', label: 'Date of Birth', value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: 'Card Number', value: 'D7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'Transport Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuingCountry', label: 'Issuing Country', value: 'Country', enabledKey: 'issuingCountry', isPhoto: false },
    { key: 'issuedOn', label: 'Issued On', value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: 'Expiry Date', value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'categories', label: 'Categories', value: 'B', enabledKey: 'categories', isPhoto: false },
    { key: 'restrictions', label: 'Restrictions', value: 'None', enabledKey: 'restrictions', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="Driver's License"
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

