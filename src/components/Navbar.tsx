import { useState } from 'react'
import Logo from './ui/Logo'
import NavLink from './ui/NavLink'
import Button from './ui/Button'
import menuIcon from '../assets/icons/menu.svg'
import xIcon from '../assets/icons/x.svg'
import { scrollToSection } from '../utils/scrollToSection'
import { useBodyScrollLock } from './ui/useBodyScrollLock'

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Lock body scroll when menu is open
  useBodyScrollLock(isMobileMenuOpen)

  return (
    <>
      {/* Background overlay - shown when menu is open on mobile */}
      {isMobileMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-[rgba(10,10,10,0.3)] z-[3]"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Menu opened state - overlays default navbar on mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed bg-white border-b border-[#e5e5e5] border-solid left-0 right-0 top-0 z-[4] w-full">
          <div className="flex flex-col gap-6 items-center overflow-hidden px-0 py-6 w-full">
            <div className="flex flex-col gap-4 items-start justify-start w-full px-6 py-0 relative shrink-0">
              {/* Logo and close button */}
              <div className="flex items-center justify-between relative shrink-0 w-full">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    toggleMobileMenu()
                    setTimeout(() => {
                      scrollToSection('hero')
                    }, 150)
                  }}
                  className="flex items-center justify-center outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                  aria-label="Go to top"
                >
                  <Logo size={36} />
                </button>
                <button
                  onClick={toggleMobileMenu}
                  className="flex items-center justify-center rounded-md w-9 h-9 hover:bg-[#f5f5f5] transition-colors outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                  aria-label="Close menu"
                >
                  <img src={xIcon} alt="Close" className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation links and button */}
              <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
                {/* Navigation links */}
                <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleMobileMenu()
                      setTimeout(() => {
                        scrollToSection('playground')
                      }, 150)
                    }}
                    className="w-full flex items-center justify-start px-4 py-2 h-9 rounded-md font-medium leading-5 text-sm text-[#0a0a0a] bg-transparent hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                  >
                    Playground
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleMobileMenu()
                      setTimeout(() => {
                        scrollToSection('how-it-works')
                      }, 150)
                    }}
                    className="w-full flex items-center justify-start px-4 py-2 h-9 rounded-md font-medium leading-5 text-sm text-[#0a0a0a] bg-transparent hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                  >
                    How it works
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleMobileMenu()
                      setTimeout(() => {
                        scrollToSection('faq')
                      }, 150)
                    }}
                    className="w-full flex items-center justify-start px-4 py-2 h-9 rounded-md font-medium leading-5 text-sm text-[#0a0a0a] bg-transparent hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                  >
                    FAQ
                  </button>
                </div>

                {/* Download Folio Wallet button - left-aligned, not full width */}
                <Button 
                  variant="primary" 
                  className="w-auto"
                  onClick={(e) => {
                    e.preventDefault()
                    toggleMobileMenu()
                    window.open('https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717', '_blank', 'noopener,noreferrer')
                  }}
                >
                  Get the app
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Default navbar state - always visible */}
      <div className="bg-white fixed top-0 left-0 right-0 shrink-0 w-full z-[50]">
        <div className="flex flex-col gap-6 md:gap-0 items-center overflow-hidden px-0 py-3.5 md:py-4 w-full">
          {/* Mobile container - full width */}
          <div className="md:hidden flex flex-col gap-6 items-start justify-center w-full px-6 py-0 relative shrink-0">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              {/* Logo */}
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
              
              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center rounded-md w-9 h-9 hover:bg-[#f5f5f5] transition-colors outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                aria-label="Toggle menu"
              >
                <img src={menuIcon} alt="Menu" className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Desktop container - max-w-[1280px] */}
          <div className="hidden md:flex flex-col items-center justify-center w-full">
            <div className="flex items-center justify-between relative w-full max-w-[1280px] px-6 mx-auto">
              {/* Logo - left side */}
              <div className="flex-shrink-0 z-10">
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
              </div>
              
              {/* Desktop navigation - centered */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-center">
                <NavLink href="#playground">Playground</NavLink>
                <NavLink href="#how-it-works">How it works</NavLink>
                <NavLink href="#faq">FAQ</NavLink>
              </div>
              
              {/* Desktop button - right side */}
              <div className="flex-shrink-0 z-10">
                <Button 
                  variant="primary"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open('https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717', '_blank', 'noopener,noreferrer')
                  }}
                >
                  Get the app
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

