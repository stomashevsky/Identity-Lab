import { useState } from 'react'

import Logo from './ui/Logo'
import menuIcon from '../assets/icons/menu.svg'
import { scrollToSection } from '../utils/scrollToSection'
import { useBodyScrollLock } from './ui/useBodyScrollLock'
import MobileMenu from './navbar/MobileMenu'
import DesktopNav from './navbar/DesktopNav'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useBodyScrollLock(isMobileMenuOpen)

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <div className="bg-white fixed top-0 left-0 right-0 shrink-0 w-full z-[50]">
        <div className="flex flex-col gap-6 md:gap-0 items-center overflow-hidden px-0 py-3.5 md:py-4 w-full">
          <div className="md:hidden flex flex-col gap-6 items-start justify-center w-full px-6 py-0 relative shrink-0">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection('hero')
                }}
                className="flex items-center justify-center outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                aria-label="Go to top"
              >
                <Logo size={36} />
              </button>

              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center rounded-md w-9 h-9 hover:bg-[#f5f5f5] transition-colors outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                aria-label="Toggle menu"
              >
                <img src={menuIcon} alt="Menu" className="w-5 h-5" />
              </button>
            </div>
          </div>

          <DesktopNav />
        </div>
      </div>
    </>
  )
}

