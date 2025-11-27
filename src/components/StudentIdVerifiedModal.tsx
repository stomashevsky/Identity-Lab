import VerifiedModalBase from './modals/VerifiedModalBase'
import { VerificationData } from '../../types/verification'
import { StudentIdEnabledFields } from '../../types/documents'

interface StudentIdVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: StudentIdEnabledFields
}

export default function StudentIdVerifiedModal({ isOpen, onClose, enabledFields }: StudentIdVerifiedModalProps) {
  // Все доступные данные
  const allVerificationData: VerificationData = [
    { key: 'firstName', label: 'First Name', value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: 'Last Name', value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'photograph', label: 'Photograph', value: '', enabledKey: 'photograph', isPhoto: true },
    { key: 'dateOfBirth', label: 'Date of Birth', value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: 'Card Number', value: 'S7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'ID Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuedOn', label: 'Issued On', value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: 'Expiry Date', value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'faculty', label: 'Faculty', value: 'Computer Science', enabledKey: 'faculty', isPhoto: false },
    { key: 'degree', label: 'Degree', value: 'Bachelor of Science', enabledKey: 'degree', isPhoto: false },
  ]

  return (
    <VerifiedModalBase
      isOpen={isOpen}
      onClose={onClose}
      title="Student ID"
      allVerificationData={allVerificationData}
      enabledFields={enabledFields}
    />
  )
}

