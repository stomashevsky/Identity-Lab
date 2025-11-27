import { ComponentType } from 'react'
import DigitalIdentityModal from '../DigitalIdentityModal'
import StudentIdModal from '../StudentIdModal'
import DriversLicenseModal from '../DriversLicenseModal'
import Age18Modal from '../Age18Modal'
import HealthInsuranceModal from '../HealthInsuranceModal'
import ProofOfAddressModal from '../ProofOfAddressModal'
import MembershipCardModal from '../MembershipCardModal'
import LibraryCardModal from '../LibraryCardModal'
import VerifyDigitalIdentityModal from '../VerifyDigitalIdentityModal'
import VerifyStudentIdModal from '../VerifyStudentIdModal'
import VerifyDriversLicenseModal from '../VerifyDriversLicenseModal'
import VerifyAge18Modal from '../VerifyAge18Modal'
import VerifyHealthInsuranceModal from '../VerifyHealthInsuranceModal'
import VerifyProofOfAddressModal from '../VerifyProofOfAddressModal'
import VerifyMembershipCardModal from '../VerifyMembershipCardModal'
import VerifyLibraryCardModal from '../VerifyLibraryCardModal'

export type DocumentType = 
  | 'Digital Identity'
  | 'Student ID'
  | "Driver's License"
  | 'Age 18+'
  | 'Health Insurance Card'
  | 'Proof of Address'
  | 'Membership Card'
  | 'Library Card'

export type ModalMode = 'Issue' | 'Verify'

interface BaseModalProps {
  isOpen: boolean
  onClose: () => void
}

type ModalComponent = ComponentType<BaseModalProps>

interface ModalMapping {
  Issue: ModalComponent
  Verify: ModalComponent
}

/**
 * Маппинг документов на их модальные компоненты
 * Используется для динамического рендеринга модалок вместо длинных if-else цепочек
 */
export const MODAL_MAPPING: Record<DocumentType, ModalMapping> = {
  'Digital Identity': {
    Issue: DigitalIdentityModal,
    Verify: VerifyDigitalIdentityModal,
  },
  'Student ID': {
    Issue: StudentIdModal,
    Verify: VerifyStudentIdModal,
  },
  "Driver's License": {
    Issue: DriversLicenseModal,
    Verify: VerifyDriversLicenseModal,
  },
  'Age 18+': {
    Issue: Age18Modal,
    Verify: VerifyAge18Modal,
  },
  'Health Insurance Card': {
    Issue: HealthInsuranceModal,
    Verify: VerifyHealthInsuranceModal,
  },
  'Proof of Address': {
    Issue: ProofOfAddressModal,
    Verify: VerifyProofOfAddressModal,
  },
  'Membership Card': {
    Issue: MembershipCardModal,
    Verify: VerifyMembershipCardModal,
  },
  'Library Card': {
    Issue: LibraryCardModal,
    Verify: VerifyLibraryCardModal,
  },
}

/**
 * Получить компонент модалки по типу документа и режиму
 */
export function getModalComponent(
  documentType: DocumentType,
  mode: ModalMode
): ModalComponent {
  return MODAL_MAPPING[documentType][mode]
}

