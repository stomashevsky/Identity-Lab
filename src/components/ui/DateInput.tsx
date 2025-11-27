import { useState } from 'react'
import { IMaskInput } from 'react-imask'
import { INPUT_BASE_FOCUS_STYLES, INPUT_FOCUS_CLASSES } from './inputStyles'

interface DateInputProps {
  defaultValue?: string
  value?: string
  className?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  disabled?: boolean
  error?: boolean
}

export default function DateInput({ 
  defaultValue = '', 
  value: controlledValue,
  className = '',
  onChange,
  onBlur,
  disabled = false,
  error = false
}: DateInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const isValidDate = (dateString: string) => {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return false
    const [day, month, year] = dateString.split('/').map(Number)
    const date = new Date(year, month - 1, day)
    return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day
  }

  const handleAccept = (val: string) => {
    if (!isControlled) {
      setInternalValue(val)
    }
    onChange?.(val)
  }

  const handleBlur = () => {
    if (!isControlled && !isValidDate(value) && defaultValue) {
      setInternalValue(defaultValue)
    }
    onBlur?.()
  }

  const focusStyles = error ? INPUT_FOCUS_CLASSES.error : INPUT_FOCUS_CLASSES.default

  return (
    <IMaskInput
      mask="00/00/0000"
      value={value}
      onAccept={handleAccept}
      onBlur={handleBlur}
      placeholder="DD/MM/YYYY"
      className={`${INPUT_BASE_FOCUS_STYLES} ${className} ${focusStyles}`}
      disabled={disabled}
    />
  )
}

