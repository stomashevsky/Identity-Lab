import { useState } from 'react'
import { INPUT_BASE_FOCUS_STYLES, INPUT_FOCUS_CLASSES } from './inputStyles'

interface TextInputProps {
  defaultValue?: string
  value?: string
  placeholder?: string
  className?: string
  autoComplete?: string
  onChange?: (value: string) => void
  onBlur?: () => void
  disabled?: boolean
  error?: boolean
}

export default function TextInput({ 
  defaultValue = '', 
  value: controlledValue,
  placeholder, 
  className = '', 
  autoComplete = 'off',
  onChange,
  onBlur,
  disabled = false,
  error = false
}: TextInputProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (!isControlled) {
      setInternalValue(newValue)
    }
    onChange?.(newValue)
  }

  const handleBlur = () => {
    if (!isControlled && value.trim() === '' && defaultValue) {
      setInternalValue(defaultValue)
    }
    onBlur?.()
  }

  const focusStyles = error ? INPUT_FOCUS_CLASSES.error : INPUT_FOCUS_CLASSES.default

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={`${INPUT_BASE_FOCUS_STYLES} ${className} ${focusStyles}`}
      autoComplete={autoComplete}
      inputMode="text"
      disabled={disabled}
    />
  )
}

