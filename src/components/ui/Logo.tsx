import logoIcon from '../../assets/icons/logo.svg'

interface LogoProps {
  className?: string
  size?: number
}

export default function Logo({ className = '', size = 36 }: LogoProps) {
  return (
    <div className={`overflow-hidden relative shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img 
        src={logoIcon} 
        alt="Logo" 
        className="block max-w-none w-full h-full object-contain"
        style={{ width: size, height: size }}
      />
    </div>
  )
}

