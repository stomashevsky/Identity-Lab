/**
 * Константы и типы для имен иконок
 */

export const ICON_NAMES = {
  FINGERPRINT: 'fingerprint',
  BOOK: 'book',
  CAR: 'car',
  CALENDAR: 'calendar',
  SHIELD: 'shield',
  HOME: 'home',
  STAR: 'star',
  LIBRARY: 'library',
} as const

export const ICON_NAME_VALUES = Object.values(ICON_NAMES)

export type IconName = typeof ICON_NAMES[keyof typeof ICON_NAMES]

