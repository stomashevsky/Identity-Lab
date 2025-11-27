import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import { TextInput, Button, useFocusTrap, useBodyScrollLock } from './ui'

interface Age18ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Age18Modal({ isOpen, onClose }: Age18ModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const modalRef = useFocusTrap<HTMLDivElement>(isOpen && !isConfirmationOpen)
  useBodyScrollLock(isOpen)

  if (!isOpen) return null

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
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-30"
        onClick={onClose}
      />
      
      <div ref={modalRef} className="relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full md:max-w-[400px] max-h-[90vh] md:max-h-[calc(100vh-2rem)] flex flex-col">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-10 p-4 md:p-6 w-full">
          <div className="flex flex-col gap-1.5 items-start w-full">
            <h2 className="font-bold leading-none text-lg text-[#0a0a0a] w-full">
              Age 18+
            </h2>
            <p className="font-normal leading-5 text-sm text-[#737373] w-full">
              Review and edit the details before issuing the document.
            </p>
          </div>

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
          </div>
        </div>

        {/* Divider - только на мобильных */}
        <div className="border-t border-[#e5e5e5] md:hidden"></div>

        {/* Footer */}
        <div className="flex flex-row gap-3 items-start justify-end w-full p-4 md:p-6">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType="Age 18+"
      />
    </div>
  )
}

