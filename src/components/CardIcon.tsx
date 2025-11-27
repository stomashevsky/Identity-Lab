import Icon from './ui/Icon'

interface CardIconProps {
  name: 'fingerprint' | 'book' | 'car' | 'calendar' | 'shield' | 'home' | 'star' | 'library'
  className?: string
}

export function CardIcon({ name, className = '' }: CardIconProps) {
  return <Icon name={name} className={className} size={24} />
}
