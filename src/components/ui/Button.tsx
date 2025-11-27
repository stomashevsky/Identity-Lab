import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'subtle'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  className?: string
  fullWidth?: boolean
  icon?: ReactNode
  href?: string
  target?: string
  rel?: string
}

type ButtonProps = BaseButtonProps & 
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> &
  Partial<Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'>> & {
    type?: 'button' | 'submit' | 'reset'
  }

/**
 * Button component that can render as either a button or anchor tag
 * Automatically adds security attributes (rel="noopener noreferrer") for external links
 * 
 * @param variant - Visual style variant: 'primary', 'secondary', 'ghost', or 'subtle'
 * @param size - Size of the button: 'sm', 'md', or 'lg'
 * @param fullWidth - Whether the button should take full width of container
 * @param href - If provided, renders as anchor tag instead of button
 * @param target - Target for anchor tag (e.g., '_blank')
 * @param rel - Rel attribute for anchor tag (auto-added for external links)
 * @param disabled - Whether the button is disabled
 * @param icon - Optional icon to display alongside text
 */
export default function Button({ 
  variant = 'primary', 
  size = 'md',
  children, 
  className = '',
  fullWidth = false,
  disabled = false,
  icon,
  href,
  target,
  rel,
  type = 'button',
  ...props 
}: ButtonProps) {
  // Base classes for all buttons
  const baseClasses = 'box-border flex gap-2 items-center justify-center rounded-md outline-none focus-visible:outline-none transition-all transform-gpu'
  
  // Size classes
  const sizeClasses = {
    sm: 'w-9 h-9',
    md: 'h-9 px-4 py-2 text-sm',
    lg: 'h-11 px-6 py-3 text-base'
  }
  
  // Variant classes
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-[#171717] text-[#fafafa] hover:bg-[#171717]/90 active:bg-[#171717]/80 focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#171717] font-medium leading-5',
    secondary: 'bg-white border border-[#e5e5e5] border-solid text-[#0a0a0a] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] focus-visible:border-[#a3a3a3] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white font-medium leading-5',
    ghost: 'bg-transparent text-[#0a0a0a] hover:bg-[#f5f5f5] active:bg-[#e5e5e5] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent font-medium leading-5',
    subtle: 'bg-transparent text-[#737373] hover:text-[#0a0a0a] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] font-normal leading-5 transition-all duration-150 cursor-pointer'
  }

  const widthClasses = fullWidth ? 'w-full flex-1' : ''
  const sizeClass = sizeClasses[size]
  const variantClass = variantClasses[variant]
  
  // For subtle variant, size affects padding differently
  const subtleSizeClasses = {
    sm: 'px-2 py-1',
    md: 'px-2 py-1',
    lg: 'px-3 py-1.5'
  }
  
  const finalSizeClass = variant === 'subtle' 
    ? `${sizeClass.split(' ').filter(c => !c.startsWith('px-') && !c.startsWith('py-')).join(' ')} ${subtleSizeClasses[size]}`
    : sizeClass

  const allClasses = `${baseClasses} ${finalSizeClass} ${variantClass} ${widthClasses} whitespace-nowrap ${className}`

  // If href is provided, render as anchor tag
  if (href) {
    const anchorProps = {
      href,
      target,
      rel: rel || (target === '_blank' ? 'noopener noreferrer' : undefined),
      className: allClasses,
      ...(props as AnchorHTMLAttributes<HTMLAnchorElement>)
    }
    
    return (
      <a {...anchorProps}>
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </a>
    )
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      className={allClasses}
      disabled={disabled}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  )
}

