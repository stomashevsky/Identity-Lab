/**
 * Типы для enabledFields каждого типа документа
 * Определяет, какие поля могут быть включены/выключены при верификации
 */

/**
 * Поля для Digital Identity
 */
export interface DigitalIdentityEnabledFields {
  fullName?: boolean
  dateOfBirth?: boolean
  photograph?: boolean
  placeOfBirth?: boolean
  nationality?: boolean
  residentialAddress?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
  issuingCountry?: boolean
  documentType?: boolean
  issuedOn?: boolean
  expiryDate?: boolean
}

/**
 * Поля для Student ID
 */
export interface StudentIdEnabledFields {
  fullName?: boolean
  photograph?: boolean
  dateOfBirth?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
  issuedOn?: boolean
  expiryDate?: boolean
  faculty?: boolean
  degree?: boolean
}

/**
 * Поля для Driver's License
 */
export interface DriversLicenseEnabledFields {
  fullName?: boolean
  dateOfBirth?: boolean
  photograph?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
  issuingCountry?: boolean
  issuedOn?: boolean
  expiryDate?: boolean
  categories?: boolean
  restrictions?: boolean
}

/**
 * Поля для Age 18+
 */
export interface Age18EnabledFields {
  confirmedAge?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
}

/**
 * Поля для Health Insurance Card
 */
export interface HealthInsuranceEnabledFields {
  fullName?: boolean
  dateOfBirth?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
  issuedOn?: boolean
  expiryDate?: boolean
  coverageType?: boolean
  status?: boolean
}

/**
 * Поля для Proof of Address
 */
export interface ProofOfAddressEnabledFields {
  fullName?: boolean
  residentialAddress?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
  issuedOn?: boolean
  expiryDate?: boolean
}

/**
 * Поля для Membership Card
 */
export interface MembershipCardEnabledFields {
  fullName?: boolean
  dateOfBirth?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
  issuedOn?: boolean
  expiryDate?: boolean
  membershipType?: boolean
  status?: boolean
}

/**
 * Поля для Library Card
 */
export interface LibraryCardEnabledFields {
  fullName?: boolean
  dateOfBirth?: boolean
  cardNumber?: boolean
  issuingAuthority?: boolean
  issuedOn?: boolean
  expiryDate?: boolean
  membershipType?: boolean
  status?: boolean
}

/**
 * Union тип для всех возможных enabledFields документов
 */
export type DocumentEnabledFields =
  | DigitalIdentityEnabledFields
  | StudentIdEnabledFields
  | DriversLicenseEnabledFields
  | Age18EnabledFields
  | HealthInsuranceEnabledFields
  | ProofOfAddressEnabledFields
  | MembershipCardEnabledFields
  | LibraryCardEnabledFields

