import { useState } from 'react'

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

  // Base focus styles matching Button component pattern
  const baseFocusStyles = 'outline-none focus-visible:outline-none transition-all duration-150'
  
  // Focus styles: border color and shadow (matching Figma design)
  // Using focus-visible like Button component for better accessibility
  // Also including focus: to override existing focus: styles in forms
  const focusStyles = error
    ? 'focus:border-[#dc2626] focus:shadow-[0px_0px_0px_3px_rgba(220,38,38,0.5)] focus-visible:border-[#dc2626] focus-visible:shadow-[0px_0px_0px_3px_rgba(220,38,38,0.5)]'
    : 'focus:border-[#a3a3a3] focus:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] focus-visible:border-[#a3a3a3] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]'

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={`${baseFocusStyles} ${className} ${focusStyles}`}
      autoComplete={autoComplete}
      inputMode="text"
      disabled={disabled}
    />
  )
}

