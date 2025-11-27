import { useState } from 'react'
import { IMaskInput } from 'react-imask'

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

  // Base focus styles matching Button component pattern
  const baseFocusStyles = 'outline-none focus-visible:outline-none transition-all duration-150'
  
  // Focus styles: border color and shadow (matching Figma design)
  // Using focus-visible like Button component for better accessibility
  // Also including focus: to override existing focus: styles in forms
  const focusStyles = error
    ? 'focus:border-[#dc2626] focus:shadow-[0px_0px_0px_3px_rgba(220,38,38,0.5)] focus-visible:border-[#dc2626] focus-visible:shadow-[0px_0px_0px_3px_rgba(220,38,38,0.5)]'
    : 'focus:border-[#a3a3a3] focus:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] focus-visible:border-[#a3a3a3] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]'

  return (
    <IMaskInput
      mask="00/00/0000"
      value={value}
      onAccept={handleAccept}
      onBlur={handleBlur}
      placeholder="DD/MM/YYYY"
      className={`${baseFocusStyles} ${className} ${focusStyles}`}
      disabled={disabled}
    />
  )
}

