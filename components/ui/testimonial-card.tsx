"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  company: string
  avatar: string
  rating?: number
}

export const TestimonialCard = ({
  testimonial,
}: {
  testimonial: TestimonialProps
}) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="relative h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          y: isHovered ? -5 : 0,
          boxShadow: isHovered ? "0 20px 25px -5px rgba(0, 0, 0, 0.2)" : "0 0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="h-full rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md p-6 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-blue-600" />
        <Quote className="absolute top-6 left-6 h-8 w-8 text-purple-500/20" />

        <div className="pt-8 relative z-10">
          <p className="text-lg text-white/90 relative z-10">{testimonial.quote}</p>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                {testimonial.avatar}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-white">{testimonial.author}</p>
              <p className="text-xs text-white/70">
                {testimonial.role}, {testimonial.company}
              </p>
            </div>
          </div>

          {testimonial.rating && (
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "h-4 w-4",
                    i < testimonial.rating! ? "text-yellow-500 fill-yellow-500" : "text-white/20",
                  )}
                />
              ))}
            </div>
          )}
        </div>

        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 transition-opacity duration-300"
          style={{ opacity: isHovered ? 1 : 0 }}
        />
      </motion.div>
    </motion.div>
  )
}

