import { useState } from 'react'
import VerifyConfirmationModal from './VerifyConfirmationModal'
import HealthInsuranceVerifiedModal from './HealthInsuranceVerifiedModal'
import ModalShell from './modals/ModalShell'
import { Switch, TextInput } from './ui'
import { DOCUMENT_TYPES } from '../constants/documents'

interface VerifyHealthInsuranceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VerifyHealthInsuranceModal({ isOpen, onClose }: VerifyHealthInsuranceModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isVerifiedModalOpen, setIsVerifiedModalOpen] = useState(false)
  const [switches, setSwitches] = useState({
    fullName: true,
    dateOfBirth: true,
    cardNumber: true,
    issuingAuthority: true,
    issuedOn: false,
    expiryDate: true,
    coverageType: true,
    status: true,
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
          title="Health Insurance"
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
                  defaultValue="Hospital"
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
                label="Coverage Type"
                checked={switches.coverageType}
                onChange={(checked) => handleSwitchChange('coverageType', checked)}
              />
              <Switch
                label="Status"
                checked={switches.status}
                onChange={(checked) => handleSwitchChange('status', checked)}
              />
            </div>
          </div>
        </ModalShell>
      )}

      <VerifyConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onAutoClose={handleAutoClose}
        documentType={DOCUMENT_TYPES.HEALTH_INSURANCE}
      />

      <HealthInsuranceVerifiedModal
        isOpen={isVerifiedModalOpen}
        onClose={handleVerifiedModalClose}
        enabledFields={switches}
      />
    </>
  )
}

