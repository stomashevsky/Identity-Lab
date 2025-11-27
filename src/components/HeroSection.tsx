import Button from './ui/Button'
import { SectionHeader } from './ui'
import heroPhoneImage1 from '../assets/images/hero-phone-1.png'
import heroPhoneImage2 from '../assets/images/hero-phone-2.png'
import heroPhoneImage3 from '../assets/images/hero-phone-3.png'
import heroPhoneImage4 from '../assets/images/hero-phone-4.png'
import heroPhoneMobile1 from '../assets/images/hero-phone-mobile-1.png'
import heroPhoneMobile2 from '../assets/images/hero-phone-mobile-2.png'
import heroPhoneMobile3 from '../assets/images/hero-phone-mobile-3.png'
import { scrollToSection } from '../utils/scrollToSection'

export default function HeroSection() {
  return (
    <section id="hero" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 pt-32 md:pt-[164px] pb-16 md:pb-24 relative shrink-0 w-full">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
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
        <div className="aspect-[240/240] flex-1 min-h-0 min-w-0 relative rounded-2xl shrink-0 w-[calc(100%+3rem)] max-w-[400px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:mx-0 md:max-w-none md:w-auto">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-2xl">
            {/* Desktop images - 4 stacked */}
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full hidden md:block" 
              src={heroPhoneImage1}
            />
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full hidden md:block" 
              src={heroPhoneImage2}
            />
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full hidden md:block" 
              src={heroPhoneImage3}
            />
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full hidden md:block" 
              src={heroPhoneImage4}
            />
            {/* Mobile images - 3 stacked */}
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full md:hidden" 
              src={heroPhoneMobile1}
            />
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full md:hidden" 
              src={heroPhoneMobile2}
            />
            <img 
              alt="" 
              className="absolute inset-0 max-w-none object-center object-cover rounded-2xl w-full h-full md:hidden" 
              src={heroPhoneMobile3}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

