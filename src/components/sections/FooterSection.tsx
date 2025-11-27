import { Logo, Button } from '../ui'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function FooterSection() {
  return (
    <div
      className="flex flex-col gap-8 items-center overflow-hidden px-0 py-12 relative shrink-0 w-full"
      style={BACKGROUND_STYLE}
    >
      <div className="flex flex-col gap-12 items-start max-w-[672px] md:max-w-[1280px] px-6 py-0 relative shrink-0 w-full">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-center justify-center md:justify-start relative shrink-0 w-full">
          <div className="flex flex-col md:flex-row gap-12 items-center relative shrink-0">
            <Logo size={40} />
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center md:justify-start relative shrink-0 text-sm text-[#737373]">
              <Button
                variant="subtle"
                href="https://apps.apple.com/us/app/folio-digital-wallet-app/id1266382717"
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0"
              >
                Download for iOS
              </Button>
              <Button
                variant="subtle"
                href="https://play.google.com/store/apps/details?id=com.folioltd"
                target="_blank"
                rel="noopener noreferrer"
                className="relative shrink-0"
              >
                Download for Android
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#e5e5e5] w-full"></div>

        <div className="flex flex-col md:flex-row gap-4 items-center md:items-center justify-center md:justify-between relative shrink-0 w-full">
          <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm text-center md:text-left order-2 md:order-1">
            Copyright 2025 © Folio
          </p>
          <Button
            variant="subtle"
            href="#"
            className="relative shrink-0 text-center order-1 md:order-2"
          >
            Terms of Service
          </Button>
        </div>
      </div>
    </div>
  )
}

