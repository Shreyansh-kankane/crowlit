"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { SectionHeading } from "./section-heading"
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 1,000 conversations/month",
      "Basic document processing",
      "Email support",
      "Text-based chat only",
      "Basic analytics",
    ],
    cta: "Start Free Trial",
    popular: false,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "Ideal for growing businesses with moderate support needs",
    features: [
      "Up to 10,000 conversations/month",
      "Advanced document processing",
      "Priority email & chat support",
      "Text and video chat",
      "Detailed analytics dashboard",
      "Custom branding",
    ],
    cta: "Start Free Trial",
    popular: true,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations with complex support requirements",
    features: [
      "Unlimited conversations",
      "Enterprise-grade document processing",
      "24/7 dedicated support",
      "Full multi-modal support",
      "Advanced analytics & reporting",
      "Custom integrations",
      "SLA guarantees",
    ],
    cta: "Contact Sales",
    popular: false,
    gradient: "from-amber-600 to-yellow-600",
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Simple, Transparent Pricing"
          description="Choose the plan that's right for your business"
          gradient="from-amber-500 to-yellow-500"
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                  <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-xs font-medium text-white">
                    <Sparkles className="h-3 w-3" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

              <HoverBorderGradient
                className={cn(
                  "rounded-[22px] p-6 sm:p-8 bg-black border-white/10 dark:border-white/10 h-full",
                  plan.popular ? "border-2" : "border",
                )}
                containerClassName="h-full"
                as="div"
                gradient={plan.gradient}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline">
                      <span className="text-5xl font-extrabold text-white">{plan.price}</span>
                      <span className="ml-1 text-xl text-white/70">{plan.period}</span>
                    </div>
                    <p className="mt-2 text-white/70">{plan.description}</p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className={cn("mt-1 rounded-full bg-gradient-to-r p-1", plan.gradient)}>
                            <Check className="h-3 w-3 text-black" />
                          </div>
                          <span className="text-sm text-white/70">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button
                      className={cn(
                        "w-full rounded-full",
                        plan.popular
                          ? `bg-gradient-to-r ${plan.gradient} hover:opacity-90 text-white`
                          : "bg-white/10 hover:bg-white/20 text-white",
                      )}
                    >
                      {plan.cta}
                    </Button>
                  </div>
                </div>
              </HoverBorderGradient>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-white/70">All plans include a 14-day free trial. No credit card required.</p>
        </motion.div>
      </div>
    </section>
  )
}

