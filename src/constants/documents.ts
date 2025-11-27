/**
 * Константы и типы для типов документов EUDI
 */

export const DOCUMENT_TYPES = {
  DIGITAL_IDENTITY: 'Digital Identity',
  STUDENT_ID: 'Student ID',
  DRIVERS_LICENSE: "Driver's License",
  AGE_18: 'Age 18+',
  HEALTH_INSURANCE: 'Health Insurance Card',
  PROOF_OF_ADDRESS: 'Proof of Address',
  MEMBERSHIP_CARD: 'Membership Card',
  LIBRARY_CARD: 'Library Card',
} as const

export const DOCUMENT_TYPE_VALUES = Object.values(DOCUMENT_TYPES)

export type DocumentType = typeof DOCUMENT_TYPES[keyof typeof DOCUMENT_TYPES]

