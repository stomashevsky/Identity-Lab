import Logo from '../ui/Logo'
import NavLink from '../ui/NavLink'
import Button from '../ui/Button'
import { scrollToSection } from '../../utils/scrollToSection'

export default function DesktopNav() {
  return (
    <div className="hidden md:flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-between relative w-full max-w-[1280px] px-6 mx-auto">
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

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-1 items-center">
          <NavLink href="#playground">Playground</NavLink>
          <NavLink href="#how-it-works">How it works</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
        </div>

        <div className="flex-shrink-0 z-10">
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault()
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
  )
}

