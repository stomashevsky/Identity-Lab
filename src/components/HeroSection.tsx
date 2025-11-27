import Button from './ui/Button'
import { SectionHeader } from './ui'
import heroPhoneDesktop from '../assets/images/hero-phone-desktop.png'
import heroPhoneMobile from '../assets/images/hero-phone-mobile.png'
import { scrollToSection } from '../utils/scrollToSection'
import { useParallax } from '../hooks/useParallax'

export default function HeroSection() {
  const { ref: parallaxRef, style: parallaxStyle } = useParallax({ speed: 0.15 })

  return (
    <section 
      id="hero" 
      className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full"
    >
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-1 flex-col gap-6 md:gap-8 items-start relative shrink-0 w-full md:min-h-0 md:min-w-0">
          <SectionHeader
            label="Inside Folio Wallet"
            title="Identity Lab"
            description="Issue and verify digital IDs in a safe sandbox that mirrors real European digital ID flows. Explore demo documents, test QR based verification and see exactly which data is shared."
            align="left"
            maxWidth="672px"
            headingLevel="h1"
          />
          
          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-3 items-start relative shrink-0 w-full md:w-auto">
            <Button 
              variant="primary" 
              fullWidth
              className="md:w-auto md:flex-initial"
              onClick={() => {
                window.open('https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717', '_blank', 'noopener,noreferrer')
              }}
            >
              Get the app
            </Button>
            <Button 
              variant="secondary"
              fullWidth
              className="md:w-auto md:flex-initial"
              onClick={() => {
                scrollToSection('playground')
              }}
            >
              Playground
            </Button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div 
          ref={parallaxRef as React.RefObject<HTMLDivElement>}
          className="aspect-[240/240] flex-1 min-h-0 min-w-0 relative rounded-2xl shrink-0 w-full max-w-[400px] md:left-auto md:translate-x-0 md:mx-0 md:max-w-none md:w-auto transition-transform duration-200 ease-out"
          style={parallaxStyle}
        >
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full md:hidden" 
            src={heroPhoneMobile}
          />
          <img 
            alt="" 
            className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full hidden md:block" 
            src={heroPhoneDesktop}
          />
        </div>
      </div>
    </section>
  )
}

