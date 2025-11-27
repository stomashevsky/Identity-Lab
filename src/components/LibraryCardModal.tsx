import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import ModalShell from './modals/ModalShell'
import { MODAL_TWO_COLUMN_LAYOUT } from './modals/modalConfig'
import { TextInput, DateInput, FormField, INPUT_BASE_CLASSES } from './ui'
import { useInputDefaultValue } from '../hooks/useInputDefaultValue'
import { DOCUMENT_TYPES } from '../constants/documents'

interface LibraryCardModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LibraryCardModal({ isOpen, onClose }: LibraryCardModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const handleCardNumberBlur = useInputDefaultValue('L7654321')

  const handleContinue = () => {
    setIsConfirmationOpen(true)
  }

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false)
    onClose()
  }

  const handleBack = () => {
    setIsConfirmationOpen(false)
  }

  return (
    <>
      <ModalShell
        isOpen={isOpen}
        onClose={onClose}
        title="Library Card"
        description="Review and edit the details before issuing the document."
        size="large"
        disableFocusTrap={isConfirmationOpen}
        footer={{
          secondary: { label: 'Cancel', onClick: onClose },
          primary: { label: 'Continue', onClick: handleContinue },
        }}
      >
        <div className={MODAL_TWO_COLUMN_LAYOUT}>
          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <FormField label="First Name">
              <TextInput
                defaultValue="Carmen"
                placeholder="First Name"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label="Last Name">
              <TextInput
                defaultValue="Muestra"
                placeholder="Last Name"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label="Date of Birth">
              <DateInput
                defaultValue="01/01/1980"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
          </div>

          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <FormField label="Card Number">
              <TextInput
                defaultValue="L7654321"
                placeholder="Card Number"
                autoComplete="one-time-code"
                name="library-card-number"
                inputMode="text"
                data-1p-ignore
                data-lpignore="true"
                className={INPUT_BASE_CLASSES}
                onBlur={handleCardNumberBlur}
              />
            </FormField>
            <FormField label="Issuing Authority">
              <TextInput
                defaultValue="Library"
                placeholder="Issuing Authority"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label="Issued On">
              <DateInput
                defaultValue="15/12/2025"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label="Expiry Date">
              <DateInput
                defaultValue="15/12/2035"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label="Membership Type">
              <TextInput
                defaultValue="Student"
                placeholder="Membership Type"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
            <FormField label="Status">
              <TextInput
                defaultValue="Active"
                placeholder="Status"
                className={INPUT_BASE_CLASSES}
              />
            </FormField>
          </div>
        </div>
      </ModalShell>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType={DOCUMENT_TYPES.LIBRARY_CARD}
      />
    </>
  )
}

