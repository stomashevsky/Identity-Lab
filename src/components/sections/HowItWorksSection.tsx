import { SectionHeader, FeatureBlock } from '../ui'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function HowItWorksSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      id="how-it-works"
      ref={ref as React.RefObject<HTMLElement>}
      className={`flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full transition-opacity duration-200 ${
        isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0 scale-[0.96]'
      }`}
      style={BACKGROUND_STYLE}
    >
      <div className="flex flex-col gap-12 md:gap-16 items-start justify-center max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
          <SectionHeader
            label="How it works"
            title="How EUDI flows work"
            description="Identity Lab lets you issue demo documents, run verification flows and understand the European Digital Identity (EUDI) standards behind them."
          />
          <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
            <FeatureBlock
              icon="copy-plus"
              title="Issuance"
              description="You review sample data in a modal and confirm the document. A QR code is shown. Scanning it with Folio Wallet adds the document to the wallet."
              align="left"
            />
            <FeatureBlock
              icon="qr-code"
              title="Presentation"
              description="A verifier configures a request in a modal, choosing exactly which attributes are needed. A QR code is generated for the user to scan and consent to sharing."
              align="left"
            />
            <FeatureBlock
              icon="refresh-cw"
              title="Lifecycle"
              description="You can repeat issuance and verification with different settings to see how updates, selective disclosure and reuse of the same document work in practice."
              align="left"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

