import Logo from '../ui/Logo'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function FooterSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <div
      ref={ref as React.RefObject<HTMLElement>}
      className={`flex flex-col gap-8 items-center overflow-hidden px-0 py-12 relative shrink-0 w-full transition-opacity duration-200 ${
        isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0 scale-[0.96]'
      }`}
      style={BACKGROUND_STYLE}
    >
      <div className="flex flex-col gap-12 items-start max-w-[672px] md:max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
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

        <div className="border-t border-[#e5e5e5] w-full"></div>

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
  )
}

