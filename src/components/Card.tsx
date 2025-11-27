import { CardIcon } from './CardIcon'
import BadgeColor, { BadgeColorVariant } from './ui/BadgeColor'
import IconContainer from './ui/IconContainer'

export interface CardProps {
  icon: 'fingerprint' | 'book' | 'car' | 'calendar' | 'shield' | 'home' | 'star' | 'library'
  badge: string
  badgeVariant?: 'primary' | 'secondary' | BadgeColorVariant
  title: string
  description: string
  onClick?: () => void
}

export default function Card({ icon, badge, badgeVariant = 'secondary', title, description, onClick }: CardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (onClick && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <div
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? 'button' : undefined}
      className={`bg-white border border-[#e5e5e5] border-solid flex-[1_0_0] min-w-[280px] max-w-[400px] rounded-2xl overflow-hidden outline-none shadow-[0px_4px_6px_-1px_rgba(10,13,18,0.06),0px_2px_4px_-2px_rgba(10,13,18,0.06)] focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] ${
        onClick ? 'cursor-pointer hover:shadow-[0px_10px_15px_-3px_rgba(10,13,18,0.08),0px_4px_6px_-4px_rgba(10,13,18,0.06)] transition-shadow' : ''
      }`}
      style={{ borderWidth: '1px' }}
    >
      <div className="flex flex-col gap-6 items-start p-6 w-full">
        <div className="flex gap-2 items-start w-full">
          <IconContainer>
            <CardIcon name={icon} className="w-6 h-6" />
          </IconContainer>
          {badge && (
            <div className="flex flex-1 items-start justify-end">
              {badgeVariant === 'primary' ? (
                <div className="bg-[#171717] border border-transparent border-solid flex items-center justify-center px-2 py-0.5 rounded-md shrink-0">
                  <p className="font-medium leading-4 text-xs text-white">
                    {badge}
                  </p>
                </div>
              ) : badgeVariant === 'secondary' ? (
                <div className="bg-[#f5f5f5] border border-transparent border-solid flex items-center justify-center px-2 py-0.5 rounded-md shrink-0">
                  <p className="font-medium leading-4 text-xs text-[#171717]">
                    {badge}
                  </p>
                </div>
              ) : (
                <BadgeColor variant={badgeVariant as BadgeColorVariant}>
                  {badge}
                </BadgeColor>
              )}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-1.5 items-start w-full">
          <p className="font-semibold leading-6 text-base text-[#0a0a0a] w-full">
            {title}
          </p>
          <p className="font-normal leading-5 min-h-[40px] text-sm text-[#737373] w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

