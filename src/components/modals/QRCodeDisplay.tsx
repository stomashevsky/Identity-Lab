import { useState, useEffect } from 'react'

interface QRCodeDisplayProps {
  src: string
  alt?: string
}

export default function QRCodeDisplay({ src, alt = 'QR Code' }: QRCodeDisplayProps) {
  const [isImageLoading, setIsImageLoading] = useState(true)

  useEffect(() => {
    setIsImageLoading(true)
  }, [src])

  return (
    <div className="bg-white border border-[rgba(163,163,163,0.5)] border-solid box-border flex flex-col gap-4 items-center justify-center p-5 rounded-2xl w-fit self-center">
      <div className="relative shrink-0 size-[240px]">
        {isImageLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#e5e5e5] border-t-[#171717]"></div>
          </div>
        )}
        <img
          alt={alt}
          className={`absolute inset-0 max-w-none object-cover pointer-events-none size-full ${
            isImageLoading ? 'opacity-0' : 'opacity-100'
          } transition-opacity`}
          src={src}
          onLoad={() => setIsImageLoading(false)}
          onError={() => setIsImageLoading(false)}
        />
      </div>
    </div>
  )
}

