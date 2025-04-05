"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function Cta() {
  return (
    <section className="relative py-20 overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div className="container px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"></div>

          {/* Animated mesh gradient */}
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500/30 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500/30 blur-3xl"></div>
          </div>

          {/* Animated particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 6 + 2}px`,
                  height: `${Math.random() * 6 + 2}px`,
                  opacity: Math.random() * 0.5 + 0.3,
                  animation: `float ${Math.random() * 10 + 5}s linear infinite`,
                }}
              />
            ))}
          </div>

          <div className="relative px-6 py-16 md:px-12 md:py-24 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/20 mb-6"
            >
              <Sparkles className="h-4 w-4 text-yellow-300" />
              <span>Limited Time Offer: 20% off all plans</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
            >
              Ready to transform your customer support?
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-6 max-w-xl"
            >
              <TextGenerateEffect
                words="Join thousands of businesses that use Crowlit to provide exceptional customer experiences. Start your free trial today and see the difference."
                className="text-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 rounded-full group relative overflow-hidden"
              >
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-purple-100 to-white transition-all duration-300 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 rounded-full"
              >
                Schedule a Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
