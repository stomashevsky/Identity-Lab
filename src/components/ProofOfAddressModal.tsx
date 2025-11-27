import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import ModalShell from './modals/ModalShell'
import { TextInput, DateInput } from './ui'

interface ProofOfAddressModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ProofOfAddressModal({ isOpen, onClose }: ProofOfAddressModalProps) {
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
      <ModalShell
        isOpen={isOpen}
        onClose={onClose}
        title="Proof of Address"
        description="Review and edit the details before issuing the document."
        size="large"
        disableFocusTrap={isConfirmationOpen}
        footer={{
          secondary: { label: 'Cancel', onClick: onClose },
          primary: { label: 'Continue', onClick: handleContinue },
        }}
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start w-full">
          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                First Name
              </label>
              <TextInput
                defaultValue="Carmen"
                placeholder="First Name"
                className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                Last Name
              </label>
              <TextInput
                defaultValue="Muestra"
                placeholder="Last Name"
                className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                Residential Address
              </label>
              <TextInput
                defaultValue="123 Main Street, City, Country"
                placeholder="Residential Address"
                className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
              />
            </div>
          </div>

          <div className="flex flex-1 flex-col gap-4 items-start w-full">
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                Card Number
              </label>
              <input
                type="text"
                defaultValue="P7654321"
                placeholder="Card Number"
                autoComplete="one-time-code"
                name="proof-of-address-number"
                inputMode="text"
                data-1p-ignore
                data-lpignore="true"
                className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
                onBlur={(e) => {
                  if (e.target.value.trim() === '') {
                    e.target.value = 'P7654321'
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
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                Issued On
              </label>
              <DateInput
                defaultValue="15/12/2025"
                className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
              />
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                Expiry Date
              </label>
              <DateInput
                defaultValue="15/12/2035"
                className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
              />
            </div>
          </div>
        </div>
      </ModalShell>

      <ConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onBack={handleBack}
        documentType="Proof of Address"
      />
    </>
  )
}

