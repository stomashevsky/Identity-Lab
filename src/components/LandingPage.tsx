import { useState } from 'react'
import Issue from './Issue'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Button from './ui/Button'
import Logo from './ui/Logo'
import { SectionHeader, FeatureBlock, FAQItem } from './ui'

export default function LandingPage() {
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(0)

  const toggleFaq = (index: number) => {
    setIsFaqOpen(isFaqOpen === index ? null : index)
  }

  return (
    <div className="flex flex-col items-start relative w-full">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Issuance types Section */}
      <section id="issuance-types" className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}>
        <div className="flex flex-col gap-12 md:gap-16 items-center justify-center max-w-[672px] md:max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-10 md:gap-12 items-center relative shrink-0 w-full">
            <SectionHeader
              label="Issuance types"
              title="How documents are issued in Identity Lab"
              description="Each document follows a specific issuance type. Color labels on the cards show which flow is used."
            />
            <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-center md:items-start relative shrink-0 w-full">
              <FeatureBlock
                icon="key-round"
                title="Authorization"
                description="The issuer confirms your account. You sign in on their website, then approve the request in your wallet."
                align="center"
              />
              <FeatureBlock
                icon="check"
                title="Pre-authorized"
                description="Issued automatically using your Digital Identity. You only confirm with biometrics."
                align="center"
              />
              <FeatureBlock
                icon="message-square-more"
                title="Transaction Code"
                description="Requires a one time code provided by the organization."
                align="center"
              />
              <FeatureBlock
                icon="file-question"
                title="Presentation"
                description="Issued by presenting another document and sharing only what is needed."
                align="center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Playground Section - интегрируем Issue компонент */}
      <section id="playground" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 w-full">
          <Issue />
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}>
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

      {/* FAQ Section */}
      <section id="faq" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-16 items-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
            <SectionHeader
              label="FAQ section"
              title="Frequently asked questions"
              description="Here are answers to the most common questions about Identity Lab."
            />
            <div className="flex flex-col items-start relative shrink-0 w-full">
              {[
                { q: 'What is Identity Lab?', a: 'Identity Lab is a sandbox that lets you try EUDI compatible issuance and verification flows without real user data.' },
                { q: 'Are these real documents?', a: 'No. All documents here are demo samples for testing only. They have no legal effect and cannot be used in production.' },
                { q: 'Do I need a real EUDI Wallet?', a: 'You need Folio Wallet on your phone to scan QR codes and see the documents in action. You do not need an officially certified national wallet to use this sandbox.' },
                { q: 'Which standards does Identity Lab follow?', a: 'Flows are based on the European Digital Identity Wallet Architecture and Reference Framework and use OpenID for Verifiable Credential Issuance and Verifiable Presentations under the hood.' },
                { q: 'Why do I start with Digital Identity?', a: 'Digital Identity is the core document that other credentials can rely on. By issuing it once, you can reuse it in many verification scenarios.' },
                { q: 'Can I test verification without another device?', a: 'Yes. You can open Folio Wallet and Identity Lab on the same device or on two devices. QR codes work in both same device and cross device scenarios.' },
              ].map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.q}
                  answer={faq.a}
                  isOpen={isFaqOpen === index}
                  onToggle={() => toggleFaq(index)}
                />
              ))}
            </div>
            <div className="flex flex-col gap-6 items-center p-6 md:p-8 relative rounded-xl shrink-0 w-full" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%)' }}>
              <div className="flex flex-col gap-2 items-start relative shrink-0 text-center w-full whitespace-pre-wrap">
                <p className="font-bold leading-7 md:leading-8 relative shrink-0 text-[#0a0a0a] text-xl md:text-2xl w-full">
                  Still have questions?
                </p>
                <p className="font-normal leading-6 relative shrink-0 text-[#737373] text-base w-full">
                  Share your use case and we will get back to you.
                </p>
              </div>
              <Button 
                variant="primary" 
                fullWidth 
                className="md:w-auto"
                onClick={() => {
                  window.location.href = 'mailto:contact@folio.id'
                }}
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="flex flex-col gap-8 items-center overflow-hidden px-0 py-12 relative shrink-0 w-full" style={{ backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)' }}>
        <div className="flex flex-col gap-12 items-start max-w-[672px] md:max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
          {/* Desktop: Logo and download links in a row, Mobile: Logo and links centered vertically */}
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-center justify-center md:justify-start relative shrink-0 w-full">
            <div className="flex flex-col md:flex-row gap-12 items-center relative shrink-0">
              <Logo size={40} />
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center md:justify-start relative shrink-0 text-sm text-[#737373]">
                <a 
                  href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal leading-5 relative shrink-0 hover:text-[#0a0a0a] transition-all duration-150 rounded-md px-2 py-1 outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] cursor-pointer"
                >
                  Download for iOS
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.folioltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-normal leading-5 relative shrink-0 hover:text-[#0a0a0a] transition-all duration-150 rounded-md px-2 py-1 outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] cursor-pointer"
                >
                  Download for Android
                </a>
              </div>
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-[#e5e5e5] w-full"></div>
          
          {/* Desktop: Copyright left, Terms right. Mobile: Terms top, Copyright bottom */}
          <div className="flex flex-col md:flex-row gap-4 items-center md:items-center justify-center md:justify-between relative shrink-0 w-full">
            <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm text-center md:text-left order-2 md:order-1">
              Copyright 2025 © Folio
            </p>
            <a 
              href="#"
              className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm hover:text-[#0a0a0a] transition-all duration-150 rounded-md px-2 py-1 outline-none focus-visible:outline-none focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] cursor-pointer text-center order-1 md:order-2"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

