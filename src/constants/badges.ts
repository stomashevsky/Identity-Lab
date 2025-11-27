/**
 * Константы и типы для текстов бейджей
 */

export const BADGE_LABELS = {
  CORE_IDENTIFICATION: 'Core Identification',
  AUTHORIZATION: 'Authorization',
  PRE_AUTHORIZED: 'Pre-authorized',
  TRANSACTION_CODE: 'Transaction Code',
  PRESENTATION: 'Presentation',
  VERIFIED_REQUESTER: 'Verified requester',
} as const

export const BADGE_LABEL_VALUES = Object.values(BADGE_LABELS)

export type BadgeLabel = typeof BADGE_LABELS[keyof typeof BADGE_LABELS]

