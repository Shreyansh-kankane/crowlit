"use client"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const contentRef = useRef<HTMLDivElement>(null)
  const [svgHeight, setSvgHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.offsetHeight)
    }
  }, [])

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight - 50]), {
    stiffness: 500,
    damping: 90,
  })

  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 50]), {
    stiffness: 500,
    damping: 90,
  })

  return (
    <motion.div ref={ref} className={cn("relative w-full max-w-full", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <motion.div
          transition={{
            duration: 0.2,
            delay: 0.5,
          }}
          animate={{
            height: svgHeight,
          }}
          className="relative h-full w-20"
        >
          <svg
            viewBox={`0 0 20 ${svgHeight}`}
            width="20"
            height={svgHeight}
            className="absolute left-8 md:left-16 h-full w-20 overflow-visible"
            fill="none"
          >
            <motion.path
              d={`M 1 50 L 1 ${svgHeight - 50}`}
              stroke="url(#gradient)"
              strokeWidth="2"
              className="stroke-foreground"
              strokeLinecap="round"
            />
            <defs>
              <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
                <stop stopColor="#18CCFC" stopOpacity="0" />
                <stop stopColor="#18CCFC" />
                <stop offset="0.325" stopColor="#6344F5" />
                <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
              </motion.linearGradient>
            </defs>
          </svg>
          <div className="absolute left-8 md:left-16 h-full w-[2px] bg-neutral-700/40" />
        </motion.div>
      </div>
      <div ref={contentRef} className="ml-4 md:ml-16">
        {children}
      </div>
    </motion.div>
  )
}

