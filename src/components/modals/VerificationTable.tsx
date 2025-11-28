import { VerificationField } from '../../types/verification'
import photographImage from '../../assets/images/photograph.png'

interface VerificationTableProps {
  data: VerificationField[]
}

/**
 * Компонент таблицы результатов верификации
 * Отображает поля верификации в виде таблицы с поддержкой текста и изображений
 */
export default function VerificationTable({ data }: VerificationTableProps) {
  return (
    <div className="border border-[#e5e5e5] border-solid rounded-lg w-full">
      <div className="grid grid-cols-[1fr_1fr] w-full">
        {data.map((item, index) => (
          <>
            <div
              key={`${item.label}-label`}
              className={`border-b border-[#e5e5e5] border-solid border-l-0 border-r-0 border-t-0 box-border flex gap-[10px] items-start min-w-[85px] px-3 py-2.5 relative shrink-0 w-full bg-[#f5f5f5] ${
                index === data.length - 1 ? 'border-b-0' : ''
              } ${item.isPhoto ? 'items-start' : 'items-center'}`}
            >
              <div className="flex flex-1 flex-col font-normal justify-center min-h-px min-w-px relative shrink-0 text-[#737373] text-sm">
                <p className="leading-5 text-[14px]">
                  {item.label}
                </p>
              </div>
            </div>
            <div
              key={`${item.label}-value`}
              className={`border-b border-[#e5e5e5] border-solid border-l-0 border-r-0 border-t-0 box-border flex items-center min-w-[85px] px-3 py-2.5 relative shrink-0 w-full ${
                index === data.length - 1 ? 'border-b-0' : ''
              }`}
            >
              {item.isPhoto ? (
                <div className="h-[100px] relative rounded-lg shrink-0 w-[80px]">
                  <div className="absolute inset-0 pointer-events-none rounded-lg">
                    <div className="absolute bg-[#f2f2f7] inset-0 rounded-lg" />
                    <img 
                      alt="ID Photo" 
                      className="absolute max-w-none object-center object-cover rounded-lg size-full" 
                      src={photographImage}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-1 flex-col font-medium justify-center min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-sm">
                  <p className="leading-5 whitespace-pre-wrap">
                    {item.value}
                  </p>
                </div>
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

