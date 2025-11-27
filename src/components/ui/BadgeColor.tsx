export type BadgeColorVariant =
  | 'Red'
  | 'Orange'
  | 'Amber'
  | 'Yellow'
  | 'Lime'
  | 'Green'
  | 'Emerald'
  | 'Teal'
  | 'Cyan'
  | 'Sky'
  | 'Blue'
  | 'Indigo'
  | 'Violet'
  | 'Purple'
  | 'Fuchsia'
  | 'Pink'
  | 'Rose'

export interface BadgeColorProps {
  children: React.ReactNode
  variant: BadgeColorVariant
  className?: string
}

const variantStyles: Record<BadgeColorVariant, { bg: string; text: string }> = {
  Red: { bg: '#fee2e2', text: '#b91c1c' },
  Orange: { bg: '#ffedd5', text: '#c2410c' },
  Amber: { bg: '#fef3c7', text: '#b45309' },
  Yellow: { bg: '#fef9c3', text: '#a16207' },
  Lime: { bg: '#ecfccb', text: '#4d7c0f' },
  Green: { bg: '#dcfce7', text: '#15803d' },
  Emerald: { bg: '#d1fae5', text: '#047857' },
  Teal: { bg: '#ccfbf1', text: '#0f766e' },
  Cyan: { bg: '#cffafe', text: '#0e7490' },
  Sky: { bg: '#e0f2fe', text: '#0369a1' },
  Blue: { bg: '#dbeafe', text: '#1d4ed8' },
  Indigo: { bg: '#e0e7ff', text: '#4338ca' },
  Violet: { bg: '#ede9fe', text: '#6d28d9' },
  Purple: { bg: '#f3e8ff', text: '#7e22ce' },
  Fuchsia: { bg: '#fae8ff', text: '#a21caf' },
  Pink: { bg: '#fce7f3', text: '#be185d' },
  Rose: { bg: '#ffe4e6', text: '#be123c' },
}

export default function BadgeColor({ children, variant, className = '' }: BadgeColorProps) {
  const styles = variantStyles[variant]

  return (
    <div
      className={`flex items-center justify-center gap-1 px-2 py-0.5 rounded-md shrink-0 ${className}`}
      style={{ backgroundColor: styles.bg }}
    >
      <span
        className="font-medium leading-4 text-xs"
        style={{ color: styles.text }}
      >
        {children}
      </span>
    </div>
  )
}


