"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { TestimonialCard } from "@/components/ui/testimonial-card"
import { Spotlight } from "@/components/ui/spotlight"

const testimonials = [
  {
    quote:
      "Crowlit has transformed our customer support operations. Response times are down 70% and customer satisfaction is up 35%.",
    author: "Sarah Johnson",
    role: "Customer Support Manager",
    company: "TechGrowth Inc.",
    avatar: "SJ",
    rating: 5,
  },
  {
    quote:
      "The document processing capability is incredible. Our chatbot accurately answers questions from our 500-page product manual.",
    author: "Michael Chen",
    role: "Product Director",
    company: "InnovateSoft",
    avatar: "MC",
    rating: 5,
  },
  {
    quote:
      "We've reduced our support costs by 45% while providing 24/7 assistance to our global customer base. Crowlit is a game-changer.",
    author: "Priya Patel",
    role: "COO",
    company: "GlobalRetail",
    avatar: "PP",
    rating: 5,
  },
  {
    quote:
      "The AI-driven analytics have given us insights we never had before. We now understand our customers' needs much better.",
    author: "David Wilson",
    role: "CTO",
    company: "FutureTech",
    avatar: "DW",
    rating: 4,
  },
  {
    quote:
      "Implementation was incredibly smooth. We were up and running in less than a day with minimal technical effort.",
    author: "Emma Rodriguez",
    role: "IT Director",
    company: "HealthPlus",
    avatar: "ER",
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="What Our Customers Say"
          description="Trusted by businesses of all sizes around the world"
          gradient="from-purple-500 to-pink-500"
        />

        <div ref={ref} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center gap-8"
        >
          {["TechCorp", "InnovateLabs", "FutureWorks", "NextGen", "OmniTech", "Quantum"].map((company, index) => (
            <div key={index} className="text-xl font-bold tracking-tight text-white/30">
              {company}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

