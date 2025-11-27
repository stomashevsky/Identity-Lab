import { useState } from 'react'
import VerifyConfirmationModal from './VerifyConfirmationModal'
import LibraryCardVerifiedModal from './LibraryCardVerifiedModal'
import BaseModal from './modals/BaseModal'
import { Switch, TextInput } from './ui'

interface VerifyLibraryCardModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function VerifyLibraryCardModal({ isOpen, onClose }: VerifyLibraryCardModalProps) {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false)
  const [isVerifiedModalOpen, setIsVerifiedModalOpen] = useState(false)
  const [switches, setSwitches] = useState({
    fullName: true,
    dateOfBirth: false,
    cardNumber: true,
    issuingAuthority: false,
    issuedOn: false,
    expiryDate: true,
    membershipType: true,
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
        <BaseModal
          isOpen={isOpen}
          onClose={onClose}
          title="Library Card"
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
                  defaultValue="Library"
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
                label="Membership Type"
                checked={switches.membershipType}
                onChange={(checked) => handleSwitchChange('membershipType', checked)}
              />
              <Switch
                label="Status"
                checked={switches.status}
                onChange={(checked) => handleSwitchChange('status', checked)}
              />
            </div>
          </div>
        </BaseModal>
      )}

      <VerifyConfirmationModal
        isOpen={isConfirmationOpen}
        onClose={handleConfirmationClose}
        onAutoClose={handleAutoClose}
        documentType="Library Card"
      />

      <LibraryCardVerifiedModal
        isOpen={isVerifiedModalOpen}
        onClose={handleVerifiedModalClose}
        enabledFields={switches}
      />
    </>
  )
}

