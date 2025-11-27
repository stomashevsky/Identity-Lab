import ModalShell from './ModalShell'
import VerificationTable from './VerificationTable'
import checkmarkIcon from '../../assets/icons/circle-check.svg'
import { VerificationData, EnabledFields } from '../../types/verification'

interface VerifiedModalBaseProps<T extends EnabledFields> {
  isOpen: boolean
  onClose: () => void
  title: string
  allVerificationData: VerificationData
  enabledFields: T
}

/**
 * Базовый компонент для Verified модалок
 * Выносит общую логику фильтрации, сортировки и отображения результатов верификации
 */
export default function VerifiedModalBase<T extends EnabledFields>({
  isOpen,
  onClose,
  title,
  allVerificationData,
  enabledFields,
}: VerifiedModalBaseProps<T>) {
  // Фильтруем данные по включенным полям
  let filteredData = allVerificationData.filter((item) => {
    if (item.enabledKey === 'fullName') {
      return enabledFields.fullName === true
    }
    if (item.isPhoto) {
      return enabledFields.photograph === true
    }
    return enabledFields[item.enabledKey as keyof typeof enabledFields] === true
  })

  // Переупорядочиваем: fullName поля, затем photograph (если есть), затем остальные
  const firstNameIndex = filteredData.findIndex((item) => item.key === 'firstName')
  const lastNameIndex = filteredData.findIndex((item) => item.key === 'lastName')
  const photographIndex = filteredData.findIndex((item) => item.isPhoto)

  if (firstNameIndex !== -1 && lastNameIndex !== -1 && photographIndex !== -1) {
    const firstName = filteredData[firstNameIndex]
    const lastName = filteredData[lastNameIndex]
    const photograph = filteredData[photographIndex]
    const others = filteredData.filter(
      (_, idx) => idx !== firstNameIndex && idx !== lastNameIndex && idx !== photographIndex
    )
    filteredData = [firstName, lastName, photograph, ...others]
  } else if (firstNameIndex !== -1 && lastNameIndex !== -1) {
    // Если есть fullName, но нет photograph
    const firstName = filteredData[firstNameIndex]
    const lastName = filteredData[lastNameIndex]
    const others = filteredData.filter((_, idx) => idx !== firstNameIndex && idx !== lastNameIndex)
    filteredData = [firstName, lastName, ...others]
  }

  const verificationData = filteredData

  return (
    <ModalShell
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
            <img alt="Checkmark" className="block max-w-none size-full" src={checkmarkIcon} />
          </div>
        </div>
        <div className="flex flex-col gap-1.5 items-start w-full">
          <h2 className="font-bold leading-tight text-lg text-[#0a0a0a] w-full">
            {title} verified
          </h2>
          <p className="font-normal leading-5 text-sm text-[#737373] w-full">
            Below are the details received during verification.
          </p>
        </div>
      </div>

      <VerificationTable data={verificationData} />
    </ModalShell>
  )
}

