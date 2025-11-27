import { SectionHeader, FeatureBlock } from '../ui'

const BACKGROUND_STYLE = {
  backgroundImage:
    'linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 100%), linear-gradient(90deg, rgba(229, 229, 229, 1) 0%, rgba(229, 229, 229, 1) 100%), linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',
}

export default function IssuanceTypesSection() {
  return (
    <section
      id="issuance-types"
      className="flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full"
      style={BACKGROUND_STYLE}
    >
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
  )
}

