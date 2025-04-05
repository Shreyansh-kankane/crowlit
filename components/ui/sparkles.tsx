"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  speed?: "slow" | "medium" | "fast"
  particleColor?: string
  particleDensity?: number
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = "medium",
  particleColor = "#FFFFFF",
  particleDensity = 100,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const { width, height } = canvas.getBoundingClientRect()
      canvas.width = width
      canvas.height = height
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const speedFactor = speed === "slow" ? 0.5 : speed === "fast" ? 2 : 1

    const particles = Array.from({ length: particleDensity }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * (maxSize - minSize) + minSize,
      speedX: (Math.random() - 0.5) * speedFactor,
      speedY: (Math.random() - 0.5) * speedFactor,
      opacity: Math.random() * 0.5 + 0.5,
    }))

    let animationFrameId: number
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particleColor}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1
      })

      animationFrameId = window.requestAnimationFrame(render)
    }

    render()

    setTimeout(() => {
      setOpacity(1)
    }, 0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.cancelAnimationFrame(animationFrameId)
    }
  }, [minSize, maxSize, speed, particleColor, particleDensity])

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("absolute inset-0 z-0 h-full w-full transition-opacity duration-1000", className)}
      style={{ opacity, background }}
    />
  )
}

