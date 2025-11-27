import Icon from './ui/Icon'
import { IconName } from '../constants/icons'

interface CardIconProps {
  name: IconName
  className?: string
}

export function CardIcon({ name, className = '' }: CardIconProps) {
  return <Icon name={name} className={className} size={24} />
}
