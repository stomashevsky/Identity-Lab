interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

export default function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: FAQItemProps) {
  return (
    <button
      onClick={onToggle}
      className="group border-b border-[#e5e5e5] border-solid flex flex-col items-start p-0 relative shrink-0 w-full outline-none focus-visible:outline-none"
    >
      <div className="flex items-center justify-between px-0 py-4 relative shrink-0 w-full rounded-md group-focus-visible:shadow-[0px_0px_0px_3px_rgba(163,163,163,0.5)] transition-all duration-150">
        <p className="flex-1 font-medium leading-6 min-h-px min-w-px relative shrink-0 text-[#0a0a0a] text-base whitespace-pre-wrap text-left">
          {question}
        </p>
        <div className="flex items-center justify-center relative shrink-0">
          <div className={`flex-none transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
            <svg 
              className={`w-4 h-4 ${isOpen ? 'text-[#0a0a0a]' : 'text-[#737373]'}`}
              viewBox="0 0 16 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M4 6L8 10L12 6" 
                stroke="currentColor" 
                strokeWidth="1.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="flex flex-col items-center justify-center pb-4 pt-0 px-0 relative shrink-0 w-full">
          <p className="font-normal leading-5 relative shrink-0 text-[#737373] text-sm w-full whitespace-pre-wrap text-left">
            {answer}
          </p>
        </div>
      )}
    </button>
  )
}

