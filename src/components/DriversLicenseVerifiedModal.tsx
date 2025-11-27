import { Button, useFocusTrap, useBodyScrollLock } from './ui'

interface DriversLicenseVerifiedModalProps {
  isOpen: boolean
  onClose: () => void
  enabledFields: {
    fullName?: boolean
    dateOfBirth?: boolean
    photograph?: boolean
    cardNumber?: boolean
    issuingAuthority?: boolean
    issuingCountry?: boolean
    issuedOn?: boolean
    expiryDate?: boolean
    categories?: boolean
    restrictions?: boolean
  }
}

import checkmarkIcon from '../assets/icons/check.svg'
import photographImage from '../assets/images/photograph.png'

export default function DriversLicenseVerifiedModal({ isOpen, onClose, enabledFields }: DriversLicenseVerifiedModalProps) {
  const modalRef = useFocusTrap<HTMLDivElement>(isOpen)
  useBodyScrollLock(isOpen)

  if (!isOpen) return null

  // Все доступные данные
  const allVerificationData = [
    { key: 'firstName', label: 'First Name', value: 'Carmen', enabledKey: 'fullName', isPhoto: false },
    { key: 'lastName', label: 'Last Name', value: 'Muestra', enabledKey: 'fullName', isPhoto: false },
    { key: 'photograph', label: 'Photograph', value: '', enabledKey: 'photograph', isPhoto: true },
    { key: 'dateOfBirth', label: 'Date of Birth', value: '01/01/1980', enabledKey: 'dateOfBirth', isPhoto: false },
    { key: 'cardNumber', label: 'Card Number', value: 'D7654321', enabledKey: 'cardNumber', isPhoto: false },
    { key: 'issuingAuthority', label: 'Issuing Authority', value: 'Transport Authority', enabledKey: 'issuingAuthority', isPhoto: false },
    { key: 'issuingCountry', label: 'Issuing Country', value: 'Country', enabledKey: 'issuingCountry', isPhoto: false },
    { key: 'issuedOn', label: 'Issued On', value: '15/12/2025', enabledKey: 'issuedOn', isPhoto: false },
    { key: 'expiryDate', label: 'Expiry Date', value: '15/12/2035', enabledKey: 'expiryDate', isPhoto: false },
    { key: 'categories', label: 'Categories', value: 'B', enabledKey: 'categories', isPhoto: false },
    { key: 'restrictions', label: 'Restrictions', value: 'None', enabledKey: 'restrictions', isPhoto: false },
  ]

  // Фильтруем данные по включенным полям и правильному порядку
  let filteredData = allVerificationData.filter(item => {
    if (item.enabledKey === 'fullName') {
      return enabledFields.fullName === true
    }
    if (item.isPhoto) {
      return enabledFields.photograph === true
    }
    return enabledFields[item.enabledKey as keyof typeof enabledFields] === true
  })

  // Переупорядочиваем: fullName поля, затем photograph (если есть), затем остальные
  const firstNameIndex = filteredData.findIndex(item => item.key === 'firstName')
  const lastNameIndex = filteredData.findIndex(item => item.key === 'lastName')
  const photographIndex = filteredData.findIndex(item => item.isPhoto)
  
  if (firstNameIndex !== -1 && lastNameIndex !== -1 && photographIndex !== -1) {
    const firstName = filteredData[firstNameIndex]
    const lastName = filteredData[lastNameIndex]
    const photograph = filteredData[photographIndex]
    const others = filteredData.filter((_, idx) => idx !== firstNameIndex && idx !== lastNameIndex && idx !== photographIndex)
    filteredData = [firstName, lastName, photograph, ...others]
  }

  const verificationData = filteredData

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
                  Driver's License verified
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
                        className={`border-b border-[#e5e5e5] border-solid border-l-0 border-r-0 border-t-0 box-border flex gap-[10px] items-start min-w-[85px] px-3 py-2.5 relative shrink-0 w-full ${
                          index === verificationData.length - 1 ? 'border-b-0' : ''
                        } ${item.isPhoto ? 'h-[120px]' : 'items-center'}`}
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
                        {item.isPhoto ? (
                          <div className="h-[100px] relative rounded-lg shrink-0 w-[80px]">
                            <div className="absolute inset-0 pointer-events-none rounded-lg">
                              <div className="absolute bg-[#f2f2f7] inset-0 rounded-lg" />
                              <img 
                                alt="Photograph" 
                                className="absolute max-w-none object-center object-cover rounded-lg size-full" 
                                src={photographImage} 
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="flex flex-1 flex-col font-medium justify-center min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-sm">
                            <p className="leading-5 whitespace-pre-wrap">
                              {item.value}
                            </p>
                          </div>
                        )}
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

