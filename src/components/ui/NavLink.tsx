import { ButtonHTMLAttributes } from 'react'
import { scrollToSection } from '../../utils/scrollToSection'

interface NavLinkProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> {
  children: React.ReactNode
  className?: string
  active?: boolean
  href?: string
}

export default function NavLink({ children, className = '', active = false, href, onClick, ...props }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault()
      e.stopPropagation()
      scrollToSection(href)
    }
    if (onClick) {
      onClick(e)
    }
  }

  return (
    <button
      className={`bg-transparent flex gap-2 h-9 items-center justify-center px-4 py-2 rounded-md shrink-0 transition-colors outline-none focus-visible:outline-none hover:bg-[#f5f5f5] ${className}`}
      onClick={handleClick}
      {...props}
    >
      <p className="font-medium leading-5 text-sm text-[#0a0a0a] whitespace-nowrap">
        {children}
      </p>
    </button>
  )
}

