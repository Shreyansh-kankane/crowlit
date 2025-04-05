"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  description: string
  alignment?: "center" | "left"
  gradient?: string
}

export function SectionHeading({
  title,
  description,
  alignment = "center",
  gradient = "from-white to-white",
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-4", alignment === "center" ? "text-center mx-auto max-w-3xl" : "")}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-4xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r",
          gradient,
        )}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-xl text-white/70"
      >
        {description}
      </motion.p>
    </div>
  )
}

