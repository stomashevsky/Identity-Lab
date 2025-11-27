import { useState } from 'react'
import Issue from './Issue'
import Navbar from './Navbar'
import HeroSection from './HeroSection'
import Icon from './ui/Icon'
import Button from './ui/Button'
import Logo from './ui/Logo'

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
            <div className="flex flex-col gap-4 md:gap-5 items-center max-w-[576px] relative shrink-0 w-full">
              <div className="flex gap-1 items-center justify-center">
                <p className="font-medium leading-5 text-sm text-[#737373]">
                  Issuance types
                </p>
              </div>
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] text-center tracking-[0px] whitespace-pre-wrap">
                How documents are issued in Identity Lab
              </h2>
              <p className="font-normal leading-6 min-w-full relative shrink-0 text-[color:#737373] text-base text-center w-[min-content] whitespace-pre-wrap">
                Each document follows a specific issuance type. Color labels on the cards show which flow is used.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-center md:items-start relative shrink-0 w-full">
              <div className="flex flex-1 flex-col gap-5 items-center relative shrink-0">
                <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 w-10 h-10">
                  <Icon name="key-round" size={20} />
                </div>
                <div className="flex flex-col gap-2 items-center leading-6 relative shrink-0 text-base text-center w-full whitespace-pre-wrap">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full text-center">
                    Authorization
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full text-center">
                    The issuer confirms your account. You sign in on their website, then approve the request in your wallet.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center relative shrink-0">
                <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 w-10 h-10">
                  <Icon name="check" size={20} />
                </div>
                <div className="flex flex-col gap-2 items-center leading-6 relative shrink-0 text-base text-center w-full whitespace-pre-wrap">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full text-center">
                    Pre-authorized
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full text-center">
                    Issued automatically using your Digital Identity. You only confirm with biometrics.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center relative shrink-0">
                <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 w-10 h-10">
                  <Icon name="message-square-more" size={20} />
                </div>
                <div className="flex flex-col gap-2 items-center leading-6 relative shrink-0 text-base text-center w-full whitespace-pre-wrap">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full text-center">
                    Transaction Code
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full text-center">
                    Requires a one time code provided by the organization.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-center relative shrink-0">
                <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 w-10 h-10">
                  <Icon name="file-question" size={20} />
                </div>
                <div className="flex flex-col gap-2 items-center leading-6 relative shrink-0 text-base text-center w-full whitespace-pre-wrap">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full text-center">
                    Presentation
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full text-center">
                    Issued by presenting another document and sharing only what is needed.
                  </p>
                </div>
              </div>
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
            <div className="flex flex-col gap-4 md:gap-5 items-center max-w-[576px] relative shrink-0 w-full">
              <div className="flex gap-1 items-center justify-center">
                <p className="font-medium leading-5 text-sm text-[#737373]">
                  How it works
                </p>
              </div>
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] text-center tracking-[0px] whitespace-pre-wrap">
                How EUDI flows work
              </h2>
              <p className="font-normal leading-6 min-w-full relative shrink-0 text-[color:#737373] text-base text-center w-[min-content] whitespace-pre-wrap">
                Identity Lab lets you issue demo documents, run verification flows and understand the European Digital Identity (EUDI) standards behind them.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-11 md:gap-6 items-start relative shrink-0 w-full">
              <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0">
                <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 w-10 h-10">
                  <Icon name="copy-plus" size={20} />
                </div>
                <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                    Issuance
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full">
                    You review sample data in a modal and confirm the document. A QR code is shown. Scanning it with Folio Wallet adds the document to the wallet.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0">
                <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 w-10 h-10">
                  <Icon name="qr-code" size={20} />
                </div>
                <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                    Presentation
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full">
                    A verifier configures a request in a modal, choosing exactly which attributes are needed. A QR code is generated for the user to scan and consent to sharing.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-5 items-start relative shrink-0">
                <div className="bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 w-10 h-10">
                  <Icon name="refresh-cw" size={20} />
                </div>
                <div className="flex flex-col gap-2 items-start leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap">
                  <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
                    Lifecycle
                  </p>
                  <p className="font-normal relative shrink-0 text-[#737373] w-full">
                    You can repeat issuance and verification with different settings to see how updates, selective disclosure and reuse of the same document work in practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full">
        <div className="flex flex-col gap-10 md:gap-16 items-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
          <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
            <div className="flex flex-col gap-4 md:gap-5 items-center relative shrink-0 w-full">
              <div className="flex gap-1 items-center justify-center">
                <p className="font-medium leading-5 text-sm text-[#737373]">
                  FAQ section
                </p>
              </div>
              <h2 className="font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] text-center tracking-[0px] whitespace-pre-wrap">
                Frequently asked questions
              </h2>
              <p className="font-normal leading-6 min-w-full relative shrink-0 text-[color:#737373] text-base text-center w-[min-content] whitespace-pre-wrap">
                Here are answers to the most common questions about Identity Lab.
              </p>
            </div>
            <div className="flex flex-col items-start relative shrink-0 w-full cursor-pointer">
              {[
                { q: 'What is Identity Lab?', a: 'Identity Lab is a sandbox that lets you try EUDI compatible issuance and verification flows without real user data.' },
                { q: 'Are these real documents?', a: 'No. All documents here are demo samples for testing only. They have no legal effect and cannot be used in production.' },
                { q: 'Do I need a real EUDI Wallet?', a: 'You need Folio Wallet on your phone to scan QR codes and see the documents in action. You do not need an officially certified national wallet to use this sandbox.' },
                { q: 'Which standards does Identity Lab follow?', a: 'Flows are based on the European Digital Identity Wallet Architecture and Reference Framework and use OpenID for Verifiable Credential Issuance and Verifiable Presentations under the hood.' },
                { q: 'Why do I start with Digital Identity?', a: 'Digital Identity is the core document that other credentials can rely on. By issuing it once, you can reuse it in many verification scenarios.' },
                { q: 'Can I test verification without another device?', a: 'Yes. You can open Folio Wallet and Identity Lab on the same device or on two devices. QR codes work in both same device and cross device scenarios.' },
              ].map((faq, index) => (
                <button
                  key={index}
                  onClick={() => toggleFaq(index)}
                  className="group border-b border-[#e5e5e5] border-solid flex flex-col items-start p-0 relative shrink-0 w-full outline-none focus-visible:outline-none"
                >
                  <div className="flex items-center justify-between px-0 py-4 relative shrink-0 w-full rounded-md group-focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] transition-all duration-150">
                    <p className="flex-1 font-medium leading-6 min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-base whitespace-pre-wrap text-left">
                      {faq.q}
                    </p>
                    <div className="flex items-center justify-center relative shrink-0">
                      <div className={`flex-none transition-transform duration-200 ${isFaqOpen === index ? 'rotate-180' : ''}`}>
                        <svg 
                          className={`w-4 h-4 ${isFaqOpen === index ? 'text-[#0a0a0a]' : 'text-[#737373]'}`}
                          viewBox="0 0 16 16" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            d="M4 6L8 10L12 6" 
                            stroke="currentColor" 
                            strokeWidth="1.5" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  {isFaqOpen === index && (
                    <div className="flex flex-col items-center justify-center pb-4 pt-0 px-0 relative shrink-0 w-full">
                      <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full whitespace-pre-wrap text-left">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </button>
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
                onClick={(e) => {
                  e.preventDefault()
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

