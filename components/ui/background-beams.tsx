"use client"
import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({
  className,
  ...props
}: {
  className?: string
}) => {
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

    const beams = Array.from({ length: 10 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      width: Math.random() * 4 + 2,
      speed: Math.random() * 0.05 + 0.05,
      hue: Math.random() * 60 + 200,
    }))

    let animationFrameId: number
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      beams.forEach((beam) => {
        ctx.beginPath()
        const gradient = ctx.createLinearGradient(beam.x, 0, beam.x + beam.width, canvas.height)
        gradient.addColorStop(0, `hsla(${beam.hue}, 100%, 60%, 0)`)
        gradient.addColorStop(0.5, `hsla(${beam.hue}, 100%, 60%, 0.3)`)
        gradient.addColorStop(1, `hsla(${beam.hue}, 100%, 60%, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(beam.x, 0, beam.width, canvas.height)

        beam.x += beam.speed
        if (beam.x > canvas.width) {
          beam.x = -beam.width
        }
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
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 z-0 h-full w-full transition-opacity duration-1000", className)}
      style={{ opacity }}
      {...props}
    />
  )
}

