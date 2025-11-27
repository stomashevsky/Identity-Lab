import { MouseEvent } from 'react'
import Logo from './Logo'
import { scrollToSection } from '../../utils/scrollToSection'

interface LogoButtonProps {
  href?: string
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  className?: string
  size?: number
  'aria-label'?: string
}

export default function LogoButton({ 
  href, 
  onClick, 
  className = '', 
  size = 36,
  'aria-label': ariaLabel = 'Go to top'
}: LogoButtonProps) {
  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (href) {
      e.preventDefault()
      scrollToSection(href)
    }
    if (onClick) {
      onClick(e)
    }
  }

  const baseClasses = 'flex items-center justify-center outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]'

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={`${baseClasses} ${className}`}
        aria-label={ariaLabel}
      >
        <Logo size={size} />
      </a>
    )
  }

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${className}`}
      aria-label={ariaLabel}
    >
      <Logo size={size} />
    </button>
  )
}

