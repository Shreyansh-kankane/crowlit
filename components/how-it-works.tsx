"use client";

import React from "react";

import { useState, useEffect, useRef } from "react";
import {
  Code,
  Cog,
  Rocket,
  BarChart,
  Layers,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  {
    icon: Code,
    title: "Integration",
    description:
      "Add the chatbot to your website using our simple JavaScript snippet. Our integration process is designed to be seamless and requires minimal technical knowledge. Just copy and paste a few lines of code, and you're ready to go.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: Cog,
    title: "Configuration",
    description:
      "Upload your documents and customize responses to match your brand. Our intuitive dashboard allows you to fine-tune every aspect of your chatbot's behavior, from its appearance to its tone of voice. Make it truly yours in minutes.",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Layers,
    title: "Training",
    description:
      "Train the bot on company-specific knowledge and FAQs. Our advanced machine learning algorithms quickly learn from your documentation, previous customer interactions, and any custom responses you provide, making the chatbot smarter over time.",
    color: "from-amber-600 to-yellow-500",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "Deploy the chatbot to handle customer queries in real-time. With a single click, your fully configured and trained AI assistant goes live, ready to engage with your customers 24/7. Monitor its performance in real-time from our dashboard.",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: BarChart,
    title: "Analytics & Improvement",
    description:
      "Monitor chatbot performance and refine responses over time. Our comprehensive analytics suite provides insights into customer satisfaction, common queries, resolution rates, and more. Use this data to continuously improve your chatbot's effectiveness.",
    color: "from-rose-600 to-red-500",
  },
];

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  // Reset the timer when manually navigating
  const handleManualNavigation = (direction: "prev" | "next") => {
    if (isAutoPlaying) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      startAutoPlay();
    }

    if (direction === "prev") {
      prevStep();
    } else {
      nextStep();
    }
  };

  const startAutoPlay = () => {
    autoPlayRef.current = setInterval(() => {
      nextStep();
    }, 5000); // Change slide every 5 seconds
  };

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    if (!isAutoPlaying) {
      startAutoPlay();
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  return (
    <section id="how-it-works" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="How It Works"
          description="Get up and running with Crowlit in just a few simple steps"
          gradient="from-blue-500 to-purple-500"
        />

        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-10 overflow-hidden">
            {/* Progress bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
                animate={{
                  width: `${(currentStep / (steps.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center">
              {/* Content */}
              <div className="w-full md:w-1/2">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                  >
                    <h3 className="text-2xl font-bold text-white">
                      {currentStep + 1}. {steps[currentStep].title}
                    </h3>
                    <p className="text-white/70 text-lg">
                      {steps[currentStep].description}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8">
                  <div className="flex items-center gap-2">
                    {steps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentStep(index)}
                        className={cn(
                          "w-2.5 h-2.5 rounded-full transition-all duration-300",
                          currentStep === index
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 w-6"
                            : "bg-white/30",
                        )}
                        aria-label={`Go to step ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white hover:bg-white/10"
                      onClick={() => handleManualNavigation("prev")}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full border-white/20 text-white hover:bg-white/10"
                      onClick={() => handleManualNavigation("next")}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Visual */}
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <div
                      className={cn(
                        "w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-r flex items-center justify-center",
                        steps[currentStep].color,
                      )}
                    >
                      <div className="w-32 h-32 md:w-56 md:h-56 rounded-full bg-black/80 backdrop-blur-sm flex items-center justify-center">
                        {React.createElement(steps[currentStep].icon, {
                          className: "h-16 w-16 md:h-24 md:w-24 text-white/80",
                        })}
                      </div>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-blue-500/20 blur-xl" />
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full bg-purple-500/20 blur-xl" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid place-items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Why Choose Crowlit?
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {[
                "Easy Deployment – Integrate with minimal technical effort",
                "Cost-effective – Reduce operational costs with automation",
                "User-friendly – No coding required for setup and management",
                "Scalable – Suitable for startups, SMEs, and enterprises",
                "Enhanced Customer Experience – Quick and accurate interactions",
                "Continuous Improvement – AI that learns from every interaction",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="flex items-start gap-2"
                >
                  <div className="mt-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 p-1">
                    <svg
                      className="h-4 w-4 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-white/70">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
