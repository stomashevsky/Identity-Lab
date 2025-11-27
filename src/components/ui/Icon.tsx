import fingerprintIcon from '../../assets/icons/fingerprint-02.svg'
import bookOpenIcon from '../../assets/icons/book-open-01.svg'
import carIcon from '../../assets/icons/car-01.svg'
import calendarCheckIcon from '../../assets/icons/calendar-check-01.svg'
import shieldPlusIcon from '../../assets/icons/shield-plus.svg'
import homeIcon from '../../assets/icons/home-02.svg'
import starIcon from '../../assets/icons/star-01.svg'
import bookMarkedIcon from '../../assets/icons/book-marked.svg'
import keyRoundIcon from '../../assets/icons/key-round.svg'
import checkIcon from '../../assets/icons/check.svg'
import messageSquareMoreIcon from '../../assets/icons/message-square-more.svg'
import fileQuestionIcon from '../../assets/icons/file-question.svg'
import copyPlusIcon from '../../assets/icons/copy-plus.svg'
import qrCodeIcon from '../../assets/icons/qr-code.svg'
import refreshCwIcon from '../../assets/icons/refresh-cw.svg'
import arrowRightIcon from '../../assets/icons/arrow-right.svg'

export type IconName = 
  | 'fingerprint' 
  | 'book' 
  | 'car' 
  | 'calendar' 
  | 'shield' 
  | 'home' 
  | 'star' 
  | 'library'
  | 'key-round'
  | 'check'
  | 'message-square-more'
  | 'file-question'
  | 'copy-plus'
  | 'qr-code'
  | 'refresh-cw'
  | 'arrow-right'

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

const iconMap: Record<IconName, string> = {
  'fingerprint': fingerprintIcon,
  'book': bookOpenIcon,
  'car': carIcon,
  'calendar': calendarCheckIcon,
  'shield': shieldPlusIcon,
  'home': homeIcon,
  'star': starIcon,
  'library': bookMarkedIcon,
  'key-round': keyRoundIcon,
  'check': checkIcon,
  'message-square-more': messageSquareMoreIcon,
  'file-question': fileQuestionIcon,
  'copy-plus': copyPlusIcon,
  'qr-code': qrCodeIcon,
  'refresh-cw': refreshCwIcon,
  'arrow-right': arrowRightIcon,
}

export default function Icon({ name, className = '', size = 20 }: IconProps) {
  const iconSrc = iconMap[name]
  
  if (!iconSrc) {
    return null
  }

  return (
    <div className={`overflow-hidden relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img 
        src={iconSrc} 
        alt={name}
        className="w-full h-full object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )
}

