"use client";

import { useRef } from "react";
import {
  Code,
  FileText,
  MessageSquare,
  Settings,
  Video,
  Globe,
  Lock,
  BarChart3,
  Zap,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./section-heading";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const features = [
  {
    icon: Code,
    title: "Seamless Integration",
    description:
      "Easily integrate our chatbot into any website with just a few lines of code. Fully responsive design for all devices.",
    color: "from-blue-600 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Intelligent AI Responses",
    description:
      "Provides accurate answers using Natural Language Processing and Machine Learning for context-aware responses.",
    color: "from-purple-600 to-pink-500",
  },
  {
    icon: Settings,
    title: "Customizable & Configurable",
    description:
      "Tailor responses to match your brand's tone and style. Define chatbot behavior based on your specific needs.",
    color: "from-green-600 to-emerald-500",
  },
  {
    icon: Video,
    title: "Multi-modal Support",
    description:
      "Text-based chat, real-time video calling, and seamless escalation to human support when needed.",
    color: "from-amber-600 to-yellow-500",
  },
  {
    icon: FileText,
    title: "Advanced Document Processing",
    description:
      "Supports PDF, DOCX, and other formats for knowledge ingestion with high accuracy query retrieval.",
    color: "from-rose-600 to-red-500",
  },
  {
    icon: Zap,
    title: "24/7 Automated Support",
    description:
      "Never miss a customer query, ensuring round-the-clock assistance and reducing support workload.",
    color: "from-cyan-600 to-blue-500",
  },
  {
    icon: BarChart3,
    title: "AI-driven Analytics",
    description:
      "Get detailed reports on customer interactions and common queries to improve chatbot performance.",
    color: "from-indigo-600 to-violet-500",
  },
  {
    icon: Lock,
    title: "Secure & Scalable",
    description:
      "End-to-end encryption to protect customer data with a scalable architecture for businesses of any size.",
    color: "from-red-600 to-orange-500",
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description:
      "Communicate with customers in multiple languages for a truly global reach.",
    color: "from-teal-600 to-green-500",
  },
];

const logos = [
  "TechCorp",
  "InnovateLabs",
  "FutureWorks",
  "NextGen Solutions",
  "OmniTech",
  "Quantum Industries",
  "Apex Digital",
  "Stellar Systems",
  "Horizon Tech",
  "Pinnacle Solutions",
];

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeading
          title="Powerful Features"
          description="Everything you need to transform your customer support experience"
          gradient="from-purple-500 to-blue-500"
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <BackgroundGradient
                  className="rounded-[22px] p-6 sm:p-8 bg-black border border-white/10 dark:border-white/10"
                  containerClassName="group h-full"
                >
                  <div className="flex flex-col h-full p-4">
                    <div
                      className={cn(
                        "mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r",
                        feature.color,
                      )}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-white group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/70 group-hover:text-white/90 transition-colors line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </BackgroundGradient>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-24">
          <h3 className="text-center text-white/70 text-lg mb-8">
            Trusted by innovative companies worldwide
          </h3>
          <InfiniteMovingCards items={logos} direction="right" speed="slow" />
        </div>
      </div>
    </section>
  );
}
