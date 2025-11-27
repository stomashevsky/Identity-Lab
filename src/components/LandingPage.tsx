import Navbar from './Navbar'
import HeroSection from './HeroSection'
import IssuanceTypesSection from './sections/IssuanceTypesSection'
import PlaygroundSection from './sections/PlaygroundSection'
import HowItWorksSection from './sections/HowItWorksSection'
import FAQSection from './sections/FAQSection'
import FooterSection from './sections/FooterSection'

export default function LandingPage() {
  return (
    <div className="flex flex-col items-start relative w-full">
      {/* Skip to main content link for accessibility */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#171717] focus:text-white focus:rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <Navbar />
      <HeroSection />
      <IssuanceTypesSection />
      <PlaygroundSection />
      <HowItWorksSection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}

