import Logo from '../ui/Logo'
import Button from '../ui/Button'
import xIcon from '../../assets/icons/x.svg'
import { scrollToSection } from '../../utils/scrollToSection'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleNavClick = (section: string) => {
    onClose()
    setTimeout(() => {
      scrollToSection(section)
    }, 150)
  }

  if (!isOpen) return null

  return (
    <>
      <div
        className="md:hidden fixed inset-0 bg-[rgba(10,10,10,0.3)] z-[3]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="md:hidden fixed bg-white border-b border-[#e5e5e5] border-solid left-0 right-0 top-0 z-[4] w-full">
        <div className="flex flex-col gap-6 items-center overflow-hidden px-0 py-6 w-full">
          <div className="flex flex-col gap-4 items-start justify-start w-full px-6 py-0 relative shrink-0">
            <div className="flex items-center justify-between relative shrink-0 w-full">
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleNavClick('hero')
                }}
                className="flex items-center justify-center outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                aria-label="Go to top"
              >
                <Logo size={36} />
              </button>
              <button
                onClick={onClose}
                className="flex items-center justify-center rounded-md w-9 h-9 hover:bg-[#f5f5f5] transition-colors outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                aria-label="Close menu"
              >
                <img src={xIcon} alt="Close" className="w-5 h-5" />
              </button>
            </div>

            <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('playground')
                  }}
                  className="w-full flex items-center justify-start px-4 py-2 h-9 rounded-md font-medium leading-5 text-sm text-[#0a0a0a] bg-transparent hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                >
                  Playground
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('how-it-works')
                  }}
                  className="w-full flex items-center justify-start px-4 py-2 h-9 rounded-md font-medium leading-5 text-sm text-[#0a0a0a] bg-transparent hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                >
                  How it works
                </button>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('faq')
                  }}
                  className="w-full flex items-center justify-start px-4 py-2 h-9 rounded-md font-medium leading-5 text-sm text-[#0a0a0a] bg-transparent hover:bg-[#f5f5f5] transition-colors focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]"
                >
                  FAQ
                </button>
              </div>

              <Button
                variant="primary"
                className="w-auto"
                onClick={(e) => {
                  e.preventDefault()
                  onClose()
                  window.open(
                    'https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717',
                    '_blank',
                    'noopener,noreferrer'
                  )
                }}
              >
                Get the app
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

