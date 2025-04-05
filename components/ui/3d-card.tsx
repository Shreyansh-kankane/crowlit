"use client"
import { useRef, useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ThreeDCardProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export const ThreeDCard = ({ children, className, containerClassName }: ThreeDCardProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [scale, setScale] = useState(1)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const centerX = rect.left + width / 2
    const centerY = rect.top + height / 2
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateXValue = (mouseY / height) * -10 // Reduced from -20 to -10 for subtler effect
    const rotateYValue = (mouseX / width) * 10 // Reduced from 20 to 10 for subtler effect

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseEnter = () => {
    // Smoother transition to the hover state
    setScale(1.02) // Reduced from 1.05 to 1.02 for subtler effect
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
    setScale(1)
  }

  return (
    <div
      ref={ref}
      className={cn("relative perspective-1000", containerClassName)}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.5, ease: "easeOut" }} // Increased duration for smoother animation
        className={cn("relative bg-black border border-white/10 rounded-xl overflow-hidden", className)}
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
          style={{
            transform: "translateZ(-10px)",
            borderRadius: "inherit",
          }}
        />
        {children}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
            transform: "translateZ(-5px)",
            borderRadius: "inherit",
          }}
        />
      </motion.div>
    </div>
  )
}

