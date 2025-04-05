"use client"

import { useEffect, useRef } from "react"
import { MessageSquareText } from "lucide-react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: {
      x: number
      y: number
      radius: number
      color: string
      velocity: { x: number; y: number }
    }[] = []

    const colors = ["#2563eb", "#7c3aed", "#db2777"]

    // Create particles
    for (let i = 0; i < 50; i++) {
      const radius = Math.random() * 4 + 1
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocity: {
          x: (Math.random() - 0.5) * 0.5,
          y: (Math.random() - 0.5) * 0.5,
        },
      })
    }

    // Animation
    function animate() {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw chat bubble
      const bubbleWidth = canvas.width * 0.8
      const bubbleHeight = canvas.height * 0.7
      const bubbleX = canvas.width / 2 - bubbleWidth / 2
      const bubbleY = canvas.height / 2 - bubbleHeight / 2
      const radius = 20

      ctx.beginPath()
      ctx.moveTo(bubbleX + radius, bubbleY)
      ctx.lineTo(bubbleX + bubbleWidth - radius, bubbleY)
      ctx.quadraticCurveTo(bubbleX + bubbleWidth, bubbleY, bubbleX + bubbleWidth, bubbleY + radius)
      ctx.lineTo(bubbleX + bubbleWidth, bubbleY + bubbleHeight - radius)
      ctx.quadraticCurveTo(
        bubbleX + bubbleWidth,
        bubbleY + bubbleHeight,
        bubbleX + bubbleWidth - radius,
        bubbleY + bubbleHeight,
      )
      ctx.lineTo(bubbleX + radius, bubbleY + bubbleHeight)
      ctx.quadraticCurveTo(bubbleX, bubbleY + bubbleHeight, bubbleX, bubbleY + bubbleHeight - radius)
      ctx.lineTo(bubbleX, bubbleY + radius)
      ctx.quadraticCurveTo(bubbleX, bubbleY, bubbleX + radius, bubbleY)
      ctx.closePath()

      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.fill()
      ctx.strokeStyle = "rgba(255, 255, 255, 0.3)"
      ctx.stroke()

      // Draw particles
      particles.forEach((particle) => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = 0.6
        ctx.fill()
        ctx.globalAlpha = 1

        // Update position
        particle.x += particle.velocity.x
        particle.y += particle.velocity.y

        // Bounce off walls
        if (particle.x - particle.radius < 0 || particle.x + particle.radius > canvas.width) {
          particle.velocity.x = -particle.velocity.x
        }

        if (particle.y - particle.radius < 0 || particle.y + particle.radius > canvas.height) {
          particle.velocity.y = -particle.velocity.y
        }
      })

      // Draw chat icon
      const iconSize = 40
      const iconX = canvas.width / 2 - iconSize / 2
      const iconY = canvas.height / 2 - iconSize / 2

      ctx.fillStyle = "#2563eb"
      ctx.beginPath()
      ctx.arc(iconX + iconSize / 2, iconY + iconSize / 2, iconSize / 2, 0, Math.PI * 2)
      ctx.fill()

      // Draw message icon
      ctx.fillStyle = "white"
      ctx.fillRect(iconX + iconSize / 4, iconY + iconSize / 3, iconSize / 2, iconSize / 3)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden border border-border/50 bg-gradient-to-br from-background to-background/80">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl w-4/5 max-w-md">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <MessageSquareText className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium">Crowlit AI</p>
              <p className="text-xs text-muted-foreground">Just now</p>
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-sm">Hello! How can I help you today?</p>
            <div className="typing-indicator flex gap-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "150ms" }} />
              <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "300ms" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

