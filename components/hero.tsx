"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  MessageSquare,
  Video,
  Users,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 md:py-32"
    >
      {/* Animated background */}
      <BackgroundBeams className="opacity-20" />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-md border border-white/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-purple-500" />
            <span>Introducing Crowlit AI</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
          >
            Your <span className="text-purple-500">Intelligent</span> Customer{" "}
            <span className="text-blue-500">Support</span> Assistant
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-white/70 mb-8 max-w-2xl"
          >
            Enhance customer interactions with our powerful AI chatbot that
            seamlessly integrates with any website. Reduce response times and
            improve user satisfaction with Crowlit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-8"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full group relative overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-500 group-hover:from-purple-700 group-hover:to-blue-600"></span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative flex items-center">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 rounded-full"
            >
              Schedule a Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center gap-4 text-sm text-white/70 mb-12"
          >
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <span>14-day free trial</span>
            </div>
          </motion.div>
        </div>

        {/* Chat Widget in the center */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 opacity-75 blur-xl animate-pulse"></div>
            <div className="relative rounded-xl border border-white/20 bg-black/40 backdrop-blur-xl p-1 shadow-2xl">
              <div className="rounded-lg bg-black/60 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                  </div>
                  <div className="text-xs font-medium text-white/70">
                    Crowlit Chat
                  </div>
                </div>

                <div className="space-y-4 py-4">
                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div className="rounded-lg bg-white/10 p-3 text-sm max-w-[80%] text-white backdrop-blur-sm">
                      Hello! I'm Crowlit, your AI assistant. How can I help you
                      today?
                    </div>
                  </div>

                  <div className="flex gap-3 justify-end">
                    <div className="rounded-lg bg-purple-500/20 p-3 text-sm max-w-[80%] text-white backdrop-blur-sm">
                      I need help with setting up my account.
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white/20 backdrop-blur-sm" />
                  </div>

                  <div className="flex gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center text-white text-xs font-bold">
                      C
                    </div>
                    <div className="rounded-lg bg-white/10 p-3 text-sm max-w-[80%] text-white backdrop-blur-sm">
                      I'd be happy to help you set up your account! First, let's
                      go through the registration process step by step. What
                      type of account are you looking to create?
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 border-t border-white/10 pt-2">
                  <div className="flex-1 rounded-md border border-white/20 bg-white/5 px-3 py-2 text-sm text-white/70">
                    Type your message...
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <MessageSquare className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <Users className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-purple-500 blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-blue-500 blur-3xl opacity-20 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>

      <div className="absolute -bottom-40 left-0 right-0 h-40 w-full">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </section>
  );
}
