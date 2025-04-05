"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Customer Support Manager",
    company: "TechGrowth Inc.",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Crowlit has transformed our customer support operations. We've seen a 40% reduction in response times and our customer satisfaction scores have improved significantly.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "E-commerce Director",
    company: "ShopWave",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The document processing feature is a game-changer. Our chatbot now accurately answers product questions based on our catalogs without any human intervention.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "IT Support Lead",
    company: "GlobalTech Solutions",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "We implemented Crowlit to handle tier-1 support tickets, and it's now resolving 65% of queries without human escalation. The ROI has been incredible.",
    rating: 4,
  },
]

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      next()
    }, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative mx-auto max-w-4xl px-4 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="w-full flex-shrink-0 px-4">
            <div className="bg-background rounded-xl p-8 shadow-sm border border-border/50">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-lg mb-6">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <Button variant="outline" size="icon" onClick={prev} className="rounded-full">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {testimonials.map((_, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 p-0 rounded-full ${current === index ? "bg-primary" : "bg-muted"}`}
          />
        ))}
        <Button variant="outline" size="icon" onClick={next} className="rounded-full">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

