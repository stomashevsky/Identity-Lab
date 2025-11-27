/**
 * Типы для системы верификации документов
 */

/**
 * Возможные ключи для enabledFields
 * Используются для связи полей VerificationField с enabledFields
 */
export type VerificationFieldKey =
  | 'fullName'
  | 'dateOfBirth'
  | 'photograph'
  | 'placeOfBirth'
  | 'nationality'
  | 'residentialAddress'
  | 'cardNumber'
  | 'issuingAuthority'
  | 'issuingCountry'
  | 'documentType'
  | 'issuedOn'
  | 'expiryDate'
  | 'faculty'
  | 'degree'
  | 'categories'
  | 'restrictions'
  | 'confirmedAge'
  | 'coverageType'
  | 'status'
  | 'membershipType'

/**
 * Поле верификации - базовый элемент данных
 */
export interface VerificationField {
  key: string
  label: string
  value: string
  enabledKey: VerificationFieldKey
  isPhoto: boolean
}

/**
 * Данные верификации - массив полей
 */
export type VerificationData = VerificationField[]

/**
 * Базовый тип для enabledFields с дженериками для разных документов
 * Усиленное ограничение: T должен быть объектом с boolean | undefined значениями
 */
export type EnabledFields<T extends Record<string, boolean | undefined> = Record<string, boolean | undefined>> = T

