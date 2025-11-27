import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import BaseModal from './modals/BaseModal'
import { TextInput } from './ui'

interface Age18ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Age18Modal({ isOpen, onClose }: Age18ModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)

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
      <BaseModal
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
          <div className="flex flex-col gap-2 items-start w-full">
            <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
              Card Number
            </label>
            <input
              type="text"
              defaultValue="A7654321"
              placeholder="Card Number"
              autoComplete="one-time-code"
              name="age-18-number"
              inputMode="text"
              data-1p-ignore
              data-lpignore="true"
              className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
              onBlur={(e) => {
                if (e.target.value.trim() === '') {
                  e.target.value = 'A7654321'
                }
              }}
            />
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
              Issuing Authority
            </label>
            <TextInput
              defaultValue="ID Authority"
              placeholder="Issuing Authority"
              className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
            />
          </div>
        </div>
      </BaseModal>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType="Age 18+"
      />
    </>
  )
}

