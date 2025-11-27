import { useState } from 'react'
import ConfirmationModal from './ConfirmationModal'
import { TextInput, DateInput, Button, useFocusTrap, useBodyScrollLock } from './ui'

interface DigitalIdentityModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DigitalIdentityModal({ isOpen, onClose }: DigitalIdentityModalProps) {
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
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-30"
        onClick={onClose}
      />

      {/* Modal */}
      <div ref={modalRef} className="relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full md:max-w-[740px] max-h-[90vh] md:max-h-[calc(100vh-2rem)] flex flex-col">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-10 p-4 md:p-6 w-full">
            {/* Header */}
            <div className="flex flex-col gap-1.5 items-start w-full">
              <h2 className="font-bold leading-none text-lg text-[#0a0a0a] w-full">
                Digital Identity
              </h2>
              <p className="font-normal leading-5 text-sm text-[#737373] w-full">
                Review and edit the details before issuing the document.
              </p>
            </div>

            {/* Content - Responsive: one column on mobile, two columns on desktop */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-12 items-start w-full">
            {/* Left Column */}
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
                  Date of Birth
                </label>
                <DateInput
                  defaultValue="01/01/1980"
                  className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
                />
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  Place of Birth
                </label>
                <TextInput
                  defaultValue="City, Country"
                  placeholder="Place of Birth"
                  className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
                />
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  Nationality
                </label>
                <TextInput
                  defaultValue="Not specified"
                  placeholder="Nationality"
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

            {/* Right Column */}
            <div className="flex flex-1 flex-col gap-4 items-start w-full">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  Card Number
                </label>
                <input
                  type="text"
                  defaultValue="ID7654321"
                  placeholder="Card Number"
                  autoComplete="one-time-code"
                  name="document-number"
                  inputMode="text"
                  data-1p-ignore
                  data-lpignore="true"
                  className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
                  onBlur={(e) => {
                    if (e.target.value.trim() === '') {
                      e.target.value = 'ID7654321'
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
                  Issuing Country
                </label>
                <TextInput
                  defaultValue="Country"
                  placeholder="Issuing Country"
                  className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
                />
              </div>
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  Document Type
                </label>
                <TextInput
                  defaultValue="ID card"
                  placeholder="Document Type"
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
        documentType="Digital Identity"
      />
    </div>
  )
}

