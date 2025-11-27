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

