"use client"

import { useRef } from "react"
import { ShoppingCart, Stethoscope, Landmark, GraduationCap, HelpCircle, Check } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { ThreeDCard } from "@/components/ui/3d-card"
import { cn } from "@/lib/utils"

const useCases = [
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description:
      "Assist customers with product queries, recommendations, and order tracking to boost sales and satisfaction.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description:
      "Provide medical information, appointment scheduling, and patient follow-ups with HIPAA-compliant security.",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Landmark,
    title: "Finance",
    description: "Answer banking-related inquiries securely, assist with transactions, and provide financial guidance.",
    color: "from-amber-500 to-yellow-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Help students with FAQs, academic resources, and administrative processes for better learning experiences.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: HelpCircle,
    title: "IT Support",
    description:
      "Troubleshoot technical issues, provide step-by-step guidance, and escalate complex problems when needed.",
    color: "from-red-500 to-rose-500",
    bgColor: "bg-red-500/10",
  },
]

export default function UseCases() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="use-cases" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Use Cases"
          description="Discover how Crowlit can transform customer interactions across industries"
          gradient="from-green-500 to-blue-500"
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ThreeDCard>
                  <div className="p-6 h-full flex flex-col">
                    <div
                      className={cn(
                        "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r",
                        useCase.color,
                      )}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white">{useCase.title}</h3>
                    <p className="text-white/70">{useCase.description}</p>
                  </div>
                </ThreeDCard>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Ready to transform your customer support?</h3>
            <p className="text-white/70">
              Our team of experts will help you implement the perfect solution for your industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Customized implementation for your specific industry",
              "Dedicated support during setup and training",
              "Industry-specific templates and knowledge bases",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2 p-4 rounded-lg bg-white/5 border border-white/10">
                <div className="mt-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-1">
                  <Check className="h-4 w-4 text-black" />
                </div>
                <span className="text-sm text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

