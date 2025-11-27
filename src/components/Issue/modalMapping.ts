/**
 * Реэкспорт типов и функций из configs/modals.ts для обратной совместимости
 * @deprecated Используйте напрямую из configs/modals.ts
 */

export type { DocumentType, ModalComponent } from '../../configs/modals'
export type { FlowMode as ModalMode } from '../../constants/flows'
export { MODAL_MAPPING, getModalComponent } from '../../configs/modals'

// Re-export constants for convenience
export { DOCUMENT_TYPES, FLOW_MODES } from '../../constants'

