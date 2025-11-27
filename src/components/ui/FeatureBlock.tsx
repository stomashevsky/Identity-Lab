import Icon from './Icon'
import IconContainer from './IconContainer'
import type { IconName } from './Icon'

interface FeatureBlockProps {
  icon: IconName
  title: string
  description: string
  align?: 'center' | 'left'
}

export default function FeatureBlock({
  icon,
  title,
  description,
  align = 'center',
}: FeatureBlockProps) {
  const alignClasses = align === 'center'
    ? 'items-center text-center'
    : 'items-start text-left'

  return (
    <div className={`flex flex-1 flex-col gap-5 ${alignClasses} relative shrink-0`}>
      <IconContainer>
        <Icon name={icon} size={20} />
      </IconContainer>
      <div className={`flex flex-col gap-2 ${alignClasses} leading-6 relative shrink-0 text-base w-full whitespace-pre-wrap`}>
        <p className="font-semibold relative shrink-0 text-[#0a0a0a] w-full">
          {title}
        </p>
        <p className="font-normal relative shrink-0 text-[#737373] w-full">
          {description}
        </p>
      </div>
    </div>
  )
}

