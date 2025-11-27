import { Button, useFocusTrap, useBodyScrollLock } from './ui'

interface MembershipCardVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: {
    fullName?: boolean
    dateOfBirth?: boolean
    cardNumber?: boolean
    issuingAuthority?: boolean
    issuedOn?: boolean
    expiryDate?: boolean
    membershipType?: boolean
    status?: boolean
  }
}

import checkmarkIcon from '../assets/icons/check.svg'

export default function MembershipCardVerifiedModal({ isOpen, onClose, enabledFields }: MembershipCardVerifiedModalProps) {
  const modalRef = useFocusTrap<HTMLDivElement>(isOpen)
  useBodyScrollLock(isOpen)

  if (!isOpen) return null

  // Все доступные данные
  const allVerificationData = [
    { key: 'firstName', label: 'First Name', value: 'Carmen', enabledKey: 'fullName' },
    { key: 'lastName', label: 'Last Name', value: 'Muestra', enabledKey: 'fullName' },
    { key: 'dateOfBirth', label: 'Date of Birth', value: '01/01/1980', enabledKey: 'dateOfBirth' },
    { key: 'cardNumber', label: 'Card Number', value: 'M7654321', enabledKey: 'cardNumber' },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'Association', enabledKey: 'issuingAuthority' },
    { key: 'issuedOn', label: 'Issued On', value: '15/12/2025', enabledKey: 'issuedOn' },
    { key: 'expiryDate', label: 'Expiry Date', value: '15/12/2035', enabledKey: 'expiryDate' },
    { key: 'membershipType', label: 'Membership Type', value: 'Full member', enabledKey: 'membershipType' },
    { key: 'status', label: 'Status', value: 'Active', enabledKey: 'status' },
  ]

  // Фильтруем данные по включенным полям
  const verificationData = allVerificationData.filter(item => {
    if (item.enabledKey === 'fullName') {
      return enabledFields.fullName === true
    }
    return enabledFields[item.enabledKey as keyof typeof enabledFields] === true
  })

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-4 overflow-hidden">
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-30"
        onClick={onClose}
      />
      
      <div ref={modalRef} className="relative bg-white border border-[#e5e5e5] border-solid rounded-t-2xl md:rounded-2xl w-full max-w-full md:max-w-[740px] max-h-[90vh] md:max-h-[calc(100vh-2rem)] flex flex-col">
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col gap-10 p-4 md:p-6 items-start w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <div className="relative shrink-0 size-[46px] overflow-hidden">
                <div className="absolute inset-[8.33%]">
                  <img 
                    alt="Checkmark" 
                    className="block max-w-none size-full"
                    src={checkmarkIcon}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5 items-start w-full">
                <h2 className="font-bold leading-none text-lg text-[#0a0a0a] w-full h-[18px]">
                  Membership Card verified
                </h2>
                <p className="font-normal leading-5 text-sm text-[#737373] w-full">
                  Below are the details received during verification.
                </p>
              </div>
            </div>

            <div className="border border-[#e5e5e5] border-solid rounded-lg w-full">
              <div className="flex flex-col items-start w-full">
                <div className="flex items-center w-full">
                  <div className="flex flex-1 flex-col items-start min-w-px min-h-px overflow-hidden bg-[#f5f5f5]">
                    {verificationData.map((item, index) => (
                      <div
                        key={item.label}
                        className={`border-b border-[#e5e5e5] border-solid border-l-0 border-r-0 border-t-0 box-border flex gap-[10px] items-center min-w-[85px] px-3 py-2.5 relative shrink-0 w-full ${
                          index === verificationData.length - 1 ? 'border-b-0' : ''
                        }`}
                      >
                        <div className="flex flex-1 flex-col font-normal justify-center min-h-px min-w-px overflow-hidden relative shrink-0 text-[#737373] text-sm whitespace-nowrap">
                          <p className="leading-5 overflow-hidden text-[14px]">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-1 flex-col items-start min-h-px min-w-px overflow-hidden relative shrink-0">
                    {verificationData.map((item, index) => (
                      <div
                        key={item.label}
                        className={`border-b border-[#e5e5e5] border-solid border-l-0 border-r-0 border-t-0 box-border flex items-center min-w-[85px] px-3 py-2.5 relative shrink-0 w-full ${
                          index === verificationData.length - 1 ? 'border-b-0' : ''
                        }`}
                      >
                        <div className="flex flex-1 flex-col font-medium justify-center min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-sm">
                          <p className="leading-5 whitespace-pre-wrap">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e5e5] md:hidden"></div>

        <div className="flex flex-row gap-3 items-start justify-end w-full p-4 md:p-6">
          <Button variant="primary" onClick={onClose}>
            Done
          </Button>
        </div>
      </div>
    </div>
  )
}

