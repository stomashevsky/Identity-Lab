/**
 * Конфигурация модальных окон для Issue и Verify флоу
 * Использует константы вместо магических строк
 */

import { ComponentType } from 'react'
import { DocumentType, DOCUMENT_TYPES } from '../constants/documents'
import { FlowMode, FLOW_MODES } from '../constants/flows'
import DigitalIdentityModal from '../components/DigitalIdentityModal'
import StudentIdModal from '../components/StudentIdModal'
import DriversLicenseModal from '../components/DriversLicenseModal'
import Age18Modal from '../components/Age18Modal'
import HealthInsuranceModal from '../components/HealthInsuranceModal'
import ProofOfAddressModal from '../components/ProofOfAddressModal'
import MembershipCardModal from '../components/MembershipCardModal'
import LibraryCardModal from '../components/LibraryCardModal'
import VerifyDigitalIdentityModal from '../components/VerifyDigitalIdentityModal'
import VerifyStudentIdModal from '../components/VerifyStudentIdModal'
import VerifyDriversLicenseModal from '../components/VerifyDriversLicenseModal'
import VerifyAge18Modal from '../components/VerifyAge18Modal'
import VerifyHealthInsuranceModal from '../components/VerifyHealthInsuranceModal'
import VerifyProofOfAddressModal from '../components/VerifyProofOfAddressModal'
import VerifyMembershipCardModal from '../components/VerifyMembershipCardModal'
import VerifyLibraryCardModal from '../components/VerifyLibraryCardModal'

/**
 * Базовые пропсы для модальных окон
 */
export interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Тип компонента модального окна
 */
export type ModalComponent = ComponentType<BaseModalProps>

/**
 * Маппинг режимов флоу на компоненты модалок
 */
export interface ModalMapping {
  [FLOW_MODES.ISSUE]: ModalComponent
  [FLOW_MODES.VERIFY]: ModalComponent
}

/**
 * Маппинг документов на их модальные компоненты
 * Используется для динамического рендеринга модалок вместо длинных if-else цепочек
 */
export const MODAL_MAPPING: Record<DocumentType, ModalMapping> = {
  [DOCUMENT_TYPES.DIGITAL_IDENTITY]: {
    [FLOW_MODES.ISSUE]: DigitalIdentityModal,
    [FLOW_MODES.VERIFY]: VerifyDigitalIdentityModal,
  },
  [DOCUMENT_TYPES.STUDENT_ID]: {
    [FLOW_MODES.ISSUE]: StudentIdModal,
    [FLOW_MODES.VERIFY]: VerifyStudentIdModal,
  },
  [DOCUMENT_TYPES.DRIVERS_LICENSE]: {
    [FLOW_MODES.ISSUE]: DriversLicenseModal,
    [FLOW_MODES.VERIFY]: VerifyDriversLicenseModal,
  },
  [DOCUMENT_TYPES.AGE_18]: {
    [FLOW_MODES.ISSUE]: Age18Modal,
    [FLOW_MODES.VERIFY]: VerifyAge18Modal,
  },
  [DOCUMENT_TYPES.HEALTH_INSURANCE]: {
    [FLOW_MODES.ISSUE]: HealthInsuranceModal,
    [FLOW_MODES.VERIFY]: VerifyHealthInsuranceModal,
  },
  [DOCUMENT_TYPES.PROOF_OF_ADDRESS]: {
    [FLOW_MODES.ISSUE]: ProofOfAddressModal,
    [FLOW_MODES.VERIFY]: VerifyProofOfAddressModal,
  },
  [DOCUMENT_TYPES.MEMBERSHIP_CARD]: {
    [FLOW_MODES.ISSUE]: MembershipCardModal,
    [FLOW_MODES.VERIFY]: VerifyMembershipCardModal,
  },
  [DOCUMENT_TYPES.LIBRARY_CARD]: {
    [FLOW_MODES.ISSUE]: LibraryCardModal,
    [FLOW_MODES.VERIFY]: VerifyLibraryCardModal,
  },
}

/**
 * Получить компонент модалки по типу документа и режиму
 */
export function getModalComponent(
  documentType: DocumentType,
  mode: FlowMode
): ModalComponent {
  return MODAL_MAPPING[documentType][mode]
}

