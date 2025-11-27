import { useState } from 'react'
import { INPUT_BASE_FOCUS_STYLES, INPUT_FOCUS_CLASSES } from './inputStyles'

interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'onBlur' | 'value' | 'defaultValue'> {
  defaultValue?: string
  value?: string
  onChange?: (value: string) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
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
  error = false,
  ...restProps
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!isControlled && value.trim() === '' && defaultValue) {
      setInternalValue(defaultValue)
    }
    onBlur?.(e)
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
      {...restProps}
    />
  )
}

