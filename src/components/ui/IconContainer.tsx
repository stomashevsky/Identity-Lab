import { ReactNode } from 'react'

interface IconContainerProps {
  children: ReactNode
  size?: number // размер в пикселях (по умолчанию 40px)
  className?: string
}

const sizeClassMap: Record<number, string> = {
  40: 'w-10 h-10',
  32: 'w-8 h-8',
  24: 'w-6 h-6',
  20: 'w-5 h-5',
  16: 'w-4 h-4',
}

export default function IconContainer({ 
  children, 
  size = 40, 
  className = '' 
}: IconContainerProps) {
  const sizeClass = sizeClassMap[size]
  const inlineStyle = sizeClass ? undefined : { width: `${size}px`, height: `${size}px` }
  
  return (
    <div 
      className={`bg-white border border-[#e5e5e5] border-solid flex items-center justify-center rounded-lg shrink-0 ${sizeClass || ''} ${className}`}
      style={inlineStyle}
    >
      {children}
    </div>
  )
}

