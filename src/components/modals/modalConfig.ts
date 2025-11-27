/**
 * Константы для модальных окон
 * 
 * Стратегия responsive поведения:
 * 
 * Mobile (< 768px):
 * - Модалка появляется снизу экрана (items-end)
 * - Занимает всю ширину (w-full)
 * - Скругление только сверху (rounded-t-2xl)
 * - Максимальная высота 90vh
 * - Нет padding у контейнера (p-0)
 * - Divider виден перед футером
 * - Контент в одну колонку
 * 
 * Desktop (>= 768px):
 * - Модалка центрируется (items-center)
 * - Padding вокруг контейнера (p-4)
 * - Скругление со всех сторон (rounded-2xl)
 * - Максимальная ширина зависит от размера (400px или 740px)
 * - Максимальная высота calc(100vh - 2rem)
 * - Divider скрыт
 * - Контент может быть в две колонки (если используется двухколоночная раскладка)
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

/**
 * Responsive classes for modals
 * All media conditions for mobile/desktop are collected here for a single point of control
 */
export const MODAL_RESPONSIVE_CLASSES = {
  // Modal container (wrapper)
  container: {
    // Positioning: bottom on mobile, centered on desktop
    // Padding: none on mobile, present on desktop
    base: 'fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden',
  },
  // Modal window
  modal: {
    // Border radius: top only on mobile, all sides on desktop
    // Sizes: full width on mobile, limited on desktop
    // Height: 90vh on mobile, calc(100vh - 2rem) on desktop
    base: 'relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full flex flex-col',
    maxHeight: 'max-h-[90vh] md:max-h-[calc(100vh-2rem)]',
    // Max width depending on size (desktop only)
    maxWidth: {
      small: 'md:max-w-[400px]',
      large: 'md:max-w-[740px]',
    },
  },
  // Modal content
  content: {
    // Padding: less on mobile, more on desktop
    wrapper: 'flex flex-col gap-10 p-4 md:p-6 w-full',
  },
  // Divider before footer
  divider: {
    // Visible only on mobile
    base: 'border-t border-[#e5e5e5] md:hidden',
  },
  // Footer
  footer: {
    // Padding: less on mobile, more on desktop
    base: 'flex flex-row gap-3 items-start w-full p-4 md:p-6',
  },
} as const

/**
 * Класс для двухколоночной раскладки контента в модалках
 * Используется в модалках с большим количеством полей
 * Mobile: одна колонка (flex-col)
 * Desktop: две колонки (flex-row) с большим отступом
 */
export const MODAL_TWO_COLUMN_LAYOUT = 'flex flex-col md:flex-row gap-4 md:gap-12 items-start w-full'

