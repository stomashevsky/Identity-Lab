import { useState, useEffect } from 'react'
import { Button } from '../ui'
import { useToast } from '../../contexts/ToastContext'

interface QRCodeDisplayProps {
  src: string
  alt?: string
  qrCodeUrl?: string // Optional URL that the QR code represents
}

/**
 * Component for displaying QR codes with optional copy functionality
 * If qrCodeUrl is provided, users can copy the URL to clipboard
 */
export default function QRCodeDisplay({ src, alt = 'QR Code', qrCodeUrl }: QRCodeDisplayProps) {
  const [isImageLoading, setIsImageLoading] = useState(true)
  const { showSuccess, showError } = useToast()

  useEffect(() => {
    setIsImageLoading(true)
  }, [src])

  const handleCopyUrl = async () => {
    if (!qrCodeUrl) return

    try {
      await navigator.clipboard.writeText(qrCodeUrl)
      showSuccess('QR code URL copied to clipboard')
    } catch (err) {
      showError('Failed to copy URL to clipboard')
    }
  }

  const isUrl = qrCodeUrl && (qrCodeUrl.startsWith('http://') || qrCodeUrl.startsWith('https://'))

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
      {isUrl && (
        <Button
          variant="secondary"
          size="sm"
          onClick={handleCopyUrl}
          className="w-full"
        >
          Copy QR Code URL
        </Button>
      )}
    </div>
  )
}

