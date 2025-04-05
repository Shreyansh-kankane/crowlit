"use client"
import { cn } from "@/lib/utils"
import type React from "react"

import { useRef, useState } from "react"

interface BackgroundGradientProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  animate?: boolean
}

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: BackgroundGradientProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !animate) return

    const rect = containerRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={containerRef}
      className={cn("relative h-full", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] opacity-0 transition duration-500 group-hover:opacity-100",
          animate ? "opacity-0" : "opacity-100",
        )}
        style={{
          opacity: animate ? opacity : 1,
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(120, 119, 198, 0.15), transparent 80%)`,
          borderRadius: "inherit",
        }}
      />
      <div className={cn("absolute inset-[1px] rounded-[inherit] bg-black z-[1]", className)} />
      <div className="relative z-[2] h-full">
        <div className="h-full flex flex-col">{children}</div>
      </div>
    </div>
  )
}

