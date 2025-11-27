/**
 * Константы для модальных окон
 */

export const MODAL_SIZES = {
  small: '400px',
  large: '740px',
} as const

export type ModalSize = keyof typeof MODAL_SIZES

export const MODAL_COLORS = {
  overlay: '#0a0a0a',
  overlayOpacity: 0.3,
  border: '#e5e5e5',
  textPrimary: '#0a0a0a',
  textSecondary: '#737373',
  background: '#ffffff',
} as const

export const MODAL_Z_INDEX = 50

export const MODAL_SPACING = {
  paddingMobile: '1rem', // p-4
  paddingDesktop: '1.5rem', // p-6
  gap: '2.5rem', // gap-10
  footerGap: '0.75rem', // gap-3
} as const

export const MODAL_BORDER_RADIUS = {
  mobile: '1rem', // rounded-t-2xl
  desktop: '1rem', // rounded-2xl
} as const

export const MODAL_MAX_HEIGHT = {
  mobile: '90vh',
  desktop: 'calc(100vh - 2rem)',
} as const

