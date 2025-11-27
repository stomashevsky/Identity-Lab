import { LogoButton, Button } from '../ui'
import { scrollToSection } from '../../utils/scrollToSection'

export default function DesktopNav() {
  const handleNavClick = (section: string) => {
    scrollToSection(section.replace('#', ''))
  }

  return (
    <div className="hidden md:flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-between relative w-full max-w-[1280px] px-6 mx-auto">
        <div className="flex-shrink-0 z-10">
          <LogoButton
            href="hero"
            size={36}
            aria-label="Go to top"
          />
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-center">
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#playground')
            }}
          >
            Playground
          </Button>
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#how-it-works')
            }}
          >
            How it works
          </Button>
          <Button
            variant="ghost"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#faq')
            }}
          >
            FAQ
          </Button>
        </div>

        <div className="flex-shrink-0 z-10">
          <Button
            variant="primary"
            href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app
          </Button>
        </div>
      </div>
    </div>
  )
}

