import { useState } from 'react'

import { SectionHeader, FAQItem, Button } from '../ui'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const FAQ_DATA = [
  {
    q: 'What is Identity Lab?',
    a: 'Identity Lab is a sandbox that lets you try EUDI compatible issuance and verification flows without real user data.',
  },
  {
    q: 'Are these real documents?',
    a: 'No. All documents here are demo samples for testing only. They have no legal effect and cannot be used in production.',
  },
  {
    q: 'Do I need a real EUDI Wallet?',
    a: 'You need Folio Wallet on your phone to scan QR codes and see the documents in action. You do not need an officially certified national wallet to use this sandbox.',
  },
  {
    q: 'Which standards does Identity Lab follow?',
    a: 'Flows are based on the European Digital Identity Wallet Architecture and Reference Framework and use OpenID for Verifiable Credential Issuance and Verifiable Presentations under the hood.',
  },
  {
    q: 'Why do I start with Digital Identity?',
    a: 'Digital Identity is the core document that other credentials can rely on. By issuing it once, you can reuse it in many verification scenarios.',
  },
  {
    q: 'Can I test verification without another device?',
    a: 'Yes. You can open Folio Wallet and Identity Lab on the same device or on two devices. QR codes work in both same device and cross device scenarios.',
  },
]

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%)',
}

export default function FAQSection() {
  const [isFaqOpen, setIsFaqOpen] = useState<number | null>(0)
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  const toggleFaq = (index: number) => {
    setIsFaqOpen(isFaqOpen === index ? null : index)
  }

  return (
    <section
      id="faq"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full transition-opacity duration-200 ${
        isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0 scale-[0.96]'
      }`}
    >
      <div className="flex flex-col gap-10 md:gap-16 items-center max-w-[672px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col gap-12 items-start relative shrink-0 w-full">
          <SectionHeader
            label="FAQ section"
            title="Frequently asked questions"
            description="Here are answers to the most common questions about Identity Lab."
          />
          <div className="flex flex-col items-start relative shrink-0 w-full">
            {FAQ_DATA.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.q}
                answer={faq.a}
                isOpen={isFaqOpen === index}
                onToggle={() => toggleFaq(index)}
              />
            ))}
          </div>
          <div
            className="flex flex-col gap-6 items-center p-6 md:p-8 relative rounded-xl shrink-0 w-full"
            style={BACKGROUND_STYLE}
          >
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
  )
}

