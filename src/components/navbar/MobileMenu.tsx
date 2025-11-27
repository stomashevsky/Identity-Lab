import { LogoButton, Button } from '../ui'
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
              <LogoButton
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleNavClick('hero')
                }}
                size={36}
                aria-label="Go to top"
              />
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                aria-label="Close menu"
                className="p-0"
              >
                <img src={xIcon} alt="Close" className="w-5 h-5" />
              </Button>
            </div>

            <div className="flex flex-col gap-5 items-start justify-start pb-2.5 pt-0 px-0 relative shrink-0 w-full">
              <div className="flex flex-col gap-1 items-start justify-start relative shrink-0 w-full">
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('playground')
                  }}
                  className="justify-start"
                >
                  Playground
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('how-it-works')
                  }}
                  className="justify-start"
                >
                  How it works
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleNavClick('faq')
                  }}
                  className="justify-start"
                >
                  FAQ
                </Button>
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

