import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  variant?: 'primary' | 'secondary' | 'ghost'
  children: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
}

export default function Button({ 
  variant = 'primary', 
  children, 
  className = '',
  fullWidth = false,
  disabled = false,
  icon,
  ...props 
}: ButtonProps) {
  const baseClasses = 'box-border flex gap-2 h-9 items-center justify-center px-4 py-2 rounded-md font-medium leading-5 text-sm transition-all duration-200 ease-spring-out outline-none focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] transform-gpu'
  
  const variantClasses = {
    primary: 'bg-[#171717] text-[#fafafa] hover:bg-[#171717]/90 active:bg-[#171717]/80 focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] disabled:hover:bg-[#171717] disabled:hover:scale-100',
    secondary: 'bg-white border border-[#e5e5e5] border-solid text-[#0a0a0a] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] focus-visible:border-[#a3a3a3] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] disabled:hover:bg-white disabled:hover:scale-100',
    ghost: 'bg-transparent text-[#0a0a0a] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] disabled:hover:bg-transparent disabled:hover:scale-100'
  }

  const widthClasses = fullWidth ? 'w-full flex-1' : ''

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${widthClasses} whitespace-nowrap ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  )
}

