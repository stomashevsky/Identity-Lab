import { useState } from 'react'

interface SwitchProps {
  label: string
  checked: boolean
  onChange: (checked: boolean) => void
}

export default function Switch({ label, checked, onChange }: SwitchProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      onMouseDown={(e) => e.preventDefault()}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="box-border flex gap-3 items-center justify-between p-0 relative shrink-0 w-full cursor-pointer outline-none focus-visible:outline-none"
    >
      <p className="font-medium leading-none relative shrink-0 text-[#0a0a0a] text-sm whitespace-pre-wrap text-left">
        {label}
      </p>
      <div
        className={`border-2 border-transparent border-solid box-border flex items-center relative rounded-full shrink-0 w-9 h-5 px-[1px] py-[2px] transition-colors ${
          isFocused ? 'shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)]' : ''
        } ${
          checked
            ? 'bg-[#171717] justify-end'
            : 'bg-[#e5e5e5]'
        }`}
      >
        <div className="bg-white rounded-full shadow-lg shrink-0 size-4" />
      </div>
    </button>
  )
}

