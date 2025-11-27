import BaseModal from './modals/BaseModal'
import checkmarkIcon from '../assets/icons/circle-check.svg'

interface Age18VerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: {
    confirmedAge?: boolean
    cardNumber?: boolean
    issuingAuthority?: boolean
  }
}

export default function Age18VerifiedModal({ isOpen, onClose, enabledFields }: Age18VerifiedModalProps) {

  // Все доступные данные
  const allVerificationData = [
    { key: 'confirmedAge', label: 'Confirmed Age', value: '18+', enabledKey: 'confirmedAge' },
    { key: 'cardNumber', label: 'Card Number', value: 'A7654321', enabledKey: 'cardNumber' },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'ID Authority', enabledKey: 'issuingAuthority' },
  ]

  // Фильтруем данные по включенным полям
  const verificationData = allVerificationData.filter(item => {
    return enabledFields[item.enabledKey as keyof typeof enabledFields] === true
  })

  return (
    <BaseModal
      isOpen={isOpen}
      onClose={onClose}
      size="large"
      footer={{
        primary: { label: 'Done', onClick: onClose },
      }}
    >
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
          <h2 className="font-bold leading-tight text-lg text-[#0a0a0a] w-full">
            Age 18+ verified
          </h2>
          <p className="font-normal leading-5 text-sm text-[#737373] w-full">
            Below are the details received during verification.
          </p>
        </div>
      </div>

      <div className="border border-[#e5e5e5] border-solid rounded-lg w-full">
        <div className="grid grid-cols-[1fr_1fr] w-full">
          {verificationData.map((item, index) => (
            <>
              <div
                key={`${item.label}-label`}
                className={`border-b border-[#e5e5e5] border-solid border-l-0 border-r-0 border-t-0 box-border flex gap-[10px] items-center min-w-[85px] px-3 py-2.5 relative shrink-0 w-full bg-[#f5f5f5] ${
                  index === verificationData.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <div className="flex flex-1 flex-col font-normal justify-center min-h-px min-w-px overflow-hidden relative shrink-0 text-[#737373] text-sm whitespace-nowrap">
                  <p className="leading-5 overflow-hidden text-[14px]">
                    {item.label}
                  </p>
                </div>
              </div>
              <div
                key={`${item.label}-value`}
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
            </>
          ))}
        </div>
      </div>
    </BaseModal>
  )
}

