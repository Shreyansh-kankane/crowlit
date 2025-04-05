"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [start, setStart] = useState(false)

  useEffect(() => {
    const scrollerContent = scrollerRef.current
    const scrollerContainer = containerRef.current

    if (!scrollerContent || !scrollerContainer) return

    const scrollerContentWidth = scrollerContent.offsetWidth
    const scrollerContainerWidth = scrollerContainer.offsetWidth

    if (scrollerContentWidth < scrollerContainerWidth) {
      const clonesNeeded = Math.ceil(scrollerContainerWidth / scrollerContentWidth) + 1

      for (let i = 0; i < clonesNeeded; i++) {
        const clone = scrollerContent.cloneNode(true) as HTMLDivElement
        scrollerContainer.appendChild(clone)
      }
    }

    setStart(true)
  }, [])

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 40
      case "fast":
        return 15
      default:
        return 25
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className,
      )}
    >
      <div
        ref={scrollerRef}
        className={cn(
          "flex min-w-full flex-nowrap gap-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={{
          animationDuration: `${getSpeed()}s`,
          animationDirection: direction === "left" ? "normal" : "reverse",
        }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-3 w-max flex-shrink-0"
          >
            <span className="text-white font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

