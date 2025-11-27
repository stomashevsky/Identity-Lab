interface SectionHeaderProps {
  label?: string
  title: string
  description?: string
  align?: 'center' | 'left'
  maxWidth?: string
  headingLevel?: 'h1' | 'h2'
}

const maxWidthClassMap: Record<string, string> = {
  '576px': 'max-w-[576px]',
  '672px': 'max-w-[672px]',
  '1280px': 'max-w-[1280px]',
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
  maxWidth = '576px',
  headingLevel = 'h2',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' 
    ? 'items-center text-center' 
    : 'items-start text-left'
  
  const maxWidthClass = maxWidthClassMap[maxWidth] || `max-w-[${maxWidth}]`
  
  const headingClasses = headingLevel === 'h1'
    ? 'font-bold leading-[36px] md:leading-[48px] text-[30px] md:text-[48px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap'
    : 'font-bold leading-[36px] md:leading-[40px] text-[30px] md:text-[36px] text-[#0a0a0a] tracking-[0px] whitespace-pre-wrap'
  
  const descriptionClasses = headingLevel === 'h1'
    ? `font-normal leading-7 min-w-full relative shrink-0 text-[#737373] text-lg ${align === 'center' ? 'text-center' : 'text-left'} w-[min-content] whitespace-pre-wrap`
    : `font-normal leading-6 min-w-full relative shrink-0 text-[color:#737373] text-base ${align === 'center' ? 'text-center' : 'text-left'} w-[min-content] whitespace-pre-wrap`

  const HeadingTag = headingLevel

  return (
    <div className={`flex flex-col gap-4 md:gap-5 ${align === 'left' ? 'md:gap-6' : ''} ${alignClasses} ${maxWidthClass} relative shrink-0 w-full`}>
      {label && (
        <div className="flex gap-1 items-center justify-center">
          <p className="font-medium leading-5 text-sm text-[#737373]">
            {label}
          </p>
        </div>
      )}
      <HeadingTag className={headingClasses}>
        {title}
      </HeadingTag>
      {description && (
        <p className={descriptionClasses}>
          {description}
        </p>
      )}
    </div>
  )
}

