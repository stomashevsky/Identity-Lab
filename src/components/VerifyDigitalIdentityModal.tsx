import { useState } from 'react'
import VerifyConfirmationModal from './VerifyConfirmationModal'
import DigitalIdentityVerifiedModal from './DigitalIdentityVerifiedModal'
import ModalShell from './modals/ModalShell'
import { Switch, TextInput } from './ui'

interface VerifyDigitalIdentityModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VerifyDigitalIdentityModal({ isOpen, onClose }: VerifyDigitalIdentityModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isVerifiedModalOpen, setIsVerifiedModalOpen] = useState(false)
  const [switches, setSwitches] = useState({
    fullName: true,
    dateOfBirth: true,
    photograph: true,
    placeOfBirth: true,
    nationality: true,
    residentialAddress: true,
    cardNumber: true,
    issuingAuthority: true,
    issuingCountry: true,
    documentType: true,
    issuedOn: true,
    expiryDate: true,
  })

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
        <ModalShell
          isOpen={isOpen}
          onClose={onClose}
          title="Digital Identity"
          description="Configure the verification request."
          size="small"
          disableFocusTrap={isConfirmationOpen || isVerifiedModalOpen}
          footer={{
            secondary: { label: 'Cancel', onClick: onClose },
            primary: { label: 'Continue', onClick: handleContinue, disabled: !hasAtLeastOneEnabled },
          }}
        >
          <div className="flex flex-col gap-10 items-start w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="flex flex-col gap-2 items-start w-full">
                <label className="font-medium leading-5 text-sm text-[#0a0a0a]">
                  Requester Name
                </label>
                <TextInput
                  defaultValue="Bank"
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
                label="Place of Birth"
                checked={switches.placeOfBirth}
                onChange={(checked) => handleSwitchChange('placeOfBirth', checked)}
              />
              <Switch
                label="Nationality"
                checked={switches.nationality}
                onChange={(checked) => handleSwitchChange('nationality', checked)}
              />
              <Switch
                label="Residential Address"
                checked={switches.residentialAddress}
                onChange={(checked) => handleSwitchChange('residentialAddress', checked)}
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
                label="Document Type"
                checked={switches.documentType}
                onChange={(checked) => handleSwitchChange('documentType', checked)}
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
            </div>
          </div>
        </ModalShell>
      )}

      <VerifyConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onAutoClose={handleAutoClose}
        documentType="Digital Identity"
      />

      <DigitalIdentityVerifiedModal
        isOpen={isVerifiedModalOpen}
        onClose={handleVerifiedModalClose}
        enabledFields={switches}
      />
    </>
  )
}

