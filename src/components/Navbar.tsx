import { useState, useEffect, useRef } from 'react'

import { LogoButton, Button } from './ui'
import menuIcon from '../assets/icons/menu.svg'
import { useBodyScrollLock } from './ui/useBodyScrollLock'
import MobileMenu from './navbar/MobileMenu'
import DesktopNav from './navbar/DesktopNav'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navbarRef = useRef<HTMLDivElement>(null)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  useBodyScrollLock(isMobileMenuOpen)

  useEffect(() => {
    const navbarElement = navbarRef.current
    if (!navbarElement) return

    const handleWheel = (e: WheelEvent) => {
      // Always scroll the page when wheel event occurs over navbar
      // Buttons and links will still be clickable, but wheel will scroll the page
      e.preventDefault()
      e.stopPropagation()
      // Direct scroll manipulation for better compatibility
      document.documentElement.scrollTop += e.deltaY
      document.body.scrollTop += e.deltaY
    }

    // Use capture phase to intercept before it reaches navbar
    navbarElement.addEventListener('wheel', handleWheel, { passive: false, capture: true })

    return () => {
      navbarElement.removeEventListener('wheel', handleWheel, { capture: true } as EventListenerOptions)
    }
  }, [])

  return (
    <>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />

      <div 
        ref={navbarRef}
        className="bg-white fixed top-0 left-0 right-0 shrink-0 w-full z-[50]"
        style={{ 
          overscrollBehavior: 'none',
          touchAction: 'pan-y'
        }}
      >
        <div className="flex flex-col gap-6 md:gap-0 items-center px-0 py-3.5 md:py-4 w-full">
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

