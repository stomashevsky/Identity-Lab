import Issue from '../Issue'

export default function PlaygroundSection() {
  return (
    <section
      id="playground"
      className="bg-white flex flex-col gap-6 items-center overflow-hidden px-0 py-16 md:py-24 relative shrink-0 w-full"
    >
      <div className="flex flex-col gap-16 items-center max-w-[1280px] px-6 py-0 w-full">
        <Issue />
      </div>
    </section>
  )
}

