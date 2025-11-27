import { useState } from 'react'
import VerifyConfirmationModal from './VerifyConfirmationModal'
import DriversLicenseVerifiedModal from './DriversLicenseVerifiedModal'
import { Switch, TextInput, Button, useFocusTrap, useBodyScrollLock } from './ui'

interface VerifyDriversLicenseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VerifyDriversLicenseModal({ isOpen, onClose }: VerifyDriversLicenseModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isVerifiedModalOpen, setIsVerifiedModalOpen] = useState(false)
  const [switches, setSwitches] = useState({
    fullName: true,
    dateOfBirth: true,
    photograph: true,
    cardNumber: true,
    issuingAuthority: false,
    issuingCountry: true,
    issuedOn: false,
    expiryDate: true,
    categories: true,
    restrictions: true,
  })

  const modalRef = useFocusTrap<HTMLDivElement>(isOpen && !isConfirmationOpen && !isVerifiedModalOpen)
  useBodyScrollLock(isOpen)

  if (!isOpen) return null

  const handleSwitchChange = (key: keyof typeof switches, checked: boolean) => {
    setSwitches((prev) => ({ ...prev, [key]: checked }))
  }

  const hasAtLeastOneEnabled = Object.values(switches).some((value) => value === true)

  const handleContinue = () => {
    setIsConfirmationOpen(true)
  }

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false)
  }

  const handleAutoClose = () => {
    setIsConfirmationOpen(false)
    setIsVerifiedModalOpen(true)
  }

  const handleVerifiedModalClose = () => {
    setIsVerifiedModalOpen(false)
    onClose()
  }

  return (
    <>
      {!isVerifiedModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-30"
        onClick={onClose}
      />
      
      <div ref={modalRef} className="relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full md:max-w-[400px] max-h-[90vh] md:max-h-[calc(100vh-2rem)] flex flex-col">
        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-10 p-4 md:p-6 items-start w-full">
          <div className="flex flex-col gap-1.5 items-start w-full">
            <h2 className="font-bold leading-none text-lg text-[#0a0a0a] w-full">
              Driver's License
            </h2>
            <p className="font-normal leading-5 text-sm text-[#737373] w-full">
              Configure the verification request.
            </p>
          </div>

          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  Requester Name
                </label>
                <TextInput
                  defaultValue="Transport Authority"
                  placeholder="Requester Name"
                  className="bg-white border border-[#e5e5e5] border-solid box-border flex gap-1 h-9 items-center px-3 py-1 rounded-md w-full text-sm leading-5 text-[#0a0a0a] outline-none focus:border-[#0a0a0a]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start w-full">
              <Switch
                label="Full Name"
                checked={switches.fullName}
                onChange={(checked) => handleSwitchChange('fullName', checked)}
              />
              <Switch
                label="Date of Birth"
                checked={switches.dateOfBirth}
                onChange={(checked) => handleSwitchChange('dateOfBirth', checked)}
              />
              <Switch
                label="Photograph"
                checked={switches.photograph}
                onChange={(checked) => handleSwitchChange('photograph', checked)}
              />
              <Switch
                label="Card Number"
                checked={switches.cardNumber}
                onChange={(checked) => handleSwitchChange('cardNumber', checked)}
              />
              <Switch
                label="Issuing Authority"
                checked={switches.issuingAuthority}
                onChange={(checked) => handleSwitchChange('issuingAuthority', checked)}
              />
              <Switch
                label="Issuing Country"
                checked={switches.issuingCountry}
                onChange={(checked) => handleSwitchChange('issuingCountry', checked)}
              />
              <Switch
                label="Issued On"
                checked={switches.issuedOn}
                onChange={(checked) => handleSwitchChange('issuedOn', checked)}
              />
              <Switch
                label="Expiry Date"
                checked={switches.expiryDate}
                onChange={(checked) => handleSwitchChange('expiryDate', checked)}
              />
              <Switch
                label="Categories"
                checked={switches.categories}
                onChange={(checked) => handleSwitchChange('categories', checked)}
              />
              <Switch
                label="Restrictions"
                checked={switches.restrictions}
                onChange={(checked) => handleSwitchChange('restrictions', checked)}
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
          <Button variant="primary" disabled={!hasAtLeastOneEnabled} onClick={handleContinue}>
            Continue
          </Button>
        </div>
      </div>
      </div>
      )}

      <VerifyConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onAutoClose={handleAutoClose}
        documentType="Driver's License"
      />

      <DriversLicenseVerifiedModal
        isOpen={isVerifiedModalOpen}
        onClose={handleVerifiedModalClose}
        enabledFields={switches}
      />
    </>
  )
}

