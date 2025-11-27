import { ReactNode } from 'react'

export interface FormFieldProps {
  label: string
  children: ReactNode
  required?: boolean
  error?: boolean
  className?: string
}

/**
 * Компонент для стандартизации полей форм
 * Объединяет label и input в единую структуру с общими стилями
 */
export default function FormField({ 
  label, 
  children, 
  required = false, 
  error = false,
  className = ''
}: FormFieldProps) {
  return (
    <div className={`flex flex-col gap-2 items-start w-full ${className}`}>
      <label className={`font-medium leading-5 text-sm text-[#0a0a0a] ${error ? 'text-[#dc2626]' : ''}`}>
        {label}
        {required && <span className="text-[#dc2626] ml-1">*</span>}
      </label>
      {children}
    </div>
  )
}

