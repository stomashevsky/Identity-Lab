/**
 * Типы для системы верификации документов
 */

/**
 * Поле верификации - базовый элемент данных
 */
export interface VerificationField {
  key: string
  label: string
  value: string
  enabledKey: string
  isPhoto: boolean
}

/**
 * Данные верификации - массив полей
 */
export type VerificationData = VerificationField[]

/**
 * Базовый тип для enabledFields с дженериками для разных документов
 */
export type EnabledFields<T extends Record<string, boolean | undefined> = Record<string, boolean | undefined>> = T

