import { useState } from 'react'

import { LogoButton, Button } from './ui'
import menuIcon from '../assets/icons/menu.svg'
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
              <LogoButton
                href="hero"
                size={36}
                aria-label="Go to top"
              />

              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                className="p-0"
              >
                <img src={menuIcon} alt="Menu" className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <DesktopNav />
        </div>
      </div>
    </>
  )
}

