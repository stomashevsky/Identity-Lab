import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import ModalShell from './modals/ModalShell'
import { TextInput, FormField, INPUT_BASE_CLASSES } from './ui'
import { useInputDefaultValue } from '../hooks/useInputDefaultValue'

interface Age18ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Age18Modal({ isOpen, onClose }: Age18ModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const handleCardNumberBlur = useInputDefaultValue('A7654321')

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
        title="Age 18+"
        description="Review and edit the details before issuing the document."
        size="small"
        disableFocusTrap={isConfirmationOpen}
        footer={{
          secondary: { label: 'Cancel', onClick: onClose },
          primary: { label: 'Continue', onClick: handleContinue },
        }}
      >
        <div className="flex flex-col gap-4 items-start w-full">
          <FormField label="Card Number">
            <TextInput
              defaultValue="A7654321"
              placeholder="Card Number"
              autoComplete="one-time-code"
              name="age-18-number"
              inputMode="text"
              data-1p-ignore
              data-lpignore="true"
              className={INPUT_BASE_CLASSES}
              onBlur={handleCardNumberBlur}
            />
          </FormField>
          <FormField label="Issuing Authority">
            <TextInput
              defaultValue="ID Authority"
              placeholder="Issuing Authority"
              className={INPUT_BASE_CLASSES}
            />
          </FormField>
        </div>
      </ModalShell>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType="Age 18+"
      />
    </>
  )
}

