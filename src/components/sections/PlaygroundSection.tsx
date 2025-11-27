import Issue from '../Issue'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function PlaygroundSection() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      id="playground"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full transition-opacity duration-200 ${
        isVisible ? 'opacity-100 animate-fade-in-scale' : 'opacity-0 scale-[0.96]'
      }`}
    >
      <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 w-full">
        <Issue />
      </div>
    </section>
  )
}

